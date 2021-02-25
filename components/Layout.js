import React from "react";
import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const [darkTheme, setDarkTheme] = React.useState(true);

    return (
        <div className={darkTheme ? "dark" : ""}>
            <Head>
                <script async src="https://f.convertkit.com/ckjs/ck.5.js" />
                <script
                    async
                    defer
                    data-domain="makemoney.dev"
                    src="https://plausible.io/js/plausible.js"
                ></script>
                <script
                    async
                    defer
                    data-domain="makemoney.dev"
                    src="https://plausible.io/js/plausible.outbound-links.js"
                ></script>
            </Head>
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 p-4">
                <div className="container mx-auto max-w-3xl lg:max-w-5xl">
                    <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                </div>
                <main className="container mx-auto max-w-3xl lg:max-w-5xl flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
