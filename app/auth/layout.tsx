"use client";

import { AuthSidebar } from "@/components/custom-ui/auth";
import { ACCESS_TOKEN_KEY, IMAGE_DIR, ROUTES } from "@/utils/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) redirect(ROUTES.dashboard.HOME);

    return (
        <main className="flex h-screen w-full overflow-y-auto bg-white md:overflow-hidden">
            <section className="hidden flex-1 bg-primary-gradient lg:block">
                <AuthSidebar />
            </section>

            <section className="flex h-full flex-1 flex-col items-center justify-center md:overflow-y-auto md:px-[103px]">{children}</section>
        </main>
    );
};

export default AuthLayout;
