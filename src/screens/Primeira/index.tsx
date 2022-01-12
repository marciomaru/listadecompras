import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { List, ListProps } from '../../components/List';
import { styles } from './styles';




export function Primeira() {
    const lista = [
        {
            quantity: '2',
            name: 'macarrão',
            unitaryValue: '25.00',
            total: '1.000,00'
        },
        {
            quantity: '4',
            name: 'açucar',
            unitaryValue: '18.00',
            total: '100,00'
        },
    ]

    const a: ListProps = {
        nameList: 'lista',
        itens: lista
    }

    a.itens.push({
        quantity: '5',
        name: 'coca-cola',
        unitaryValue: '7.00',
        total: '35,00'
    })

    return (
        <View style={styles.container}>
            <Text>a</Text>
            <List
                data={a}
            />
        </View>
    );
}