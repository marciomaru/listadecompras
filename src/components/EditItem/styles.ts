import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Background } from '../Background';

export const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.colors.itemPrimary,
    },
    fields: {
        flexDirection: 'row',
        width: 280,
        height: 50,
        alignItems: 'baseline',
        marginHorizontal: 7,
    },
    inputQuantity: {
        width: 20,
        height: 50,
        borderBottomWidth: 1,
        marginLeft: 5,

    },
    inputProduct: {
        width: 50,
        height: 50,
        borderBottomWidth: 1,
    },
    inputValue: {
        width: 50,
        height: 50,
        borderBottomWidth: 1,
    },
});