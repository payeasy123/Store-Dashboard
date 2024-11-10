import React, { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import "./styles.scss";

type TInputProps<T extends FieldValues> = {
    name: Path<T>;
    label: string;
    error?: string;
    prefixIcon?: React.ReactNode;
    register?: UseFormRegister<T>;
    labelClassname?: string;
    inputClassname?: string;
    inputContainerClassname?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = <T extends FieldValues>(props: TInputProps<T>) => {
    const { name, label, error, prefixIcon, register, labelClassname, inputClassname, inputContainerClassname, className, ...others } = props;

    return (
        <label htmlFor={name} className="atmua-input flex w-full flex-col">
            <span
                className={`!flex h-[14px] w-[514px] items-center px-[8px] text-[10px] md:text-[12px] leading-[12px] md:leading-[14.4px] font-medium mb-[8px] md:text-base ${
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
                    className={`input-field rounded-[9px] placeholder:text-[#D6D6D6] placeholder:text-[14px] placeholder:leading-[16.8px] placeholder:font-medium text-text-color-main flex-1 px-5 py-3 text-sm font-normal outline-none placeholder:text-sm md:text-base md:placeholder:text-base ${
                        others.disabled ? "disabled" : ""
                    } ${inputClassname}`}
                    // {...(register ? register(name) : {})}
                    {...others}
                />
                {prefixIcon && <div className="prefix-icon">{prefixIcon}</div>}
            </div>

            {error && !others.disabled && <span className={` mt-1 text-xs text-[#EF233C]`}>{error}</span>}
        </label>
    );
};
