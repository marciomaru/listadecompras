import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { Primeira } from "../screens/Primeira";
import { Lists } from "../screens/Lists";
import { ListDetails } from "../screens/ListDetails";


export type RootStackParamList = {
    Lists: undefined;
    Primeira: undefined;
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
                name="Primeira"
                component={Primeira}
            />
            <Screen
                name="ListDetails"
                component={ListDetails}
            />
        </Navigator>
    );

}