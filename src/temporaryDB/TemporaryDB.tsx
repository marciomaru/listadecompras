import { ListProps } from '../components/List';
import { handleDate } from '../util/DateFormatter'

const listaItems = [
    {
        id: '1',
        quantity: '2',
        name: 'macarrão',
        unitaryValue: '25.00',
        total: '1.000,00'
    },
    {
        id: '2',
        quantity: '4',
        name: 'açucar',
        unitaryValue: '18.00',
        total: '100,00'
    },
]
const listaItems2 = [
    {
        id: '1',
        quantity: '2',
        name: 'carne',
        unitaryValue: '25.00',
        total: '1.000,00'
    },
    {
        id: '2',
        quantity: '4',
        name: 'pastel',
        unitaryValue: '18.00',
        total: '100,00'
    },
]
const listaItems3 = [
    {
        id: '1',
        quantity: '2',
        name: 'jaca',
        unitaryValue: '25.00',
        total: '1.000,00'
    },
    {
        id: '2',
        quantity: '4',
        name: 'feijão',
        unitaryValue: '18.00',
        total: '100,00'
    },
]
const listaItems4 = [
    {
        id: '1',
        quantity: '2',
        name: 'abobora',
        unitaryValue: '25.00',
        total: '1.000,00'
    },
    {
        id: '2',
        quantity: '4',
        name: 'colher',
        unitaryValue: '18.00',
        total: '100,00'
    },
]
export const listas: ListProps[] = [
    {
        id: 1,
        nameList: 'lista de compras do dia 1',
        items: listaItems,
        date: handleDate(new Date())
    },
    {
        id: 2,
        nameList: 'lista de compras do dia 2',
        items: listaItems2,
        date: handleDate(new Date())
    },
    {
        id: 3,
        nameList: 'lista de compras do dia 3',
        items: listaItems3,
        date: handleDate(new Date())
    },
    {
        id: 4,
        nameList: 'lista de compras do dia 4',
        items: listaItems4,
        date: handleDate(new Date())
    },

]