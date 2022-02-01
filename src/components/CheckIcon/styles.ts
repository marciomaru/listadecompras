import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    check: {
        color: 'red',
        backgroundColor: theme.colors.itemPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 70,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10
    },
    checked: {
        color: 'green',
        backgroundColor: theme.colors.itemPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 70,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10
    }
});