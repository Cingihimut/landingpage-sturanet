import { Carousel } from "flowbite-react"
import Image from "next/image"

const AddWallet = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8">
            <div className="mb-8 md:mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4">Getting Started</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                    With <span className="text-color-primary">Sturan Network</span>
                </h1>
                <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
                    <button className="px-4 sm:px-6 py-2 sm:py-3 bg-color-primary rounded-full text-color-white font-bold text-sm sm:text-base">
                        Choose Wallet
                    </button>
                </div>
            </div>
            <div className="h-64 sm:h-80 md:h-96 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
                <Carousel>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <Image 
                            key={num}
                            width={300}
                            height={100}
                            src={`https://flowbite.com/docs/images/carousel/carousel-${num}.svg`}
                            alt={`Carousel image ${num}`}
                            className="w-full h-full object-cover"
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default AddWallet;