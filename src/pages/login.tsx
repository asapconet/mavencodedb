import { LoginForm } from "components/molecules/loginForm";

export const Login = () => {
  return (
    <div className="grid lg:grid-cols-2 justify-items-center content-center h-screen bg-[F8F8F8]">
      <div className="md:max-w-[600px] w-full px-4 flex flex-col justify-center items-center">
        <div className="text-center mb-14">
          <h1 className="text-2xl md:text-5xl font-bold text-nue-2">
            Welcome to MavenCode
          </h1>
          <p className="text-2xl text-neu-1">Kindly enter your details</p>
          <LoginForm />
        </div>
      </div>
      <div className="hidden lg:block bg-loginBg lg:bg-cover 2xl:bg-fit h-screen w-full" />
    </div>
  );
};

export default Login;
