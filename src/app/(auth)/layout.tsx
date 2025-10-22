"use client"

import LoadingAnimation from "@/component/loading";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function LayoutAuth({ children }: {children: React.ReactNode}) {
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
        <div className="relative flex items-center justify-center w-full h-screen bg-[#F3F4F6]">
            <LoadingAnimation show={loading} opacity={"opacity-50"}/>

            {children}
        </div>
    );
}