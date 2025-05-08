'use client';

import React from 'react';
import ClientDashboardLayout from '@/components/dashboard/client-dashboard-layout';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientDashboardLayout>
    {children}
  </ClientDashboardLayout>;
}