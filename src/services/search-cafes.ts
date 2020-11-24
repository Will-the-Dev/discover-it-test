import { Cafe, CafeElements } from '@types';
import { transport } from '@utils';

export const searchCafes = async ({
    searchBy,
    searchValue,
}: {
    searchBy: keyof CafeElements;
    searchValue: string;
}): Promise<Cafe[]> => {
    const { data } = await transport.get<{ items: Cafe[] }>(
        `system.type=cafe&elements.${searchBy}=${searchValue}`
    );

    return data.items;
};
