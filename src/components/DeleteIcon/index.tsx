import React from 'react';

import {
    View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

type Props = {
    background: string;
    borderRadius?: number;
    width?: number;
    height?: number;
}

export function DeleteIcon({
    background,
    borderRadius,
    width,
    height }: Props) {
    return (
        <View style={[styles.deleteIcon, {
            backgroundColor: background,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            width: width,
            height: height,
        }]} >
            <FontAwesome
                name="trash-o"
                size={24}
                color="black"
            />
        </View>
    );
}