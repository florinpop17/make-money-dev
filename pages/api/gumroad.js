export default function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }

    const body = JSON.parse(req.body);

    // the rest of your code
    console.log(body);
}
