import React, { useEffect, useState } from 'react';

import {
    Pressable,
    PressableProps,
    Text,
    View
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useList } from '../../hooks/list';
import { ItemProps } from '../Item';
import { styles } from './styles';

import { listas } from '../../temporaryDB/TemporaryDB'

type Props = PressableProps & {
    itemData: ItemProps;
    handleModal: Function
}


export function EditItem({ itemData, handleModal, ...rest }: Props) {
    const { name, quantity, total, unitaryValue, id } = itemData
    const { list } = useList()
    const [textQuantity, setTextQuantity] = useState(quantity)
    const [textUnitaryValue, setTextUnitaryValue] = useState(unitaryValue)
    const [textName, setTextName] = useState(name)
    const [textTotal, setTextTotal] = useState(total)
    const i = list.items[0].items.filter(item => item.id === id)

    function mudaBD(n: string, un: string) {
        i[0].quantity = n
        i[0].unitaryValue = un
    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.fields}>
                    <Text>Quantidade: </Text>
                    <TextInput
                        style={styles.inputQuantity}
                        value={textQuantity}
                        onChangeText={setTextQuantity}
                        keyboardType='number-pad'
                    />
                </View>

                <View style={styles.fields} >
                    <Text>Produto: </Text>
                    <TextInput
                        style={styles.inputProduct}
                        value={name}
                        onChangeText={setTextName}
                    />
                </View>

                <View style={styles.fields}>
                    <Text>Valor: </Text>
                    <TextInput
                        style={styles.inputValue}
                        onChangeText={setTextUnitaryValue}
                    />
                </View>

                <Pressable
                    //onPress={() => handleModal(textQuantity)}
                    onPress={() => {
                        mudaBD(textQuantity, textUnitaryValue)
                        handleModal()
                    }}
                    {...rest}
                >
                    <Text> AQUI </Text>
                </Pressable>
            </View>
        </>
    );
}