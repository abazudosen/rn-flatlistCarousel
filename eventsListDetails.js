import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const DURATION = 400;
const fadeInBottom = {
  0: {
    opacity: 0,
    tranlateY: 100,
  },
  1: {
    opacity: 1,
    tranlateY: 0,
  },
};

const { width } = Dimensions.get("screen");

export default function eventsListDetails({ navigation, route }) {
  const { item } = route.params;
  const OVERFLOW_HEIGHT = 70;
  const SPACING = 10;
  const ITEM_WIDTH = width * 0.76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
  const DELAY = 400
  const height = 900;

  return (
    <View style={{ flex: 1 }}>
      <SharedElement
        id={`item.${item.key}.image`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <Image
          source={{ uri: item.poster }}
          style={[StyleSheet.absoluteFillObject]}
        />
      </SharedElement>
      <Animatable.View
        duration={DURATION * 1.5}
        delay={DELAY}
        animation='fadeIn'
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: 'rgba(0,0,0,0.3)'},
        ]}
      />
      <AntDesign
        name="close"
        size={28}
        style={{
          padding: SPACING,
          position: "absolute",
          top: SPACING,
          right: SPACING,
          zIndex: 2,
        }}
        color={"#fff"}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SharedElement
        id="general.bg"
        style={[
          StyleSheet.absoluteFillObject,
          {
            transform: [{ translateY: height }],
          },
        ]}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: "#fff",
              transform: [{ translateY: -height * 0.3 }],
              padding: SPACING * 2,
              borderRadius: 16,
            },
          ]}
        >
          <Animatable.Text
            animation={fadeInBottom}
            duration={DURATION}
            delay={DELAY + 200}
            style={{ fontWeight: "900", fontSize: 28 }}
          >
            {item.title}
          </Animatable.Text>
          <Animatable.Text
            animation={fadeInBottom}
            duration={DURATION}
            delay={DELAY + 350}
            style={{ fontWeight: "500", fontSize: 16 }}
          >
            {item.location}
          </Animatable.Text>
          <Animatable.Text
            animation={fadeInBottom}
            duration={DURATION}
            delay={DELAY + 500}
            style={{ fontSize: 12 }}
          >
            {item.date}
          </Animatable.Text>
        </View>
      </SharedElement>
    </View>
  );
}
