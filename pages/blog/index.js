import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { Layout, Head, Post } from "../../components";
import { sortByDate } from "../../helpers";

const Blog = ({ posts }) => {
    return (
        <Layout>
            <Head
                title={"Blog"}
                description={
                    "Read about how I monetize my coding skills while I'm constantly learning and building in public."
                }
                url="https://makemoney.dev/blog"
                image="https://makemoney.dev/images/blog-page.png"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
                Articles
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-200 mt-3 max-w-xl mx-auto sm:mt-4 text-center">
                Read about how I monetize my coding skills while I'm constantly
                learning and building in public.
            </p>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <Post
                            post={post}
                            path="/blog/"
                            key={post.frontmatter.date}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

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

    return posts.sort(sortByDate);
};

export default Blog;
