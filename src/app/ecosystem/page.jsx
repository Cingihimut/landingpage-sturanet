"use client"
import Image from "next/image";
import NavBar from "../components/NavBar";
import { useRef } from "react";

const Ecosystem = () => {
    const communityRef = useRef(null);
    const foundationRef = useRef(null);
    const useCaseRef = useRef(null);

    const scrollTo = (section) => {
        const ref = {
            'community': communityRef,
            'foundation': foundationRef,
            'useCase': useCaseRef
        }[section];

        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <NavBar scrollTo={scrollTo} />
            <div className="grid grid-cols-3 h-[300px] p-16 relative">
                <div className="col-span-2">
                    <h1 className="font-bold text-4xl">Get XTR</h1>
                    <p className="text-2xl">To grow up sturan network community, Choose the option most convenient for you.</p>
                </div>
                <div className="absolute right-0 mt-32 mr-16 transform -translate-y-1/2">
                    <Image src="/assets/XTR-Logo.png" width={200} height={200} alt="XTR Logo" />
                </div>
            </div>
            <div className="p-16">
                <h1 className="text-4xl font-bold">What is USX?</h1>
                <p className="text-2xl">USX (USD XTR) is a stablecoin used within the XTR platform to facilitate contributions to various crowdfunding campaigns. Pegged to the US dollar, USX ensures stability in value, allowing users to contribute with confidence, without worrying about the volatility often associated with cryptocurrencies.</p>
            </div>
            <div className="p-16">
                <h1 className="text-4xl font-bold">What is XTR?</h1>
                <p className="text-2xl">XTR is the native token of a decentralized crowdfunding platform that empowers users to actively participate in the decision-making process of campaign creation and management. XTR is used for voting on campaign proposals, giving the community a voice in what causes are launched. It also enables users to bridge between XTR tokens and USX, a stablecoin used for making contributions. The platform prioritizes transparency and equal representation, ensuring that each user's vote counts equally, regardless of the number of tokens they hold.</p>
            </div>
            <div className="p-16">
                <span className="text-4xl font-bold">User-Driven Campaign Suggestions</span>
                <p className="text-2xl">Got a great idea for a new campaign? XTR allows users to submit campaign proposals, and the entire community gets to weigh in. Other users can vote "yes" or "no" on whether a campaign should be launched to the public. Each proposal is community-approved, making the crowdfunding process more inclusive and democratic.</p>
            </div>
            <div className="p-16">
                <span className="text-4xl font-bold">Fair Voting System</span>
                <p className="text-2xl">Unlike other platforms, voting on XTR is not influenced by the number of tokens someone holds. It’s purely based on the number of users participating in the vote. Whether you have a small or large amount of XTR, your voice carries the same weight. This ensures that every proposal reflects the true sentiment of the community.</p>
            </div>
            <div className="p-16">
                <span className="text-4xl font-bold">Seamless Token Bridging</span>
                <p className="text-2xl">XTR offers a seamless bridge between our native XTR token and USX (USD XTR), a stablecoin designed for contributions. This makes it easy for users to move between holding tokens and actively supporting causes. Whether you're voting or contributing, the process is secure and efficient.</p>
            </div>
        </>
    )
}

export default Ecosystem