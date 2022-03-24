import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './home/containers/Home';
import { lazy, Suspense } from 'react';
import AuthGuard from './auth/guards/AuthGuard';
import { useAuthContext } from './auth/context/AuthContext';

const Signup = lazy(() => import('./auth/containers/Signup'));
const Signin = lazy(() => import('./auth/containers/Signin'));
const ForgotPassword = lazy(() => import('./auth/containers/ForgotPassword'));
const AuthActions = lazy(() => import('./auth/containers/AuthActions'));
const Account = lazy(() => import('./account/containers/Account'));
const Dashboard = lazy(() => import('./dashboard/containers/Dashboard'));

function App() {

  const { currentUser } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={<Home />} />
          <Route path="/signup" element={
            <AuthGuard mustBeAuthenticated={false}>
              <Suspense fallback={<>...</>}>
                <Signup />
              </Suspense>
            </AuthGuard>
          } />
          <Route path="/signin" element={
            <AuthGuard mustBeAuthenticated={false}>
              <Suspense fallback={<>...</>}>
                <Signin />
              </Suspense>
            </AuthGuard>
          } />
          <Route path="/forgot-password" element={
            <Suspense fallback={<>...</>}>
              <ForgotPassword />
            </Suspense>
          } />
          <Route path="/auth-actions" element={
            <Suspense fallback={<>...</>}>
              <AuthActions />
            </Suspense>
          } />
          <Route path="/account" element={
            <AuthGuard mustBeAuthenticated={true}>
              <Suspense fallback={<>...</>}>
                <Account />
              </Suspense>
            </AuthGuard>
          } />
          <Route path="/dashboard" element={
            <AuthGuard mustBeAuthenticated={true}>
              <Suspense fallback={<>...</>}>
                <Dashboard />
              </Suspense>
            </AuthGuard>
          } />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
