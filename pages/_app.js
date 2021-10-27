import { useState, useEffect } from "react";
import "../styles/index.css";
import supabase from "../lib/supabase";

function MyApp({ Component, pageProps }) {
    const [revenue, setRevenue] = useState(0);
    const [resources, setResources] = useState({
        supoppers: {
            amount: 0,
            name: "Supoppers",
            bgColor: "orangered",
            link: "/supoppers",
        },
        course50projects: {
            amount: 0,
            name: "Udemy Course",
            bgColor: "#A534F0",
            link: "https://www.udemy.com/course/50-projects-50-days/?referralCode=684EE5F9DE1745B6428B",
        },
        ebook10ways: {
            amount: 0,
            name: "eBook",
            bgColor: "#663399",
            link: "https://florinpop17.gumroad.com/l/makemoneydev",
        },
        youtube: {
            amount: 0,
            name: "YouTube",
            bgColor: "#FF0000",
            link: "https://www.youtube.com/florinpop",
        },
        twitch: {
            amount: 0,
            name: "Twitch",
            bgColor: "#6441A4",
            link: "https://www.twitch.com/florinpop17",
        },
        sponsors: {
            amount: 0,
            name: "Sponsors",
            bgColor: "#DAA520",
            link: "/sponsors",
        },
        weeklydeals: {
            amount: 0,
            name: "WeeklyDeals.dev",
            bgColor: "#5B21B6",
            link: "https://weeklydeals.dev",
        },
        notes: {
            amount: 0,
            name: "Challenge Notes",
            bgColor: "#F472B6",
            link: "https://florinpop17.gumroad.com/l/1m-1000days",
        },
    });

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data: income } = await supabase.from("income").select("*");

        income.forEach((rev) => {
            switch (rev.resource) {
                case "Supoppers": {
                    resources.supoppers.amount += rev.amount;
                    break;
                }

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
