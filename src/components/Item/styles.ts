import { StyleSheet } from 'react-native';
import { Background } from '../Background';

export const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#c9d8e8',
        alignSelf: 'center',
        alignItems: 'center',
        opacity: 0.5,
        borderRadius: 10
    },
    containerChecked: {
        width: 400,
        height: 71,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#c9d8e8',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
    },
    iconsArea: {
        width: 50,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
    },
    Edit: {
        color: 'black',
    },
    check: {
        opacity: 0.4,
        color: 'gray',
    },
    checked: {
        color: 'green',
    },
    detailItemArea: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    quantityText: {
        width: 40,
        height: 30,
        backgroundColor: '#cbd4d6',
        borderBottomWidth: 1,
        paddingStart: 8,
        justifyContent: 'center'
    },
    nameText: {
        width: 200,
        height: 30,
        marginStart: 5,
        backgroundColor: '#cbd4d6',
        borderBottomWidth: 1,
        paddingStart: 8,
        justifyContent: 'center',
    },
    valueText: {
        width: 75,
        height: 30,
        marginStart: 5,
        backgroundColor: '#cbd4d6',
        borderBottomWidth: 1,
        paddingStart: 8,
        justifyContent: 'center',
    },
    totalText: {
        width: 150,
        height: 30,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#cbd4d6',
        borderBottomWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    }
});