import {React} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => true

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => {
            return rest.isSignedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
        }} />
    );
};

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute)