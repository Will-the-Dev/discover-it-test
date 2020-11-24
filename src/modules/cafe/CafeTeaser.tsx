import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

import { Cafe } from '@types';
import { GreenText } from '@components';
import { useFadeIn } from '@hooks';

const Article = styled.article`
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    min-height: 240px;
    min-width: 220px;
    opacity: 0;
    overflow: hidden;
    position: relative;
    transform: translate(0, 50%);
    transition: opacity 300ms ease-out, transform 300ms ease-out;
    visibility: hidden;
    will-change: opacity, visibility;

    &:hover {
        transform: scale(1.2, 1.2);
        transition: 0.3s;
        z-index: 1;
    }

    @media screen and (min-width: 40em) {
        max-width: calc(45% - 16px);
    }

    @media screen and (min-width: 60em) {
        max-width: calc(35% - 16px);
    }

    @media screen and (min-width: 80em) {
        max-width: calc(30% - 16px);
    }

    p .withIcon {
        display: flex;
        align-items: center;
        cursor: pointer;

        > :first-child {
            margin-right: 5px;
        }
    }

    &.is-visible {
        opacity: 1;
        transform: none;
        visibility: visible;
    }
`;

const Image = styled.img`
    height: auto;
    width: 100%;
`;

const Intro = styled.div`
    padding: 10px;
`;

const Avatar = styled.div`
    align-items: center;
    background: #01796f;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    font-size: 1.25rem;
    height: 40px;
    justify-content: center;
    overflow: hidden;
    position: relative;
    user-select: none;
    width: 40px;
`;

interface Props {
    cafe: Cafe;
}

function getInitials(name: string = ''): string {
    const [first = ' ', last = ' '] = name.split(' ');
    return `${first[0]}${last[0]}`;
}

export const CafeTeaser: FC<Props> = ({ cafe: { elements, system } }) => {
    const { domRef, isVisible } = useFadeIn();

    const {
        street,
        city,
        country,
        state,
        zip_code,
        phone,
        email,
        photo,
    } = elements;

    const initials = getInitials(system?.name);

    function formEmail() {
        window.open(`mailto:${email.value || '#'}`);
    }

    function searchForLocation() {
        window.open(
            `https://www.google.com.sa/maps/search/${street.value},${
                zip_code.value && ` ${zip_code.value},`
            }`,
            '_blank'
        );
    }

    return (
        <Article ref={domRef} className={isVisible ? 'is-visible' : ''}>
            <CardHeader
                avatar={<Avatar>{initials}</Avatar>}
                title={photo?.value[0]?.description}
                subheader={system?.name}
            />
            <Image src={photo?.value[0]?.url} />
            <Intro>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                >
                    <p onClick={searchForLocation} className="withIcon">
                        <LocationOnIcon />
                        {street.value},{zip_code.value && ` ${zip_code.value},`}{' '}
                        {city.value}
                    </p>
                    {state.value || country.value ? (
                        <p>
                            {state.value && `${state.value}, `} {country.value}
                        </p>
                    ) : (
                        <p>
                            <br />
                        </p>
                    )}
                    <p>
                        <GreenText>
                            <strong>Contact</strong>
                        </GreenText>
                    </p>
                    <p className="withIcon">
                        <PhoneIcon />
                        {phone.value}
                    </p>
                    <p onClick={formEmail} className="withIcon">
                        <EmailIcon />
                        {email.value}
                    </p>
                </Typography>
            </Intro>
        </Article>
    );
};
