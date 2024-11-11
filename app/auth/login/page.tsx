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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[514px]">
            <div className="flex h-full w-full flex-col gap-[260px] p-4">
                <div className="">
                    <h1 className="mb-[80px] text-heading-3 text-gray-900">Log in</h1>
                    <div className="flex flex-col gap-[40px]">
                        <div>
                            <Input
                                label="Email"
                                type="email"
                                {...register("emailAddress")}
                                error={errors.emailAddress ? errors.emailAddress.message : undefined}
                                placeholder="fisaderek@gmail.com"
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
                            />
                        </div>
                    </div>
                    <Link className="text-secondary mt-[4px] w-max text-base font-medium" href={"/"}>
                        <span className="cursor-pointer pl-[8px] text-[12px] font-medium text-[#7B2CBF] hover:underline">Forget Password?</span>
                    </Link>
                </div>

                <div className="">
                    <Button variant="contained" label="Log in" type="submit" loading={logging_in} rightIcon={<ArrowRightIcon />} />
                </div>
            </div>
        </form>
    );
};

export default Login;
