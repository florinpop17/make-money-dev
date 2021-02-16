import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { Layout, Post } from "../../components";
import { sortByDate } from "../../helpers";

const Blog = ({ posts }) => {
    return (
        <Layout>
            <h1 className="dark:text-white text-4xl font-bold text-center my-6">
                Articles
            </h1>
            <div className="flex flex-col md:flex-row">
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
