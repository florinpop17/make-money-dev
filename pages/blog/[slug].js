import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

import { Layout, Sidebar, Newsletter, Head } from "../../components";

const Post = ({
    frontmatter: { title, excerpt, date, cover_image },
    slug,
    content,
}) => {
    const url = `https://makemoney.dev/blog/${slug}`;
    return (
        <Layout>
            <Head
                title={title}
                description={excerpt}
                url={url}
                date={date}
                image={"https://makemoney.dev" + cover_image}
            />
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 dark:text-white text-center md:text-left">
                        {title}
                    </h1>
                    <div
                        className="prose dark:prose-dark prose-lg xl:prose-xl max-w-none mx-auto md:ml-0"
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </div>
                <Sidebar url={url} title={title} />
            </div>
            <Newsletter />
        </Layout>
    );
};

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs.readFileSync(
        path.join("posts", slug + ".md"),
        "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMetadata);

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    };
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("posts"));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export default Post;
