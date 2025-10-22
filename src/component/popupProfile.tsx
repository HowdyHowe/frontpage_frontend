import { useEffect } from "react";
import { LuLogOut } from "react-icons/lu"

type DashboardLogoutPopupProps = {
    show            : boolean;
    onCloseClick    : () => void;
    onAccoutClick   : () => void;
    onLogoutClick   : () => void;
}

export default function DashboardProfilePopup({ show, onCloseClick, onAccoutClick, onLogoutClick }: DashboardLogoutPopupProps) {

    useEffect(() => {
        if (show) document.body.style.overflow = "hidden"
        if (!show) document.body.style.overflow = ""
    }, [show])

    if (!show) return null

    return (
        <div className="fixed flex items-center justify-center w-full h-screen z-20">
            <div className="fixed top-0 w-full h-full bg-black opacity-50" onClick={onCloseClick}/>

            <div className="absolute top-[75px] right-[15%] grid grid-rows-2 w-[250px] h-[100px] bg-white rounded-sm">
                <div className="flex items-center justify-start px-4 border-b cursor-pointer" onClick={onAccoutClick}>
                    My Account
                </div>
                <div className="flex items-center justify-start px-4 text-red-600 cursor-pointer" onClick={onLogoutClick}>
                    <LuLogOut className="mr-3"/>
                    <p>Logout</p>
                </div>
            </div>

        </div>
    )
}