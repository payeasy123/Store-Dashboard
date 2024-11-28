"use client";
import { useAppActions, useAppSelector } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { DashboardIcon, LineUp } from "public/icons";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { IMAGE_DIR } from "@/utils";
import Image from "next/image";

interface ISidebarItem {
    name: string;
    // icon: JSX.Element;
    icon: React.ReactNode;
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

    {
        /*const isItemActive = (routes: string[], index: number = 1) => {
        const currentPath = pathname.split("/")[index];

        return routes.includes(currentPath);
    };*/
    }
    const isItemActive = (routes: string[]) => {
        const currentPath = pathname; // Get the current path
        return routes.some((route) => currentPath === route); // Match exact paths only
    };

    const sidebarData: ISidebarItem[] = [
        {
            name: "Dashboard",
            icon: <LineUp />,
            route: "/",
            active: isItemActive(["/"]),
        },
        {
            name: "Transactions",
            icon: <LineUp />,
            route: "/transactions",
            active: isItemActive(["/transactions"]),
        },
        {
            name: "Outlets",
            icon: <LineUp />,
            route: "/outlets",
            active: isItemActive(["/outlets"]),
        },
        {
            name: "Settings",
            icon: <LineUp />,
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
            <div onClick={() => handleClick()} style={{}} className={`mb-[24px] h-[40px] w-full cursor-pointer items-center justify-between`}>
                <div className="flex items-center gap-[12px]">
                    {/*{React.cloneElement(item.icon, {
                        basecolor: item.active ? "#fff" : "",
                        stroke: item.active ? "#fff" : undefined,
                        className: `${item.active ? "text-white" : ""}`,
                    })}*/}
                    {/* <Image
                        src={item.icon.props.src}
                        alt={item.icon.props.alt}
                        width={40}
                        height={40}
                        className={`${item.active ? "" : "text-gray-60"}`}
                    /> */}
                    <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary-gradient">{item.icon}</div>
                    <p
                        className={`transition-all duration-300 ease-in-out ${item.active ? "bg-primary-gradient bg-clip-text text-heading-6 text-transparent" : "text-heading-7 text-gray-60"}`}
                    >
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
