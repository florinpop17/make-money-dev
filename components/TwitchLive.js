import { useState, useEffect } from "react";

const TwitchLive = () => {
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        checkIsLive();
    }, []);

    async function checkIsLive() {
        const res = await window.fetch("https://is-pop-online.glitch.me/");
        const data = await res.json();

        if (data) {
            setIsLive(data.isOnline);
        }

        console.log("BOOOOYA!");
    }

    return isLive ? (
        <div className="w-full top-0 left-0 absolute text-center md:mt-4">
            <div className="inline-block bg-purple-600 rounded py-2 px-4 text-white text-center text-xl font-bold">
                <a href={`https://twitch.tv/florinpop17/`} target="_blank">
                    🔴 I'm LIVE on Twitch!
                </a>
            </div>
        </div>
    ) : null;
};

export default TwitchLive;
