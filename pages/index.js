import path from "path";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import { Layout, HeaderNewsletter, Post } from "../components";
import { sortByDate } from "../helpers";

const Index = ({ posts }) => (
    <Layout>
        <HeaderNewsletter />
        <div className="mt-16 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
                Latest Articles
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-200 mt-3 max-w-2xl mx-auto sm:mt-4 text-center">
                Read about how I monetize my coding skills while <br /> I'm
                constantly learning and building in public.
            </p>
        </div>
        <div className="flex">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {posts.map((post) => (
                    <Post
                        post={post}
                        path="/blog/"
                        key={post.frontmatter.date}
                    />
                ))}
            </div>
        </div>
        <div>
            <Link href="/blog">
                <button className="block border-purple-500 bg-purple-700 font-semibold text-white my-10 mx-auto py-4 px-6 rounded hover:bg-purple-800">
                    Read All Articles
                </button>
            </Link>
        </div>
    </Layout>
);

export async function getStaticProps() {
    return {
        props: {
            posts: getPosts(),
        },
    };
}

const getPosts = () => {
    const files = fs.readdirSync(path.join("posts"));

    const posts = files.map((filename) => {
        const slug = filename.replace(".md", "");
        const markdownWithMetadata = fs.readFileSync(
            path.join("posts", filename),
            "utf-8"
        );

        const { data: frontmatter } = matter(markdownWithMetadata);
        return {
            slug,
            frontmatter,
        };
    });

    return posts.sort(sortByDate).slice(0, 6);
};

export default Index;
