import { Text, View } from "react-native";
import { StyleSheet, Platform } from "react-native";

/* Platform.select returns the object for the platform that is running the app.
   These properties can be spread into the style object for the component.
   Platform specifics can also be maintained in separate OS specific files.
   - To do this, make separate files ending with .android.js and .ios.js 
      (case sensitive)
 */
Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export const shadowStyles = StyleSheet.create({
  shadow: {
    shadowColor: "grey",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});

export const headerBox = StyleSheet.create({
  ...shadowStyles.shadow,
  width: 400,
  backgroundColor: "cyan",
  borderRadius: 5,
  color: "black",
  padding: 10,
  margin: 20,
});

export const centered = StyleSheet.create({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

export const baseShape = StyleSheet.create({
  backgroundColor: "dodgerblue",
  width: 100,
  height: 100,
  borderColor: "royalblue",
});

export const title = StyleSheet.create({
  ...shadowStyles.shadow,
  backgroundColor: "orange",
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
  padding: 10,
  marginTop: 55,
  textTransform: "capitalize",
  textAlign: "center",
  elevation: 10, // purpose: to make shadow work on android
});

export const simpleText = StyleSheet.create({
  marginTop: 20,
  color: "black",
  fontSize: 15,
  textAlign: "left",
});

export const ExampleSection = ({ label, children }) => {
  return (
    <View style={centered}>
      <View style={headerBox}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{label}</Text>
      </View>
      {children}
    </View>
  );
};

export const TextSection = ({ bgColor, textColor, align, font, textInput }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: 300,
        padding: 5,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 20,
          textAlign: align,
          fontWeight: "bold",
          fontFamily: Platform.OS === "android" ? "Roboto" : font,
        }}
      >
        {textInput}
      </Text>
    </View>
  );
};

export const IconExample = ({ description, children }) => {
  return (
    <View style={{ padding: 5, width: 405, ...shadowStyles.shadow }}>
      <Text
        style={{
          backgroundColor: "lightblue",
          paddingVertical: 5,
          paddingHorizontal: 20,
          color: "black",
          fontSize: 12,
          fontWeight: "bold",
          width: 400,
          marginTop: 15,
        }}
      >
        {description}
      </Text>
      <View
        style={{
          paddingVertical: 10,
          backgroundColor: "#222222",
          width: 400,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1,
        }}
      >
        {children}
      </View>
    </View>
  );
};
