import React from "react";
import { Helmet } from "react-helmet-async";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// Sample data representing product prices
const data = [
  {
    name: "Mobile Phones",
    price: 800, // example price
  },
  {
    name: "Laptops",
    price: 1500, // example price
  },
  {
    name: "Watches",
    price: 300, // example price
  },
  {
    name: "Tablets",
    price: 600, // example price
  },
  {
    name: "Headphones",
    price: 200, // example price
  },
  {
    name: "Smart TVs",
    price: 1200, // example price
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistic = () => {
  return (
    <>
      <Helmet>
        <title>Statistic | Gadjet Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] text-white text-center space-y-3 py-10">
        <p className="md:text-4xl text-xl font-bold">Statistics</p>
        <p className="max-w-xl mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="py-5 container mx-auto">
        <p className="font-bold text-2xl py-5">Statistics</p>
        <div className="flex justify-center">
          <BarChart
            width={window.innerWidth < 300 ? window.innerWidth - 40 : 1200}
            height={ window.innerWidth < 300 ? window.innerWidth - 40 : 500}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar
              dataKey="price"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default  Statistic;
