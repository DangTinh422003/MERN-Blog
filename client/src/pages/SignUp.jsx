import { useState } from "react";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { CgSpinnerTwo } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage("All fields are required");
      return;
    }
    try {
      setIsLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!data.success) {
        return setErrorMessage(data.message);
      }

      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-4xl flex items-center gap-x-2 self-center whitespace-nowrap font-semibold dark:text-white"
          >
            <Button
              gradientDuoTone={"purpleToBlue"}
              className="text-white rounded-lg inline-block pointer-events-none"
            >
              Dang&apos;s
            </Button>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with your email and password
            or with Google
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                onChange={handleChange}
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                onChange={handleChange}
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                onChange={handleChange}
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <Button
              disabled={isLoading}
              gradientDuoTone={"purpleToPink"}
              type="submit"
              className="flex items-center justify-center"
            >
              {isLoading ? (
                <CgSpinnerTwo className="animate-spin text-3xl" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500 underline">
              Sign In
            </Link>
          </div>

          {errorMessage && (
            <Alert className="mt-5" color={"failure"}>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
