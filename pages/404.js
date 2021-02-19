import Link from "next/link";
import { Layout } from "../components";

const NotFound = () => (
    <Layout>
        <div className="container text-white text-center">
            <h1 className="text-4xl md:text-5xl font-semibold my-10">
                Oopsie, something went wrong!
            </h1>
            <Link href="/">
                <a className="text-2xl font-semibold">👉 Go Home! 👈</a>
            </Link>
            <img
                className="max-w-lg mx-auto mt-10"
                src="/images/404.svg"
                alt="404 image"
            />
        </div>
    </Layout>
);

export default NotFound;
