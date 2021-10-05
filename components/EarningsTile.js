import { useState } from "react";
import marked from "marked";

import { Modal } from "./";

const EarningsTile = ({
    source: { name, bgColor, iconColor, details, amount },
}) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = (e) => {
        e.stopPropagation();
        setShowModal(false);
    };

    return (
        <div
            className={`w-64 h-64 m-4 flex flex-col items-center justify-center rounded-lg shadow-xl relative group overflow-hidden cursor-pointer`}
            style={{ background: bgColor }}
            onClick={() => setShowModal(true)}
        >
            {/* {showModal && (
                <Modal
                    handleCloseModal={closeModal}
                    bgColor={bgColor}
                    iconColor={iconColor}
                >
                    <div
                        className="prose dark:prose-dark lg:prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: marked(details) }}
                    />
                </Modal>
            )} */}
            <span className={`absolute top-2 right-2 ${iconColor}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <polyline points="11 12 12 12 12 16 13 16" />
                </svg>
            </span>
            <div className="bg-gradient-to-r from-transparent via-white to-transparent w-full h-full absolute top-0 left-0 opacity-30 transform transition-transform duration-700 -translate-x-64 -translate-y-64 scale-150 rotate-45 group-hover:translate-x-64 group-hover:translate-y-64" />
            <h2 className="text-3xl font-semibold text-center">{name}</h2>
            <h3 className="text-5xl font-bold mt-2">
                {new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                }).format(amount)}
            </h3>
        </div>
    );
};

export default EarningsTile;
