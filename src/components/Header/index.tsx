import React from 'react';

import {
    Text,
    View
} from 'react-native';

import { styles } from './styles';

type Props = {
    title: string;
    background: string;
}

export function Header({ title, background }: Props) {
    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}