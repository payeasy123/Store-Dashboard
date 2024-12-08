"use client";

import React from "react";
import { ReceiptButton } from "@/components/custom-ui";
import Link from "next/link";


const Transaction = () => {
    return (
        <div className="w-[1063px] flex flex-col gap-[46px] mt-[5px]">
            <div className="flex flex-col gap-[8px]">
                <h1 className="text-heading-9 text-gray-950">500</h1>
                <p className="text-heading-8 text-gray-500">Transactions</p>
                <div className="flex gap-[4px] w-full">
                    <span className="text-secondary-400 text-body-6">+1.5%</span>
                    <p className="flex text-gray-200 text-body-5">from yesterday</p>
                </div> 
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">
                    <thead className="bg-gray-30 text-gray-200 h-[52px] rounded-lg text-body-8 font-semibold">
                        <tr>
                            <th className="p-[9px_31px]">TRANSACTION ID</th>
                            <th className="p-[9px_31px]">AMOUNT</th>
                            <th className="p-[9px_31px]">DATE</th>
                            <th className="p-[9px_31px]">TIME</th>
                            <th className="p-[9px_31px]">RECEIPT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-gray-950 text-body-8 font-semibold border-b-[2px] border-gray-30">
                            <td className="p-[9px_31px]">ABC123</td>
                            <td className="p-[9px_31px]">₦50,000</td>
                            <td className="p-[9px_31px]">01/02/30</td>
                            <td className="p-[9px_31px]">12:34:16</td>
                            <td className="p-[9px_31px]">
                                <Link href="/receipt">
                                    <ReceiptButton 
                                        label="View receipt" 
                                    />
                                </Link>
                            {/* <button
                                className="w-[117px] h-[28px] flex items-center gap-[4px] p-[12px] bg-primary-200 rounded-[80px]"
                            >
                                <Receipt />
                                <p className="text-body-5 text-neutral-50">View receipt</p>
                            </button> */}
                            </td>
                        </tr>
                        <tr className="text-gray-950 text-body-8 font-semibold border-b-[2px] border-gray-30">
                            <td className="p-[9px_31px]">ABC123</td>
                            <td className="p-[9px_31px]">₦50,000</td>
                            <td className="p-[9px_31px]">01/02/30</td>
                            <td className="p-[9px_31px]">12:34:16</td>
                            <td className="p-[9px_31px]">
                                <Link href="/receipt">
                                    <ReceiptButton 
                                        label="View receipt" 
                                    />
                                </Link>
                            </td>
                        </tr>
                        <tr className="text-gray-950 text-body-8 font-semibold border-b-[2px] border-gray-30">
                            <td className="p-[9px_31px]">ABC123</td>
                            <td className="p-[9px_31px]">₦50,000</td>
                            <td className="p-[9px_31px]">01/02/30</td>
                            <td className="p-[9px_31px]">12:34:16</td>
                            <td className="p-[9px_31px]">
                                <Link href="/receipt">
                                    <ReceiptButton 
                                        label="View receipt" 
                                    />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Transaction;
