import React, { Component } from "react";

import { View } from "react-native";
import { Title } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Speakers extends Component {
  static navigationOptions = {
    title: "Inscrição",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="receipt" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Title
          style={{
            fontSize: 30,
            width: 300,
            lineHeight: 36,
            textAlign: "center"
          }}
        >
          Inscrições a partir de 04 de Abril
        </Title>
      </View>
    );
  }
}
