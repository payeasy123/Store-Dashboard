import { IMAGE_DIR } from "@/utils";
import Image from "next/image";

export const AuthSidebar = () => {
    return (
        <div className="h-full p-8 md:p-20 w-full">
            <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative h-[80px] md:w-[514px] md:h-[123px]">
                    <Image
                        src={`${IMAGE_DIR}/onboarding-logo.svg`} 
                        alt="Auth Header Image" 
                        fill
                        className="object-contain" 
                        />
                </div>
                <span className="text-heading-2 text-neutral-50">For stores</span>
            </div>
        </div>
    );
};
