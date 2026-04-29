import { AuthForm } from '@modules/auth';
import { useAuth } from '@modules/auth/hooks/useAuth'
import { useAddUserMutation,useLoginUserMutation } from '@modules/auth/api/authApi';

export const AuthPage = () => {
  const [ addUser ] = useAddUserMutation();
  const [ loginUser ] = useLoginUserMutation();
  const [
    authParams,
    handelLoginSubmit,
    handelRegistrationSubmit,
    handelOnChange,
    value,
    commonError,
    customError,
  ] = useAuth(addUser, loginUser);

  return (
    <AuthForm 
      authParams={authParams}
      handelLoginSubmit={handelLoginSubmit}
      handelRegistrationSubmit={handelRegistrationSubmit}
      commonError={commonError}
      customError={customError}
      value={value}
      handelOnChange={handelOnChange}
    />
  )
}