import React from "react";
import "../CSS/Charts.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "../../../hooks/store";

const Charts = ({ aspect }) => {
  const { users, blogs, projects } = useAppSelector((state) => state.data);

  const data = [
    {
      name: "Juillet",
      vu: 7,
      projet: 5,
      utilisateurs: 2,
    },
    {
      name: "Août",
      vu: 10,
      projet: 5,
      utilisateurs: 3,
    },
    {
      name: "Septembre",
      vu: 10,
      projet: 5,
      utilisateurs: 5,
    },
    {
      name: "Octobre",
      vu: 10,
      projet: 5,
      utilisateurs: 5,
    },
    {
      name: "Novembre",
      vu: 10,
      projet: 5,
      utilisateurs: 8,
    },
    {
      name: "Décembre",
      vu: 5,
      projet: 5 + projects.length,
      utilisateurs: 10 + users.length,
    },
  ];

  return (
    <div className="chart">
      <div className="title"></div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={600}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000666" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="vu"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="projet"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="utilisateurs"
            stroke="#000"
            fillOpacity={1}
            fill="url(#colorUt)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
