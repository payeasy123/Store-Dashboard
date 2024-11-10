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
            <div className="flex h-full max-w-[514px] w-full flex-col gap-12 md:gap-[260px]">
                <div className="flex w-full flex-col gap-6 md:gap-[80px]">
                    <h1 className="text-left text-[24px] md:text-[32px] text-[#131313] font-semibold leading-[38.4px]">Log In</h1>
                    <div className="flex h-[198px] flex-col gap-[40px]">
                        <div className="flex flex-col">
                            <Input
                                label="Email"
                                name="emailAddress"
                                type="email"
                                // register={register("emailAddress")}
                                error={errors.emailAddress ? errors.emailAddress.message : undefined}
                                placeholder="fisaderek@gmail.com"
                                className="w-[100%] h-[48px] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)]"
                                style={{
                                    paddingLeft: "8px"
                                }}
                            />
                        </div>

                        <div className="flex flex-col gap-[4px]">
                            <Input
                                label="Password"
                                name="password"
                                // register={undefined}
                                prefixIcon={passwordIcon}
                                type={passwordVisible ? "password" : "text"}
                                error={errors.password ? errors.password.message : undefined}
                                placeholder="Minimun of 8 characters"
                                className="h-[48px] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)]"
                                style={{
                                    paddingLeft: "8px"
                                }}
                            />

                            <Link className="text-secondary mt-[4px] text-base font-medium" href={"/"}>
                                <span className="cursor-pointer pl-[8px] text-[12px] font-medium text-[#7B2CBF] hover:underline">Forget Password?</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Button
                        variant="contained"
                        label="Log in"
                        className="h-[56px] w-full px-[121px] py-[12px] font-semibold text-[#F7F7F7] text-[18px] leading-[22.41px]"
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
