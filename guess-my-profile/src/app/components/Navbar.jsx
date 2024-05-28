"use client"

const Navbar = () => {
    return (
    <nav className="fixed mx-auto border border-[#0f0c29] top-0 left-0 right-0 z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] bg-opacity-100">
        <div className="flex container lg:py-2 flex-wrap justify-center items-center mx-auto px-4 py-2">
                <span className="text-lg text-white">Guess your Age, Gender and Country with just a name!!</span>
        </div>
    </nav>
    )
}

export default Navbar;