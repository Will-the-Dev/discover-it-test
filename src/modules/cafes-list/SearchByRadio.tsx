import React, { FC } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { CafeElements } from '@types';

interface Props {
    value: keyof CafeElements;
}

export const SearchByRadio: FC<Props> = ({ value }) => (
    <FormControlLabel
        value={value}
        control={<Radio />}
        label={value.replace(/_/g, ' ')}
        color="inherit"
    />
);
