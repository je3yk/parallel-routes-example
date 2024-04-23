import { Skeleton } from "@/components/ui/skeleton";

export default function SearchResultsLoading() {
    return <div className="grid grid-cols-4 gap-2 p-2 w-full">
        {Array(8).map((_, i) => (
            <Skeleton key={i} className="max-w-[500px] max-h-[500px]" />
        ))}
    </div>
}