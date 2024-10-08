import { Card } from "flowbite-react"

const Legal = () => {
    return (
        <div className="min-h-screen mt-10 mb-5 sm:mt-12 md:mt-16 lg:mt-20 py-8 px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Problem to be solved with</h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 text-color-sky">Sturan <span className="text-color-primary">Network</span></h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    <Card href="https://example.com" className="w-full" target="_blank">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Dua Pelaku Penipuan Berkedok Donasi Palestina Ditangkap
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Petugas intelijen dan penindakan (Inteldak) menggiring dua WNA Pakistan yang diamankan dari hasil Operasi Jagratara saat rilis di Pendopo Kantor Imigrasi Kelas II Blitar
                        </p>
                    </Card>
                    <Card href="https://www.dicebreaker.com/companies/kickstarter/news/fifth-of-money-raised-by-kickstarter-projects-goes-to-scams-report-alleges" target="_blank" className="w-full">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Hampir seperlima dari uang yang dikumpulkan
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Penipuan diduga merajalela di Kickstarter, sebuah laporan baru mengklaim, dengan hampir seperlima dari pendapatan
                        </p>
                    </Card>
                    <Card href="https://www.voaindonesia.com/a/nasib-anak-anak-di-gaza-tewas-akibat-bom-atau-sekarat-karena-kelaparan-/7520645.html" target="_blank" className="w-full">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Nasib Anak-anak di Gaza: Tewas Akibat Bom atau Sekarat karena Kelaparan
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Di Gaza yang dikoyak perang, bom-bom Israel bukan satu-satuya yang menewaskan anak-anak.
                        </p>
                    </Card>
                    <Card href="https://www.cnnindonesia.com/nasional/20240904031216-20-1140684/bnpb-catat-1300-bencana-alam-di-indonesia-sepanjang-2024" target="_blank" className="w-full">
                        <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            BNPB Catat 1.300 Bencana Alam di Indonesia Sepanjang 2024
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Badan Nasional Penanggulangan Bencana (BNPB) mencatat 1.300 bencana alam terjadi sepanjang 2024 hingga 3 September 2024.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Legal;