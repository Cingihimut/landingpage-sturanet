import { Card } from "flowbite-react"

const Legal = () => {
    return (
        <div className="bg-color-gray bg-opacity-10 h-[800px]">
            <div className="p-16">
                <h1 className="text-5xl font-bold">Unlocking happiness with</h1>
                <h1 className="text-5xl font-bold mt-4 text-color-sky">Shared <span className="text-color-primary">Strength</span></h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 gap-10">
                    <Card href="https://visual.republika.co.id/berita/sd4734375/dua-pelaku-penipuan-berkedok-donasi-palestina-ditangkap" className="max-w-sm" target="_blank">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Dua Pelaku Penipuan Berkedok Donasi Palestina Ditangkap
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Petugas intelijen dan penindakan (Inteldak) mengawal dua WNA Pakistan yang diamankan dalam Operasi Jagratara
                        </p>
                    </Card>
                    <Card href="https://www.dicebreaker.com/companies/kickstarter/news/fifth-of-money-raised-by-kickstarter-projects-goes-to-scams-report-alleges" target="_blank" className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Hampir seperlima dari uang yang dikumpulkan
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Penipuan diduga merajalela di Kickstarter, sebuah laporan baru mengklaim, dengan hampir seperlima dari pendapatan
                        </p>
                    </Card>
                    <Card href="https://www.voaindonesia.com/a/nasib-anak-anak-di-gaza-tewas-akibat-bom-atau-sekarat-karena-kelaparan-/7520645.html" target="_blank" className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Nasib Anak-anak di Gaza: Tewas Akibat Bom atau Sekarat karena Kelaparan
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Di Gaza yang dikoyak perang, bom-bom Israel bukan satu-satuya yang menewaskan anak-anak.
                        </p>
                    </Card>            
                    <Card href="https://www.cnnindonesia.com/nasional/20240904031216-20-1140684/bnpb-catat-1300-bencana-alam-di-indonesia-sepanjang-2024" target="_blank" className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
