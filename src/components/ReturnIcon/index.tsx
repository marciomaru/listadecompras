import React from 'react';

import {
    View
} from 'react-native';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

type Props = {
    background: string;
}

export function ReturnIcon({ background }: Props) {
    return (
        <BorderlessButton style={[styles.returnIcon, { backgroundColor: background }]}>
            <AntDesign
                name="left"
                size={24}
                color="black"
            />
        </BorderlessButton>
    );
}