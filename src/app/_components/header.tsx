import { ModeToggle } from "@/components/mode-switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchInput } from "../../compositions/search-input";

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b-black dark:border-b-white border-b-2 text-black dark:text-white w-full">
            <Link href="/">
                <h1 className="text-xl font-bold">Photos</h1>
            </Link>
            <SearchInput />
            <div className="flex items-center justify-end gap-2">
                <Button variant="outline" asChild>
                    <Link href="/gallery">Gallery</Link>
                </Button>
                <ModeToggle />
                <Button variant="outline" asChild>
                    <Link href="https://github.com/je3yk/parallel-routes-example">GitHub</Link>
                </Button>
            </div>
        </header>
    );
}