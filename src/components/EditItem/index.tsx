import React from 'react';

import {
    Text,
    View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useList } from '../../hooks/list';
import { ItemProps } from '../Item';

import { styles } from './styles';

type Props = {
    itemData: ItemProps;
}

export function EditItem() {

    const { list } = useList()
    const l = list.items[0];
    console.log(l.itens[0].name)

    return (
        <View style={styles.container}>
            <View style={styles.fields}>
                <Text>Quantidade: </Text>
                <TextInput style={styles.inputQuantity} />
            </View>
            <View style={styles.fields}>
                <Text>Produto: </Text>
                <TextInput style={styles.inputProduct} />
            </View>
            <View style={styles.fields}>
                <Text>Valor: </Text>
                <TextInput style={styles.inputValue} />
            </View>
        </View>
    );
}