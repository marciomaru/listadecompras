import React from "react";

import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from "./auth.routes";
import { ListDetails } from "../screens/ListDetails";
import { Lists } from "../screens/Lists";

export function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    );
}