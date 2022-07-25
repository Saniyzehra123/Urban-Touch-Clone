import React from 'react'

export default function AuthWraper({children}) {

    const AuthStatus = useSelector(store => store.authReducer.auth);
    console.log(AuthStatus);
  return (
    <div>
      AuthWrapper
    </div>
  )
}
