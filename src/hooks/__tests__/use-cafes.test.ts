import { act, renderHook } from '@testing-library/react-hooks';

import { ContentResponse } from '@types';
import { useCafes } from '../use-cafes';
import { cafes } from '../../mocks';
import * as FetchCafesModule from '../../services/get-cafes';

describe('useCafes() hook tests', () => {
    it('should initialize with some defaults', () => {
        const { result } = renderHook(() => useCafes());

        expect(result.current).toEqual({
            cafes: [],
            isLoading: true,
            hasLoadingError: false,
        });
    });

    it('should set "hasLoadingError" to true when fetching fails', async () => {
        jest.spyOn(FetchCafesModule, 'getCafes').mockRejectedValue(
            'Oops! something went wrong'
        );
        const { result, waitForNextUpdate } = renderHook(() => useCafes());

        await act(async () => waitForNextUpdate());

        expect(result.current).toEqual({
            cafes: [],
            isLoading: false,
            hasLoadingError: true,
        });
    });

    it('should have retrieve cafes and set loading to false', async () => {
        jest.spyOn(FetchCafesModule, 'getCafes').mockResolvedValue(
            (cafes as unknown) as ContentResponse
        );
        const { result, waitForNextUpdate } = renderHook(() => useCafes());

        await act(async () => waitForNextUpdate());

        expect(result.current).toEqual({
            cafes: cafes.items,
            isLoading: false,
            hasLoadingError: false,
        });
    });
});
