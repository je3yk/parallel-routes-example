import { Skeleton } from "@/components/ui/skeleton";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export default function PhotoPageLoading() {
    return (
        <div className="flex flex-col items-start justify-start w-[50%] h-full p-2 gap-2 mx-auto text-black dark:text-white">
            <div className="w-full h-[75%]">
                <Skeleton className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-1">
                <div className="w-full flex items-center justify-center text-gray-600 dark:text-gray-400">
                    <Skeleton className="w-full h-8" />
                </div>
                <div className="w-full flex justify-between items-start">
                    <div className="flex items-center justify-start gap-2">
                        <Skeleton className="w-10 h-10 rounded-[50%]" />
                        <div className="flex flex-col justify-start gap-1">
                            <Skeleton className="w-24 h-6" />
                            <Skeleton className="w-16 h-4" />
                        </div>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <HeartFilledIcon color='red'/>
                        <Skeleton className="w-16 h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}