import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Hreflang from './components/Hreflang.jsx';
import { publicRoutes, HomePage } from './routes.jsx';

// Admin is English-only (internal tool) — kept here, never mirrored to /ms.
const AdminLayout = lazy(() => import('./components/AdminLayout.jsx'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage.jsx'));
const AdminPage = lazy(() => import('./pages/AdminPage.jsx'));
const AdminLeadsPage = lazy(() => import('./pages/AdminLeadsPage.jsx'));

// Lightweight branded fallback shown while a route chunk loads.
function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brandkraf-teal/20 border-t-brandkraf-teal" />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <LanguageProvider>
          <ScrollToTop />
          <Hreflang />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              {/* English (default) */}
              {publicRoutes.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}

              {/* Bahasa Melayu — same pages mirrored under /ms */}
              {publicRoutes.map((r) => (
                <Route
                  key={`ms${r.path}`}
                  path={r.path === '/' ? '/ms' : `/ms${r.path}`}
                  element={r.element}
                />
              ))}

              {/* Admin (English only) */}
              <Route path="/admin-login" element={<AdminLoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/admin/leads" element={<AdminLeadsPage />} />
                </Route>
              </Route>

              {/* Fallback */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>

          {/* Global Floating WhatsApp Button — persists across route changes */}
          <div className="fixed bottom-6 right-6 z-[50] animate-in fade-in slide-in-from-bottom-4 duration-500">
            <WhatsAppButton
              className="rounded-full h-14 px-6 text-base font-semibold hover:scale-105"
              size="lg"
            />
          </div>
        </LanguageProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
