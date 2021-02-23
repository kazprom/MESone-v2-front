import { useEffect } from 'react';
import { connect } from 'react-redux';
import { token } from '../../../store/auth/selectors';
import jwtDecode from 'jwt-decode';
import { authRefreshToken } from '../../../store/auth/actions';

function RefreshToken(props) {
    useEffect(() => {
        const timer = setInterval(() => {
            const { exp } = jwtDecode(props.token);
            const now = Math.floor(Date.now() / 1000);
            if (now > exp - 30) props.refresh();
        }, 15000);
        return () => {
            clearTimeout(timer);
        };
    }, [props]);
    return null;
}

function mapStateToProps(store) {
    return ({
        token: token(store),
    });
}

function mapDispatchToProps(dispatch) {
    return ({
        refresh: () => dispatch(authRefreshToken()),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(RefreshToken);