import React from 'react';

import {
    View
} from 'react-native';

import { Feather } from '@expo/vector-icons';

export function CheckIcon() {
    return (
        <View>
            <Feather
                name="check-circle"
                size={24}
                color="gray"
            //style={{ opacity: 0.5 }}
            />
        </View>
    );
}