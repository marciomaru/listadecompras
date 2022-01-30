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
import { ListProvider, useList } from '../../hooks/list';
import { ItemProvider } from '../../hooks/item';
import { CheckIcon } from '../CheckIcon';
import { listas } from '../../temporaryDB/TemporaryDB';


export type ItemProps = {
    id: string;
    quantity: string;
    name: string;
    unitaryValue: string;
    total: string;
}

type Props = PressableProps & {
    data: ItemProps;
    background: string
}

export function Item({
    data,
    background,
    ...rest }: Props) {
    const { name, quantity, unitaryValue, total, id } = data;
    const [producttext, setProductText] = useState(name);
    const [quantitytext, setQuantityText] = useState(quantity);
    const [unitaryValueText, setUnitaryValueText] = useState(unitaryValue);
    const [totalText, setTotalText] = useState('');
    const [ok, setOk] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const { list } = useList()
    const i = list.items[0].items.filter(item => item.id === id)

    useEffect(() => {
        setProductText(i[0].name)
    }, [i[0].name])

    useEffect(() => {
        setQuantityText(i[0].quantity)
    }, [i[0].quantity])

    useEffect(() => {
        setUnitaryValueText(i[0].unitaryValue)
    }, [i[0].unitaryValue])


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
                        <View
                            style={styles.quantityText}
                        >

                            <Text
                            >
                                {quantitytext}
                            </Text>


                        </View>
                        <View style={styles.nameText}>
                            <Text>{producttext}</Text>
                        </View>
                        <View style={styles.valueText}>
                            <Text>R$ {unitaryValueText}</Text>
                        </View>

                    </View >
                    <View style={styles.totalText}>

                        <Text>Total:</Text>

                        <Text>R$ {total}</Text>

                    </View>


                </View>

                {/*<View style={styles.iconsArea}>

                    <Feather
                        name="check-circle"
                        size={30}
                        style={ok ? styles.checked : styles.check}
                        onPress={checkOk}
                    />
                    {/*<CheckIcon
                        background={background}
                        borderRadius={10}
                    />
                </View>*/}

            </View>

            <View style={styles.icon} >
                <CheckIcon />
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

                <EditItem
                    itemData={data}
                    handleModal={handleOpenModal}
                />

            </ModalView>


        </>
    );
}