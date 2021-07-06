const link = "https://youtu.be/UU6Iduzg8cA";
const isLive = false;

const YouTubeLive = () =>
    isLive ? (
        <div className="w-full top-0 left-0 absolute text-center md:mt-4">
            <div className="inline-block bg-purple-600 rounded py-2 px-4 text-white text-center text-xl font-bold">
                <a href={link} target="_blank">
                    🔴 I'm Live on YouTube!
                </a>
            </div>
        </div>
    ) : null;

export default YouTubeLive;
