import { useState, useEffect } from "react";
import "../styles/index.css";
import supabase from "../lib/supabase";

function MyApp({ Component, pageProps }) {
    const [revenue, setRevenue] = useState(0);
    const [resources, setResources] = useState({
        weeklydeals: 0,
        notes: 0,
    });

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const { data: income } = await supabase.from("income").select("*");

        income.forEach((rev) => {
            switch (rev.resource) {
                case "Notion Template": {
                    resources.notes += rev.amount;
                    break;
                }
                case "WeeklyDeals.dev": {
                    resources.weeklydeals += rev.amount;
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
