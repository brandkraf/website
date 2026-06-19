import React, { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// HomePage is eager-loaded — it's the landing page and the wildcard fallback,
// so it must render with zero extra latency.
import HomePage from './pages/HomePage.jsx';

// Every other route is lazy-loaded so first paint only ships the homepage chunk.
const AboutUsPage = lazy(() => import('./pages/AboutUsPage.jsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));

const SocialMediaManagementPage = lazy(() => import('./pages/SocialMediaManagementPage.jsx'));
const PaidAdvertisingPage = lazy(() => import('./pages/PaidAdvertisingPage.jsx'));
const WebsiteDevelopmentPage = lazy(() => import('./pages/WebsiteDevelopmentPage.jsx'));
const BrandingCreativePage = lazy(() => import('./pages/BrandingCreativePage.jsx'));
const KOCKOLServicePage = lazy(() => import('./pages/KOCKOLServicePage.jsx'));
const TikTokLiveServicePage = lazy(() => import('./pages/TikTokLiveServicePage.jsx'));
const AIDrivenMarketingPage = lazy(() => import('./pages/AIDrivenMarketingPage.jsx'));
const ChatbotDevelopmentPage = lazy(() => import('./pages/ChatbotDevelopmentPage.jsx'));

// Portfolios
const TikTokPortfolioPage = lazy(() => import('./pages/TikTokPortfolioPage.jsx'));
const BrandingPortfolioPage = lazy(() => import('./pages/BrandingPortfolioPage.jsx'));
const AdCreativesPortfolioPage = lazy(() => import('./pages/AdCreativesPortfolioPage.jsx'));
const UGCPortfolioPage = lazy(() => import('./pages/UGCPortfolioPage.jsx'));

// UGC Industry Hub & Pages
const UGCContentCreationPage = lazy(() => import('./pages/UGCContentCreationPage.jsx'));
const FoodBeverageUGCPage = lazy(() => import('./pages/ugc-industries/FoodBeverageUGCPage.jsx'));
const AgricultureUGCPage = lazy(() => import('./pages/ugc-industries/AgricultureUGCPage.jsx'));
const ManufacturingUGCPage = lazy(() => import('./pages/ugc-industries/ManufacturingUGCPage.jsx'));
const ConstructionUGCPage = lazy(() => import('./pages/ugc-industries/ConstructionUGCPage.jsx'));
const RealEstateUGCPage = lazy(() => import('./pages/ugc-industries/RealEstateUGCPage.jsx'));
const RetailUGCPage = lazy(() => import('./pages/ugc-industries/RetailUGCPage.jsx'));
const TransportationUGCPage = lazy(() => import('./pages/ugc-industries/TransportationUGCPage.jsx'));
const TravelUGCPage = lazy(() => import('./pages/ugc-industries/TravelUGCPage.jsx'));
const AutomotiveUGCPage = lazy(() => import('./pages/ugc-industries/AutomotiveUGCPage.jsx'));
const TechnologyUGCPage = lazy(() => import('./pages/ugc-industries/TechnologyUGCPage.jsx'));
const MediaUGCPage = lazy(() => import('./pages/ugc-industries/MediaUGCPage.jsx'));
const TelecommunicationsUGCPage = lazy(() => import('./pages/ugc-industries/TelecommunicationsUGCPage.jsx'));
const FinanceUGCPage = lazy(() => import('./pages/ugc-industries/FinanceUGCPage.jsx'));
const ProfessionalServicesUGCPage = lazy(() => import('./pages/ugc-industries/ProfessionalServicesUGCPage.jsx'));
const EducationUGCPage = lazy(() => import('./pages/ugc-industries/EducationUGCPage.jsx'));
const HealthcareUGCPage = lazy(() => import('./pages/ugc-industries/HealthcareUGCPage.jsx'));
const BeautyUGCPage = lazy(() => import('./pages/ugc-industries/BeautyUGCPage.jsx'));
const EnergyUGCPage = lazy(() => import('./pages/ugc-industries/EnergyUGCPage.jsx'));
const GovernmentUGCPage = lazy(() => import('./pages/ugc-industries/GovernmentUGCPage.jsx'));
const NonProfitUGCPage = lazy(() => import('./pages/ugc-industries/NonProfitUGCPage.jsx'));

// Pricing Pages
const PricingHubPage = lazy(() => import('./pages/PricingHubPage.jsx'));
const SocialMediaManagementPricingPage = lazy(() => import('./pages/SocialMediaManagementPricingPage.jsx'));
const UGCContentCreationPricingPage = lazy(() => import('./pages/UGCContentCreationPricingPage.jsx'));
const PaidAdvertisingPricingPage = lazy(() => import('./pages/PaidAdvertisingPricingPage.jsx'));
const WebsiteDevelopmentPricingPage = lazy(() => import('./pages/WebsiteDevelopmentPricingPage.jsx'));
const BrandingCreativePricingPage = lazy(() => import('./pages/BrandingCreativePricingPage.jsx'));
const KOCKOLServicePricingPage = lazy(() => import('./pages/KOCKOLServicePricingPage.jsx'));
const TikTokLiveServicePricingPage = lazy(() => import('./pages/TikTokLiveServicePricingPage.jsx'));
const AIDrivenMarketingPricingPage = lazy(() => import('./pages/AIDrivenMarketingPricingPage.jsx'));
const ChatbotDevelopmentPricingPage = lazy(() => import('./pages/ChatbotDevelopmentPricingPage.jsx'));

const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage.jsx'));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage.jsx'));

// Checkout & Payment
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'));
const PaymentSuccessPage = lazy(() => import('./pages/PaymentSuccessPage.jsx'));
const PaymentFailurePage = lazy(() => import('./pages/PaymentFailurePage.jsx'));

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
        <ScrollToTop />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/tiktok-campaigns" element={<TikTokPortfolioPage />} />
            <Route path="/portfolio/branding-creative-portfolio" element={<BrandingPortfolioPage />} />
            <Route path="/portfolio/ad-creatives" element={<AdCreativesPortfolioPage />} />
            <Route path="/portfolio/ugc-videos" element={<UGCPortfolioPage />} />

            <Route path="/portfolio/social-media-management" element={<SocialMediaManagementPage />} />
            <Route path="/portfolio/paid-advertising" element={<PaidAdvertisingPage />} />
            <Route path="/portfolio/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/portfolio/branding-creative" element={<BrandingCreativePage />} />
            <Route path="/portfolio/koc-kol-service" element={<KOCKOLServicePage />} />
            <Route path="/portfolio/tiktok-live-service" element={<TikTokLiveServicePage />} />
            <Route path="/portfolio/ai-driven-marketing" element={<AIDrivenMarketingPage />} />
            <Route path="/portfolio/chatbot-development" element={<ChatbotDevelopmentPage />} />

            {/* UGC Content Creation & Hub */}
            <Route path="/portfolio/ugc-content-creation" element={<UGCContentCreationPage />} />
            <Route path="/portfolio/ugc-content-creation/food-beverage" element={<FoodBeverageUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/agriculture-agribusiness" element={<AgricultureUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/manufacturing-industrial" element={<ManufacturingUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/construction-engineering" element={<ConstructionUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/real-estate-property" element={<RealEstateUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/retail-ecommerce" element={<RetailUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/transportation-logistics" element={<TransportationUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/travel-tourism-hospitality" element={<TravelUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/automotive" element={<AutomotiveUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/technology-software" element={<TechnologyUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/media-entertainment" element={<MediaUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/telecommunications" element={<TelecommunicationsUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/finance-insurance" element={<FinanceUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/professional-services" element={<ProfessionalServicesUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/education-training" element={<EducationUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/healthcare-medical" element={<HealthcareUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/beauty-personal-care" element={<BeautyUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/energy-utilities" element={<EnergyUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/government-public-sector" element={<GovernmentUGCPage />} />
            <Route path="/portfolio/ugc-content-creation/non-profit-social" element={<NonProfitUGCPage />} />

            {/* Pricing Pages */}
            <Route path="/pricing" element={<PricingHubPage />} />
            <Route path="/pricing/social-media-management" element={<SocialMediaManagementPricingPage />} />
            <Route path="/pricing/ugc-content-creation" element={<UGCContentCreationPricingPage />} />
            <Route path="/pricing/paid-advertising" element={<PaidAdvertisingPricingPage />} />
            <Route path="/pricing/website-development" element={<WebsiteDevelopmentPricingPage />} />
            <Route path="/pricing/branding-creative" element={<BrandingCreativePricingPage />} />
            <Route path="/pricing/koc-kol-service" element={<KOCKOLServicePricingPage />} />
            <Route path="/pricing/tiktok-live-service" element={<TikTokLiveServicePricingPage />} />
            <Route path="/pricing/ai-driven-marketing" element={<AIDrivenMarketingPricingPage />} />
            <Route path="/pricing/chatbot-development" element={<ChatbotDevelopmentPricingPage />} />

            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />

            {/* Checkout & Payment Routes */}
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/payment-failure" element={<PaymentFailurePage />} />

            <Route path="/admin-login" element={<AdminLoginPage />} />

            {/* Protected Admin Routes */}
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

        {/* Global Floating WhatsApp Button */}
        {/* Rendered at app level to persist across route changes, z-[50] to sit above standard content but below critical modals */}
        <div className="fixed bottom-6 right-6 z-[50] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <WhatsAppButton
            className="rounded-full h-14 px-6 text-base font-semibold hover:scale-105"
            size="lg"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
