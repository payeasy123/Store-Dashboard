"use client";

import { Navbar, Sidebar } from "@/components/custom-ui/dashboard";
import { useScreenSize } from "@/hooks";
import { ACCESS_TOKEN_KEY, ROUTES } from "@/utils/constants";
import { redirect } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    // if (!accessToken) redirect(ROUTES.auth.LOGIN);

    useScreenSize();

    return (
        <div className="flex flex-row h-full min-h-screen bg-[#F1F1F1]">
            <Sidebar />

            <div className="flex flex-col w-[1163px] md:ml-[17rem]">
                <Navbar />

                {/* Main Content */}
                <main id="main-content" className="flex w-full px-8 pt-[120px]">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
