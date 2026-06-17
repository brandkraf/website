import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function BreadcrumbNav({ currentService }) {
  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary transition-colors flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <Link to="/pricing" className="hover:text-primary transition-colors">
        Pricing
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span className="text-foreground font-medium" aria-current="page">
        {currentService}
      </span>
    </nav>
  );
}