import { AuthInput } from "../AuthInput"
import { Stack } from "@chakra-ui/react"
import { AuthButton } from "../AuthButton";
import { useFormik } from 'formik';
import { LockKeyhole, Mail, User } from "lucide-react";
import { validationSchema } from "../../Validations/User";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post('register', values);
        const token = response.data.data;

        Cookies.set('token', token, { expires: 7 });
        navigate("/");
        resetForm();
      } catch (error) {
        console.error('Registration error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section className="flex justify-center items-center bg-cover bg-center w-[100vw] h-[100vh] bg-[url('/src/assets/images/hero.png')] font-mono">
      <div>
        <div>
          <div className="flex gap-12 bg-gradient-to-r from-gray-700 to-black p-20 rounded-2xl">
            <div className="flex flex-col gap-8">
              <div className="">
                <h1 className="text-4xl text-white font-bold">Create Your Account!</h1>
                <p className="text-white">Welcome to geeks world</p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={6}>
                  <AuthInput
                    options={{
                      name: 'name',
                      label: 'First Name',
                      icon: <User color="white" />,
                      type: 'text',
                      placeholder: 'Enter your name',
                      value: formik.values.name,
                      onChange: formik.handleChange,
                      error: formik.errors.name,
                    }}
                  />
                  <AuthInput
                    options={{
                      name: 'email',
                      label: 'Email',
                      icon: <Mail color="white" />,
                      type: 'email',
                      placeholder: 'Enter your email',
                      value: formik.values.email,
                      onChange: formik.handleChange,
                      error: formik.errors.email,
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
                      error: formik.errors.password,
                    }}
                  />
                  <AuthInput
                    options={{
                      name: 'confirmPassword',
                      label: 'Confirm password',
                      icon: <LockKeyhole color="white" />,
                      type: 'password',
                      placeholder: 'Confirm your password',
                      value: formik.values.confirmPassword,
                      onChange: formik.handleChange,
                      error: formik.errors.confirmPassword,
                    }}
                  />
                  <AuthButton type="submit">Sign up</AuthButton>
                </Stack>
              </form>
            </div>
            <div className="">
              <img src="/src/assets/images/regsiter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register
