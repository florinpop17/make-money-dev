const ProjectBlock = ({ link, image_url, title, revenue }) => (
    <a
        href={link}
        className="block bg-purple-500 rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto hover:bg-purple-700 transform transition hover:-translate-y-1"
        target="_blank"
    >
        <img src={image_url} alt="book cover" />
        <h4 className="text-lg text-white font-semibold text-center p-4">
            {title} - ${revenue.toLocaleString()}
        </h4>
    </a>
);

export default ProjectBlock;
