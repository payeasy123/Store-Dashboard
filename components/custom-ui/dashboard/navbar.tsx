"use client";

import { useAppActions, useAppSelector } from "@/hooks";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../button";

export const Navbar = () => {
    const { toggleSidebar } = useAppActions();

    const { sidebarOpened } = useAppSelector((state) => state.appSlice);

    const router = useRouter();

    const handleLogout = async () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);

        router.push("/auth/login");
    };

    return (
        <nav className="fixed z-[5] flex h-[80px] w-full items-center justify-center border-b border-[#CACACA] bg-[#F6F7FD]">
            <div className="mx-auto flex w-[95%] items-center justify-between ">
                <button className="md:hidden" onClick={() => toggleSidebar()}>
                    {sidebarOpened ? <MdClose className="cursor-pointer text-2xl" /> : <RxHamburgerMenu className="cursor-pointer text-2xl" />}
                </button>

                <span>Logo</span>

                <Button onClick={() => handleLogout()} variant="outlined" label="Logout" className="border-2 !py-2" spanClassName="text-sm" />
            </div>
        </nav>
    );
};
