import React from 'react';

import {
    StatusBar,
    View
} from 'react-native';

import { styles } from './styles';
import { Item, ItemProps } from '../../components/Item';
import { ListDivider } from '../../components/ListDivider';
import { FlatList } from 'react-native-gesture-handler';
import { ListProps } from '../../components/List';
import { useList } from '../../hooks/list';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { listas } from '../../temporaryDB/TemporaryDB';
import { ReturnIcon } from '../../components/ReturnIcon';



export function ListDetails() {
    const { list } = useList()
    const items = list.items[0]

    return (
        <>
            <View style={styles.container} >
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={theme.colors.itemLight}
                />
                <Header
                    title={items.nameList}
                    background={theme.colors.itemDark}
                    actionReturn={
                        <ReturnIcon />
                    }
                />
                <FlatList
                    data={items.itens}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Item
                            data={item}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </>
    );
}