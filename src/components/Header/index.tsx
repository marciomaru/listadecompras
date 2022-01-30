import React, { ReactNode } from 'react';

import {
    Pressable,
    Text,
    View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { DeleteIcon } from '../DeleteIcon';
import { EditIcon } from '../EditIcon';
import { ReturnIcon } from '../ReturnIcon';

import { styles } from './styles';

type Props = {
    title: string;
    background: string;
    actionReturn?: boolean;
    actionIcons?: boolean;
}

export function Header({
    title,
    background,
    actionReturn,
    actionIcons, }: Props) {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>

            {
                actionReturn &&
                <ReturnIcon />

            }

            <Text style={styles.title} >
                {title}
            </Text>

        </View>
    );
}