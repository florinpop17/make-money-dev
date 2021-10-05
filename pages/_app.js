import { useState, useEffect } from "react";
import "../styles/index.css";
import supabase from "../lib/supabase";

function MyApp({ Component, pageProps }) {
    const [revenue, setRevenue] = useState(0);
    const [resources, setResources] = useState({
        weeklydeals: {
            amount: 0,
            name: "Weekly Deals.dev",
            bgColor: "#5B21B6",
            details: "",
        },
        notes: {
            amount: 0,
            name: "Challenge Notes",
            bgColor: "#F472B6",
            details: "",
        },
        course50projects: {
            amount: 0,
            name: "Udemy Course",
            bgColor: "#A534F0",
            details: "",
        },
        ebook10ways: {
            amount: 0,
            name: "eBook",
            bgColor: "#663399",
            details: "",
        },
        youtube: {
            amount: 0,
            name: "YouTube",
            bgColor: "#FF0000",
            details: "",
        },
        twitch: {
            amount: 0,
            name: "Twitch",
            bgColor: "#6441A4",
            details: "",
        },
        sponsors: {
            amount: 0,
            name: "Sponsors",
            bgColor: "#DAA520",
            details: "",
        },
    });

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data: income } = await supabase.from("income").select("*");

        income.forEach((rev) => {
            switch (rev.resource) {
                case "Notion Template": {
                    resources.notes.amount += rev.amount;
                    break;
                }

                case "50Projects": {
                    resources.course50projects.amount += rev.amount;
                    break;
                }

                case "TenWaysToMakeMoneyDev": {
                    resources.ebook10ways.amount += rev.amount;
                    break;
                }

                case "Sponsors": {
                    resources.sponsors.amount += rev.amount;
                    break;
                }

                case "Twitch": {
                    resources.twitch.amount += rev.amount;
                    break;
                }

                case "YouTube": {
                    resources.youtube.amount += rev.amount;
                    break;
                }

                case "WeeklyDeals.dev": {
                    resources.weeklydeals.amount += rev.amount;
                    break;
                }
            }
        });

        const revenue = income.reduce((acc, rev) => (acc += rev.amount), 0);

        setRevenue(revenue);
        setResources(resources);
    }

    return <Component {...pageProps} revenue={revenue} resources={resources} />;
}

export default MyApp;
