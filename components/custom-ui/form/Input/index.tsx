import React, { InputHTMLAttributes, useEffect } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./styles.scss";

type TInputProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    error?: string;
    prefixIcon?: React.ReactNode;
    labelClassname?: string;
    inputClassname?: string;
    inputContainerClassname?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <T extends FieldValues>(props: TInputProps<T>) => {
    const { name, label, error, prefixIcon, labelClassname, inputClassname, inputContainerClassname, className, ...others } = props;

    return (
        <label htmlFor={name} className="atmua-input flex w-full flex-col">
            <span
                className={`mb-[8px] flex h-[14px] items-center px-[8px] text-body-3 font-medium ${
                    others.disabled ? "disabled" : ""
                } ${others.readOnly ? "text-gray-500" : "text-[#7B7B7B]"} ${labelClassname} `}
            >
                {label}

                {others.required ? <p className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</p> : null}
            </span>

            <div
                className={`flex flex-row items-center gap-x-2 overflow-hidden rounded-lg border border-solid ${
                    error ? "border-error bg-[#FFD7D7]" : "border-neutral-500 bg-neutral-100"
                } focus-within:border-primary duration-200 ease-in ${inputContainerClassname}`}
            >
                <input
                    id={name}
                    className={`flex-1 rounded-[9px] bg-transparent px-2 py-[11.5px] text-body-2 font-medium text-gray-500 shadow-[0px_2px_0px_rgba(0,0,0,0.1)] outline-none placeholder:text-body-2 placeholder:font-medium placeholder:text-neutral-500 ${
                        others.disabled ? "disabled" : ""
                    } ${inputClassname}`}
                    {...others}
                />
                {prefixIcon && <div>{prefixIcon}</div>}
            </div>

            {error && !others.disabled && <span className={` mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </label>
    );
};
