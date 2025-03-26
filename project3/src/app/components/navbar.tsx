import Image from 'next/image'
import ShareTeaLogo from "../assets/Sharetea.png";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 m-10 p-0 flex-none justify-between incline-flex flex items-center">
            <Image src={ShareTeaLogo} alt="Share Tea Logo" width={245} height={65} />
            <div className="flex-row gap-5 items-center flex mr-4 p-2 text-xl">
            <p>Home</p>
            <p>Menu</p>
            <p>Order</p>
            </div>
        </div>
)
}