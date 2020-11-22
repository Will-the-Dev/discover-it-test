import { CafeItem } from '@types';
import { transport } from '@utils';

const DEFAULTS = { limit: 0, skip: 0 };

export const getCafes = async ({ limit, skip } = DEFAULTS): Promise<
    CafeItem[]
> => {
    const { data } = await transport.get<{ items: CafeItem[] }>(
        `system.type=cafe&limit=${limit}&skip=${skip}`
    );

    if (!data.items) throw new Error('Something went wrong');

    return data.items;
};
