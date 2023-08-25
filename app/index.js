import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome,
} from "../components/components";

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.secondary },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.logoPNG} dimension='100%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='70%' />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;