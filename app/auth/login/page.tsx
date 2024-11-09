"use client";

import { Button } from "@/components/custom-ui";
import { AuthHeader, SubHeader } from "@/components/custom-ui/auth";
import { Input } from "@/components/custom-ui/form";
import Link from "next/link";
import { useLogin } from "./useLogin";
import { ArrowRightIcon } from "@/public/icons";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";

interface LoginFormInputs {
    emailAddress: string;
    password: string;
}

const Login = () => {
    const { loginForm, onSubmit, logging_in, passwordIcon, passwordVisible } = useLogin();

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<LoginFormInputs>();
    /*loginForm*/

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="flex h-[632px] max-w-[514px] flex-col gap-[260px]">
                <div className="flex w-full flex-col gap-[80px]">
                    <h1 className="text-left text-[32px] font-semibold leading-[38.4px]">Log In</h1>
                    <div className="flex h-[198px] flex-col gap-[40px]">
                        <div className="flex flex-col gap-[8px]">
                            <Input
                                label="Email Address"
                                name="emailAddress"
                                type="email"
                                // register={register("emailAddress")}
                                error={errors.emailAddress ? errors.emailAddress.message : undefined}
                                placeholder="fisaderek@gmail.com"
                                className="h-[70px] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)] placeholder:pl-2 placeholder:pt-2"
                                style={{ paddingLeft: "10px" }}
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <Input
                                label="Password"
                                name="password"
                                // register={undefined}
                                prefixIcon={passwordIcon}
                                type={passwordVisible ? "password" : "text"}
                                error={errors.password ? errors.password.message : undefined}
                                placeholder="Minimun of 8 characters"
                                className="h-[88px] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)] placeholder:pl-2 placeholder:pt-2"
                                style={{ paddingLeft: "10px" }}
                            />

                            <Link className="text-secondary mt-2 text-base font-medium" href={"/"}>
                                <span className="cursor-pointer p-2 text-[12px] font-medium text-[#7B2CBF] hover:underline">Forget Password?</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pb-[0px]">
                    <Button
                        variant="contained"
                        label="Log in"
                        className="h-[56px] w-full px-[121px] py-[12px] font-semibold text-white"
                        type="submit"
                        loading={logging_in}
                        rightIcon={<ArrowRightIcon />}
                    />
                </div>
            </div>
        </form>
    );
};

export default Login;
