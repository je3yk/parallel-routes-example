'use client'

import { useLocalHistory } from "@/context/LocalHistory"
import { useEffect } from "react"

export const HistoryClient = ({query, total}: {query?: string, total: number}) => {
    const {pushHistoryItem} = useLocalHistory()
    
    useEffect(() => {
        const pushItems = (item: string, value: number) => {
            pushHistoryItem(item, value)
        }
        
        if (query) {
            pushItems(query, total)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, total])

    return null
    
}