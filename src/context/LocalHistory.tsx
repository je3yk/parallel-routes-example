'use client'

import { createContext, useContext, useEffect, useState } from "react"


type HistoryItems = Record<string, number>

type LocalHistoryContextProps = {
    history: HistoryItems | null
    pushHistoryItem: (item: string, value: number) => void
}

const localHistoryContext = createContext<LocalHistoryContextProps | null>(null)

export const LocalHistoryProvider = ({ children }: {children: React.ReactNode}) => {
    const [history, setHistory] = useState<HistoryItems | null>(null)


    useEffect(() => {
        try {
            const history = localStorage.getItem('history')
            const parsedHistory = history ? JSON.parse(history) as HistoryItems : null
            setHistory(parsedHistory)
        } catch (e) {
            console.error('fetch-history-err', e)
        }
    }, [])


    const pushHistoryItem = (item: string, value: number) => {
        try {
            const prevHistory = localStorage.getItem('history')
            const parsedPrevHistory = prevHistory ? JSON.parse(prevHistory) : {}
            
            if (parsedPrevHistory && !parsedPrevHistory[item]) {
                localStorage.setItem('history', JSON.stringify({[item]: value, ...parsedPrevHistory}))
                setHistory({[item]: value, ...parsedPrevHistory})
            }

        } catch (e) {
            console.error('push-history-item-error', e)
        }
    }

    return (
        <localHistoryContext.Provider value={{ history, pushHistoryItem }}>
            {children}
        </localHistoryContext.Provider>
    )
}

export const useLocalHistory = () => {
    const context = useContext(localHistoryContext)
    if (!context) {
        throw new Error('useLocalHistory must be used within a LocalHistoryProvider')
    }
    return context
}