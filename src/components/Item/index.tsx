import React, { useState } from 'react';
import {
    Pressable,
    Text,
    View,
    PressableProps
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';


export type ItemProps = {
    id: string;
    quantity: string;
    name: string;
    unitaryValue: string;
    total: string;
}

type Props = PressableProps & {
    data: ItemProps;
}

export function Item({ data, ...rest }: Props) {
    const { name, quantity, unitaryValue, total } = data;
    const [producttext, setProductText] = useState('');
    const [quantitytext, setQuantityText] = useState(quantity);
    const [ok, setOk] = useState(false);
    const [changeComponent, setChangeComponent] = useState(false);
    console.log('bem antes: ' + changeComponent)

    function checkOk() {
        ok ? setOk(false) : setOk(true)
    }

    function handleChangeComponent() {
        console.log('antes: ' + changeComponent)
        changeComponent ? setChangeComponent(false) : setChangeComponent(true)
        console.log('depois: ' + changeComponent)
    }

    return (
        <View style={ok ? styles.containerChecked : styles.container}>
            <View style={{ flexDirection: 'column' }}>

                <View style={styles.detailItemArea}>
                    <Pressable
                        style={styles.quantityText}
                        onLongPress={handleChangeComponent}
                        {...rest}
                    >

                        <TextInput
                            style={{ color: 'black' }}
                            editable={changeComponent}
                            onChangeText={setQuantityText}
                            onEndEditing={handleChangeComponent}
                        >
                            <Text>
                                {quantitytext}
                            </Text>
                        </TextInput>


                    </Pressable>
                    <View style={styles.nameText}>
                        <Text>{name}</Text>
                    </View>
                    <View style={styles.valueText}>
                        <Text>R$ {unitaryValue}</Text>
                    </View>

                </View >
                <View style={styles.totalText}>

                    <Text>Total:</Text>

                    <Text>R$ {total}</Text>

                </View>


            </View>

            <View style={styles.iconsArea}>

                <Feather
                    name="check-circle"
                    size={30}
                    style={ok ? styles.checked : styles.check}
                    onPress={checkOk}
                />
            </View>

        </View>
    );
}