import React from 'react';

import { useCafes } from '@hooks';
import { LoadingIndicator } from '@components';

import { AppContext } from './AppContext';
import { AppRouter } from './AppRouter';
import './App.css';

function App() {
    const { isLoading, cafes, hasLoadingError } = useCafes();

    return (
        <AppContext.Provider value={{ cafes }}>
            <LoadingIndicator
                isLoading={isLoading}
                hasError={hasLoadingError}
                render={() => <AppRouter />}
            />
        </AppContext.Provider>
    );
}

export default App;
