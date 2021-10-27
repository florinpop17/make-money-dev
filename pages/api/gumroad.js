import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }

    const productID = "kclmf";

    const payload = JSON.stringify(req.body);

    const { short_product_id, price, email, Link, Name, license_key } =
        req.body;

    console.log(req.body);

    // check if is the right product
    if (productID === short_product_id) {
        let supopper_id;

        // check if there's a supopper with the email
        const { error: supopperError, data } = await supabase
            .from("supoppers")
            .select("id")
            .eq("email", email)
            .single();

        // if it isn't create it
        if (data === null) {
            const { data: supopper } = await supabase
                .from("supoppers")
                .insert({ email })
                .single();

            supopper_id = supopper.id;
        } else {
            // data from above
            supopper_id = data.id;
        }

        // use the supopper id to create a transaction
        const transaction = {
            price,
            link: Link,
            name: Name,
            license_key,
            payload,
            supopper_id,
        };

        await add_transaction(transaction);
    }

    return res.status(200).send({ success: true });
}

async function add_transaction(transaction) {
    const { error, data } = await supabase
        .from("supoppers_transactions")
        .insert(transaction)
        .single();

    if (error) {
        console.error(error);
    } else {
        console.log("SAVED", data);
    }
}
