import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
    Pressable,
    View
} from 'react-native';
import { FlatList, BorderlessButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { List } from '../../components/List';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';
import { listas } from '../../temporaryDB/TemporaryDB';
import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';
import { StatusBar } from 'react-native';
import { DeleteIcon } from '../../components/DeleteIcon';




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
                            <View style={styles.icon} >
                                <DeleteIcon
                                    id={item.id}
                                    handleDelete={handleDeleteList}
                                />
                            </View>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </Background>


    );
}

