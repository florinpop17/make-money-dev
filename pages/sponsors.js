import { Layout } from "../components";

const Sponsors = () => (
    <Layout>
        <div className="text-center">
            <h2 className="text-5xl font-bold text-white">
                💎 Lifetime Sponsors
            </h2>
            <div>
                <a
                    className="inline-block bg-purple-600 max-w-3xl h-64 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        alt="Kyle"
                    />
                </a>
            </div>

            <h3 className="text-4xl font-bold mt-20 text-white">
                🥇 Gold Sponsors
            </h3>
            <div className="flex justify-center space-x-6">
                <a
                    className="inline-block bg-purple-600 w-96 h-52 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80"
                        alt="Bella"
                    />
                </a>
                <a
                    className="inline-block bg-purple-600 w-96 h-52 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80"
                        alt="Ana"
                    />
                </a>
            </div>

            <h4 className="text-3xl font-bold mt-20 text-white">
                🥈 Silver Sponsors
            </h4>
            <div className="flex justify-center space-x-5">
                <a
                    className="inline-block bg-purple-600 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        alt="Build 1"
                    />
                </a>
                <a
                    className="inline-block bg-purple-600 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        alt="Build 2"
                    />
                </a>
                <a
                    className="inline-block bg-purple-600 w-64 h-32 bg-cover mt-10 rounded shadow-xl overflow-hidden"
                    href="#"
                >
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        alt="Build 3"
                    />
                </a>
            </div>
        </div>
    </Layout>
);

export default Sponsors;
