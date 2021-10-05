import { Layout, Head, EarningsTile } from "../components/";

const Earnings = ({ revenue, resources }) => {
    return (
        <Layout>
            <Head
                title={"Earnings"}
                description={"Earnings raport for my income sources"}
                url="https://makemoney.dev/earnings"
                image="https://makemoney.dev/images/earnings-page.png"
            />
            <div className="flex flex-col items-center text-white">
                <h1 className="text-5xl lg:text-6xl font-bold lg:mt-10 text-center mb-4">
                    Income Streams
                </h1>
                <p className="text-xl">My journey to $1M in 1000 days!</p>
                <div
                    className="flex flex-wrap my-3"
                    style={{ maxWidth: "800px" }}
                >
                    {Array(200)
                        .fill("")
                        .map((_, idx) => {
                            const isActive = idx < Math.floor(revenue / 5000);
                            return (
                                <div
                                    key={idx}
                                    className={`${
                                        isActive
                                            ? "bg-purple-800"
                                            : "bg-gray-700"
                                    } rounded`}
                                    style={{
                                        width: 18,
                                        height: 18,
                                        margin: "1px",
                                    }}
                                ></div>
                            );
                        })}
                </div>
                <small className="text-gray-300">
                    *Each tile represents $5k.
                </small>
                <div className="container mx-auto mt-4 lg:mt-10 mb-4 space-y-6">
                    <div className="flex flex-wrap justify-center items-center">
                        {Object.keys(resources).map((key) => (
                            <EarningsTile
                                key={resources[key].name}
                                source={resources[key]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Earnings;
