import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
    },
    message: {
        margin: '0.5em',
        boxShadow: theme.shadows[6],
    },
}));