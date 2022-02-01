import React, { useState } from 'react';

import {
    View
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { styles } from '../Item/styles';
import { check, setCheck } from '../../util/CheckItem'

type Props = {
    handleItemChecked: Function
}

export function CheckIcon({ handleItemChecked }: Props) {

    function handleIconChecked() {
        //check ? setCheck(false) : setCheck(true)
        check ? setCheck(false) : setCheck(true)
    }

    return (
        <View>
            <Feather
                style={!check ? styles.check : styles.checked}
                name="check-circle"
                size={40}
                onPress={() => {
                    handleIconChecked()
                    handleItemChecked()
                }}
            />
        </View>
    );
}