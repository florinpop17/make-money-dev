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
            <div className="flex my-10 max-w-3xl space-x-4 justify-center items-center mx-auto">
                <p className="text-xl text-gray-200 max-w-lg">
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

            <p className="text-white text-2xl text-center">Leaderboard WIP</p>
            {/* <SupoppersLeaderboard /> */}
        </div>
    </Layout>
);

export default Supoppers;
