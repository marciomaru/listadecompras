import React, {
    createContext,
    ReactNode,
    useContext,
    useState
} from 'react';
import { ListProps } from '../components/List';
import { listas } from '../temporaryDB/TemporaryDB';

type List = {
    items: ListProps[];
}

type ListContextData = {
    list: List;
    setListId: Function;
}

type ListContextProps = {
    children: ReactNode
}

export const ListContext = createContext({} as ListContextData);

function ListProvider({ children }: ListContextProps) {
    const [listId, setListId] = useState(0)
    const list = {
        items: listas.filter((listSelect) => listSelect.id === listId)
    }

    return (
        <ListContext.Provider value={{ list, setListId }}>
            {children}
        </ListContext.Provider>
    )
}

function useList() {
    const context = useContext(ListContext)
    return context
}

export {
    ListProvider,
    useList,
}