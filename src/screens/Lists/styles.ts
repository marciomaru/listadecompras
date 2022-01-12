import { StyleSheet } from 'react-native';
import { Background } from '../../components/Background';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
        marginTop: 30,
        backgroundColor: theme.colors.listLight,
    },
    input: {
        width: 350,
        height: 50,
        borderBottomWidth: 2
    },
    border: {
        marginLeft: -3,
        width: 30,
        height: 30,
        borderWidth: 15,
        borderColor: 'black',
        borderRadius: 20,
    },
    check: {
        opacity: 0.4,
    },
    checked: {
        opacity: 1
    }
});