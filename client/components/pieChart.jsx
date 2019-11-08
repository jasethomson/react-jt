import React from 'react';
import ReactSvgPieChart from 'react-svg-piechart'

function PieChart(props){

  const data = [
    { title: "Data 1", value: 100, color: "#22594e" },
    { title: "Data 2", value: 60, color: "#2f7d6d" },
    { title: "Data 3", value: 30, color: "#3da18d" },
    { title: "Data 4", value: 20, color: "#69c2b0" },
    { title: "Data 5", value: 10, color: "#a1d9ce" },
  ]

  return(
    <ReactSvgPieChart
      data={data}
      // If you need expand on hover (or touch) effect
      expandOnHover
      // If you need custom behavior when sector is hovered (or touched)
      onSectorHover={(d, i, e) => {
        if (d) {
          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
        } else {
          console.log("Mouse leave - Index:", i, "Event:", e)
        }
      }}
    />
  );
}

export default PieChart;
