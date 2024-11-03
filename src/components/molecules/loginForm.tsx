import { useState } from "react";
import { FaApple } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import { McButton } from "components/atoms/button/buttons";
import McInput from "components/atoms/input/inputs";
import { LoginFormValues } from "../../types/auth";
import { loginSchema } from "../../schemas/login";
import { useAuth } from "../../auth/authContext";
import { useTimer } from "../../utils/fakeLoader";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: joiResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    const validUser = data.email !== "" && data.password !== "";

    if (validUser) {
      setLoading(true);
      await useTimer();
      login({ username: data.email, password: data.password });
      setLoading(false);
      navigate("/");
    } else {
      console.error("Invalid credentials");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <McInput
        name="email"
        label="Username"
        type="text"
        placeholder="Enter username or email"
        errors={errors.email}
        register={register}
      />
      <McInput
        name="password"
        label="Password"
        type="password"
        placeholder="****"
        errors={errors.password}
        register={register}
      />
      <div className="flex justify-between items-center font-medium">
        <label className="flex items-center gap-1">
          <input type="checkbox" className="outline-none rounded-sm" />
          Remember me
        </label>
        <p className="cursor-pointer">Forgot password?</p>
      </div>
      <McButton type="submit">{loading ? "Wait a min..." : "Login"}</McButton>
      <McButton
        to="/register"
        type="button"
        className="flex gap-2 items-center justify-center"
      >
        <FaApple size={28} /> <p>Login with Apple</p>
      </McButton>
      <p className="text-center font-medium">
        Don't have an account?{" "}
        <span className="text-err cursor-pointer">Sign up for free</span>
      </p>
    </form>
  );
};
