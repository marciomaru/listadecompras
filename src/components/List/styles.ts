import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.listPrimary,
        alignSelf: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    listDetailButton: {
        width: 350,
        height: 70,
        flexDirection: 'row',
    },
    listDetail: {
        marginVertical: 5,
        flexDirection: 'column',
    },
    listIcon: {
        width: 50,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameList: {
        width: 250,
        height: 30,
        marginStart: 5,
        backgroundColor: '#cbd4d6',
        borderBottomWidth: 1,
        paddingStart: 8,
        justifyContent: 'center',
        fontSize: 16
    },
    dateList: {
        width: 150,
        height: 30,
        marginStart: 5,
        marginTop: 5,
        flexDirection: 'row',
        fontSize: 16,
    },
});