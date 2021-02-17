import { Layout } from "../components/";

const Earnings = () => (
    <Layout>
        <div className="flex flex-col items-center text-white">
            <h1 className="text-6xl font-bold mt-20 text-center">
                Income Streams
            </h1>
            <div className="container mx-auto mt-10 mb-4 space-y-6">
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-red-600 w-64 h-64 flex flex-col items-center justify-center rounded-lg shadow-xl space-y-2">
                        <h2 className="text-4xl font-semibold">YouTube</h2>
                        <h3 className="text-5xl font-bold">$690.13</h3>
                    </div>

                    <div className="bg-purple-600 w-64 h-64 flex flex-col items-center justify-center rounded-lg shadow-xl space-y-2">
                        <h2 className="text-4xl font-semibold">eBook</h2>
                        <h3 className="text-5xl font-bold">$5,024.40</h3>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="bg-green-600 w-64 h-64 flex flex-col items-center justify-center rounded-lg shadow-xl space-y-2">
                        <h2 className="text-4xl font-semibold">Sponsors</h2>
                        <h3 className="text-5xl font-bold">$350</h3>
                    </div>

                    <div className="bg-blue-600 w-64 h-64 flex flex-col items-center justify-center rounded-lg shadow-xl space-y-2">
                        <h2 className="text-4xl font-semibold">Mentoring</h2>
                        <h3 className="text-5xl font-bold">$0</h3>
                    </div>

                    <div className="bg-yellow-500 w-64 h-64 flex flex-col items-center justify-center rounded-lg shadow-xl space-y-2">
                        <h2 className="text-4xl font-semibold">Projects</h2>
                        <h3 className="text-5xl font-bold">$800</h3>
                    </div>
                </div>
            </div>
            <i>Income in 2021 as of 16th February.</i>
        </div>
    </Layout>
);

export default Earnings;
