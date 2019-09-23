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
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        fetch(
            "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=10 &api_key=2ef335f932df860b33f5542437e3973d8b30ede2fda330a281a6e5650ae6dd90"
        )
        .then((res: any) => res.json())
        .then(res => setData(res.Data.Data));
    }, []);

    const drawLineChart = (data: any[]) => {
        const canvasHeight = 400;
        const canvasWidth = 600;

        // set the x,y
        const minX = d3.min(data.map(o=> o.time));
        const maxX = d3.max(data.map(o=> o.time));
        const minY = d3.min(data.map(o=> o.close));
        const maxY = d3.max(data.map(o=> o.close));

        let x = d3
            .scaleLinear()
            .domain([minX, maxX])
            .range([0, canvasWidth]);
        let y = d3
            .scaleLinear()
            .domain([minY, maxY])
            .range([canvasHeight, canvasHeight / 3]);

        // define the line
        const line = d3
            .line()
            .x((d: any) => x(d.time))
            .y((d: any) => y(d.close))

        const area = d3
            .area()
            .x((d: any) => x(d.time))
            .y0((d: any) => maxY)
            .y1((d: any) => y(d.close))
        var transform='translate(' + 50 + ',' + 5 + ')';
        return (
            <svg width={canvasWidth} height={canvasHeight}>
                <g transform={transform}>
                    <path>
                        d={line(data)}
                    </path>
                </g>
            </svg>
        );
    };
    const chart = data ? drawLineChart(data) : []
    return (
        <div id="canvas">
            {chart}
        </div>
    );
   
}

export default LineChart;
