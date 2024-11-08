"use client";

import { useAppSelector } from "@/hooks";
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
            <div className="bg-secondary relative flex min-h-0 flex-1 flex-col">
                <div className={`h-full overflow-y-scroll pt-[120px]  text-white ${sidebarOpened ? "block" : "hidden"}`}>
                    <div>
                        <div className="mx-auto flex items-center gap-4 pl-8">
                            <Image
                                src="https://t4.ftcdn.net/jpg/04/02/62/41/360_F_402624137_Yc0kTeIm7mJn9YA67pwIOsiDeAb5D2tb.jpg"
                                alt="profile pic"
                                width={60}
                                height={60}
                                className="rounded-md"
                            />

                            <div>
                                <h2 className="flex items-center font-semibold text-white">Admin</h2>

                                <p className="text-sm text-[#BDBDBD]">Super Admin</p>
                            </div>
                        </div>

                        <h2 className="mb-4 ml-8 mt-8 text-sm font-medium">Main Menu</h2>

                        <SidebarItems />
                    </div>
                </div>
            </div>
        </aside>
    );
};
