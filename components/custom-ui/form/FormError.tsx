"use client";

import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

interface IFormErrorProps {
    error: string | null | undefined;
}

export const FormError = (props: IFormErrorProps) => {
    const { error } = props;

    const [formError, setFormError] = useState<string | null | undefined>(error);

    useEffect(() => {
        if (formError) {
            setTimeout(() => {
                setFormError(null);
            }, 3000);
        }
    }, [formError, error]);

    useEffect(() => {
        setFormError(error);
    }, [error]);

    return (
        <div
            className={`animate__animated animate__fadeIn my-4 items-center rounded-[8px] border border-[#C71D32] bg-[#FCD3D8]  px-5 py-2 shadow-lg lg:justify-center ${
                formError ? "flex" : "hidden"
            }`}
        >
            <span className="flex items-center gap-3 font-medium leading-7 text-[#272727]">
                <IoIosCloseCircle className="text-2xl text-[#C71D32]" />
                {formError}
            </span>
        </div>
    );
};
