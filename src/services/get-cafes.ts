import { ContentResponse } from '@types';
import { transport } from '@utils';

export const getCafes = async (): Promise<ContentResponse> => {
    const { data } = await transport.get<ContentResponse>('system.type=cafe');

    if (!data.items) throw new Error('Something went wrong');

    return data;
};
