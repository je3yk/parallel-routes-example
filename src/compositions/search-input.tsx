 'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function SearchInput() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    const [search, setSearch] = useState(searchParams.get('q') ?? '')
    const router = useRouter()

    useEffect(() => {
        if (query && query !== search) {
            setSearch(query)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.replace(`/?q=${search}`)
    }

    return (
        <form onSubmit={onSubmit} className="flex gap-0 justify-center items-center w-[30%]">
            <Input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
            <Button className="flex gap-2 items-center" type="submit" onClick={onSubmit}>
                <MagnifyingGlassIcon className="w-6 h-6" />
                Search
            </Button>
        </form>
    )
    
}