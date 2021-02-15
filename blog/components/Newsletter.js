const HeaderNewsletter = () => (
    <form
        className="bg-purple-600 max-w-xl py-6 my-10 text-center mx-auto rounded-lg shadow-xl"
        action="https://app.convertkit.com/forms/1746325/subscriptions"
        method="post"
        data-sv-form="1746325"
        data-uid="790ea1a150"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
        <ul data-element="errors" data-group="alert"></ul>
        <div data-element="fields" data-stacked="false"></div>
        <h2 className="text-white text-4xl font-bold">
            Want to stay updated? <br />
            <span className="text-purple-100">Sign up for the newsletter.</span>
        </h2>
        <div className="my-5">
            <input
                className="py-4 px-6 rounded text-lg"
                type="email"
                placeholder="Your Email"
                aria-label="Your email address"
                name="email_address"
            />
            <button
                data-element="submit"
                className="bg-purple-800 text-white font-semibold ml-2 py-4 px-6 rounded text-lg hover:bg-purple-700"
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
