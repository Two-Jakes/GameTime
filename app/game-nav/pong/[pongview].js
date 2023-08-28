import React from 'react'
import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView } from 'react-native'
import { COLORS, icons } from "../../../constants";
import { ScreenHeaderBtn, Pong } from "../../../components/components";

const PongView = () => {
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
                <Text> This is Pong </Text>
            </View>
        </SafeAreaView>
    )
}

export default PongView