import React from "react";
import Image from "next/image";
import { Button } from "@/components/custom-ui";
import { Close_round } from "@/public/icons/Close_round";
import Link from "next/link";

const ReceiptPage = () => {
  return (
    <div className="w-[886px] rounded-[70px] px-[50px] pt-[42px] bg-neutral-50 flex flex-col m-auto">

        <div className="w-full">
            <div className="w-full flex justify-between items-center mb-[29px]">
                <h1 className="font-bold text-gray-950 text-heading-6">Receipt</h1>
                <Link href={"/transactions"}>
                    <Close_round />
                </Link>
            </div>
            <div className="w-[64px] h-[64px] mb-[48px]">
                {/* Replace with an actual QR Code component or image */}
                {/* <Image
                    src="/path-to-qr-code.png"
                    alt="QR Code"
                    className="w-full h-full object-cover"
                /> */}
            </div>
        </div>


        <div className="w-[786px] gap-[16px] flex flex-col">
            <h1 className="font-semibold text-body-8 text-gray-950">Transaction details</h1>
            <div className="w-full flex flex-col gap-[12px]">
                <div className="flex justify-between">
                    <p className="text-body-9 text-gray-100">Transaction ID</p>
                    <p className="text-body-5 text-gray-500">ABC123</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-9 text-gray-100">Store address</p>
                    <p className="text-body-5 text-gray-500">5, Ikeja, Lagos</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-9 text-gray-100">Payment time</p>
                    <p className="text-body-5 text-gray-500">01/02/30, 12:34:16</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-9 text-gray-100">Payment method</p>
                    <p className="text-body-5 text-gray-500">Card</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-9 text-gray-100">Total items</p>
                    <p className="text-body-5 text-gray-500">20</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-9 text-gray-100">Amount paid</p>
                    <p className="text-body-5 text-gray-500">₦56,000</p>
                </div>                
            </div>    
        </div>

        <hr className="w-[786px] border-[0.5px] border-neutral-500 my-[24px]" />

        <div className="w-[786px] h[258px] gap-[16px] flex flex-col overflow-y-auto">
            <h2 className="font-semibold text-body-8 text-gray-950">Items</h2>
            <div className="w-full h-[135px] flex flex-col gap-[8px]">
                {[
                    { name: "Apple Red", price: "₦7,800.00", quantity: 10 },
                    { name: "Clementine", price: "₦7,800.00", quantity: 6 },
                    { name: "Wheat Bread", price: "₦7,800.00", quantity: 2 },
                    {
                    name: "Nescafe Original 3 in 1 (Pack of 10 sachets) – 250g",
                    price: "₦7,800.00",
                    quantity: 8,
                    },
                    { name: "Apple Red", price: "₦7,800.00", quantity: 10 },
                    { name: "Clementine", price: "₦7,800.00", quantity: 6 },
                    { name: "Wheat Bread", price: "₦7,800.00", quantity: 2 }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-[8px]"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[6px] w-[746px]">
                                <p className="text-gray-300 text-body-9">{item.name}</p>
                                <p className="text-gray-950 text-body-5">{item.price}</p>
                            </div>
                            <p className="text-gray-350 text-body-5 w-[24px] h-[24px] flex justify-center items-center">{item.quantity}</p>
                        </div>
                        {/* <hr className="border-[0.5px] w-[343px] bg-neutral-100" /> */}
                    </div>
                ))}
            </div>

            {/* <button className="w-full mt-[32px] bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium py-[12px] rounded-lg text-sm shadow-lg">
                Download receipt
            </button> */}
        </div>
        <Button 
            variant="contained" 
            type="submit"
            className="flex justify-center w-[343px] h-[48px] items-center gap-[8px] rounded-[80px] py-[12px] px-[100px] mt-[50px] mb-[54px] mx-auto"
            label={
                <p className="text-heading-8 text-neutral-50">Download receipt</p>
            }
        />
    </div>
  );
};

export default ReceiptPage;
