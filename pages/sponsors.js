import Link from "next/link";
import { Layout, Head } from "../components";

const Sponsors = () => (
    <Layout>
        <Head
            title={"Sponsors"}
            description={"Displaying the sponsors of this project"}
            url="https://makemoney.dev/sponsors"
            image="https://makemoney.dev/images/sponsors-page.png"
        />
        <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10">
                💎 Lifetime Sponsors
            </h2>
            <div>
                <a
                    className="inline-block bg-purple-600 max-w-3xl md:h-64 bg-cover rounded shadow-xl overflow-hidden"
                    target="_blank"
                    href="https://studywebdevelopment.com/freelancing.html"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="/images/freelancing-bundle-banner.jpg"
                        alt="Kyle"
                    />
                </a>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white my-10">
                🥇 Gold Sponsors
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-x-5 md:space-y-0">
                <div className="inline-flex items-center justify-center bg-yellow-400 max-w-full w-96 h-52 bg-cover rounded shadow-xl overflow-hidden text-yellow-900 text-2xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-yellow-400 max-w-full w-96 h-52 bg-cover rounded shadow-xl overflow-hidden text-yellow-900 text-2xl font-bold ">
                    Spot available
                </div>
            </div>

            <h4 className="text-2xl lg:text-3xl font-bold text-white my-10">
                🥈 Silver Sponsors
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-x-5 md:space-y-0">
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
            </div>

            <p className="text-xl text-white mt-10">
                Want to become a sponsor?{" "}
                <a
                    className="font-bold"
                    target="_blank"
                    href="https://twitter.com/makemoneydev"
                >
                    Contact me on Twitter
                </a>
            </p>
        </div>
    </Layout>
);

export default Sponsors;
