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
            <div className="flex h-full w-full max-w-[514px] flex-col gap-12 md:gap-[260px]">
                <div>
                    <h1 className="mb-[80px] text-left text-[24px] font-semibold leading-[38.4px] text-[#131313] md:text-[32px]">Log in</h1>
                    <div className="flex h-[198px] flex-col gap-[40px]">
                        <div>
                            <Input
                                label="Email"
                                type="email"
                                {...register("emailAddress")}
                                error={errors.emailAddress ? errors.emailAddress.message : undefined}
                                placeholder="fisaderek@gmail.com"
                                className="h-[48px] w-[100%] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)]"
                                style={{
                                    paddingLeft: "8px",
                                }}
                            />
                        </div>

                        <div>
                            <Input
                                label="Password"
                                {...register("password")}
                                prefixIcon={passwordIcon}
                                type={passwordVisible ? "password" : "text"}
                                error={errors.password ? errors.password.message : undefined}
                                placeholder="Minimun of 8 characters"
                                className="h-[48px] border border-[#D6D6D6] p-[12px_8px] text-gray-700 shadow-[0px_2px_0px_rgba(0,0,0,0.1)]"
                                style={{
                                    paddingLeft: "8px",
                                }}
                            />
                        </div>
                    </div>
                    <Link className="text-secondary mt-[4px] w-max text-base font-medium" href={"/"}>
                        <span className="cursor-pointer pl-[8px] text-[12px] font-medium text-[#7B2CBF] hover:underline">Forget Password?</span>
                    </Link>
                </div>

                <div className="">
                    <Button
                        variant="contained"
                        label="Log in"
                        className="h-[56px] w-full px-[121px] py-[12px] text-[18px] font-semibold leading-[22.41px] text-[#F7F7F7]"
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
