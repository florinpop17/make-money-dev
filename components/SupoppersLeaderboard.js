const supporters = [
    {
        name: "Florin Pop",
        link: "https://florin-pop.com",
        amount: 200,
    },
    {
        name: "Lil Shakee",
        link: "https://lil-shakee.com",
        amount: 100,
    },
    {
        name: "Vannesh",
        link: "https://vannesh.supercool.com",
        amount: 50,
    },
    {
        name: "Chris Sean",
        link: "https://chris-sean.io",
        amount: 25,
    },
    {
        name: "Vid",
        link: "https://vido.co",
        amount: 10,
    },
];

supporters.sort((a, b) => b.amount - a.amount);

const SupportersLeaderboard = () => (
    <div className="container text-white">
        <div className="flex items-end justify-center space-x-2">
            <div className="w-48 h-36 bg-purple-700 flex flex-col justify-center items-center shadow-lg rounded-t-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="crown"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#D7D7D7"
                    fill="#D7D7D7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                </svg>
                <p className="text-3xl font-semibold">{supporters[1].name}</p>
                <p className="text-2xl font-semibold">
                    ${supporters[1].amount}
                </p>
            </div>

            <div className="w-48 h-48 bg-purple-700 flex flex-col justify-center items-center shadow-lg rounded-t-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="crown"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffec00"
                    fill="#ffec00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                </svg>

                <p className="text-4xl font-semibold">{supporters[0].name}</p>
                <p className="text-3xl font-semibold">
                    ${supporters[0].amount}
                </p>
            </div>

            <div className="w-48 h-28 bg-purple-700 flex flex-col justify-center items-center shadow-lg rounded-t-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="crown"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#824A02"
                    fill="#824A02"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z"></path>
                </svg>
                <p className="text-2xl font-semibold">{supporters[2].name}</p>
                <p className="text-xl font-semibold">${supporters[2].amount}</p>
            </div>
        </div>
        <ul>
            {supporters.slice(3).map((supporter) => (
                <li>
                    {supporter.name} - {supporter.amount}
                </li>
            ))}
        </ul>
    </div>
);

export default SupportersLeaderboard;
