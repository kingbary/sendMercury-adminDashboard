import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "metric-chart",
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "butt",
          colors: "#219653",
          width: 1.5,
          dashArray: 0,
        },
        yaxis: {
          axisBorder: {
            show: true,
            color: "#000",
            offsetX: 0,
            offsetY: 0,
          },
        },
        xaxis: {
          categories: this.props.categories || [],
          axisBorder: {
            show: true,
            color: "#000",
          },
        },
      },
      series: this.props.series || [],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="450"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
