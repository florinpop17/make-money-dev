const HeaderNewsletter = () => (
    <form
        className="bg-purple-900 dark:bg-purple-800 shadow-md py-6 rounded-md text-center my-5 p-3"
        action="https://www.getrevue.co/profile/florinpop17/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
    >
        <div className="text-white">
            <div data-element="fields" data-stacked="false" />
            <ul data-element="errors" data-group="alert" />
        </div>
        <div className="lg:flex lg:justify-center lg:items-center relative">
            <h1 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0">
                Get updated when I write a new article.
            </h1>
            <div className="my-2 sm:ml-4 lg:flex">
                <input
                    className="w-full py-3 px-6 rounded mb-4 sm:mb-0 sm:w-auto"
                    placeholder="Your Email"
                    aria-label="Your email address"
                    type="email"
                    name="member[email]"
                    id="member_email"
                />
                <button
                    className="w-full bg-purple-700 dark:bg-purple-900 text-white font-semibold py-3 px-6 sm:w-auto sm:ml-2 rounded"
                    name="member[subscribe]"
                    id="member_submit"
                >
                    Subscribe
                </button>
            </div>
            <small className="text-purple-200 italic lg:hidden">
                No spam. Unsubscribe at any time.
            </small>
        </div>
    </form>
);

export default HeaderNewsletter;
