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

            <div className="pt-{170px} pl-{103px} w-{514px} h-[632px] flex flex-col gap-[260px]">

                <div className="flex flex-col gap-[80px] w-full">
                    <h1 className="text-[32px] font-semibold leading-[38.4px] text-left">Log In</h1>
                    <div className="flex flex-col gap-[40px] h-[198px]">
                        <div className="flex flex-col gap-[8px]">
                            <label className="block w-[514px] h-[14px] px-[8px]">Email</label>
                            <Input
                                
                                name="emailAddress"
                                type="email"
                                register={register("emailAddress")}
                                error={errors.emailAddress ? errors.emailAddress.message : undefined}
                                placeholder="fisaderek@gmail.com"
                                className="h-[70px] text-gray-700 p-[12px_8px] border border-[#D6D6D6] shadow-[0px_2px_0px_rgba(0,0,0,0.1)] placeholder:pl-2 placeholder:pt-2"
                                style={{ paddingLeft: '10px' }}
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label className="block w-[514px] h-[14px] px-[8px]">Password</label>
                            <Input
                                
                                name="password"
                                register={register("password")}
                                prefixIcon={passwordIcon}
                                type={passwordVisible ? "password" : "text"}
                                error={errors.password ? errors.password.message : undefined}
                                placeholder="Minimun of 8 characters"
                                className="h-[88px] text-gray-700 p-[12px_8px] border border-[#D6D6D6] shadow-[0px_2px_0px_rgba(0,0,0,0.1)] placeholder:pl-2 placeholder:pt-2"
                                style={{ paddingLeft: '10px' }}
                            />

                            <Link
                                className="text-secondary mt-2 inline-block text-base font-medium "
                                href={"/auth/forgot-password"}
                            >
                                <p className="text-[12px] font-medium text-[#7B2CBF] p-2 hover:underline cursor-pointer">Forget Password?</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="pb-[0px]">
                    <Button 
                        variant="contained" 
                        label="Log in" 
                        className="w-full h-[56px] py-[12px] px-[121px] text-white font-semibold" 
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
