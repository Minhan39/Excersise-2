import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import RootNavigation from "./src/navigations/RootNavigation";
import RootDrawer from "./src/navigations/RootDrawer";
import RootBottomTab from "./src/navigations/RootBottomTab";

export default function App() {
  return (
    <PaperProvider>
      <RootBottomTab />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
