export const formatDate = (date) => {
    const months = [
        "dummy month",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const month = months[+date.split("-")[0]];
    const day = +date.split("-")[1];
    const year = +date.split("-")[2];
    return `${month} ${day}, ${year}`;
};

export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
