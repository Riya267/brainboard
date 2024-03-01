import Image from "next/image";


export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image 
                src='./brainboardlogo.svg'
                alt='logo'
                width={120}
                height={100}
                className="animate-pulse duration-700"
            />
        </div>
    )
}