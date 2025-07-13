import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Api";
import Input from "../components/Input";
import Button from "../components/Button";
import image from "../assets/GirlReading.png";
import google from "../assets/google.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await login(data);
      localStorage.setItem("token", response.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Invalid username or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#DCDCDC] border border-[#0000001A] rounded-[2px] flex items-center justify-center overflow-hidden">
      {/* White container */}
      <div className="w-full max-w-[1440px] bg-white flex flex-col md:flex-row items-start justify-start  overflow-hidden">
        {/* Left: Image Container attached to top-left of white container */}
        <div className="w-full lg:w-[673px] flex justify-start items-start">
          <img
            src={image}
            alt="Login illustration"
            className="max-w-full object-contain"
          />
        </div>

        {/* Right: Form Container */}
        <div className="w-full lg:w-[519px] flex items-center justify-center py-10 px-6">
          <div className="w-full max-w-[360px] flex flex-col justify-between">
            <div>
              <h2 className="text-[28px] font-bold text-center text-[#1A1E25] mb-6">
                Welcome back.
              </h2>

              {/* Google Sign In */}
              <button
                type="button"
                className="w-full flex items-center justify-start gap-3 text-white bg-[#1A73E8] hover:bg-blue-700 font-medium py-2.5 px-4 rounded-[8px] mb-4"
              >
                <div className="w-[42px] h-[42px] rounded-[4px] bg-white shadow-[0px_6px_15px_0px_#0000001A] flex items-center justify-center">
                  <img src={google} alt="G" className="w-[24px] h-[24px]" />
                </div>
                <span>Sign in with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="px-4 text-sm text-gray-500">
                  Or, sign in with your email
                </span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>

              {/* Form */}
              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                {errors.root && (
                  <div className="text-red-600 text-sm text-center mb-2">
                    {errors.root.message}
                  </div>
                )}
                <Input
                  label="Email address"
                  {...register("email", { required: "Email is required" })}
                  error={errors.username?.message}
                />
                <Input
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={errors.password?.message}
                />
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Keep me signed in
                  </label>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-md"
                  isLoading={isLoading}
                >
                  Sign in
                </Button>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center text-sm mt-6">
              <p>
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign up now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
