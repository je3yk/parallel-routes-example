import { LocalHistoryProvider } from "@/context/LocalHistory";
import { Suspense } from "react";

export default function SearchLayout({results, history}: {results: React.ReactNode, history: React.ReactNode}) {
    return  (
        <LocalHistoryProvider>
            <div className="flex w-full h-full min-h-0">
                <div className="w-[70%] h-full flex-1 overflow-y-auto">
                    <Suspense>
                        {results}
                    </Suspense>
                </div>
                <div className="w-[30%] h-full overflow-y-auto">
                    {history}
                </div>
            </div>
        </LocalHistoryProvider>
    )
}