import React from "react";
import Head from "./Head";
import Nav from "./Nav";
import Footer from "./Footer";
import TwitchLive from "./TwitchLive";

const isBrowser = typeof window !== "undefined";

const Layout = ({ children }) => {
    const [darkTheme, setDarkTheme] = React.useState(true);

    return (
        <div className={darkTheme ? "dark" : ""}>
            <Head>
                {isBrowser && (
                    <>
                        <script src="https://gumroad.com/js/gumroad.js"></script>

                        <script
                            async
                            defer
                            data-domain="makemoney.dev"
                            src="https://plausible.io/js/plausible.outbound-links.js"
                        ></script>
                    </>
                )}
            </Head>
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 p-4">
                <TwitchLive />
                <div className="container mx-auto max-w-3xl lg:max-w-5xl mt-4 md:mt-0">
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
