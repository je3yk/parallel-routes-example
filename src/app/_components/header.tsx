import { ModeToggle } from "@/components/mode-switch";
import { SearchInput } from "../../compositions/search-input";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b-black dark:border-b-white border-b-2 text-black dark:text-white w-full">
            <Link href="/">
                <h1 className="text-xl font-bold">Photos</h1>
            </Link>
            <SearchInput />
            <ModeToggle />
        </header>
    );
}