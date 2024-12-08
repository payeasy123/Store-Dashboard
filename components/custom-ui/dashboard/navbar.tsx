"use client";

import { useAppActions, useAppSelector } from "@/hooks";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../button";
import Image from "next/image";
import { IMAGE_DIR } from "@/utils";


export const Navbar = () => {
    const { toggleSidebar } = useAppActions();

    const { sidebarOpened } = useAppSelector((state) => state.appSlice);

    const router = useRouter();

    const handleLogout = async () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY);

        router.push("/auth/login");
    };

    return (
        <nav className="flex h-[88px] px-[50px] items-center border-b border-gray-custom-gray">
            <div className="flex w-full items-center justify-between">
                <button className="md:hidden" onClick={() => toggleSidebar()}>
                    {sidebarOpened ? <MdClose className="cursor-pointer text-2xl" /> : <RxHamburgerMenu className="cursor-pointer text-2xl" />}
                </button>

                <span className="h-[40px] w[100px] flex items-center gap-[12px]">
                    <Image 
                        src={`${IMAGE_DIR}/sparlogo.svg`}
                        alt="mall logo"
                        width={40}
                        height={40}
                        className="">
                    </Image>
                    <p className="text-heading-4 h-[29px] w[48px] text-gray-500">Logo</p>
                </span>
            </div>
        </nav>
    );
};
