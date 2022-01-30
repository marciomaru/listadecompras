import React from 'react';

import {
    View
} from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/auth.routes';
import { useNavigation } from '@react-navigation/native';

type returnScreen = StackNavigationProp<RootStackParamList>


export function ReturnIcon() {
    const navigation = useNavigation<returnScreen>()

    function handleReturnScreen() {
        navigation.goBack()
    }

    return (
        <BorderlessButton
            //style={styles.returnIcon}
            onPress={handleReturnScreen}
        >
            <AntDesign
                name="left"
                size={24}
                color="black"

            />
        </BorderlessButton>
    );
}