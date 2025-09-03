import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface StackedBarChartProps {
  data: any[]; // Array of objects
  keys: string[]; // Fields to stack
  xField: string; // Field for x-axis
  width?: number;
  height?: number;
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  keys,
  xField,
  width = 600,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d[xField]))
      .range([0, innerWidth])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, d => keys.reduce((sum, key) => sum + d[key], 0)) || 0,
      ])
      .nice()
      .range([innerHeight, 0]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10).domain(keys);

    const stackedData = d3.stack().keys(keys)(data as any);

    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Draw bars
    chart
      .selectAll("g.layer")
      .data(stackedData)
      .join("g")
      .attr("class", "layer")
      .attr("fill", d => colorScale(d.key) as string)
      .selectAll("rect")
      .data(d => d)
      .join("rect")
      .attr("x", d => xScale(d.data[xField]) || 0)
      .attr("y", d => yScale(d[1]))
      .attr("height", d => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth());

    // X Axis
    chart
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-40)")
      .style("text-anchor", "end");

    // Y Axis
    chart.append("g").call(d3.axisLeft(yScale));

    // Legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${width - margin.right - 120}, ${margin.top})`);

    keys.forEach((key, i) => {
      const g = legend.append("g").attr("transform", `translate(0, ${i * 20})`);
      g.append("rect").attr("width", 15).attr("height", 15).attr("fill", colorScale(key) as string);
      g.append("text").attr("x", 20).attr("y", 12).text(key);
    });
  }, [data, keys, xField, width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default StackedBarChart;
