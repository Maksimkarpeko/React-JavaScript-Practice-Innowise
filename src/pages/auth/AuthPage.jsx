import { AuthForm } from '@modules/auth';
import { useAuth } from '@modules/auth/hooks/useAuth';


export const AuthPage = () => {
  const {
    authParams,
    handleSubmit,
    handleOnChange,
    value,
    errors,
    isFormInvalid,
    addStatuses,
    loginStatuses
  } = useAuth();

  return (
    <AuthForm 
      authParams={authParams}
      handleSubmit={handleSubmit}
      errors={errors}
      value={value}
      handleOnChange={handleOnChange}
      isFormInvalid={isFormInvalid}
      addStatuses={addStatuses}
      loginStatuses={loginStatuses}
    />
  )
}