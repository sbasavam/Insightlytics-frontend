import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signup as registerUser } from "../services/Api";
import Input from "../components/Input";
import Button from "../components/Button";
import image from "../assets/GirlReading.png";
import google from "../assets/google.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    setIsLoading(true);
    try {
      await registerUser(data);
      navigate("/login");
    } catch (error) {
      setError("root", {
        type: "manual",
        message:
          error.response?.data?.message || "Registration failed. Try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start justify-start overflow-hidden">
        {/* Left: Image */}
        <div className="w-full lg:w-[673px] flex justify-start items-start">
          <img src={image} alt="Illustration" className="max-w-full object-contain" />
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-[519px] flex items-center justify-center py-5 px-6">
          <div className="w-full max-w-[360px] flex flex-col justify-between">
            <div>
              <h2 className="text-[28px] font-bold text-center text-[#1A1E25] mb-6">
                Let’s join us
              </h2>

              {/* Google Sign Up */}
              <button
                type="button"
                className="w-full flex items-center justify-start gap-3 text-white bg-[#1A73E8] hover:bg-blue-700 font-medium py-2.5 px-4 rounded-[8px] mb-4"
              >
                <div className="w-[42px] h-[42px] rounded-[4px] bg-white shadow-[0px_6px_15px_0px_#0000001A] flex items-center justify-center">
                  <img src={google} alt="G" className="w-[24px] h-[24px]" />
                </div>
                <span>Sign up with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="px-4 text-sm text-gray-500">
                  Or, sign up with your email
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
                  label="Your name"
                  {...register("username", { required: "Name is required" })}
                  error={errors.username?.message}
                />
                <Input
                  label="Email address"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  error={errors.email?.message}
                />
                <Input
                  label="Password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                  error={errors.password?.message}
                />
                <Input
                  label="Confirm password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                  error={errors.confirmPassword?.message}
                />
                <div className="flex items-center text-sm gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  <span>Agree to terms & conditions</span>
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-md"
                  isLoading={isLoading}
                >
                  Sign up
                </Button>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center text-sm mt-6">
              <p>
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Sign in now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
