import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@material-ui/core';

function ButtonLoader({ isLoading, ...props }) {
    if (isLoading)
        return (<Button
            {...props}
            startIcon={null}
            endIcon={null}
            disabled
            children={<CircularProgress color='inherit' size='1.72em'/>}
        />);
    return <Button {...props} />;
}

ButtonLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default ButtonLoader;
