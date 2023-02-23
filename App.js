import React, { useState } from "react";
import { View, StyleSheet} from "react-native";

import { VictoryChart, VictoryLine, VictoryAxis,VictoryTooltip,VictoryVoronoiContainer, VictoryZoomContainer, VictoryBrushContainer } from "victory-native";


const App = () => {
  const [zoomDomain, setZoomDomain] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleZoom = (domain) => {
    setZoomDomain(domain);
  };

  const handleBrush = (domain) => {
    setSelectedDomain(domain);
  };
  

  return (
    <View style={styles.container}>
      <VictoryChart
        width={375}
        height={250}
        scale={{x: "time",  y: "linear"}}
        containerComponent={
          
          <VictoryZoomContainer responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
            />
         
        }
      >
        <VictoryLine
        
          style={{
            data: {stroke: "green"}
          }}
          data={[
            {x: new Date(1982, 1, 1), y: 125 , l:"hello"},
            {x: new Date(1987, 1, 1), y: 257 , l:"hello"},
            {x: new Date(1993, 1, 1), y: 345 , l:"hello"},
            {x: new Date(1997, 1, 1), y: 515 , l:"hello"},
            {x: new Date(2001, 1, 1), y: 132 , l:"hello"},
            {x: new Date(2005, 1, 1), y: 305 , l:"hello"},
            {x: new Date(2011, 1, 1), y: 270 , l:"hello"},
            {x: new Date(2015, 1, 1), y: 470 , l:"hello"}
          ]}
        />
      </VictoryChart>

      
  </View>
  )

}



export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',

    

    
  },
});