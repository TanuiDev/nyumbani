import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, AtSign, Phone, Home, ShieldCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useCreateUserMutation } from '../features/auth/usersAPI'

const registerSchema = yup.object({
  userName: yup.string().required('Enter a username.'),
  emailAddress: yup
    .string()
    .required('Email address is required.')
    .email('Enter a valid email address.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required.')
    
    .matches(
      /^(?:\+?254|0)(7|1)\d{8}$/,
      'Phone number must be a valid Kenyan phone number.'
    ),
  password: yup
    .string()
    .required('Password is required.')
    
    .min(8, 'Password must be at least 8 characters.')
    .matches(/[a-z]/, 'Password must include a lowercase letter.')
    .matches(/[A-Z]/, 'Password must include an uppercase letter.')
    .matches(/\d/, 'Password must include a number.')
    .matches(/[^a-zA-Z0-9]/, 'Password must include a symbol.'),
  confirmPassword: yup
    .string()
    .required('Confirm your password.')
    .oneOf([yup.ref('password')], 'Passwords must match.'),
  agreedToTerms: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms to create an account.'),
})

type RegisterFormValues = yup.InferType<typeof registerSchema>

const Register = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [createUser, { isLoading }] = useCreateUserMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      userName: '',
      emailAddress: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      agreedToTerms: false,
    },
  })

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      // Strip front-end-only fields; profileImage stays empty at signup
      // to match @IsEmpty() on the backend.
      await createUser({
        userName: data.userName,
        emailAddress: data.emailAddress,
        phoneNumber: data.phoneNumber,
        password: data.password,
        profileImage: '',
      }).unwrap()

      navigate('/login')
    } catch (err: any) {
      setError('root', {
        message:
          err?.data?.message ??
          'Could not create your account. Check your details and try again.',
      })
    }
  }

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left panel — imagery + brand */}
      <div className="hidden lg:flex lg:w-[42%] relative">
        <img
          src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
          alt="Cozy modern apartment interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A140E] via-[#0A140E]/60 to-[#0A140E]/20" />

        <div className="relative z-10 flex flex-col justify-between p-8 w-full">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <Home className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-lg font-bold text-white">Nyumbani</span>
          </Link>

          <div>
            <p className="text-xl font-semibold text-white leading-snug mb-3 max-w-sm">
              Create an account to save homes and reach landlords directly.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              Free to join, no hidden fees
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center bg-[#FAF6F0] px-4 overflow-y-auto">
        <div className="w-full max-w-md py-6">
          <div className="flex lg:hidden items-center justify-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-[#14231A] flex items-center justify-center">
              <Home className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-lg font-bold text-gray-900">Nyumbani</span>
          </div>

          <div className="mb-5">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h1>
            <p className="text-sm text-gray-500">Start browsing and saving homes across Eldoret.</p>
          </div>

          {errors.root && (
            <div className="mb-4 px-3.5 py-2.5 rounded-lg bg-red-50 border border-red-100 text-sm text-red-700">
              {errors.root.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3.5">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="userName"
                  type="text"
                  placeholder="janewanjiru"
                  autoComplete="username"
                  {...register('userName')}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.userName ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.userName && (
                <p className="mt-1 text-xs text-red-600">{errors.userName.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="emailAddress"
                    type="email"
                    placeholder="name@example.com"
                    autoComplete="email"
                    {...register('emailAddress')}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.emailAddress ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p className="mt-1 text-xs text-red-600">{errors.emailAddress.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="0712 345 678"
                    autoComplete="tel"
                    {...register('phoneNumber')}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-red-600">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="8+ characters"
                    autoComplete="new-password"
                    {...register('password')}
                    className={`w-full pl-9 pr-9 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter"
                    autoComplete="new-password"
                    {...register('confirmPassword')}
                    className={`w-full pl-9 pr-9 py-2.5 rounded-lg border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-start gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  {...register('agreedToTerms')}
                  className="w-4 h-4 mt-0.5 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <span className="text-xs text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms" className="text-orange-600 hover:text-orange-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-orange-600 hover:text-orange-700 font-medium">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="mt-1 text-xs text-red-600">{errors.agreedToTerms.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3.02h3.88c2.27-2.09 3.57-5.17 3.57-8.84z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3.02c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.11A11.99 11.99 0 0 0 12 24z" />
              <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.62H1.26a12 12 0 0 0 0 10.76z" />
              <path fill="#EA4335" d="M12 4.75c1.76 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.26 6.62l4.01 3.11C6.22 6.87 8.87 4.75 12 4.75z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-orange-600 hover:text-orange-700 transition-colors duration-200">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register