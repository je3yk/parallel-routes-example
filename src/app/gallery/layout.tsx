export default function GalleryLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex items-start w-[50%] h-full p-2 gap-2 mx-auto">
            <div className="h-[50%] w-full flex flex-col items-center justify-center relative">
                {children}
            </div>
        </div>
    )
}