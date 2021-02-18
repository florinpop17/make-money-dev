module.exports = {
    async redirects() {
        return [
            {
                source: "/gumroad-ebook",
                destination: "https://gum.co/makemoneydev",
                permanent: false,
            },
            {
                source: "/freelancing-bundle",
                destination: "https://studywebdevelopment.com/freelancing.html",
                permanent: false,
            },
        ];
    },
};
