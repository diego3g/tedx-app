import React, { Component } from "react";

import { View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class Videos extends Component {
  static navigationOptions = {
    title: "Vídeos",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="movie" size={24} color={tintColor} />
    )
  };

  render() {
    return <View style={{ flex: 1, backgroundColor: "#0d0d0d" }} />;
  }
}
