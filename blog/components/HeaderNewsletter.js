const HeaderNewsletter = () => (
    <form
        className="bg-purple-900 dark:bg-purple-800 shadow-md py-6 rounded-md text-center my-5 p-3"
        action="https://app.convertkit.com/forms/1746325/subscriptions"
        method="post"
        data-sv-form="1746325"
        data-uid="790ea1a150"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
        <div className="text-white">
            <div data-element="fields" data-stacked="false" />
            <ul data-element="errors" data-group="alert" />
        </div>
        <div className="lg:flex lg:justify-center lg:items-center relative">
            <h1 className="text-white text-3xl font-bold mb-4 md:mb-0">
                Get updated when I write a new article.
            </h1>
            <div className="my-2 ml-4">
                <input
                    className="py-3 px-6 rounded"
                    type="email"
                    placeholder="Your Email"
                    aria-label="Your email address"
                    name="email_address"
                />
                <button className="bg-purple-700 dark:bg-purple-900 text-white font-semibold ml-2 py-3 px-6 rounded">
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
