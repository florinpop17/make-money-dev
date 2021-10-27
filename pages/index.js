import { Layout, HeaderNewsletter, Post } from "../components";
import { getPosts } from "../lib/api";

const Index = ({ posts }) => (
    <Layout>
        <HeaderNewsletter />
        <div className="mt-16 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
                Latest Articles
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-200 mt-3 max-w-xl mx-auto sm:mt-4 text-center">
                Read about how I monetize my coding skills while I'm constantly
                learning and building in public.
            </p>
        </div>
        <div className="flex">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                    <Post post={post} path="/blog/" />
                ))}
            </div>
        </div>
        {/* <div>
            <Link href="/blog">
                <button className="block border-purple-500 bg-purple-700 font-semibold text-white my-10 mx-auto py-4 px-6 rounded hover:bg-purple-800">
                    Read All Articles
                </button>
            </Link>
        </div> */}
    </Layout>
);

export async function getStaticProps() {
    return {
        props: {
            posts: getPosts(),
        },
    };
}

export default Index;
