"use client";

import z from "zod";
import LoadingAnimation from "@/component/loading";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axiosInstance from "@/component/axiosInstance";
import AlertAnimation from "@/component/alert";
import axios from "axios";

const signupSchema = z.object({
    username: z.string().min(5, "Username must be at least 5 letter"),
    password: z.string().min(8, "Username must be at least 8 letter"),
    confirmPassword: z.string().min(8, "Username must be at least 8 letter"),
})

type SignupForm = z.infer<typeof signupSchema>;

type AlertType = {
    message : string,
    show    : boolean,
    type    : string
}

export default function SignupPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({ resolver: zodResolver(signupSchema) });
    const [ alert, setAlert ] = useState<AlertType>({ message: "", show: false, type: "error" });
    const [ visibleConPass, setVisibleConPass ] = useState(false);
    const [ visiblePass, setVisiblePass ] = useState(false);
    const [ loading, setLoading ] = useState(false)
    const router = useRouter();

    const showAlert = async (mes: string, type: string) => {
        setAlert({
            message : mes,
            show    : true,
            type    : type
        });
        setTimeout(() => {
            setAlert((prev) => ({...prev, show: false}));
        }, 3000);
    };

    const onSubmit = async (data: SignupForm) => {
        try {
            setLoading(true);
            const res = await axiosInstance.post("/auth/signup", data);
            const result = await res.data;

            setTimeout(() => {
                setLoading(false)
            }, 1000)

            if (result.statusCode === 400) return showAlert("Invalid Username or Password", "error")
            if (result.statusCode === 409) return showAlert("Username Already Exist", "error")
            if (result.statusCode === 500) return showAlert("Server Error", "error")

            if (result.statusCode === 200) {
                router.push("/login");
            }
        } catch (err: unknown) {
            setLoading(false)

            if (axios.isAxiosError(err)) {
                if (err.code === "ECONNREFUSED" || err.message.includes("ERR_CONNECTION_REFUSED")) return showAlert("Cannot connect to server. Please try again later.", "error");

                const message = err.response?.data?.message || err.message || "Network Error";
                return showAlert(message, "error");
            } else {
                return showAlert("Unexpected error occurred", "error");
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full lg:flex-row-reverse">
            <AlertAnimation message={alert.message} show={alert.show} type={alert.type}/>
            <LoadingAnimation show={loading} opacity={"opacity-50"}/>

            <div className="relative w-[95%] h-[125px] bg-black rounded-t-xl lg:rounded-t-none lg:rounded-e-xl lg:w-[650px] lg:h-[650px]">
                <img src={"/image6.jpg"} alt="Image" className="w-full h-full bg-black mr-5 object-cover rounded-t-xl lg:rounded-t-none lg:rounded-e-xl" loading="lazy"/>
                <div className="absolute top-0 flex flex-col items-center justify-center w-full h-[125px] px-[10%] text-black lg:w-[650px] lg:h-[650px]">
                    <p className="text-xl font-semibold text-center lg:text-4xl">Welcome to our website</p>
                    <p className="text-[0.5rem] font-light text-center lg:text-base">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>

            {/* form page */}
            <div className="flex flex-col items-center justify-evenly w-[95%] h-[450px] bg-white rounded-b-xl lg:rounded-b-none lg:rounded-s-xl lg:w-[550px] lg:h-[650px]">
                <p className="text-2xl font-bold text-[#2c2c2c]">UniLoGo</p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[90%]">
                    <label className="text-md font-semibold lg:text-lg">Username</label>
                    <input type="text" {...register("username")} className="w-full h-[50px] px-3 border-[2px] rounded-lg placeholder:text-sm placeholder:lg:text-lg placeholder:text-[#64748B]" placeholder="Input Username"/>
                    {/* Error sign for username */}
                    {errors.username && <p className="text-sm text-[#DC2626]">{errors.username.message}</p>}


                    {/* sizedbox for padding */}
                    <div className="h-[15px]"/>

                    <label className="text-md font-semibold lg:text-lg">Password</label>
                    <div className="flex flex-row items-center w-full h-[50px] border-[2px] rounded-lg">
                        <input type={visiblePass ? "text": "password"} {...register("password")} className="w-full h-full px-3 bg-transparent placeholder:text-sm placeholder:lg:text-lg placeholder:text-[#64748B]" placeholder="Input Password"/>
                        <div className="m-3" onClick={
                                () => setVisiblePass(!visiblePass)
                            }
                        >
                            {
                                visiblePass ?
                                <LuEye size={22} className="text-[#b7bcc3]"/>:
                                <LuEyeOff size={22} className="text-[#b7bcc3]"/>
                            }
                        </div>
                    </div>
                    {/* Error sign for password */}
                    {errors.password && <p className="text-sm text-[#DC2626]">{errors.password.message}</p>}

                    {/* sizedbox for padding */}
                    <div className="h-[15px]"/>

                    <label className="text-md font-semibold lg:text-lg">Confirm Password</label>
                    <div className="flex flex-row items-center w-full h-[50px] border-[2px] rounded-lg">
                        <input type={visibleConPass ? "text": "password"} {...register("confirmPassword")} className="w-full h-full px-3 bg-transparent placeholder:text-sm placeholder:lg:text-lg placeholder:text-[#64748B]" placeholder="Input Confirm Password"/>
                        <div className="m-3" onClick={
                                () => setVisibleConPass(!visibleConPass)
                            }
                        >
                            {
                                visibleConPass ?
                                <LuEye size={22} className="text-[#b7bcc3]"/>:
                                <LuEyeOff size={22} className="text-[#b7bcc3]"/>
                            }
                        </div>
                    </div>
                    {/* Error sign for password */}
                    {errors.confirmPassword && <p className="text-sm text-[#DC2626]">{errors.confirmPassword.message}</p>}

                    {/* sizedbox for padding */}
                    <div className="h-[15px]"/>

                    <button type="submit" className="flex items-center justify-center w-full h-[50px] text-white bg-[#2c2c2c] rounded-lg">Register</button>
                </form>

                <div className="flex flex-row">
                    <p className="mr-1 text-sm lg:text-base">Already have an account?</p>
                    <a onClick={() => router.push("/login")} rel="noopener noreferrer" className="text-blue-600 text-sm lg:text-base underline cursor-pointer">Login</a>
                </div>
            </div>
        </div>
    )
}