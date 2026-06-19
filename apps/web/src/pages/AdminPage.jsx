import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabaseClient.js';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { Users, Calendar, TrendingUp, KeyRound, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { toast } from 'sonner';

function AdminPage() {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState({ total: 0, thisMonth: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Password change state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

        const [totalRes, monthRes] = await Promise.all([
          supabase.from('contact_submissions').select('*', { count: 'exact', head: true }),
          supabase
            .from('contact_submissions')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', firstDayOfMonth),
        ]);

        setStats({
          total: totalRes.count || 0,
          thisMonth: monthRes.count || 0,
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setUpdateError('');

    if (newPassword !== confirmPassword) {
      setUpdateError('New passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      setUpdateError('New password must be at least 8 characters long');
      return;
    }

    setIsUpdating(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;

      setNewPassword('');
      setConfirmPassword('');
      toast.success('Password updated successfully');
    } catch (err) {
      console.error('Failed to update password:', err);
      setUpdateError(err.message || 'Failed to update password. Please try again.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Helmet>
        <title>Dashboard - Admin Portal</title>
      </Helmet>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome to the BrandKraf administration portal, <span className="font-medium text-gray-900">{currentUser?.email}</span>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-sm border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-brandkraf-teal" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-3xl font-bold">{stats.total}</div>
            )}
            <p className="text-xs text-muted-foreground mt-1">All-time contact submissions</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
            <Calendar className="h-4 w-4 text-brandkraf-purple" />
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-3xl font-bold">{stats.thisMonth}</div>
            )}
            <p className="text-xs text-muted-foreground mt-1">Submissions since start of month</p>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-gray-100 bg-brandkraf-teal/5 border-brandkraf-teal/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-brandkraf-teal">Support & Info</CardTitle>
            <TrendingUp className="h-4 w-4 text-brandkraf-teal" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed">
              Check the <a href="/admin/leads" className="font-semibold text-brandkraf-teal hover:underline">Leads tab</a> regularly for new contact form and inquiry submissions.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Settings / Security Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <KeyRound className="h-5 w-5 text-gray-500" />
              Security Settings
            </CardTitle>
            <CardDescription>Update your admin account password</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              {updateError && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-md flex items-start gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <p>{updateError}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white text-gray-900"
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-2 bg-brandkraf-teal hover:bg-brandkraf-teal/90"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  'Change Password'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminPage;
