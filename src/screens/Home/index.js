import React from "react";
import { View, SafeAreaView } from "react-native";
import Title from '../../components/Title'

const Home = () => {
    return (
        <SafeAreaView>
            <View>
                <Title text="My first component"></Title>
            </View>
        </SafeAreaView>
    )
}

export default Home;