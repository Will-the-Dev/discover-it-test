import { Cafe } from '@types';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Article = styled.article`
    min-height: 240px;
    min-width: 220px;
    max-width: 345px;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    background: #ffffff;
    position: relative;

    &:hover {
        transform: scale(1.2, 1.2);
        transition: 0.3s;
        z-index: 1;
    }

    @media screen and (min-width: 40em) {
        max-width: calc(50% - 16px);
    }

    @media screen and (min-width: 60em) {
        max-width: calc(30% - 16px);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Intro = styled.div`
    padding: 10px;
`;

interface Props {
    cafe: Cafe;
}

function getInitials(name: string = ''): string {
    const [first = ' ', last = ' '] = name.split(' ');
    return `${first[0]}${last[0]}`;
}

export const CafeTeaser: FC<Props> = ({ cafe: { elements, system } }) => {
    const classes = {} as any;
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

    return (
        <Article className={classes.root}>
            <CardHeader
                avatar={<Avatar className={classes.avatar}>{initials}</Avatar>}
                title={photo?.value[0]?.description}
                subheader={system?.name}
            />
            <Image src={photo?.value[0]?.url} />
            <Intro>
                <Typography variant="body2" color="textSecondary" component="p">
                    <p>
                        {street.value}, {city.value}
                    </p>
                    <p>
                        {zip_code.value && `${zip_code.value}, `}{' '}
                        {state.value && `${state.value}, `} {country.value}
                    </p>
                    <p>
                        <strong>Contact</strong>
                    </p>
                    <p>{street.value}</p>
                    <p>{phone.value}</p>
                    <p>{email.value}</p>
                </Typography>
            </Intro>
        </Article>
    );
};
