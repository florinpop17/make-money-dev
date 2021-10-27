import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function getAuthors() {
    const files = fs.readdirSync(path.join("authors"));

    const authors = files.map((filename) => {
        const file = fs.readFileSync(path.join("authors", filename));
        const author = JSON.parse(file);

        return author;
    });

    return authors;
}

export function getPosts() {
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
}

export function sortByDate(a, b) {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
}
