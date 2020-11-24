import React, { FC, ReactElement } from 'react';
import { WaveLoading } from 'styled-spinkit';
import styled from 'styled-components';

interface Props {
    isLoading: boolean;
    hasError: boolean;
    render: () => ReactElement;
}

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const LoadingIndicator: FC<Props> = ({
    isLoading,
    hasError,
    render,
}): ReactElement => {
    function getLoaded() {
        if (isLoading && !hasError) {
            return <WaveLoading />;
        }

        if (hasError && !isLoading) {
            return <h1>Oops! Something went wrong try again!</h1>;
        }

        return render();
    }

    return <Wrapper>{getLoaded()}</Wrapper>;
};
