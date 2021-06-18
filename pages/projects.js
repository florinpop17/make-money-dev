import { Layout, Head, ProjectBlock } from "../components/";

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
                <h1 className="text-5xl lg:text-6xl font-bold mb-8 lg:mt-20 text-center">
                    Projects
                </h1>
                <h4 className="text-2xl">
                    These projects were built during the $0 to $100k Challenge.
                </h4>

                <div className="mt-12 space-y-12">
                    <ProjectBlock
                        title="$0 to $100k Challenge Notes"
                        image_url="/images/projects/notes.png"
                        link="https://gum.co/0-to-100k-notes"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
