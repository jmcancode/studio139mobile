import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Maps() {
  return (
    <View style={styles.container}>
      <MapView
        mapType={"standard"}
        followsUserLocation={true}
        showsUserLocation={true}
        style={styles.map}
        zoomEnabled={true}
        pitchEnabled={true}
        initialRegion={{
          latitude: 29.4241,
          longitude: -98.4936,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
        toolbarEnabled={true}
        showsCompass={true}
      >
        <Marker
          draggable
          coordinate={{ latitude: 29.470761, longitude: -98.493257 }}
          // onDragEnd{(e) => ({x: e.nativeEvent.coordinate})}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
