"use client"

import { useEffect, useState } from "react";
import LoadingAnimation from "@/component/loading";
import { rootState } from "@/store";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function LayoutDashboard({ children }: {children: React.ReactNode}) {
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();
    const pathname = usePathname();


    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timeout);
    }, [pathname, dispatch]);

    return (
        <div className="relative w-full">
            <LoadingAnimation show={loading} opacity={"opacity-50"}/>

            {children}
        </div>
    )
}