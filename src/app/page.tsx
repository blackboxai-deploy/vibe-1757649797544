'use client';

import React from 'react';
import { ConfigurationPanel } from '@/components/ConfigurationPanel';
import { MainDashboard } from '@/components/Dashboard/MainDashboard';
import { useApp } from '@/contexts/AppContext';
import type { AppConfig } from '@/types';

export default function HomePage() {
  const { state } = useApp();

  const handleConfigurationComplete = (config: AppConfig) => {
    console.log('Configuration completed:', config);
  };

  if (!state.isConfigured) {
    return <ConfigurationPanel onComplete={handleConfigurationComplete} />;
  }

  return <MainDashboard />;
}