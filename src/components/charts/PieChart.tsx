import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface PieChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, width = 300, height = 300 }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data.length) return;

    const radius = Math.min(width, height) / 2;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // clear previous render

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie<{ label: string; value: number }>().value(d => d.value);
    const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = g.selectAll('arc').data(pie(data)).enter().append('g');

    arcs.append('path')
      .attr('d', arc as any)
      .attr('fill', (_, i) => color(String(i)));

    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text(d => d.data.label);

  }, [data, width, height]);

  return <svg ref={ref}></svg>;
};

export default PieChart;