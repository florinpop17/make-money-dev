const TwitchLive = ({ isLive }) =>
    isLive ? (
        <div className="w-full top-0 left-0 absolute text-center md:mt-4">
            <div className="inline-block bg-purple-600 rounded py-2 px-4 text-white text-center text-xl font-bold">
                <a
                    href={`https://twitch.tv/florinpop17/schedule`}
                    target="_blank"
                >
                    🔴 I'm Streaming on Twitch!
                </a>
            </div>
        </div>
    ) : (
        <div>Not live.</div>
    );

export default TwitchLive;
