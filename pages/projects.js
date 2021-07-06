import { Layout, Head, ProjectBlock, EarningsProgress } from "../components/";

const Projects = () => {
    return (
        <Layout>
            <Head
                title={"Projects"}
                description={"Projects built during the $0 to $100k Challenge"}
                url="https://makemoney.dev/projects"
                image="https://makemoney.dev/images/homepage.png"
            />
            <div className="flex flex-col items-center text-white">
                <EarningsProgress />
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-center">
                    Projects
                </h1>
                <h4 className="text-2xl text-center">
                    These projects were built during the $0 to $100k Challenge.
                </h4>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ProjectBlock
                        title="$0 to $100k Challenge Notes"
                        image_url="/images/projects/notes.png"
                        link="https://gum.co/0-to-100k-notes"
                    />
                    <ProjectBlock
                        title="Weekly Deals for Devs"
                        image_url="/images/projects/wdd.png"
                        link="https://weeklydeals.dev/"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
