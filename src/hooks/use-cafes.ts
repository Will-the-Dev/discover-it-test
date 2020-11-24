import { useEffect, useRef, useState } from 'react';

import { getCafes } from '@services';
import { Cafe, ContentResponse } from '@types';

export function useCafes() {
    const isMountedRef = useRef(true);
    const [cafes, setCafes] = useState<Cafe[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasLoadingError, setHasLoadingError] = useState(false);

    function onGetCafesSuccess({ items }: ContentResponse) {
        if (!isMountedRef.current) return;
        setCafes(items);
        setIsLoading(false);
    }

    function onGetCafesFail() {
        if (!isMountedRef.current) return;
        setHasLoadingError(true);
        setIsLoading(false);
    }

    useEffect(() => {
        getCafes().then(onGetCafesSuccess, onGetCafesFail);

        return () => {
            isMountedRef.current = true;
        };
    }, []);

    return {
        cafes,
        isLoading,
        hasLoadingError,
    };
}
