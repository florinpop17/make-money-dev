const Sidebar = () => (
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
    </div>
);

export default Sidebar;
