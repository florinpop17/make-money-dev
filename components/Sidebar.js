const Sidebar = ({ url, title }) => {
    const socials = {
        twitter: `https://twitter.com/share?text=${title} via @makemoneydev&url=${url}`,
    };

    return (
        <div className="lg:w-1/3 p-6">
            <a
                className="block bg-purple-500 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto hover:bg-purple-700 transform transition hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                href="https://gum.co/makemoneydev"
            >
                <img src="/ebook-cover.png" alt="book cover" />
                <h4 className="text-lg text-white font-semibold text-center p-4">
                    Ten++ Ways to Make Money as a Developer - eBook
                </h4>
            </a>

            <div className="my-10 mx-auto text-center">
                <h3 className="text-xl font-bold dark:text-white">
                    Spread the message
                </h3>
                <div className="mt-4 space-x-2">
                    <a
                        className="inline-block bg-twitter text-lg text-white rounded py-4 px-10 font-semibold hover:bg-white hover:text-twitter"
                        href={socials.twitter}
                    >
                        Share on Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
