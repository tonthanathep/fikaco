"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";

//Handle data validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

const LoginForm = () => {
  const [formData, setFormData] = useState<z.infer<typeof loginSchema>>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Handle Zod error
    const validFormData = loginSchema.parse(formData);
    console.log(validFormData);
    setLoading(false);
    // TODO: Handle form submit
  };

  return (
    <motion.div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        width: "24vw",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        alignItems: "center",
      }}
    >
      <motion.div className='flex flex-col '>
        <motion.h1 className='text-xl font-semibold font-serif text-center'>
          Welcome to Fikaco
        </motion.h1>
        <motion.h2 className='text-md font-light font-serif text-center mt-1'>
          How have you been?
        </motion.h2>

        <motion.form onSubmit={handleSubmit}>
          <div className='mt-6'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 font-sans'
            >
              Email
            </label>
            <div className='mt-1'>
              <motion.input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                required
                className='block w-full rounded-md p-2.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                placeholder='yourname@example.com'
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderColor: "#F3F3F3", borderWidth: "0.1rem" }}
                whileHover={{ borderColor: "#DDAD4D" }}
              />
            </div>
          </div>

          <div className='mt-3'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <div className='mt-1'>
              <motion.input
                type='password'
                name='password'
                id='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md p-2.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleInputChange}
                style={{ borderColor: "#F3F3F3", borderWidth: "0.1rem" }}
                whileHover={{ borderColor: "#DDAD4D" }}
              />
            </div>
          </div>
          {error && <div className='mt-2 text-sm text-red-600'>{error}</div>}
          <motion.div className='mt-6 gap-3 flex-col flex'>
            <motion.button
              type='submit'
              className='block w-full rounded-xl  px-3 py-3 text-center text-sm font-semibold text-white '
              disabled={loading}
              style={{ backgroundColor: "#DDAD4D" }}
              whileHover={{ backgroundColor: "#C59B2C" }}
              whileTap={{ backgroundColor: "#C59B2C", scale: 0.98 }}
            >
              {loading ? "Loading..." : "Sign In"}
            </motion.button>

            <motion.button
              type='submit'
              className='block w-full rounded-xl  px-3 py-3 text-center text-sm font-semibold  '
              disabled={loading}
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                borderColor: "#000000",
                borderWidth: "0.08rem",
              }}
              whileHover={{ backgroundColor: "#000000", color: "#FFFFFF" }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Loading..." : "Sign in with Google"}
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
