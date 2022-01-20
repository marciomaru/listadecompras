import React, { ReactNode } from 'react';

import {
    Pressable,
    Text,
    View
} from 'react-native';
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

            <Text style={styles.title}>
                {title}
            </Text>

            {
                actionIcons &&
                <View style={styles.actionIcons}>
                    <EditIcon />
                    <DeleteIcon
                        background={background}
                    />
                </View>
            }

        </View>
    );
}