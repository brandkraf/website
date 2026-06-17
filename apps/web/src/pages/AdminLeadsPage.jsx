import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient.js';
import { format } from 'date-fns';
import { Download, Search, Trash2, Mail, Phone, Building2, User, Clock, FileWarning } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';

function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
      setPage(1); // Reset to first page on new search
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const filterStr = debouncedSearch
        ? `name ~ "${debouncedSearch}" || email ~ "${debouncedSearch}" || phone ~ "${debouncedSearch}"`
        : '';

      const result = await pb.collection('contact_submissions').getList(page, 50, {
        sort: '-created',
        filter: filterStr,
        $autoCancel: false
      });

      setLeads(result.items);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
      toast.error('Failed to load leads data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debouncedSearch]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    
    try {
      await pb.collection('contact_submissions').delete(id, { $autoCancel: false });
      toast.success('Lead deleted successfully');
      fetchLeads();
    } catch (error) {
      console.error('Failed to delete:', error);
      toast.error('Failed to delete lead');
    }
  };

  const exportToCSV = async () => {
    try {
      // Fetch all matching records for export, not just current page
      const filterStr = debouncedSearch
        ? `name ~ "${debouncedSearch}" || email ~ "${debouncedSearch}" || phone ~ "${debouncedSearch}"`
        : '';
        
      const allResults = await pb.collection('contact_submissions').getFullList({
        sort: '-created',
        filter: filterStr,
        $autoCancel: false
      });

      if (allResults.length === 0) {
        toast.info('No data to export');
        return;
      }

      const headers = ['Name', 'Email', 'Phone', 'Business Type', 'Message', 'Timestamp', 'Consent', 'Page Source', 'IP'];
      const csvContent = [
        headers.join(','),
        ...allResults.map(row => {
          return [
            `"${(row.name || '').replace(/"/g, '""')}"`,
            `"${(row.email || '').replace(/"/g, '""')}"`,
            `"${(row.phone || '').replace(/"/g, '""')}"`,
            `"${(row.businessType || '').replace(/"/g, '""')}"`,
            `"${(row.message || '').replace(/"/g, '""')}"`,
            `"${format(new Date(row.created), 'yyyy-MM-dd HH:mm:ss')}"`,
            row.consentGiven ? 'Yes' : 'No',
            `"${(row.pageSource || '').replace(/"/g, '""')}"`,
            `"${(row.ipAddress || '').replace(/"/g, '""')}"`
          ].join(',');
        })
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `leads_export_${format(new Date(), 'yyyyMMdd_HHmm')}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Export successful');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Failed to export data');
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col h-full">
      <Helmet>
        <title>Leads Management - Admin Portal</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Leads</h1>
          <p className="text-muted-foreground mt-1">Manage contact form submissions. New lead alerts are sent to <a href="mailto:admin@brandkraf.com" className="hover:text-foreground transition-colors underline">admin@brandkraf.com</a>.</p>
        </div>
        
        <Button onClick={exportToCSV} variant="outline" className="shrink-0 gap-2">
          <Download className="h-4 w-4" />
          Export to CSV
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white text-gray-900 border-gray-200"
            />
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto flex-1">
          <Table>
            <TableHeader className="bg-gray-50/80">
              <TableRow>
                <TableHead className="w-[200px]">Lead Info</TableHead>
                <TableHead className="w-[200px]">Contact</TableHead>
                <TableHead className="w-[150px]">Business Type</TableHead>
                <TableHead className="max-w-[300px]">Message</TableHead>
                <TableHead className="w-[150px]">Date</TableHead>
                <TableHead className="w-[80px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell><Skeleton className="h-10 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-10 w-full" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                  </TableRow>
                ))
              ) : leads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <FileWarning className="h-12 w-12 text-gray-300 mb-3" />
                      <p className="text-lg font-medium text-gray-900">No leads found</p>
                      <p className="text-sm">Try adjusting your search filters</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                leads.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-400 shrink-0" />
                        <span className="font-medium text-gray-900">{lead.name}</span>
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-xs">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${lead.consentGiven ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                          {lead.consentGiven ? 'Consent: Yes' : 'Consent: No'}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                          <a href={`mailto:${lead.email}`} className="hover:text-brandkraf-teal hover:underline truncate max-w-[150px] inline-block">{lead.email}</a>
                        </div>
                        {lead.phone && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                            <a href={`tel:${lead.phone}`} className="hover:text-brandkraf-teal hover:underline truncate">{lead.phone}</a>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Building2 className="h-4 w-4 text-gray-400 shrink-0" />
                        <span className="capitalize">{lead.businessType || 'N/A'}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-600 line-clamp-2 max-w-[300px]" title={lead.message}>
                        {lead.message}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                        <span>{format(new Date(lead.created), 'MMM d, yyyy')}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8"
                        title="Delete Lead"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Page {page} of {totalPages}
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminLeadsPage;