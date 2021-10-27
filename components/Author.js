import Link from "next/link";

const Author = ({ author }) => (
    <div className="bg-purple-800 flex rounded-lg shadow-lg relative">
        <div>
            <img
                className="m-4 h-24 w-24 object-cover rounded-full shadow-md"
                src={`images/${author.image}`}
                alt={author.name}
            />
        </div>
        <div className="p-4 pl-2 flex flex-1 flex-col">
            <h3 className="flex space-x-1 text-3xl text-purple-100 font-semibold">
                {author.name}
            </h3>
            <p className="text-purple-200 text-lg my-2 font-medium">
                {author.description}
            </p>
            <Link href={`/authors/${author.slug}`}>
                <a className="bg-purple-900 text-purple-100 p-2 font-semibold text-sm absolute top-2 right-2 rounded shadow flex justify-between space-x-1 items-center transform transition hover:-translate-y-1 hover:shadow-md">
                    <span>
                        {author.postCount} post{author.postCount > 1 ? "s" : ""}
                    </span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#eeeeee"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="17" y1="7" x2="7" y2="17" />
                        <polyline points="8 7 17 7 17 16" />
                    </svg>
                </a>
            </Link>
        </div>
    </div>
);

export default Author;
