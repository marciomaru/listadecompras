import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Lists } from "../screens/Lists";
import { ListDetails } from "../screens/ListDetails";


export type RootStackParamList = {
    Lists: undefined;
    ListDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {

    return (
        <Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Screen
                name="Lists"
                component={Lists}
            />
            <Screen
                name="ListDetails"
                component={ListDetails}
            />
        </Navigator>
    );

}