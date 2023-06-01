import { Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

import ScrollableContainer from "./scrollableContainer";
import {
  centered,
  title,
  ExampleSection,
  TextSection,
  baseShape,
  simpleText,
  IconExample,
} from "./stylingComponents";

export default function App() {
  return (
    <ScrollableContainer>
      <View style={centered}>
        <Text style={title}>Styling Views</Text>
        <ExampleSection label="1. Borders & Border Radius">
          <View
            style={{
              ...baseShape,
              borderWidth: 10,
              borderColor: "royalblue",
              borderRadius: 10,
              borderTopWidth: 20,
              borderTopLeftRadius: 50,
            }}
          />
        </ExampleSection>
        <ExampleSection label="2. Circle: use borderRadius 1/2 size of View">
          <View
            style={{
              ...baseShape,
              borderWidth: 5,
              borderColor: "royalblue",
              borderRadius: 50,
              borderTopLeftRadius: 50,
            }}
          />
        </ExampleSection>
        <ExampleSection label="3. Shadows for iOS">
          <View
            style={{
              ...baseShape,
              shadowColor: "grey",
              shadowOffset: {
                width: 10,
                height: 5,
              },
              // 0 = no shadow, 1 = full shadow
              shadowOpacity: 1,
              shadowRadius: 10,
            }}
          />
        </ExampleSection>
        <ExampleSection label="4. Shadows for Android (barely noticeable)">
          <View
            style={{
              ...baseShape,
              elevation: 20, // purpose: to make shadow work on android
            }}
          />
        </ExampleSection>
        <ExampleSection label="5. Padding on outer shape">
          <View
            style={{
              ...baseShape,
              padding: 10, // space between outer blue box and inner red box
              paddingHorizontal: 3, // overrides the horizontal padding of 10
            }}
          >
            <View
              style={{
                ...baseShape,
                backgroundColor: "red",
                width: 50,
                height: 50,
              }}
            />
          </View>
        </ExampleSection>
        <ExampleSection label="6. Margin on inner shape">
          <View
            style={{
              ...baseShape,
            }}
          >
            <View
              style={{
                ...baseShape,
                backgroundColor: "red",
                width: 50,
                height: 50,
                margin: 10, // space between outer blue box and inner red box
                marginHorizontal: 3, // overrides the horizontal margin of 10
              }}
            />
          </View>
        </ExampleSection>
        <ExampleSection label="7. Two shapes separated by 20px margin">
          <View
            style={{
              ...baseShape,
              marginBottom: 20,
            }}
          />
          <View
            style={{
              ...baseShape,
              backgroundColor: "red",
            }}
          />
        </ExampleSection>
        <Text style={title}>Styling Text</Text>

        {/* ios fonts: http://iosfonts.com/ */}
        <ExampleSection label="8. Text Align">
          <TextSection
            bgColor="cyan"
            textColor="black"
            align="left"
            font="Courier New"
            textInput="Left"
          />
          <TextSection
            bgColor="blue"
            textColor="white"
            align="center"
            font="AmericanTypewriter-Condensed"
            textInput="Center"
          />
          <TextSection
            bgColor="red"
            textColor="white"
            align="right"
            font="Bodoni 72"
            textInput="Right"
          />
        </ExampleSection>
        <ExampleSection label="9. Other text properties (no CSS inheritance)">
          <Text
            style={{
              paddingHorizontal: 10,
              color: "red",
              fontSize: 15,
              textAlign: "left",
              fontWeight: "bold",
              fontFamily: "Courier New",
              textTransform: "capitalize", // also: lowercase, uppercase
              textDecorationLine: "underline", // also: line-through, none
              fontStyle: "italic",
              letterSpacing: 5,
              lineHeight: 20,
            }}
          >
            This is some text. This is really great text. I love it. I want to
            keep it forever and ever. I am never letting it go!
          </Text>
          <Text style={simpleText}>
            In the above text, I have set: paddingHorizontal: 10, color: "red",
            fontSize: 15, textAlign: "left", fontWeight: "bold", fontFamily:
            "Courier New", textTransform: "capitalize", textDecorationLine:
            "underline", fontStyle: "italic", letterSpacing: 5, lineHeight: 20,
          </Text>
        </ExampleSection>
        <Text style={title}>Using Icons</Text>
        <Text style={simpleText}>
          https://oblador.github.io/react-native-vector-icons/{" "}
        </Text>
        <Text>import 'NameOfIconGroup' from "@expo/vector-icons";</Text>

        <IconExample description="<MaterialCommunityIcons name='email' size={42} color='deeppink' />">
          <MaterialCommunityIcons name="email" size={42} color="deeppink" />
        </IconExample>

        <IconExample description="<EvilIcons name='heart' size={42} color='cyan' />">
          <EvilIcons name="heart" size={42} color="cyan" />
        </IconExample>

        <IconExample description="<Feather name='aperture' size={42} color='yellow' />">
          <Feather name="aperture" size={42} color="yellow" />
        </IconExample>

        <IconExample description="<FontAwesome5 name='comment-dots' size={42} color='white' />">
          <FontAwesome5 name="comment-dots" size={42} color="white" />
        </IconExample>
      </View>
    </ScrollableContainer>
  );
}
