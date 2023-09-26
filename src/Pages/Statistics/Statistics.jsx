import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { getFromLocalStorage } from "../../Utilities/CommonFuctions";

const COLORS = ["#FF444A", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const totalData = useLoaderData();
  const selectData = getFromLocalStorage("campaigns");

  const data = [
    { name: "Total Donation", value: totalData.length - selectData.length },
    { name: "Your Donation", value: selectData.length },
  ];
  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400} className="">
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
    </div>
  );
};

export default Statistics;
