import { Line } from "react-chartjs-2";

const PriceChart = ({ data }) => {
    const chartData = {
        labels: data.map(coin => coin.name),
        dataset: [
            {
                label: 'price',
                data: data.map(coin => coin.quote.USD.price),
                borderColor: 'rgba(75,192,192,1)',
                fill: false,
            }
        ]
    }
    return <Line data={chartData} />
}

export default PriceChart