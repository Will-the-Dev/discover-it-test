import { transport } from '../transport';

describe('Axios transport', () => {
    it('should be a function', () => {
        expect(transport).toEqual(expect.any(Function));
    });
});
