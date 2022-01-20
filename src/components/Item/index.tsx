import React, { useEffect, useState, useRef } from 'react';
import {
    Pressable,
    Text,
    View,
    PressableProps,
    Modal
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { TextInput } from 'react-native-gesture-handler';
import { ModalView } from '../ModalView';
import { EditItem } from '../EditItem';
import { ListProvider } from '../../hooks/list';
import { ItemProvider } from '../../hooks/item';


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
    const { name, quantity, unitaryValue, total, id } = data;
    const [producttext, setProductText] = useState(name);
    const [quantitytext, setQuantityText] = useState(quantity);
    const [unitaryValeuText, setunitaryValeuText] = useState(unitaryValue);
    const [totalText, setTotalText] = useState('');
    const [ok, setOk] = useState(false);
    const [openModal, setOpenModal] = useState(false)


    function checkOk() {
        ok ? setOk(false) : setOk(true)
    }

    function handleOpenModal() {
        openModal ? setOpenModal(!openModal) : setOpenModal(!openModal)
    }

    return (
        <>
            <View style={ok ? styles.containerChecked : styles.container}>
                <View style={{ flexDirection: 'column' }}>

                    <View style={styles.detailItemArea}>
                        <Pressable
                            style={styles.quantityText}
                            onLongPress={handleOpenModal}
                            {...rest}
                        >

                            <Text
                            >
                                {quantitytext}
                            </Text>


                        </Pressable>
                        <View style={styles.nameText}>
                            <Text>{producttext}</Text>
                        </View>
                        <View style={styles.valueText}>
                            <Text>R$ {unitaryValeuText}</Text>
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

            {/*<Modal
                transparent={true}
                animationType='none'
                visible={openModal}
                onRequestClose={handleOpenModal}
            >
                <View style={styles.overlay}>
                    <View style={styles.container}>

                    </View>
                </View>
            </Modal>*/}

            <ModalView
                visible={openModal}
                onRequestClose={handleOpenModal}
            >

                <EditItem />

            </ModalView>


        </>
    );
}