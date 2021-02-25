import { Layout } from "../components";

const Privacy = () => (
    <Layout>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl text-center">
            Privacy Policy
        </h1>
        <div className="mt-10 text-white">
            <p className="text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                    className="underline"
                    href="https://policies.google.com/privacy"
                >
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a
                    className="underline"
                    href="https://policies.google.com/terms"
                >
                    Terms of Service
                </a>{" "}
                apply.
            </p>
        </div>
    </Layout>
);

export default Privacy;
