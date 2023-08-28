import React from 'react'
import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView } from 'react-native'
import { COLORS, icons } from "../../../constants";
import { ScreenHeaderBtn, Snake } from "../../../components/components";

const SnakeView = () => {
const navigate = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.secondary },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => navigate.back()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
                    ),
                    headerTitle: "",
                }}
            />
            <View>
                <Text> This is Snake </Text>
            </View>
        </SafeAreaView>
    )
}

export default SnakeView