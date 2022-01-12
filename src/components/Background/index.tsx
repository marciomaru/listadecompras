import React, { ReactNode } from 'react';

import {
    View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    return (
        <LinearGradient
            style={styles.container}
            colors={['#98a7b6', '#98a7b6']}
        >
            {children}
        </LinearGradient>
    );
}