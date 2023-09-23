function BounceLoader() {
    return (
        <span className="mt-10 w-full flex justify-center items-center">
            <span className="mx-1 animate-bounce ease-in-out relative flex h-5 w-5 border-solid rounded-full bg-blue-400"></span>
            <span className="mx-1 animate-bounce animation-delay-100 ease-in-out relative flex h-5 w-5 border-solid rounded-full bg-blue-400"></span>
            <span className="mx-1 animate-bounce animation-delay-200 ease-in-out relative flex h-5 w-5 border-solid rounded-full bg-blue-400"></span>
        </span>
    )
}

export default BounceLoader;