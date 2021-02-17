import { Layout, Head } from "../components/";

import { income, latestUpdate } from "../income";

const Earnings = () => (
    <Layout>
        <Head
            title={"Earnings"}
            description={"Earnings raport for my income sources"}
            url="https://makemoney.dev/earnings"
            // image={"TO BE ADDED"}
        />
        <div className="flex flex-col items-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold lg:mt-20 text-center">
                Income Streams
            </h1>
            <small className="inline-block text-center mt-4">
                <i>Click event on tiles - WIP.</i>
            </small>
            <div className="container mx-auto mt-4 lg:mt-10 mb-4 space-y-6">
                <div className="flex flex-wrap justify-center items-center">
                    {income.map((source) => (
                        <div
                            key={source.name}
                            className={`${source.bgColor} w-64 h-64 m-4 flex flex-col items-center justify-center rounded-lg shadow-xl relative group overflow-hidden cursor-pointer`}
                        >
                            <span
                                className={`absolute top-2 right-2 ${source.iconColor}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                    <polyline points="11 12 12 12 12 16 13 16" />
                                </svg>
                            </span>
                            <div className="bg-gradient-to-r from-transparent via-white to-transparent w-full h-full absolute top-0 left-0 opacity-30 transform transition-transform duration-700 -translate-x-64 -translate-y-64 scale-150 rotate-45 group-hover:translate-x-64 group-hover:translate-y-64" />
                            <h2 className="text-4xl font-semibold">
                                {source.name}
                            </h2>
                            <h3 className="text-5xl font-bold">
                                ${source.amount}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <p>
                <strong>2021</strong> revenue as of{" "}
                <strong>{latestUpdate}</strong>.
            </p>
        </div>
    </Layout>
);

export default Earnings;
