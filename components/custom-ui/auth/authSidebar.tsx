import { IMAGE_DIR } from "@/utils";
import Image from "next/image";

export const AuthSidebar = () => {
    return (
        <div className="h-full w-full p-8 md:p-20">
            <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative">
                    <Image src={`${IMAGE_DIR}/onboarding-logo.svg`} alt="Auth Header Image" width={514} height={122.33} className="object-contain" />
                </div>
                <span className="text-heading-2 text-neutral-50">For stores</span>
            </div>
        </div>
    );
};
