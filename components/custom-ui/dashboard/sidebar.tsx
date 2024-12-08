"use client";

import { useAppActions, useAppSelector } from "@/hooks";
import { IMAGE_DIR } from "@/utils";
import Image from "next/image";
import SidebarItems from "./sidebarItems";
import { MdClose } from "react-icons/md";


export const Sidebar = () => {
    const { sidebarOpened } = useAppSelector((state) => state.appSlice);
    const { toggleSidebar } = useAppActions();

    return (
        <>
            <aside
                className={`transition-transform duration-300 fixed left-0 top-0 z-[3] flex h-full flex-shrink-0 flex-col border-r border-gray-custom-gray bg-[#F1F1F1] lg:flex ${
                    sidebarOpened ? "translate-x-0 w-[277px] md:w-[17rem]" : "-translate-x-full w-0"
                }`}
                aria-label="Sidebar"
            >
                <div className="relative flex min-h-0 flex-1 flex-col">
                    <button
                        onClick={() => toggleSidebar()}
                        className="absolute top-4 right-4 text-2xl text-gray-600 md:hidden"
                    >
                        <MdClose />
                    </button>
                    <div className={`h-full w-[277px] text-white ${sidebarOpened ? "block" : "hidden"}`}>
                        <div className="flex flex-col gap-[80px] mt-[60px] ml-[47px] w[184px] h-[346px]">
                            <Image
                                src={`${IMAGE_DIR}/dashboard-logo.svg`}
                                alt="Payeasy Logo"
                                width={142.86}
                                height={34}
                                className=""
                            />
                            <div className="h-[232px] w-full">
                                <SidebarItems />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

        </>
        
    );
};
