"use client";
import { useAppActions, useAppSelector } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { DashboardIcon } from "public/icons";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { IMAGE_DIR } from "@/utils";
import Image from "next/image";


interface ISidebarItem {
    name: string;
    icon: JSX.Element;
    route: string;
    active: boolean;
    subItems?: ISidebarItem[];
}

interface ISidebarItemProp {
    item: ISidebarItem;
    depth: number;
}

const SidebarItems = () => {
    const pathname = usePathname();

    {/*const isItemActive = (routes: string[], index: number = 1) => {
        const currentPath = pathname.split("/")[index];

        return routes.includes(currentPath);
    };*/}
    const isItemActive = (routes: string[]) => {
        const currentPath = pathname; // Get the current path
        return routes.some((route) => currentPath === route); // Match exact paths only
    };      

    const sidebarData: ISidebarItem[] = [
        {
            name: "Dashboard",
            icon: <Image 
                src={`${IMAGE_DIR}/dashboardIcon.svg`} 
                alt="dashboard" 
                width={40}
                height={40}
            />,
            route: "/",
            active: isItemActive(["/"]),
        },
        {
            name: "Transactions",
            icon: <Image 
                src={`${IMAGE_DIR}/transactionsIcon.svg`} 
                alt="transactions" 
                width={40}
                height={40}
            />,
            route: "/transactions",
            active: isItemActive(["/transactions"]),
        },
        {
            name: "Outlets",
            icon: <Image 
                src={`${IMAGE_DIR}/outletsIcon.svg`} 
                alt="outlets" 
                width={40}
                height={40}
            />,            
            route: "/outlets",
            active: isItemActive(["/outlets"]),
        },
        {
            name: "Settings",
            icon: <Image 
                src={`${IMAGE_DIR}/settingsIcon.svg`} 
                alt="settings" 
                width={40}
                height={40}
            />,            
            route: "/settings",
            active: isItemActive(["/settings"]),
        },
    ];

    return (
        <div>
            {sidebarData.map((item, index) => (
                <SidebarItem key={index} item={item} depth={0} />
            ))}
        </div>
    );
};

const SidebarItem = ({ item, depth }: ISidebarItemProp) => {
    const [isExpanded, setIsExpanded] = useState(item?.subItems?.some((subItem) => subItem.active) ? true : false);

    const { setSidebar } = useAppActions();
    const { isMobile } = useAppSelector((state) => state.appSlice);

    const router = useRouter();

    const handleClick = () => {
        if (item.subItems) {
            return setIsExpanded(!isExpanded);
        }

        if (isMobile) {
            setSidebar(false);
        }

        return router.push(item.route);
    };

    const paddingLeft = depth * 35 + 32;

    return (
        <div>
            <div
                onClick={() => handleClick()}
                style={{}}
                className={`w-full h-[40px] cursor-pointer items-center justify-between mb-[24px]`}
            >
                <div className="flex gap-[12px] items-center">
                    {/*{React.cloneElement(item.icon, {
                        basecolor: item.active ? "#fff" : "",
                        stroke: item.active ? "#fff" : undefined,
                        className: `${item.active ? "text-white" : ""}`,
                    })}*/}
                    <Image
                        src={item.icon.props.src}
                        alt={item.icon.props.alt}
                        width={40}
                        height={40}
                        className={`${item.active ? "" : "text-gray-60"}`}
                    />


                    <p className={`transition-all duration-300 ease-in-out ${item.active ? "bg-primary-gradient bg-clip-text text-transparent text-heading-6" : "text-gray-60 text-heading-7"}`}>
                        {item.name}
                    </p>
                </div>

                {item.subItems && <SlArrowRight className="text-base font-light" />}

                <div
                    className={`absolute left-0 top-0 h-full bg-[#F6F7FD] transition-all duration-300 ease-in-out ${
                        item.active && !item.subItems ? "w-[5px]" : "w-0"
                    }`}
                />
            </div>

            {item.subItems && isExpanded && (
                <div>
                    {item.subItems.map((subItem, subItemIndex) => (
                        <SidebarItem key={subItemIndex} item={subItem} depth={depth + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarItems;
