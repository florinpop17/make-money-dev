const Footer = () => (
    <footer className="container flex flex-col md:flex-row justify-between bg-purple-800 text-white py-3 px-10 mx-auto max-w-3xl lg:max-w-5xl mt-10 -mb-4 rounded-t-lg text-center">
        <p>
            @ {new Date().getFullYear()} MakeMoneyDev by{" "}
            <a
                className="font-bold"
                target="_blank"
                href="https://twitter.com/florinpop1705"
            >
                Florin Pop
            </a>
        </p>
        <a className="mt-4 md:mt-0" href="/privacy">
            Privacy Policy
        </a>
    </footer>
);

export default Footer;
