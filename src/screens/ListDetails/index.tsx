import React, { ReactNode, useState } from 'react';

import {
    StatusBar,
    View
} from 'react-native';

import { styles } from './styles';
import { Item, ItemProps } from '../../components/Item';
import { ListDivider } from '../../components/ListDivider';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { ListProps } from '../../components/List';
import { useList } from '../../hooks/list';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import { listas } from '../../temporaryDB/TemporaryDB';
import { ReturnIcon } from '../../components/ReturnIcon';
import { DeleteIcon } from '../../components/DeleteIcon';
import { CheckIcon } from '../../components/CheckIcon';
import { check } from '../../util/CheckItem'




export function ListDetails() {
    const { list } = useList()
    const items = list.items[0]
    const [itemChecked, setItemChecked] = useState(false)

    function handleCheckItem() {
        itemChecked ? setItemChecked(false) : setItemChecked(true)
    }

    return (
        <>
            <View
                style={styles.container}
            >
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={theme.colors.itemLight}
                />
                <Header
                    title={items.nameList}
                    background={theme.colors.itemDark}
                    actionReturn={true}
                    actionIcons={true}
                />
                <FlatList
                    data={items.items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Item
                                data={item}
                                background={theme.colors.itemPrimary}
                            />
                            <View style={styles.icon}>
                                <CheckIcon
                                    handleItemChecked={handleCheckItem}
                                />
                            </View>

                        </View>
                    )}
                    extraData={itemChecked}
                    ItemSeparatorComponent={() => <ListDivider />}
                />
            </View>
        </>
    );
}