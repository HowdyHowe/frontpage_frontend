"use client"

import LoadingAnimation from "@/component/loading";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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