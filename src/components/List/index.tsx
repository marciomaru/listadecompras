import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
//import { useList } from '../../hooks/item';
import { useList } from '../../hooks/list';
import { RootStackParamList } from '../../routes/auth.routes';
import { Lists } from '../../screens/Lists';
import { ItemProps } from '../Item';
import { styles } from './styles';

type listDetailsScreenProp = StackNavigationProp<RootStackParamList>;

export type ListProps = {
    id: number;
    nameList: string;
    items: ItemProps[];
    date: string;
}

type Props = RectButtonProps & {
    data: ListProps;
}

export function List({ data, ...rest }: Props) {
    const navigation = useNavigation<listDetailsScreenProp>()
    const { nameList, date, id } = data;
    const { setListId } = useList();

    return (
        <View style={styles.container} >
            <RectButton
                style={styles.listDetailButton}
                {...rest}
                onPress={() => {
                    setListId(id)
                    navigation.navigate('ListDetails')
                }}
            >
                <View style={styles.listIcon} >
                    <FontAwesome5
                        name="clipboard-list"
                        size={33}
                        color="black"
                    />

                </View>

                <View style={styles.listDetail} >
                    <Text style={styles.nameList} >{nameList}</Text>
                    <View style={styles.dateList}>
                        <Text>Data: {date}</Text>
                    </View>
                </View>
            </RectButton>
        </View>
    );
}