import React from "react";
import { Spinner } from "./spinner";

type OptionalProps = {
    loading: boolean;
    spanClassName?: string;
};

type IButtonProps = {
    label: string | React.ReactNode;
    variant: "outlined" | "contained" | "text";
    rightIcon?: string | React.ReactNode;
    leftIcon?: string | React.ReactNode;
} & Partial<OptionalProps> &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        disabled = false,
        onClick,
        variant = "contained",
        loading = false,
        label,
        type = "button",
        style,
        className,
        spanClassName,
        rightIcon,
        leftIcon,
        ...others
    } = props;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            style={style}
            className={`border-secondary group relative inline-block w-full cursor-pointer rounded-full border px-6 py-3 text-center align-middle text-heading-5 font-semibold outline-none transition-all duration-300 ease-in-out
      ${buttonConfig[variant]} disabled:pointer-events-none ${loading ? "!bg-secondary-light !text-secondary" : ""} ${className}`}
            {...others}
        >
            <span className={`flex items-center justify-center gap-2 space-x-3 ${spanClassName}`}>
                {leftIcon}
                {label}
                {/* {loading && (
                    <>
                        <Spinner />
                    </>
                )} */}
                {rightIcon}
            </span>
        </button>
    );
};

const buttonConfig = {
    outlined: "bg-transparent text-secondary hover:bg-secondary hover:text-white disabled:opacity-[40%]",
    text: "border-none bg-transparent text-secondary disabled:text-opacity-50",
    contained:
        "bg-primary-gradient text-neutral-50 hover:text-neutral-50 hover:bg-primary-300 disabled:bg-opacity-20 disabled:text-opacity-50 disabled:border-none",
};
