import { useState, useEffect } from "react";
import supabase from "../lib/supabase";

const SupportersLeaderboard = () => {
    const [supoppers, setSupoppers] = useState([]);

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
            .select("name, link, price, supopper_id");

        transactions.forEach((transaction) => {
            const { supopper_id, name, price, link } = transaction;
            if (supoppersObj[supopper_id]) {
                supoppersObj[supopper_id] = {
                    name,
                    link,
                    price: supoppersObj[supopper_id].price + price,
                };
            } else {
                supoppersObj[supopper_id] = {
                    name,
                    link,
                    price,
                };
            }
        });

        Object.keys(supoppersObj).forEach((key) => {
            supoppers.push(supoppersObj[key]);
        });

        supoppers.sort((a, b) => b.price - a.price);

        setSupoppers(supoppers);
    }

    function getColorByIdx(idx) {
        if (idx === 0) {
            return "bg-purple-500 text-2xl";
        } else if (idx === 1) {
            return "bg-purple-600 text-xl";
        } else if (idx === 2) {
            return "bg-purple-700 text-lg";
        }
        return "bg-purple-900";
    }

    return (
        <ul className="text-white text-center max-w-md overflow-hidden mx-auto space-y-1">
            {supoppers.map((supopper, idx) => {
                return (
                    <li
                        className={`flex justify-between p-4 font-semibold rounded shadow ${getColorByIdx(
                            idx
                        )}`}
                    >
                        {idx < 3 ? (
                            <a
                                className="flex items-center hover:underline"
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
};

export default SupportersLeaderboard;
