import { Layout, Head, Author } from "../../components";
import { getAuthors } from "../../lib/api";

const Authors = ({ authors }) => {
    return (
        <Layout>
            <Head
                title={"Authors"}
                description={"List of Authors on the MakeMoney.dev blog"}
                url="https://makemoney.dev/authors"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
                Authors
            </h1>

            <div className="flex flex-col md:flex-row mt-10">
                <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                    {authors.map((author) => (
                        <Author author={author} key={authors.name} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    return {
        props: {
            authors: getAuthors(),
        },
    };
}

export default Authors;
