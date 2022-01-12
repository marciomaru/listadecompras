import React from 'react';

import {
    View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    background: string;
}

export function DeleteIcon({ background }: Props) {
    return (
        <View style={[styles.deleteIcon, { backgroundColor: background }]} >
            <FontAwesome
                name="trash-o"
                size={24}
                color="black"
            />
        </View>
    );
}