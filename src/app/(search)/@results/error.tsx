'use client'

import { Button } from "@/components/ui/button";

export default function ResultsError({error, reset}: {error: Error & {digest?: string}, reset: () => void}) {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Error</h1>
                <p className="text-lg">{error.message}</p>
                <p className="text-sm text-gray-500">{error.digest}</p>
                <Button onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}