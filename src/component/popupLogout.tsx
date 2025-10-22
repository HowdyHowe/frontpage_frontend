
import { useEffect } from "react"
import { rootState } from "@/store";
import { useSelector } from "react-redux";

type DashboardLogoutPopupProps = {
    show            : boolean;
    onCancelClick   : () => void;
    onLogoutClick   : () => void;
}

export default function DashboardLogoutPopup({ show, onCancelClick, onLogoutClick }: DashboardLogoutPopupProps) {
    const darkMode = useSelector((state: rootState) => state.stateData.darkMode);

    useEffect(() => {
        if (show) document.body.style.overflow = "hidden"
        if (!show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <>
            <div className="fixed flex items-center justify-center w-full h-screen z-40">
                <div className="fixed top-0 w-full h-full bg-black opacity-50"/>

                <div className={`absolute flex flex-col items-start justify-center w-[90%] h-[200px] px-6 rounded-md lg:w-[450px] ${ darkMode ? "bg-[#2c2c2c] text-white" : "bg-white text-black" }`}>

                    <p className="text-2xl font-semibold">Logout</p>
                    <p className="my-6">Are you sure want to logout?</p>
                    <div className="flex flex-row w-full items-center justify-end gap-2">
                        <div className="flex items-center justify-center w-[100px] h-[40px] border rounded-md cursor-pointer" onClick={onCancelClick}>Cancel</div>
                        <div className="flex items-center justify-center w-[100px] h-[40px] bg-[#2c2c2c] text-white border rounded-md cursor-pointer" onClick={onLogoutClick}>Logout</div>
                    </div>
                </div>

            </div>
        </>
    )
}