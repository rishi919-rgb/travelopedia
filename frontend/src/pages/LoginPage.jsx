import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../store/slices/authSlice';
import Input from '../components/Common/Input';
import { motion } from 'framer-motion';

const LoginPage = () => {
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
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
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
      <header style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '18px',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: '0 10px 30px rgba(0, 255, 204, 0.2)'
        }}>
          <Sparkles color="white" size={30} />
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Welcome Back</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Login to continue your journey</p>
      </header>

      <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%' }}>
        <form onSubmit={formik.handleSubmit}>
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

          {isError && (
            <div style={{ 
              background: 'rgba(255, 77, 77, 0.1)', 
              color: '#ff4d4d', 
              padding: '0.75rem', 
              borderRadius: '12px', 
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(255, 77, 77, 0.2)'
            }}>
              {message || 'Invalid email or password'}
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
              transition: 'all 0.3s ease'
            }}
          >
            {isLoading ? 'Authenticating...' : (
              <>
                Login <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'none' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
