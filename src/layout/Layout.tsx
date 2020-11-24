import { Typography, Link } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { GreenText, WhiteText } from '@components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const Body = styled.main`
    min-height: calc(100vh - 80px);
`;

const Footer = styled.footer`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #000000;
`;

const HeaderContainer = styled.div`
    background: #ffffff;
    color: #000000;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    height: 96px;
    width: 100%;
    z-index: 3;
`;

interface Props {
    children: ReactElement;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <header>
                <HeaderContainer>
                    <Link underline="none" color="inherit" href="/">
                        <Typography color="inherit" variant="h4" component="h2">
                            <span>Cafe </span>
                            <GreenText>Library</GreenText>
                        </Typography>
                    </Link>
                </HeaderContainer>
            </header>
            <Body>{children}</Body>
            <Footer>
                <Typography variant="body2" color="inherit" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        <WhiteText>Cafe </WhiteText>
                        <GreenText>Library</GreenText>
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Footer>
        </Wrapper>
    );
};
