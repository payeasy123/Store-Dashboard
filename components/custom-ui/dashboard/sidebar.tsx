"use client";

import { useAppSelector } from "@/hooks";
import { IMAGE_DIR } from "@/utils";
import Image from "next/image";
import SidebarItems from "./sidebarItems";

export const Sidebar = () => {
    const { sidebarOpened } = useAppSelector((state) => state.appSlice);

    return (
        <aside
            className={`transition-width fixed left-0 top-0 z-[3] flex h-full flex-shrink-0 flex-col duration-300 lg:flex ${
                sidebarOpened ? "w-screen md:w-[17rem]" : "w-0"
            }`}
            aria-label="Sidebar"
        >
            <div className="relative flex min-h-0 flex-1 flex-col">
                <div className={`h-full w-[277px] border-r border-gray-custom-gray text-white ${sidebarOpened ? "block" : "hidden"}`}>
                    <div className="flex flex-col gap-[80px] mt-[60px] ml-[47px] w-[184px] h-[346px]">
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
    );
};
