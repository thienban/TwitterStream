// global.d.ts
import React, {useState, useEffect} from "react";
import * as d3 from "d3";

interface ChartProps {
    width: number;
    height: number;
    chartId: string;
}
//{width= 800, height= 300, chartId= 'v1_chart'}
const LineChart: React.FC<{}> =
 () => {
    // const [data, setData] = useState<any[]>([])
    useEffect(() => {
        fetch(
            "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=10 &api_key=2ef335f932df860b33f5542437e3973d8b30ede2fda330a281a6e5650ae6dd90"
        )
        .then((res: any) => res.json())
        .then(
            res => drawLineChart(res.Data.Data)
            );
      }, []);

    const drawLineChart = (data: any[]) => {
        const canvasHeight = 600;
        const canvasWidth = 600;
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        var width = canvasWidth - margin.left - margin.right;
        var height = canvasWidth - margin.top - margin.bottom;
        // set the x,y
        const minX = d3.min(data.map(o=> o.time));
        const maxX = d3.max(data.map(o=> o.time));
        const minY = d3.min(data.map(o=> o.close));
        const maxY = d3.max(data.map(o=> o.close));

        let x = d3
            .scaleTime()
            .domain([minX, maxX])
            .rangeRound([0, width]);
        let y = d3
            .scaleLinear()
            .domain([minY, maxY])
            .rangeRound([height, 0]);

        // define the line
        const line = d3
            .line()
            .x((d: any) => x(d.time))
            .y((d: any) => y(d.close));
        const svgCanvas = d3.select('#canvas')
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)
            .style('border', '1px solid black')
        const g = svgCanvas.append("g")
            .attr("transform","translate(" + margin.left + "," + margin.top + ")");
            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .select(".domain")
                .remove();
            g.append("g")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Price ($)");
            g.append("path")
                .datum(data)
                .attr("fill", "none"
                ).attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);

    };
    return (
        <div id="canvas">
        </div>
    );
}

export default LineChart;
