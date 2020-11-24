import { createContext, useContext } from 'react';
import { Cafe } from '@types';

export const AppContext = createContext<{
    cafes: Cafe[];
}>({
    cafes: [],
});

export const useAppContext = () => useContext(AppContext);
