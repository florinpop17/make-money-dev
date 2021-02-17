import { Layout } from "../components/";

const incomeSources = [
    {
        name: "YouTube",
        amount: 690.13,
        bgColor: "bg-red-600",
        iconColor: "text-red-400",
    },
    {
        name: "eBook",
        amount: 5024.4,
        bgColor: "bg-purple-600",
        iconColor: "text-purple-400",
    },
    {
        name: "Sponsors",
        amount: 350,
        bgColor: "bg-green-600",
        iconColor: "text-green-400",
    },
    {
        name: "Mentoring",
        amount: 0,
        bgColor: "bg-blue-600",
        iconColor: "text-blue-400",
    },
    {
        name: "Freelancing",
        amount: 800,
        bgColor: "bg-yellow-600",
        iconColor: "text-yellow-400",
    },
];

const Earnings = () => (
    <Layout>
        <div className="flex flex-col items-center text-white">
            <h1 className="text-6xl font-bold mt-20 text-center">
                Income Streams
            </h1>
            <div className="container mx-auto mt-10 mb-4 space-y-6">
                <div className="flex flex-wrap justify-center items-center">
                    {incomeSources.map((source) => (
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
                                    stroke-width="2.5"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
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
            <i>Income in 2021 as of 16th February.</i>
        </div>
    </Layout>
);

export default Earnings;
