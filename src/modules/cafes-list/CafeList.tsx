import React, { FC, SyntheticEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { Cafe, CafeElements } from '@types';
import { searchCafes } from '@services';

import { CafeTeaser } from '../cafe';
import { HERO_IMAGE } from './image';
import { SearchByRadio } from './SearchByRadio';
import { useAppContext } from '../../AppContext';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeroParallax = styled(Flex)`
    align-items: center;
    background-attachment: fixed;
    background-image: url(${HERO_IMAGE});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
    width: 100%;
`;

const Overlay = styled.div`
    background: #01796f;
    height: 100%;
    opacity: 0.4;
    position: absolute;
    width: 100%;

    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
`;

const FlexRowContainer = styled(Flex)`
    flex-direction: row;

    div:first-child {
        margin-right: 15px;
    }
`;

const FindContainer = styled.div`
    margin: 30px;
    max-width: 570px;
    z-index: 1;
`;

const CardsContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    margin: 60px auto;
    max-width: 1200px;
    width: calc(100% - 28px);
    padding: 0px 14px;

    & > * {
        margin: 16px;
    }
`;

export const CafesList: FC = () => {
    const [searchedCafes, setSearchedCafes] = useState<Cafe[]>([]);
    const [searchBy, setSearchBy] = useState<keyof CafeElements>('country');
    const [searchValue, setSearchValue] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const { cafes } = useAppContext();

    function onFormSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!searchValue) return;
        setIsSearching(true);

        searchCafes({ searchBy, searchValue }).then((data) => {
            setSearchedCafes(data);
        });
    }

    function clearSearch() {
        setSearchValue('');
        setSearchedCafes([]);
        setIsSearching(false);
    }

    return (
        <Flex>
            <HeroParallax>
                <Overlay />
                <FindContainer>
                    <form onSubmit={onFormSubmit}>
                        <Typography color="inherit" variant="h4">
                            Find your favourite cafe in our library.
                        </Typography>
                        <br />
                        <FlexRowContainer>
                            <TextField
                                type="search"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                color="secondary"
                                onChange={(e) => {
                                    if (!e.target.value) {
                                        setIsSearching(false);
                                    }
                                    setSearchValue(e.target.value);
                                }}
                                onClick={console.log}
                                fullWidth
                            />
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </FlexRowContainer>
                        <br />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Search By:</FormLabel>
                            <RadioGroup
                                value={searchBy}
                                name="searchBy"
                                onChange={(e) => {
                                    setSearchBy(
                                        e.target.value as keyof CafeElements
                                    );
                                }}
                                row
                            >
                                <SearchByRadio value="country" />
                                <SearchByRadio value="city" />
                                <SearchByRadio value="zip_code" />
                            </RadioGroup>
                        </FormControl>
                    </form>
                </FindContainer>
            </HeroParallax>

            <CardsContainer>
                {isSearching && searchedCafes.length > 0 && (
                    <div>
                        <Typography>
                            {searchedCafes.length} result
                            {searchedCafes.length > 1 ? 's' : ''} found
                        </Typography>
                        <br />
                        <Button onClick={clearSearch}>Clear Search</Button>
                    </div>
                )}
                {isSearching && searchedCafes.length === 0 && (
                    <Typography>No results found</Typography>
                )}
                {(isSearching ? searchedCafes : cafes).map((item) => (
                    <CafeTeaser key={item.system.id} cafe={item} />
                ))}
            </CardsContainer>
        </Flex>
    );
};
