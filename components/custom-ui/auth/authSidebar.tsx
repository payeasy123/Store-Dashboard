import { IMAGE_DIR } from "@/utils";
import Image from "next/image";

export const AuthSidebar = () => {
    return (
        <div className="h-full p-20">
            <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative h-[123px] w-[514px]">
                    <Image src={`${IMAGE_DIR}/onboarding-logo.svg`} alt="Auth Header Image" fill className="object-cover" />
                </div>
                <span className="text-heading-2 text-neutral-50">For stores</span>
            </div>
        </div>
    );
};
