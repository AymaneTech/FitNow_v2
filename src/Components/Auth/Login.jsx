import { AuthInput } from "../AuthInput"
import { Stack } from "@chakra-ui/react"
import { AuthButton } from "../AuthButton";
import { useFormik } from 'formik';
import { LockKeyhole, Mail } from "lucide-react";
import { loginSchema } from "../../Validations/User";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    loginSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post('login', values);
        const token = response.data.data;
        Cookies.set('token', token, { expires: 7 });
        navigate("/")

      } catch (error) {
        console.log(error.response.data.message);
        if (error.response.data.message === 'user not found') {
          setErrors({ email: 'User not found' });
        } else {
          setErrors({ email: error.response.data.message });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });


  return (
    <div className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
      <div className="flex gap-12 bg-gradient-to-r from-gray-700 to-black p-20 rounded-2xl">
        <div className="flex flex-col gap-6">
          <div className="">
            <h1 className="text-4xl text-white font-bold">Login</h1>
            <p className="text-white">Welcome to geeks world</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={6}>
              <AuthInput
                options={{
                  name: 'email',
                  label: 'Email',
                  icon: <Mail color="white" />,
                  type: 'email',
                  placeholder: 'Enter your email',
                  value: formik.values.email,
                  onChange: formik.handleChange,
                  error: formik.errors.email, // Render the error message
                }}
              />
              <AuthInput
                options={{
                  name: 'password',
                  label: 'Password',
                  icon: <LockKeyhole color="white" />,
                  type: 'password',
                  placeholder: 'Enter a secure password',
                  value: formik.values.password,
                  onChange: formik.handleChange,
                  error: formik.errors.password, // Render the error message
                }}
              />
              <AuthButton type="submit">Login</AuthButton>

              <div>
              </div>
            </Stack>
          </form>
          {/* Social login buttons... */}
        </div>
        <div className="">
          <img src="/src/assets/images/regsiter.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;