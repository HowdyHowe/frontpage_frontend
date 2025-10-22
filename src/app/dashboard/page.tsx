"use client"

import Card from "@/component/card";
import axiosInstance from "@/component/axiosInstance";
import DashboardLogoutPopup from "@/component/popupLogout";
import DashboardProfilePopup from "@/component/popupProfile";
import { useState } from "react";
import { reset, setDarkMode } from "@/store/state";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RxChevronDown, RxMoon, RxPerson, RxSun } from "react-icons/rx";
import { BsInstagram, BsThreads, BsTwitch, BsTwitterX } from "react-icons/bs";
import AlertAnimation from "@/component/alert";
import LoadingAnimation from "@/component/loading";
import { rootState } from "@/store";
import { CiLight } from "react-icons/ci";
import { LiaLightbulb } from "react-icons/lia";

type AlertType = {
    message: string;
    show: boolean;
    type: string
}

export default function DashboardPage() {
    const [ popupProfile, setPopupProfile ] = useState(false);
    const [ popupLogout, setPopupLogout ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ navbar, setNavbar ] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();
    const darkMode = useSelector((state: rootState) => state.stateData.darkMode);

    const [ alert, setAlert ] = useState<AlertType>({
        message: "",
        show: false,
        type: "error"
    });

    const logoutSubmit = async () => {
        try {
            setLoading(true);

            const logout = await axiosInstance.get("/auth/logout");
            const result = logout.data;

            setTimeout(() => {
                setLoading(false);
            }, 1000)

            if (result.statusCode === 500) return showAlert("Failed to logout", "error")

            return router.push("/login");
        } catch (err: unknown) {
            setLoading(false);

            console.error("Error in dashboard popup logout: ", err)
            return showAlert("Error", "error");
        }
    };

    const showAlert = (mes: string, type: string) => {
        setAlert({
            message: mes,
            show: true,
            type: type
        });
        setTimeout(() => {
            setAlert((prev) => ({...prev, show: false}))
        }, 3000);
    };

    return(
        <>
            <DashboardProfilePopup show={popupProfile} onCloseClick={() => setPopupProfile(false)}
                onLogoutClick={() => {
                    setPopupProfile(false);
                    setPopupLogout(true)
                }}
            />
            <DashboardLogoutPopup show={popupLogout} onCancelClick={() => setPopupLogout(false)}
                onLogoutClick={async () => {
                    await logoutSubmit();
                    dispatch(reset());
                    setPopupLogout(false);
                }}
            />

            <div className={ navbar ? `fixed flex flex-col items-center justify-start w-full h-screen z-30 lg:hidden ${darkMode ? "bg-[#0e0e0e] text-white" : "bg-white text-black"}` : "hidden"}>
                <div className="flex flex-row items-center justify-between w-[90%] h-[75px]">
                    <p className="text-xl">UniloGo</p>
                    <div className="flex flex-row gap-2">
                        <div className="flex items-center justify-center" onClick={() => dispatch(setDarkMode())}>
                            { darkMode ? <RxMoon size={18}/> : <RxSun size={18}/> }
                        </div>
                        <div className="flex items-center justify-center">
                            <RxPerson className="cursor-pointer" size={20} onClick={() => setPopupProfile(true)}/>
                        </div>
                        <div className="flex items-center justify-center ml-2" onClick={() => setNavbar(!navbar)}>
                            { navbar ? <MdClose size={25}/> : <MdMenu size={25}/> }
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-12 mt-5">
                    <div className="flex flex-col items-center gap-4 lg:gap-12">
                        <p>Menu</p>
                        <p>Product</p>
                        <p>Article</p>
                        <p>Features</p>
                        <p>Contact</p>
                    </div>
                    <div className="flex flex-row items-center gap-10">
                        <BsInstagram/>
                        <BsThreads/>
                        <BsTwitterX/>
                        <BsTwitch/>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col items-center justify-center w-full h-full ${darkMode ? "bg-[#0e0e0e] text-white" : "bg-white text-black"}`}>
                <AlertAnimation message={alert.message} show={alert.show} type={alert.type}/>
                <LoadingAnimation show={loading} opacity={"opacity-50"} />

                <header className="flex flex-row items-center justify-between w-[90%] h-[75px] lg:w-[70%]">
                    <p className="text-xl">UniloGo</p>

                    <div className="hidden lg:flex flex-row gap-12">
                        <div className="flex flex-row items-center lg:gap-12">
                            <p>Menu</p>
                            <p>Product</p>
                            <p>Article</p>
                            <p>Features</p>
                            <p>Contact</p>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <BsInstagram/>
                            <BsThreads/>
                            <BsTwitterX/>
                            <BsTwitch/>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <div onClick={() => dispatch(setDarkMode())}>
                                { darkMode ? <RxMoon size={22}/> : <RxSun size={22}/> }
                            </div>
                            <RxPerson className="cursor-pointer" size={25} onClick={() => setPopupProfile(true)}/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 lg:hidden">
                        <div className="flex items-center justify-center" onClick={() => setNavbar(!navbar)}>
                            { navbar ? <MdClose size={25}/> : <MdMenu size={25}/> }
                        </div>
                    </div>
                </header>

                <main className="relative flex flex-col items-center justify-center w-full">
                    <img src={ darkMode ? "image4.jpg" : "image2.jpg" } alt="Background image" className="w-full h-[600px] object-cover lg:h-[700px]" loading="lazy"/>
                    <div className="absolute top-0 flex items-center justify-center w-full h-[600px] lg:h-[700px]">
                        <p className="text-4xl font-semibold lg:text-8xl">Shop & Enjoy</p>
                        <RxChevronDown size={40} className="absolute bottom-5 animate-bounce"/>
                    </div>

                    <div className="flex flex-col w-[90%] h-full lg:w-[70%]">
                    <div className="flex items-center justify-between text-gray-500 mt-[30px]">
                        <p>Show All</p>
                        <div className="flex flex-row items-center justify-center gap-2 lg:gap-12">
                        <p>Web</p>
                        <p>Game</p>
                        <p>Branding</p>
                        <p>Art</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center mt-[30px]">
                        <div className="flex flex-row items-center justify-center w-full">
                            <FaMagnifyingGlass size={30} className="text-gray-400 mr-5"/>
                            <div className={`w-[450px] text-black px-3 rounded-lg border ${ darkMode ? "bg-[#2c2c2c]" : "bg-white"}`}>
                                <input type="text" className="w-full h-[40px] bg-transparent" placeholder="Search"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-7 mt-[30px] lg:grid-cols-3">
                        {
                            Array.from({ length: 6 }, (_, index) => (
                            <Card key={index}/>
                            ))
                        }
                        </div>

                        <div className="flex flex-row items-center justify-center lg:w-[350px]">
                            <div className="flex items-center justify-center w-[100px] h-[50px] font-semibold">Previous</div>
                            <div className="flex items-center justify-center w-[50px] h-[50px]">1</div>
                            <div className="flex items-center justify-center w-[50px] h-[50px] border rounded-lg">2</div>
                            <div className="flex items-center justify-center w-[50px] h-[50px]">3</div>
                            <div className="flex items-center justify-center w-[100px] h-[50px] font-semibold">Next</div>
                        </div>
                    </div>

                    <div className="w-full h-full mt-[50px] px-5 border rounded-lg">
                        <div className="flex flex-col items-center justify-between mt-[30px] lg:flex-row">
                            <img src={"/image3.jpg"} alt="Image" className="min-w-[300px] h-[300px] bg-black rounded-full mr-0 object-cover lg:min-w-[250px] lg:h-[250px] lg:mr-5" loading="lazy"/>
                            <div className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="flex flex-col-reverse items-center justify-between my-[30px] lg:flex-row">
                            <div className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <img src={"/image3.jpg"} alt="Image" className="min-w-[300px] h-[300px] bg-black rounded-full ml-0 object-cover lg:min-w-[250px] lg:h-[250px] lg:ml-5" loading="lazy"/>
                        </div>
                    </div>
                    </div>
                </main>

                <footer className="flex flex-col items-center justify-center w-full h-[450px] bg-black mt-[30px] lg:h-[500px]">
                    <p className="text-2xl text-white">UniloGo</p>
                    <div className="grid grid-cols-4 text-white gap-1 my-10 lg:gap-10">
                        <div className="flex flex-col items-center justify-start w-[80px] text-center gap-4 lg:w-[200px]">
                            <p className="text-xs font-semibold lg:text-xl">About Us</p>
                            <p className="text-xs font-extralight lg:text-base">Lorem</p>
                            <p className="text-xs font-extralight lg:text-base">Ipsum</p>
                            <p className="text-xs font-extralight lg:text-base">Sit Amet</p>
                            <p className="text-xs font-extralight lg:text-base">Consectetur</p>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[80px] text-center gap-4 lg:w-[200px]">
                            <p className="text-xs font-semibold lg:text-xl">Our Company</p>
                            <p className="text-xs font-extralight lg:text-base">Adipiscing</p>
                            <p className="text-xs font-extralight lg:text-base">Elit</p>
                            <p className="text-xs font-extralight lg:text-base">Dolot</p>
                            <p className="text-xs font-extralight lg:text-base">Sed</p>
                            <p className="text-xs font-extralight lg:text-base">Do</p>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[80px] text-center gap-4 lg:w-[200px]">
                            <p className="text-xs font-semibold lg:text-xl">FAQs</p>
                            <p className="text-xs font-extralight lg:text-base">Eiusmod</p>
                            <p className="text-xs font-extralight lg:text-base">tempor</p>
                            <p className="text-xs font-extralight lg:text-base">Incididunt</p>
                            <p className="text-xs font-extralight lg:text-base">Magna Aliqua</p>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[80px] text-center gap-4 lg:w-[200px]">
                            <p className="text-xs font-semibold lg:text-xl">How To Shop</p>
                            <p className="text-xs font-extralight lg:text-base">Ut</p>
                            <p className="text-xs font-extralight lg:text-base">Enim Ad Minim</p>
                            <p className="text-xs font-extralight lg:text-base">Veniam</p>
                            <p className="text-xs font-extralight lg:text-base">Quis</p>
                            <p className="text-xs font-extralight lg:text-base">Nostrud</p>
                            <p className="text-xs font-extralight lg:text-base">Exercitation</p>
                        </div>
                    </div>

                    <p className="text-xs text-center text-gray-500 lg:text-base">@Copyright UniLoGo company 2025. IDN. All right reserved. Terms of Service | Privacy Police</p>
                    <p className="text-xs text-center text-gray-500 lg:text-base">UniLoGo | (+62) 123456 | TTY 12345</p>
                </footer>
            </div>
        </>
    )
}