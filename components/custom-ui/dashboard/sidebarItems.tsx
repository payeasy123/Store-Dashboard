"use client";
import { useAppActions, useAppSelector } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { DashboardIcon } from "public/icons";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

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

    const isItemActive = (routes: string[], index: number = 1) => {
        const currentPath = pathname.split("/")[index];

        return routes.includes(currentPath);
    };

    const sidebarData: ISidebarItem[] = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            route: "/",
            active: isItemActive([""]),
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
                style={{
                    paddingLeft: paddingLeft,
                }}
                className={`relative mb-[5px]  flex w-full cursor-pointer items-center justify-between bg-[#F6F7FD26] py-4 pr-5 `}
            >
                <div className="flex items-center gap-2">
                    {React.cloneElement(item.icon, {
                        basecolor: item.active ? "#fff" : undefined,
                        stroke: item.active ? "#fff" : undefined,
                        className: `text-[#B1B1B1] ${item.active ? "text-white" : ""}`,
                    })}

                    <p className={`text-sm font-medium transition-all duration-300 ease-in-out ${item.active ? "text-white" : "text-[#B1B1B1]"}`}>
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
