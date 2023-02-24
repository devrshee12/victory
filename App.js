import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

import {
  VictoryChart,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from "victory-native";
import DropdownComponents from "./DropdownComponent";

const App = () => {
  const [zoomDomain, setZoomDomain] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleZoom = (domain) => {
    setZoomDomain(domain);
  };
  const data1 = [
    { x: new Date(1982, 1, 1), y: 125, l: "hello" },
    { x: new Date(1987, 1, 1), y: 257, l: "hello" },
    { x: new Date(1993, 1, 1), y: 345, l: "hello" },
    { x: new Date(1997, 1, 1), y: 515, l: "hello" },
    { x: new Date(2001, 1, 1), y: 132, l: "hello" },
    { x: new Date(2005, 1, 1), y: 305, l: "hello" },
    { x: new Date(2011, 1, 1), y: 270, l: "hello" },
    { x: new Date(2015, 1, 1), y: 470, l: "hello" },
  ];

  const handleBrush = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <View style={styles.container}>
      <DropdownComponents></DropdownComponents>
      <VictoryChart
        width={375}
        height={250}
        scale={{ x: "time", y: "linear" }}
        containerComponent={
          <VictoryZoomContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "rgb(132,194,37)" },
          }}
          data={data1}
        />
        <VictoryArea
          data={data1}
          style={{
            data: {
              fill: "rgb(132,194,37)",
              fillOpacity: 0.4,
              stroke: "rgb(132,194,37)",
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: "white" },
            tickLabels: { fill: "white" },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "white" },
            tickLabels: { fill: "white" },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474545",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
