import { createMuiTheme } from '@material-ui/core';
import button from './button';
import card from './card';
import textField from './text-field';

export default createMuiTheme({
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ overrides ~~~ */
    overrides: {
        MuiCardActions: card.actions.overrides
    },
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ props ~~~ */
    props: {
        MuiButton: button.props,
        MuiTextField: textField.props,
    }
});