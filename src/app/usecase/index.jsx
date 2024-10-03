import { Banner, BannerCollapseButton } from "flowbite-react";
import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { HiArrowRight, HiX } from "react-icons/hi";

const UseCase = () => {
    return (
        <div className="p-16 h-[700px]">
            <h1 className="text-2xl font-bold mb-6">Designed for real world issue.</h1>
            <div>
                <div class="grid gap-4">
                    <div className="flex justify-center">
                        <Image width="600" height="300" class="h-auto max-w-full rounded-lg" src="https://cdn1-production-images-kly.akamaized.net/MGCqmKxbIyPhH3WHcPJotJyyvRE=/0x455:5281x3431/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4249793/original/054194300_1670217653-sadiq-nafee-nrnd1-fTsdQ-unsplash.jpg" alt=""/>
                    </div>
                    <div class="grid grid-cols-3 gap-4 items-center">
                        <div>
                            <Image width="300" height="200" class="h-auto max-w-full rounded-lg" src="https://awsimages.detik.net.id/community/media/visual/2024/06/07/sudan-perang-saudara-mendekati-level-genosida.jpeg?w=600&q=90" alt=""/>
                        </div>
                        <div>
                            <Image width="300" height="200" class="h-auto max-w-full rounded-lg" src="https://cdns.klimg.com/merdeka.com/i/w/news/2013/03/22/166973/540x270/tahun-2025-40-juta-anak-afrika-terancam-kelaparan.jpg" alt=""/>
                        </div>
                        <div>
                            <Image width="300" height="200" class="h-auto max-w-full rounded-lg" src="https://uinsgd.ac.id/wp-content/uploads/2023/10/palestin1.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseCase