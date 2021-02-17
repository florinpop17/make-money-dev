import { Layout } from "../components";

const Sponsors = () => (
    <Layout>
        <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
                💎 Lifetime Sponsors
            </h2>
            <div>
                <a
                    className="inline-block bg-purple-600 max-w-3xl md:h-64 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="/images/freelancing-bundle-banner.jpg"
                        alt="Kyle"
                    />
                </a>
            </div>

            <h3 className="text-4xl font-bold mt-10 text-white">
                🥇 Gold Sponsors
            </h3>
            <div className="flex justify-center space-x-6">
                <div className="inline-flex items-center justify-center bg-yellow-400 w-96 h-52 bg-cover mt-10 rounded shadow-xl overflow-hidden text-yellow-900 text-2xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-yellow-400 w-96 h-52 bg-cover mt-10 rounded shadow-xl overflow-hidden text-yellow-900 text-2xl font-bold ">
                    Spot available
                </div>
            </div>

            <h4 className="text-3xl font-bold mt-10 text-white">
                🥈 Silver Sponsors
            </h4>
            <div className="flex justify-center space-x-5">
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
                <div className="inline-flex items-center justify-center bg-gray-300 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden text-gray-800 text-xl font-bold ">
                    Spot available
                </div>
            </div>

            <p className="text-xl mt-10 text-white">
                Want to become a sponsor? <strong>Contact me on Twitter</strong>
            </p>
        </div>
    </Layout>
);

export default Sponsors;
