const EarningsProgress = ({ income }) => (
    <div class="w-full">
        <div className="w-full h-10 bg-gray-500 rounded-xl overflow-hidden relative">
            <div
                className="h-full bg-purple-800 flex items-center justify-center"
                style={{ width: `${(income * 100) / 100000}%` }}
            ></div>
            <span class="absolute top-1 right-2 text-xl font-semibold">
                $100k
            </span>
        </div>
        {/* Remove this 💩 at 10%ish */}
        <div
            className="h-4 self-start flex items-center justify-center mt-2 text-lg font-semibold"
            style={{ width: `${(income * 100) / 100000}%` }}
        >
            <span>${income.toLocaleString()}</span>
        </div>
    </div>
);

export default EarningsProgress;
