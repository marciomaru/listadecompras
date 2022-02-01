import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: theme.colors.itemLight
    },
    item: {
        width: 400,
        height: 78,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemChecked: {
        width: 400,
        height: 78,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.itemLight,
        borderWidth: 2.5,
        borderColor: 'green',
        borderRadius: 10
    },
    icon: {
        backgroundColor: theme.colors.itemPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 75,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10
    }
});