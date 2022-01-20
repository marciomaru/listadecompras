import React, { ReactNode } from 'react';

import {
    Pressable,
    Text,
    View
} from 'react-native';
import { ReturnIcon } from '../ReturnIcon';

import { styles } from './styles';

type Props = {
    title: string;
    background: string;
    actionReturn?: ReactNode
}

export function Header({ title, background, actionReturn }: Props) {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            {
                actionReturn &&
                <View>
                    {actionReturn}
                </View>
            }

            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}