import { CafeItem, Elements } from '@types';
import { transport } from '@utils';

export const searchCafes = async ({
    searchBy,
    searchValue,
}: {
    searchBy: keyof Elements;
    searchValue: string;
}): Promise<CafeItem[]> => {
    const { data } = await transport.get<{ items: CafeItem[] }>(
        `system.type=cafe&elements.${searchBy}=${searchValue}`
    );

    return data.items;
};
