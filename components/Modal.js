const Modal = ({ children, bgColor, iconColor, handleCloseModal }) => (
    <div className="bg-gray-900 fixed inset-0 z-50 flex justify-center items-center">
        <div
            className={`${
                bgColor ? bgColor : "bg-gray-700"
            } max-w-2xl max-h-screen m-8 p-8 text-white rounded shadow-xl relative overflow-y-auto`}
        >
            {children}
            <button
                onClick={handleCloseModal}
                className={`${
                    iconColor ? iconColor : "bg-gray-700"
                } absolute top-2 right-2 text-gray-500 cursor-pointer`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                </svg>
            </button>
        </div>
    </div>
);

export default Modal;
