import React, { lazy } from 'react';

// Single source of truth for public routes. App.jsx mounts these twice — once at
// the root (English, default) and once under /ms (Bahasa Melayu). The build tools
// (generate-sitemap.js, prerender-head.js) read this file too, so keep the array
// entries in the `{ path: '/x', element: <Comp /> }` shape (self-closing element).

// Eager: landing page + wildcard fallback.
import HomePage from './pages/HomePage.jsx';

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

const TikTokPortfolioPage = lazy(() => import('./pages/TikTokPortfolioPage.jsx'));
const BrandingPortfolioPage = lazy(() => import('./pages/BrandingPortfolioPage.jsx'));
const AdCreativesPortfolioPage = lazy(() => import('./pages/AdCreativesPortfolioPage.jsx'));
const UGCPortfolioPage = lazy(() => import('./pages/UGCPortfolioPage.jsx'));

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
const MarketingCostCalculatorPage = lazy(() => import('./pages/MarketingCostCalculatorPage.jsx'));
const RoasCalculatorPage = lazy(() => import('./pages/RoasCalculatorPage.jsx'));
const EngagementRateCalculatorPage = lazy(() => import('./pages/EngagementRateCalculatorPage.jsx'));
const AdBudgetCalculatorPage = lazy(() => import('./pages/AdBudgetCalculatorPage.jsx'));
const ToolsIndexPage = lazy(() => import('./pages/ToolsIndexPage.jsx'));
const LocationPage = lazy(() => import('./pages/LocationPage.jsx'));
const GuidesIndexPage = lazy(() => import('./pages/GuidesIndexPage.jsx'));
const GuidePage = lazy(() => import('./pages/GuidePage.jsx'));
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage.jsx'));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage.jsx'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'));
const PaymentSuccessPage = lazy(() => import('./pages/PaymentSuccessPage.jsx'));
const PaymentFailurePage = lazy(() => import('./pages/PaymentFailurePage.jsx'));

export { HomePage };

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about-us', element: <AboutUsPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/portfolio/tiktok-campaigns', element: <TikTokPortfolioPage /> },
  { path: '/portfolio/branding-creative-portfolio', element: <BrandingPortfolioPage /> },
  { path: '/portfolio/ad-creatives', element: <AdCreativesPortfolioPage /> },
  { path: '/portfolio/ugc-videos', element: <UGCPortfolioPage /> },
  { path: '/portfolio/social-media-management', element: <SocialMediaManagementPage /> },
  { path: '/portfolio/paid-advertising', element: <PaidAdvertisingPage /> },
  { path: '/portfolio/website-development', element: <WebsiteDevelopmentPage /> },
  { path: '/portfolio/branding-creative', element: <BrandingCreativePage /> },
  { path: '/portfolio/koc-kol-service', element: <KOCKOLServicePage /> },
  { path: '/portfolio/tiktok-live-service', element: <TikTokLiveServicePage /> },
  { path: '/portfolio/ai-driven-marketing', element: <AIDrivenMarketingPage /> },
  { path: '/portfolio/chatbot-development', element: <ChatbotDevelopmentPage /> },
  { path: '/portfolio/ugc-content-creation', element: <UGCContentCreationPage /> },
  { path: '/portfolio/ugc-content-creation/food-beverage', element: <FoodBeverageUGCPage /> },
  { path: '/portfolio/ugc-content-creation/agriculture-agribusiness', element: <AgricultureUGCPage /> },
  { path: '/portfolio/ugc-content-creation/manufacturing-industrial', element: <ManufacturingUGCPage /> },
  { path: '/portfolio/ugc-content-creation/construction-engineering', element: <ConstructionUGCPage /> },
  { path: '/portfolio/ugc-content-creation/real-estate-property', element: <RealEstateUGCPage /> },
  { path: '/portfolio/ugc-content-creation/retail-ecommerce', element: <RetailUGCPage /> },
  { path: '/portfolio/ugc-content-creation/transportation-logistics', element: <TransportationUGCPage /> },
  { path: '/portfolio/ugc-content-creation/travel-tourism-hospitality', element: <TravelUGCPage /> },
  { path: '/portfolio/ugc-content-creation/automotive', element: <AutomotiveUGCPage /> },
  { path: '/portfolio/ugc-content-creation/technology-software', element: <TechnologyUGCPage /> },
  { path: '/portfolio/ugc-content-creation/media-entertainment', element: <MediaUGCPage /> },
  { path: '/portfolio/ugc-content-creation/telecommunications', element: <TelecommunicationsUGCPage /> },
  { path: '/portfolio/ugc-content-creation/finance-insurance', element: <FinanceUGCPage /> },
  { path: '/portfolio/ugc-content-creation/professional-services', element: <ProfessionalServicesUGCPage /> },
  { path: '/portfolio/ugc-content-creation/education-training', element: <EducationUGCPage /> },
  { path: '/portfolio/ugc-content-creation/healthcare-medical', element: <HealthcareUGCPage /> },
  { path: '/portfolio/ugc-content-creation/beauty-personal-care', element: <BeautyUGCPage /> },
  { path: '/portfolio/ugc-content-creation/energy-utilities', element: <EnergyUGCPage /> },
  { path: '/portfolio/ugc-content-creation/government-public-sector', element: <GovernmentUGCPage /> },
  { path: '/portfolio/ugc-content-creation/non-profit-social', element: <NonProfitUGCPage /> },
  { path: '/pricing', element: <PricingHubPage /> },
  { path: '/pricing/social-media-management', element: <SocialMediaManagementPricingPage /> },
  { path: '/pricing/ugc-content-creation', element: <UGCContentCreationPricingPage /> },
  { path: '/pricing/paid-advertising', element: <PaidAdvertisingPricingPage /> },
  { path: '/pricing/website-development', element: <WebsiteDevelopmentPricingPage /> },
  { path: '/pricing/branding-creative', element: <BrandingCreativePricingPage /> },
  { path: '/pricing/koc-kol-service', element: <KOCKOLServicePricingPage /> },
  { path: '/pricing/tiktok-live-service', element: <TikTokLiveServicePricingPage /> },
  { path: '/pricing/ai-driven-marketing', element: <AIDrivenMarketingPricingPage /> },
  { path: '/pricing/chatbot-development', element: <ChatbotDevelopmentPricingPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/tools', element: <ToolsIndexPage /> },
  { path: '/marketing-cost-calculator', element: <MarketingCostCalculatorPage /> },
  { path: '/roas-calculator', element: <RoasCalculatorPage /> },
  { path: '/engagement-rate-calculator', element: <EngagementRateCalculatorPage /> },
  { path: '/ad-budget-calculator', element: <AdBudgetCalculatorPage /> },
  { path: '/digital-marketing-agency/:city', element: <LocationPage /> },
  { path: '/guides', element: <GuidesIndexPage /> },
  { path: '/guides/:topic', element: <GuidePage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogDetailPage /> },
  { path: '/terms-and-conditions', element: <TermsAndConditionsPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/refund-policy', element: <RefundPolicyPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '/payment-success', element: <PaymentSuccessPage /> },
  { path: '/payment-failure', element: <PaymentFailurePage /> },
];

// Plain path list for build tooling (no JSX) — keep in sync with publicRoutes.
export const PUBLIC_PATHS = publicRoutes.map((r) => r.path);
