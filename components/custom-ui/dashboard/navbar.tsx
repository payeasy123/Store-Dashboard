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
        <nav className="flex h-[88px] items-center border-b border-gray-custom-gray">
            <div className="flex w-full items-center justify-between">
                <button className="md:hidden pl-7" onClick={() => toggleSidebar()}>
                    {sidebarOpened ? <MdClose className="cursor-pointer text-2xl" /> : <RxHamburgerMenu className="cursor-pointer text-2xl" />}
                </button>

                <span className="ml-[50px] h-[40px] w-[100px] flex items-center gap-[12px]">
                    <Image 
                        src={`${IMAGE_DIR}/sparlogo.svg`}
                        alt="mall logo"
                        width={40}
                        height={40}
                        className="">
                    </Image>
                    <p className="text-heading-4 h-[29px] w-[48px] text-black">Logo</p>
                </span>

                {/*<Button onClick={() => handleLogout()} variant="outlined" label="Logout" className="border-2 !py-2" spanClassName="text-sm" />*/}
            </div>
        </nav>
    );
};
