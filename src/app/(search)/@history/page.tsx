'use client'

import { useLocalHistory } from "@/context/LocalHistory"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function SearchHistory({searchParams}: {searchParams: { q?: string}}) {
    const {history} = useLocalHistory() 

    if (!history) return null

    return <div className="flex flex-col items-center justify-center">
        {
            Object.keys(history).map((key) => (
                <Link key={key} href={`?q=${key}`} className={cn(
                    "flex items-center justify-between w-full h-[40px] px-5 py-2",
                    key === searchParams.q
                        ? "dark:bg-white dark:text-black bg-black text-white"
                        : "hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                )}>
                    <p>{key}</p>
                    <p>{history[key]}</p>
                </Link>
            ))
        }
    </div>
}