const ChallengeTiles = ({ revenue }) => (
    <>
        <p className="text-xl font-semibold mt-2">
            My journey to $1M in 1000 days!
        </p>
        <div className="flex flex-wrap my-4" style={{ maxWidth: "50rem" }}>
            {Array(200)
                .fill("")
                .map((_, idx) => {
                    const isActive = idx < Math.floor(revenue / 5000);
                    return (
                        <div
                            key={idx}
                            className={`${
                                isActive ? "bg-purple-500" : "bg-gray-700"
                            } rounded`}
                            style={{
                                width: "1rem",
                                height: "1rem",
                                margin: "2px",
                            }}
                        ></div>
                    );
                })}
        </div>
        <small className="text-gray-300">*Each tile represents $5k.</small>
    </>
);

export default ChallengeTiles;
