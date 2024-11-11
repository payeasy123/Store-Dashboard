import React, { InputHTMLAttributes } from "react";
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
                className={`mb-[8px] flex h-[14px] md:w-[514px] items-center px-[8px] text-[10px] font-medium leading-[12px] md:text-[12px] md:text-base md:leading-[14.4px] ${
                    others.disabled ? "disabled" : ""
                } ${others.readOnly ? "text-gray-500" : "text-[#7B7B7B]"} ${labelClassname} `}
            >
                {label}

                {others.required ? <p className={`text-sm leading-none text-[#EF233C] md:text-base`}>*</p> : null}
            </span>

            <div
                className={`input-container flex flex-row items-center gap-x-2 overflow-hidden rounded-lg border border-solid ${
                    error ? "border-error" : "border-[#D6D6D6]"
                } focus-within:border-primary bg-white duration-200 ease-in ${inputContainerClassname}`}
            >
                <input
                    id={name}
                    className={`input-field text-text-color-main flex-1 rounded-[9px] px-5 py-3 text-sm font-normal outline-none placeholder:text-[14px] placeholder:text-sm placeholder:font-medium placeholder:leading-[16.8px] placeholder:text-[#D6D6D6] md:text-base md:placeholder:text-base ${
                        others.disabled ? "disabled" : ""
                    } ${inputClassname}`}
                    {...others}
                />
                {prefixIcon && <div className="prefix-icon">{prefixIcon}</div>}
            </div>

            {error && !others.disabled && <span className={` mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </label>
    );
};
