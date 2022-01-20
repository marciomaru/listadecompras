import React from 'react';

import {
    View
} from 'react-native';

import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export function EditIcon() {
    return (
        <View style={styles.editIcon}>
            <MaterialIcons
                name="edit"
                size={24}
                color="black"
            />
        </View>
    );
}