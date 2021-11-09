import { useState, useEffect } from "react";
import supabase from "../lib/supabase";

const SupportersLeaderboard = () => {
    const [supoppers, setSupoppers] = useState([]);

    const lastWeek = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
    const lastMonth = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);

    useEffect(() => {
        getSupoppers();

        // const supscription = supabase
        //     .from("supoppers_transactions")
        //     .on("INSERT", (payload) => {
        //         const { price, supopper_id, name, link } = payload.new;
        //         const transaction = { price, name, link };

        //         setTransactions((prevTransactions) => [
        //             ...prevTransactions,
        //             transaction,
        //         ]);
        //     })
        //     .subscribe();

        // return () => supabase.removeSubscription(supscription);
    }, []);

    async function getSupoppers() {
        const supoppers = [];
        const supoppersObj = {};

        const { data: transactions } = await supabase
            .from("supoppers_transactions")
            .select("name, link, price, supopper_id, created_at");

        if (transactions) {
            transactions.forEach((transaction) => {
                const { supopper_id, name, price, link, created_at } =
                    transaction;
                if (supoppersObj[supopper_id]) {
                    supoppersObj[supopper_id] = {
                        name,
                        link,
                        created_at,
                        price: supoppersObj[supopper_id].price + price,
                    };
                } else {
                    supoppersObj[supopper_id] = {
                        name,
                        link,
                        price,
                        created_at,
                    };
                }
            });

            Object.keys(supoppersObj).forEach((key) => {
                supoppers.push(supoppersObj[key]);
            });

            supoppers.sort((a, b) => b.price - a.price);

            setSupoppers(supoppers);
        }
    }

    const supoppersLastWeek = supoppers.filter(
        (supopper) => new Date(supopper.created_at) > lastWeek
    );

    const supoppersLastMonth = supoppers.filter(
        (supopper) => new Date(supopper.created_at) > lastMonth
    );

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10 lg:items-start">
            <Leaderboard supoppers={supoppersLastWeek} title="Last Week" />
            <Leaderboard supoppers={supoppersLastMonth} title="Last Month" />
            <Leaderboard supoppers={supoppers} title="All Time" />
        </div>
    );
};

const Leaderboard = ({ supoppers, title }) => (
    <ul className="text-white text-center w-full max-w-md space-y-1">
        <li className="flex justify-between p-4 font-semibold rounded shadow relative text-xl">
            <span>{title}</span>
            <span>
                $
                {supoppers.reduce(
                    (acc, supopper) => (acc += supopper.price),
                    0
                ) / 100}
            </span>
        </li>
        {supoppers.length < 3 && (
            <a
                href="https://gumroad.com/l/kclmf"
                className="block w-full p-4 font-semibold relative bg-yellow-400 text-yellow-800 text-lg py-2 px-6 rounded shadow hover:bg-yellow-300 text-center"
            >
                Claim your spot here
            </a>
        )}
        {supoppers.map((supopper, idx) => {
            return (
                <li
                    className={`flex justify-between p-4 font-semibold rounded shadow relative ${getStylesByIdx(
                        idx
                    )}`}
                >
                    {getCrown(idx)}
                    {idx < 3 ? (
                        <a
                            className="flex items-center underline"
                            href={supopper.link}
                            target="_blank"
                        >
                            {supopper.name}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-2"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ffffff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                            </svg>
                        </a>
                    ) : (
                        <span>{supopper.name}</span>
                    )}
                    <span>${supopper.price / 100}</span>
                </li>
            );
        })}
    </ul>
);

function getStylesByIdx(idx) {
    if (idx === 0) {
        return "bg-purple-500 text-2xl";
    } else if (idx === 1) {
        return "bg-purple-600 text-xl";
    } else if (idx === 2) {
        return "bg-purple-700 text-lg";
    }
    return "bg-purple-900";
}

function getCrown(idx) {
    let color;
    let position;
    if (idx === 0) {
        color = "#ffec00";
        position = "-top-6 -left-6";
    } else if (idx === 1) {
        color = "#D7D7D7";
        position = "-top-5 -left-5";
    } else if (idx === 2) {
        color = "#824A02";
        position = "-top-4 -left-4";
    } else {
        // no crown for you sir/madam
        return null;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ${position} transform -rotate-45`}
            width={48 - idx * 6}
            height={48 - idx * 6}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke={color}
            fill={color}
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
        </svg>
    );
}

export default SupportersLeaderboard;
