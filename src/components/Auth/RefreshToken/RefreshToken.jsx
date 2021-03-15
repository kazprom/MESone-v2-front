import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import jwtDecode from 'jwt-decode';
import * as authSelector from "../../../store/auth/selectors";
import * as actions from "../../../store/auth/actions";

export default function RefreshToken(props) {
    let token=useSelector(authSelector.token)
    let dispatch=useDispatch();
    let authRefreshToken=()=>dispatch(actions.authRefreshToken);

    useEffect(() => {
        const timer = setInterval(() => {
            const { exp } = jwtDecode(token);
            const now = Math.floor(Date.now() / 1000);
            if (now > exp - 30) authRefreshToken();
        }, 15000);
        return () => {
            clearTimeout(timer);
        };
    }, [props]);
    return null;
}
