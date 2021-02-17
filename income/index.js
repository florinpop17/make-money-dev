// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const youtubeMD = fs.readFileSync(path.join("youtube", slug + ".md"), "utf-8");

// const { content: YouTube } = matter(youtubeMD);

const latestUpdate = "February 16th";

const income = [
    {
        name: "YouTube",
        amount: 690.13,
        bgColor: "bg-red-600",
        iconColor: "text-red-400",
        // details: YouTube,
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

export { income, latestUpdate };
