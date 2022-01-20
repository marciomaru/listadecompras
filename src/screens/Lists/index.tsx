import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
    Pressable,
    View
} from 'react-native';
import { FlatList, RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { DeleteIcon } from '../../components/DeleteIcon';
import { List, ListProps } from '../../components/List';
import { ListDivider } from '../../components/ListDivider';
import { RootStackParamList } from '../../routes/auth.routes';
import { styles } from './styles';
import { listas } from '../../temporaryDB/TemporaryDB';
import { handleDate } from '../../util/DateFormatter';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReturnIcon } from '../../components/ReturnIcon';



export function Lists() {
    const [list, setList] = useState(listas)
    const [controlItems, setControlItems] = useState(list.length)
    const listas2 = list;


    function handleDeleteList(listId: number) {
        var item = listas2.filter(item => item.id === listId)
        var pos = listas2.indexOf(item[0])
        listas2.splice(pos, 1)
        setControlItems(listas2.length)
    }

    useEffect(() => {
        setList(listas2)
    }, [controlItems])

    return (
        <Background>

            <View style={styles.container} >
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={theme.colors.listLight}
                />
                <Header
                    title='Minhas Listas'
                    background={theme.colors.listDark}
                />
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row' }}>
                            <List
                                data={item}
                            />
                            <Pressable
                                onPress={() => handleDeleteList(item.id)}
                            >
                                <DeleteIcon
                                    background={theme.colors.listPrimary}
                                    borderRadius={10}
                                    width={50}
                                    height={70}
                                />
                            </Pressable>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </Background>


    );
}

