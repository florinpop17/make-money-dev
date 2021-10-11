import {
    Layout,
    Head,
    EarningsTile,
    ChallengeTiles,
    Supporters,
} from "../components/";

function getNumberOfDays(end) {
    const date1 = new Date();
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.ceil(diffInTime / oneDay);

    return diffInDays;
}

const Earnings = ({ revenue, resources }) => {
    const daysLeft = getNumberOfDays("5/18/2024");

    return (
        <Layout>
            <Head
                title={"Earnings"}
                description={"Earnings raport for my income sources"}
                url="https://makemoney.dev/earnings"
                image="https://makemoney.dev/images/earnings-page.png"
            />
            <div className="flex flex-col items-center text-white">
                <h2 className="text-4xl lg:text-5xl font-bold lg:mt-10 text-center mb-4">
                    Challenge: $1M in 1000 days
                </h2>

                <div
                    className="bg-purple-900 h-40 m-4 grid grid-cols-2 md:grid-cols-3 divide-x divide-purple-500 rounded-lg shadow-xl text-center justify-center content-center mx-auto w-full"
                    style={{ maxWidth: "50rem" }}
                >
                    <div>
                        <h2 className="text-3xl ">Days Left</h2>
                        <h3 className="text-2xl font-semibold mt-2">
                            {daysLeft}
                        </h3>
                    </div>
                    <div>
                        <h2 className="text-3xl ">Total</h2>
                        <h3 className="text-2xl font-semibold mt-2">
                            {new Intl.NumberFormat("en-EN", {
                                style: "currency",
                                currency: "USD",
                            }).format(revenue)}
                        </h3>
                    </div>
                    <div className="hidden md:block">
                        <h2 className="text-3xl ">Daily Avg.</h2>
                        <h3 className="text-2xl font-semibold mt-2">
                            {new Intl.NumberFormat("en-EN", {
                                style: "currency",
                                currency: "USD",
                            }).format(revenue / (1000 - daysLeft))}
                        </h3>
                    </div>
                </div>

                <ChallengeTiles revenue={revenue} />

                <h2 className="text-4xl lg:text-5xl font-bold lg:mt-10 text-center mb-4">
                    Revenue per project
                </h2>

                <div className="container mx-auto my-4 space-y-2">
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
