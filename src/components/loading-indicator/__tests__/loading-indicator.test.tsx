import React from 'react';
import { render } from '@testing-library/react';

import { LoadingIndicator } from '../loading-indicator';

describe('Loading indicator tests', () => {
    it('should render the component to match the snapshot when isLoading is true', () => {
        const { asFragment } = render(
            <LoadingIndicator isLoading hasError={false} render={() => <></>} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the component to match the snapshot when hasError is true', () => {
        const { asFragment } = render(
            <LoadingIndicator isLoading={false} hasError render={() => <></>} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render the component to match the snapshot when hasError and isLoading are false', () => {
        const { asFragment } = render(
            <LoadingIndicator
                isLoading={false}
                hasError={false}
                render={() => <></>}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
