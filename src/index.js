import React, { Component } from "react";
import { Provider as PaperProvider, Appbar } from "react-native-paper";
import CodePush from "react-native-code-push";
import OneSignal from "react-native-onesignal";

import { View, Image } from "react-native";

import "./config/StatusBarConfig";

import Routes from "./routes";
import theme from "./styles/theme";

import logo from "./assets/logo.png";

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init("d097a7a7-7eae-49ff-a607-79729039dff9");

    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  render() {
    return (
      <PaperProvider theme={theme}>
        <Appbar.Header style={{ justifyContent: "center" }}>
          <Image source={logo} />
        </Appbar.Header>

        <Routes />
      </PaperProvider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
