import { Card } from "flowbite-react"

const Community = () => {
    return (
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Sturan Network Community</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <Card href="/" className="w-full" target="_blank">
                    <h5 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Social media community
                    </h5>
                    <p className="font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                        Join the social media community
                    </p>
                </Card>
                <Card href="/" className="w-full" target="_blank">
                    <h5 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Join social media community by your country
                    </h5>
                    <p className="font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                        Pick your country
                    </p>
                </Card>
                <Card href="/" className="w-full" target="_blank">
                    <h5 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Build community in your country
                    </h5>
                    <p className="font-normal text-sm sm:text-base text-gray-700 dark:text-gray-400">
                        If your country doesn't have a community, build one with us
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default Community