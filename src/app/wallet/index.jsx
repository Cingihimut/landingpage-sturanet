import { Carousel } from "flowbite-react"
import Image from "next/image"

const AddWallet = () => {
    return (
        <div className="h-screen">
            <div className="ml-16 mt-6">
                <h1 className="text-7xl font-bold">Getting Started</h1>
                <h1 className="text-7xl font-semibold mt-4">With <span className="text-color-primary">Sturan Network</span></h1>
                <div className="flex justify-end mr-16 mt-4">
                    <button className="px-6 py-3 bg-color-primary rounded-full text-color-white font-bold">Choose Wallet</button>
                </div>
            </div>
            <div className="sm:h-64 xl:h-80 2xl:h-96 mr-20 ml-20 mt-8">
                    <Carousel>
                        <Image width="300" height="100" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <Image width="300" height="100" src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <Image width="300" height="100" src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <Image width="300" height="100" src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <Image width="300" height="100" src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </div>
        </div>
    )
}

export default AddWallet;
