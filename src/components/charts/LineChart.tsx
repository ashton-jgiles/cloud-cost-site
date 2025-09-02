import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface LineSeries<T> {
  yKey: keyof T;
  label: string;
  color?: string;
}

interface MultiLineChartProps<T> {
  data: T[];
  xKey: keyof T;
  series: LineSeries<T>[];
  width?: number;
  height?: number;
}

function LineChart<T>({
  data,
  xKey,
  series,
  width = 700,
  height = 350,
}: MultiLineChartProps<T>) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 100, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, d => new Date(d[xKey] as unknown as string)) as [Date, Date])
      .range([0, innerWidth]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(series, s => d3.max(data, d => Number(d[s.yKey]))!)!,
      ])
      .nice()
      .range([innerHeight, 0]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Axes
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    g.append('g').call(d3.axisLeft(y));

    // Draw each line
    series.forEach(s => {
      const line = d3
        .line<T>()
        .x(d => x(new Date(d[xKey] as unknown as string)))
        .y(d => y(Number(d[s.yKey])));

      g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', s.color || 'steelblue')
        .attr('stroke-width', 2)
        .attr('d', line);
    });

    // Optional: add a legend
    const legend = svg
      .append('g')
      .attr('transform', `translate(${width - margin.right + 10},${margin.top})`);

    series.forEach((s, i) => {
      const yOffset = i * 20;
      legend
        .append('rect')
        .attr('x', 0)
        .attr('y', yOffset)
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', s.color || 'steelblue');

      legend
        .append('text')
        .attr('x', 15)
        .attr('y', yOffset + 10)
        .text(s.label)
        .style('font-size', '12px');
    });
  }, [data, xKey, series, width, height]);

  return <svg ref={ref} width={width} height={height}></svg>;
}

export default LineChart;