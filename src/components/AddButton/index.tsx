import React from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';


export function AddButton({ ...rest }: RectButtonProps) {
    return (
        <RectButton style={styles.button} {...rest}>
            <MaterialCommunityIcons
                name='plus'
                color='white'
                size={50}
            />
        </RectButton>
    );
}