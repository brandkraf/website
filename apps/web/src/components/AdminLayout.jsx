import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { LayoutDashboard, Users, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';

function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Leads', href: '/admin/leads', icon: Users },
  ];

  const NavLinks = () => (
    <div className="space-y-1 mt-6">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm ${
              isActive
                ? 'bg-brandkraf-teal/10 text-brandkraf-teal'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon className={`h-5 w-5 ${isActive ? 'text-brandkraf-teal' : 'text-gray-400'}`} />
            {item.name}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed inset-y-0 z-10">
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
            BrandKraf<span className="text-brandkraf-teal">.</span>
            <span className="block text-xs text-muted-foreground font-normal mt-1 uppercase tracking-wider">Admin Portal</span>
          </Link>
        </div>
        <div className="flex-1 px-4 py-2 overflow-y-auto">
          <NavLinks />
        </div>
        <div className="p-4 border-t border-gray-100">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-20">
          <div className="font-bold text-lg">BrandKraf Admin</div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="p-6 border-b border-gray-100">
                <span className="text-xl font-bold tracking-tight text-foreground">BrandKraf<span className="text-brandkraf-teal">.</span></span>
              </div>
              <div className="px-4 py-2">
                <NavLinks />
              </div>
              <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-10 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;