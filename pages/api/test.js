export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).send({ message: "Only GET requests allowed" });
        return;
    }

    return res.status(200).send({ see_me: "here" });
}
