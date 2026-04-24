import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock, User, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../store/slices/authSlice';
import Input from '../components/Common/Input';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isSuccess, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Name too short').required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }));
    },
  });

  return (
    <div className="fade-in" style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-primary)', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '2rem 1.5rem'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '18px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem'
        }}>
          <Sparkles color="white" size={30} />
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Create Account</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Start your intelligent journey today</p>
      </header>

      <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Full Name"
            name="name"
            placeholder="John Doe"
            icon={<User size={20} />}
            {...formik.getFieldProps('name')}
            touched={formik.touched.name}
            error={formik.errors.name}
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="name@example.com"
            icon={<Mail size={20} />}
            {...formik.getFieldProps('email')}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={20} />}
            {...formik.getFieldProps('password')}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={20} />}
            {...formik.getFieldProps('confirmPassword')}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />

          {isError && (
            <div style={{ 
              background: 'rgba(255, 77, 77, 0.1)', 
              color: '#ff4d4d', 
              padding: '0.75rem', 
              borderRadius: '12px', 
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              {message || 'Registration failed. Try again.'}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: '16px',
              background: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.7 : 1,
              transition: 'all 0.3s ease',
              marginTop: '1rem'
            }}
          >
            {isLoading ? 'Creating Account...' : (
              <>
                Create Account <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'none' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
