import React from 'react'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


// iss mein hum component lein gy parameter ke through jo ke App.js sy bhjen gy 
// as a protected Roues
const ProtectedRoute = ({isRider, isAdmin, component : Component, ...rest}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return (
        <Fragment>
                {loading===false && (
                    // This route is for if user logout tha wo ussay login page par redirect kar de
                    <Route
                    {...rest}
                    render={(props)=>{
                        if(isAuthenticated === false){
                            // redirect is the component of React router DOM
                        return <Redirect to="/login" />;

                        }
                        // is to check ke jo admin hy woi dashbooard ko access kar saky-->
                        if (isRider === true && isAdmin === true && user.role !== "admin" && user.role !== "rider") {
                            return <Redirect to="/login" />;
                          }
              
                        return <Component {...props} />;
                    }}
                    />
                )}
        </Fragment>
  )
}

export default ProtectedRoute 