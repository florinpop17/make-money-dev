import Link from "next/Link";

import { formatDate } from "../helpers";

const PostsListItem = ({ post, path }) => (
    <Link href={path + post.slug}>
        <a
            className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-1 hover:shadow-xl"
            key={post.slug}
        >
            <div>
                <img
                    className="h-48 w-full object-cover"
                    src={post.frontmatter.cover_image}
                    alt={post.frontmatter.title}
                />
            </div>
            <div className="bg-white dark:bg-purple-900 p-6 flex flex-col">
                <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                    <time dateTime={post.frontmatter.date}>
                        {formatDate(post.frontmatter.date)}
                    </time>
                </div>
                <div className="mt-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {post.frontmatter.title}
                    </p>
                    <p className="text-lg mt-3 text-gray-600 dark:text-purple-100">
                        {post.frontmatter.excerpt}
                    </p>
                </div>
            </div>
        </a>
    </Link>
);

export default PostsListItem;
