const HeaderNewsletter = () => (
    <form
        className="bg-purple-600 max-w-xl p-8 mt-10 text-center mx-auto rounded-lg shadow-xl"
        action="https://www.getrevue.co/profile/florinpop17/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
    >
        <ul data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false"></div>
        <h2 className="text-white text-3xl md:text-4xl font-bold">
            Want to stay updated? <br />
            <span className="text-purple-100">Sign up for the newsletter.</span>
        </h2>
        <div className="my-6">
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
        <small className="text-gray-100 italic">
            No spam. Unsubscribe at any time.
        </small>
    </form>
);

export default HeaderNewsletter;
