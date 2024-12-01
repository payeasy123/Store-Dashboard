"use client";

import Image from "next/image";
import { useState } from "react";
import { IMAGE_DIR } from "@/utils";
import { Expand_down } from "@/public/icons";

interface DropdownButtonProps {
    initialLabel: string;
    options: string[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ initialLabel, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialLabel);

    return (
        <div className="relative">
            <button
                className="flex items-center justify-between w-[89px] md:w-auto px-[12px] h-[40px] gap-[4px] mt-2 border border-gray-30 rounded-[10px]"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
            >
                <span className="text-body-7 text-gray-200">{selectedOption}</span>
                <div>
                    <Expand_down className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </div>
                {/* <Image
                    src={`${IMAGE_DIR}/Expand_down.svg`}
                    alt="Expand icon"
                    width={24}
                    height={24}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                /> */}
            </button>
            {isOpen && (
                <div className="absolute top-[48px] right-0 w-[150px] bg-white p-2 z-10 shadow-md rounded-md">
                    <ul className="flex flex-col gap-2">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="text-body-7 text-gray-900 cursor-pointer hover:bg-gray-100 px-3 py-1 rounded-md"
                                onClick={() => {
                                    setSelectedOption(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
