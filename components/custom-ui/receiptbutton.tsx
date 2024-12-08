"use client";

import React from "react";
import { Receipt } from "@/public/icons";

interface ButtonProps {
  onClick?: () => void;
  label: string;
}

export const ReceiptButton: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button
            className="w-[117px] h-[28px] flex items-center gap-[4px] p-[12px] bg-primary-200 rounded-[80px]"
            onClick={onClick}
            aria-label={label}
        >
            <Receipt />
            <p className="text-body-5 text-neutral-50">{label}</p>
        </button>
    );
};

