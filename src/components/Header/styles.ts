import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 5,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    actionIcons: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 8.5,
    }
});