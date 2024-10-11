"use client"
import { Article, Barricade, House, ShieldStar, Timer, UserCircleMinus } from "@phosphor-icons/react"
import { Card } from "flowbite-react"

const Benefits = () => {
    return (
        <div className="min-h-screen p-8 md:p-16">
            <h1 className="mb-10 text-2xl md:text-3xl font-bold text-center">Why Choose Sturan Network</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="max-w-sm">
                    <div className="bg-color-red w-8 rounded-full">
                        <Barricade size={32} />
                    </div>
                    <h5 className="mb-5 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Without regional restrictions
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Regional boundaries affect the use of currency.
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className="bg-color-sky w-8 rounded-full -mt-4">
                        <Timer size={32} />
                    </div>
                    <h5 className="mb-5 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Efficient
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        No need to exchange your money to a money changer or money exchange service.
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className="bg-yellow-500 w-8 rounded-full">
                        <House size={32} />
                    </div>
                    <h5 className="mb-5 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Help directly from home
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        You can help from the comfort of your home without having to go to the campaign site.
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className="bg-blue-500 w-8 rounded-full">
                        <Article size={32}/>
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Transparent
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Blockchain provides guaranteed transparency and we will provide audits of the campaigns that have taken place.
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className="bg-green-400 w-8 rounded-full">
                        <UserCircleMinus size={32} />
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Without third party
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Third parties are not necessarily trusted, as they can take your money anytime and from anywhere.
                    </p>
                </Card>
                <Card className="max-w-sm">
                    <div className="bg-color-purple w-8 rounded-full -mt-5">
                        <ShieldStar size={32} />
                    </div>
                    <h5 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Guaranteed trust
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        The audit results we provide to you make you feel secure.
                    </p>
                </Card>
            </div>
        </div>
    )
}

export default Benefits
