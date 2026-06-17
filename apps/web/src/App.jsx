import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';

import SocialMediaManagementPage from './pages/SocialMediaManagementPage.jsx';
import PaidAdvertisingPage from './pages/PaidAdvertisingPage.jsx';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage.jsx';
import BrandingCreativePage from './pages/BrandingCreativePage.jsx';
import KOCKOLServicePage from './pages/KOCKOLServicePage.jsx';
import TikTokLiveServicePage from './pages/TikTokLiveServicePage.jsx';
import AIDrivenMarketingPage from './pages/AIDrivenMarketingPage.jsx';
import ChatbotDevelopmentPage from './pages/ChatbotDevelopmentPage.jsx';

// Portfolios
import TikTokPortfolioPage from './pages/TikTokPortfolioPage.jsx';
import BrandingPortfolioPage from './pages/BrandingPortfolioPage.jsx';
import AdCreativesPortfolioPage from './pages/AdCreativesPortfolioPage.jsx';
import UGCPortfolioPage from './pages/UGCPortfolioPage.jsx';

// UGC Industry Hub & Pages
import UGCContentCreationPage from './pages/UGCContentCreationPage.jsx';
import FoodBeverageUGCPage from './pages/ugc-industries/FoodBeverageUGCPage.jsx';
import AgricultureUGCPage from './pages/ugc-industries/AgricultureUGCPage.jsx';
import ManufacturingUGCPage from './pages/ugc-industries/ManufacturingUGCPage.jsx';
import ConstructionUGCPage from './pages/ugc-industries/ConstructionUGCPage.jsx';
import RealEstateUGCPage from './pages/ugc-industries/RealEstateUGCPage.jsx';
import RetailUGCPage from './pages/ugc-industries/RetailUGCPage.jsx';
import TransportationUGCPage from './pages/ugc-industries/TransportationUGCPage.jsx';
import TravelUGCPage from './pages/ugc-industries/TravelUGCPage.jsx';
import AutomotiveUGCPage from './pages/ugc-industries/AutomotiveUGCPage.jsx';
import TechnologyUGCPage from './pages/ugc-industries/TechnologyUGCPage.jsx';
import MediaUGCPage from './pages/ugc-industries/MediaUGCPage.jsx';
import TelecommunicationsUGCPage from './pages/ugc-industries/TelecommunicationsUGCPage.jsx';
import FinanceUGCPage from './pages/ugc-industries/FinanceUGCPage.jsx';
import ProfessionalServicesUGCPage from './pages/ugc-industries/ProfessionalServicesUGCPage.jsx';
import EducationUGCPage from './pages/ugc-industries/EducationUGCPage.jsx';
import HealthcareUGCPage from './pages/ugc-industries/HealthcareUGCPage.jsx';
import BeautyUGCPage from './pages/ugc-industries/BeautyUGCPage.jsx';
import EnergyUGCPage from './pages/ugc-industries/EnergyUGCPage.jsx';
import GovernmentUGCPage from './pages/ugc-industries/GovernmentUGCPage.jsx';
import NonProfitUGCPage from './pages/ugc-industries/NonProfitUGCPage.jsx';

// Pricing Pages
import PricingHubPage from './pages/PricingHubPage.jsx';
import SocialMediaManagementPricingPage from './pages/SocialMediaManagementPricingPage.jsx';
import UGCContentCreationPricingPage from './pages/UGCContentCreationPricingPage.jsx';
import PaidAdvertisingPricingPage from './pages/PaidAdvertisingPricingPage.jsx';
import WebsiteDevelopmentPricingPage from './pages/WebsiteDevelopmentPricingPage.jsx';
import BrandingCreativePricingPage from './pages/BrandingCreativePricingPage.jsx';
import KOCKOLServicePricingPage from './pages/KOCKOLServicePricingPage.jsx';
import TikTokLiveServicePricingPage from './pages/TikTokLiveServicePricingPage.jsx';
import AIDrivenMarketingPricingPage from './pages/AIDrivenMarketingPricingPage.jsx';
import ChatbotDevelopmentPricingPage from './pages/ChatbotDevelopmentPricingPage.jsx';

import ContactPage from './pages/ContactPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import RefundPolicyPage from './pages/RefundPolicyPage.jsx';

// Checkout & Payment
import CheckoutPage from './pages/CheckoutPage.jsx';
import PaymentSuccessPage from './pages/PaymentSuccessPage.jsx';
import PaymentFailurePage from './pages/PaymentFailurePage.jsx';

import UnprotectedMediaUploadPage from './pages/UnprotectedMediaUploadPage.jsx';

import AdminLayout from './components/AdminLayout.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import AdminLeadsPage from './pages/AdminLeadsPage.jsx';
import AdminMediaManagement from './pages/AdminMediaManagement.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
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

          {/* Hidden Unprotected Media Tool */}
          <Route path="/media-upload" element={<UnprotectedMediaUploadPage />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/leads" element={<AdminLeadsPage />} />
              <Route path="/admin/media-management" element={<AdminMediaManagement />} />
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>

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