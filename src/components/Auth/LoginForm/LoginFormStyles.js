import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    cardContent: {
        '& > *': {
            marginBottom: theme.spacing(2),
            '&:last-child': {
                marginBottom: 'unset',
            }
        }
    },
    cardActions: {
        justifyContent: 'space-between',
    },
    button: {
        width: '8em',
    }
}));
