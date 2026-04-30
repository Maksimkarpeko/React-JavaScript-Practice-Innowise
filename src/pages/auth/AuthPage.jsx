import { AuthForm } from '@modules/auth';
import { useAuth } from '@modules/auth/hooks/useAuth';


export const AuthPage = () => {
  const [
    authParams,
    handleLoginSubmit,
    handleRegistrationSubmit,
    handleOnChange,
    value,
    errors,
    isFormInvalid,
  ] = useAuth();

  return (
    <AuthForm 
      authParams={authParams}
      handleLoginSubmit={handleLoginSubmit}
      handleRegistrationSubmit={handleRegistrationSubmit}
      errors={errors}
      value={value}
      handleOnChange={handleOnChange}
      isFormInvalid={isFormInvalid}
    />
  )
}