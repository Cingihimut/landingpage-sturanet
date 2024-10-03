import { Card } from "flowbite-react"

const Community = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center p-16">
                <h1 className="text-2xl font-bold">Sturan Network Community</h1>
            </div>
            <div className="grid grid-cols-3 ml-5">
                <Card href="/" className="max-w-sm" target="_blank">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Social media community
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Join the social media community
                    </p>
                </Card>
                <Card href="/" className="max-w-sm" target="_blank">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Join social media community by your country
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        pick your country
                    </p>
                </Card>
                <Card href="/" className="max-w-sm" target="_blank">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Build community in your country
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        if your country doesn't have a community, build one with us
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default Community