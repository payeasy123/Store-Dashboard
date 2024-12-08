"use client";

import { Button } from "@/components/custom-ui";
import DropdownButton from "@/components/custom-ui/dropdownbutton";
import { IMAGE_DIR } from "@/utils";
import Image from "next/image";

const Home = () => {
    const handleOptionSelect = (option: string) => {
        console.log("Selected Option:", option)
    }

    return (
        <div className="w-full">
            <div className="flex justify-between h-[48px] w-full items-center mb-[32px]">
                <p className="text-heading-3 text-gray-950">Hello, Admin</p>
                <div>
                    <Button 
                        variant="contained" 
                        type="submit"
                        className="w-[249px] h-[48px] flex items-center gap-[8px]"
                        label={
                            <>
                                <Image
                                    src={`${IMAGE_DIR}/buttonIcon.svg`}
                                    alt="Button Icon"
                                    width={22}
                                    height={22}
                                    className=""
                                />
                                Generate Sales Report
                            </>
                        }
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-[19px] mb-[24px] h[208px]">
                <div className="border bg-neutral-50 border-[#EAEAEA] w-full h-[208px] md:h-[208px] md:w-[calc(50%-9.5px)] rounded-[16px] p-[24px]">
                    <div className="flex justify-between mb-[16px] flex-wrap items-center">
                        <div className="h-[40px] flex gap-[12px] items-center">
                            <Image
                                src={`${IMAGE_DIR}/profileIcon.svg`}
                                alt="Profile Icon"
                                width={40}
                                height={40}
                                className=""
                            />
                            <p className="text-heading-8 text-gray-500">Customer overview</p>
                        </div>
                        <div>
                            <DropdownButton
                                initialLabel="Today"
                                options={["Today", "This Week", "This Month"]}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-gray-950 text-heading-9">5,000</p>
                        <div className="flex gap-[4px]">
                            <span className="text-secondary-400 text-body-6">+1.5%</span>
                            <p className="flex item-center text-gray-200 text-body-5">from yesterday</p>
                        </div>
                    </div>
                </div>
                <div className="border bg-neutral-50 border-[#EAEAEA] w-full h-[208px] md:h-[208px] md:w-[calc(50%-9.5px)] rounded-[16px] p-[24px]">
                    <div className="flex justify-between mb-[16px] flex-wrap items-center">
                        <div className="h-[40px] flex gap-[12px] items-center">
                            <Image
                                src={`${IMAGE_DIR}/basketIcon.svg`}
                                alt="Basket Icon"
                                width={40}
                                height={40}
                                className=""
                            />
                            <p className="text-heading-8 text-gray-500">Sales overview</p>
                        </div>  
                        <div>
                            <DropdownButton
                                initialLabel="Today"
                                options={["Today", "This Week", "This Month"]}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <p className="text-gray-950 text-heading-9">500</p>
                        <div className="flex gap-[4px]">
                            <span className="text-secondary-400 text-body-6">+1.5%</span>
                            <p className="flex item-center text-gray-200 text-body-5">from yesterday</p>
                        </div>
                    </div>         
                </div>
            </div>
            <div className="h-[544px] rounded-[16px] border bg-neutral-50 border-[#EAEAEA] p-[24px] mb-5">
                <div className="flex justify-between mb-[16px] flex-wrap items-center">
                    <div className="h-[40px] flex gap-[12px] items-center">
                        <Image
                            src={`${IMAGE_DIR}/cardIcon.svg`}
                            alt="Card Icon"
                            width={40}
                            height={40}
                            className=""
                        />
                        <p className="text-heading-8 text-gray-500">Revenue Generated</p>
                    </div>
                    <div>
                        <DropdownButton
                            initialLabel="Custom"
                            options={[""]}
                        />
                    </div>
                </div>
                
                <p className="text-gray-950 text-body-9">#50,000</p>
            </div>
        </div>
    )
};

export default Home;
