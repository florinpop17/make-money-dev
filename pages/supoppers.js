import { Layout, Head, SupoppersLeaderboard } from "../components";

const Supoppers = () => (
    <Layout>
        <Head
            title={"Supoppers"}
            description={"Leaderboard with the Supoppers"}
            url="https://makemoney.dev/supoppers"
        />
        <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
                Supoppers Leaderboard
            </h1>
            <div className="flex flex-col md:flex-row my-10 max-w-3xl space-y-4 md:space-x-4 md:space-y-0 justify-center items-center mx-auto">
                <p className="text-xl text-gray-200 max-w-lg text-center md:text-left">
                    Get featured on the leaderboard by becoming a Supopper!{" "}
                    <strong>Top 3 Supoppers</strong> also get an embedded link.
                </p>
                <a
                    href="https://gumroad.com/l/kclmf"
                    className="bg-purple-800 font-semibold text-purple-100 text-lg py-2 px-6 rounded shadow hover:bg-purple-700"
                >
                    Become a Supopper
                </a>
            </div>

            <SupoppersLeaderboard />
        </div>
    </Layout>
);

export default Supoppers;
