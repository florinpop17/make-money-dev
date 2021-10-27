import Link from "next/link";

import ThemeToggler from "./ThemeToggler";

const urls = [
    { href: "/blog", label: "Blog" },
    // { href: "/daily-updates", label: "Daily Updates" },
    // { href: "/inteviews", label: "Interviews" },
    { href: "/earnings", label: "Earnings" },
    { href: "/projects", label: "Projects" },
    // { href: "/sponsors", label: "Sponsors" },
    { href: "/supoppers", label: "Supoppers" },
    // { href: "/about", label: "About" },
];

const Nav = ({ darkTheme, setDarkTheme }) => {
    return (
        <nav>
            <div className="flex flex-col md:flex-row justify-between items-center py-8">
                <Link href="/">
                    <a className="text-purple-800 text-2xl dark:text-gray-100 font-bold no-underline">
                        MakeMoneyDev
                    </a>
                </Link>
                <ul className="flex justify-between items-center space-x-4 mx-auto md:mr-0 mt-4 md:mt-0">
                    {urls.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link href={href}>
                                <a className="font-bold text-gray-400 hover:text-gray-100">
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <ThemeToggler
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                /> */}
            </div>
        </nav>
    );
};

export default Nav;
