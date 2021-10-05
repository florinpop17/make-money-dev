import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Link from "next/link";

import { Layout, Sidebar, Newsletter, Head } from "../../components";

function isPathAbsolute(path) {
    return /^(?:\/|[a-z]+:\/\/)/.test(path);
}

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
                    {/* <div
                        className="prose dark:prose-dark prose-lg xl:prose-xl max-w-none mx-auto md:ml-0"
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    /> */}
                    <div className="prose dark:prose-dark prose-lg xl:prose-xl max-w-none mx-auto md:ml-0">
                        <ReactMarkdown
                            components={{
                                a: (props) => {
                                    return props.href.startsWith(
                                        "https://twitter.com"
                                    ) ? (
                                        <TwitterTweetEmbed
                                            tweetId={props.href.split("/")[5]}
                                        />
                                    ) : (
                                        <Link href={props.href}>
                                            <a
                                                target={
                                                    isPathAbsolute(props.href)
                                                        ? "_blank"
                                                        : ""
                                                }
                                            >
                                                {props.children}
                                            </a>
                                        </Link>
                                    );
                                },
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
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
