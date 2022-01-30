import React from 'react';

import {
    View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

type Props = {
    background?: string;
    borderRadius?: number;
    width?: number;
    height?: number;
    id: number;
    handleDelete: Function
}

export function DeleteIcon({
    width,
    height,
    borderRadius,
    id,
    handleDelete }: Props) {
    return (
        <BorderlessButton
            style={{
                width: width,
                height: height,
                borderTopEndRadius: borderRadius,
                borderBottomEndRadius: borderRadius
            }}
        >
            <FontAwesome
                name="trash-o"
                size={24}
                color="black"
                onPress={() => handleDelete(id)}
            />
        </BorderlessButton>
    );
}