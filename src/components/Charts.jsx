import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      {coinData.map((coin) => (
        <div
          className="items-center flex flex-col justify-center mb-16 last:mb-0"
          key={coin.name}
        >
          <h2 className="ml-2 text-left text-3xl">{coin.name}</h2>
          <h4 className="mb-3 text-2xl">{coin.symbol}</h4>
          <div className="w-12">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};

export default Charts;
