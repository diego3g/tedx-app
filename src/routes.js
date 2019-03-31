import { createAppContainer } from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Main from "./pages/Main";
import Speakers from "./pages/Speakers";
import Subscription from "./pages/Subscription";
import Videos from "./pages/Videos";

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Main,
      Speakers,
      Subscription
      // Videos
    },
    {
      activeTintColor: "#fff"
    }
  )
);

export default Routes;
