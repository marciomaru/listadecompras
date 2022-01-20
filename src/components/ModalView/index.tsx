import React, { ReactNode, useState } from 'react';

import {
    View,
    Modal,
    ModalProps,
    Text
} from 'react-native';


import { styles } from './styles';


type Props = ModalProps & {
    children: ReactNode;
}


export function ModalView({ children, ...rest }: Props) {
    return (
        <Modal
            transparent={true}
            animationType='none'
            {...rest}
        >
            <View style={styles.overlay}>
                {children}
            </View>
        </Modal>
    );
}