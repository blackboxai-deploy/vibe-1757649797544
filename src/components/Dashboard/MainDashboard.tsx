'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';

const MapContainerWrapper = dynamic(() => import('@/components/Map/MapContainer').then(mod => ({ default: mod.MapContainerWrapper })), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-100 flex items-center justify-center">Loading map...</div>
});
import { useApp } from '@/contexts/AppContext';
import { getTotalStats } from '@/lib/data/indonesia-provinces';

export const MainDashboard: React.FC = () => {
  const { state, actions } = useApp();
  const stats = getTotalStats();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };

  const getRealizationPercentage = () => {
    return Math.round((stats.totalActualProfit / stats.totalTargetProfit) * 100);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Wondr Analytics Platform</h1>
            <p className="text-gray-600">Indonesian Market Analysis & Growth Opportunities</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary">
              Target: {formatCurrency(state.config.targetProfit)}
            </Badge>
            <Button 
              variant="outline" 
              onClick={actions.resetConfig}
              className="text-sm"
            >
              Reconfigure
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          {/* Navigation Breadcrumb */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Navigation</h3>
            <div className="flex items-center gap-2 text-sm">
              <button 
                className={`px-2 py-1 rounded ${
                  state.currentView.type === 'national' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={actions.goToNational}
              >
                National
              </button>
              {state.currentView.type !== 'national' && (
                <>
                  <span className="text-gray-400">→</span>
                  <button 
                    className={`px-2 py-1 rounded ${
                      state.currentView.type === 'province' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {state.selectedProvince?.properties.name || 'Province'}
                  </button>
                </>
              )}
              {state.currentView.type === 'branch' && (
                <>
                  <span className="text-gray-400">→</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    Branch
                  </span>
                </>
              )}
            </div>
          </div>

          <Separator className="mb-6" />

          {/* National Overview Stats */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold">National Overview</h3>
            
            <Card className="p-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Population</span>
                  <span className="font-semibold">{formatNumber(stats.totalPopulation)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Wondr Users</span>
                  <span className="font-semibold text-green-600">{formatNumber(stats.totalWondrUsers)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Non-Users</span>
                  <span className="font-semibold text-gray-600">{formatNumber(stats.totalNonUsers)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span>User Adoption</span>
                  <span className="font-semibold">
                    {Math.round((stats.totalWondrUsers / stats.totalPopulation) * 100)}%
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Branches</span>
                  <span className="font-semibold">{formatNumber(stats.totalBranches)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ATMs</span>
                  <span className="font-semibold">{formatNumber(stats.totalATMs)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Agen46</span>
                  <span className="font-semibold">{formatNumber(stats.totalAgen46)}</span>
                </div>
              </div>
            </Card>

            <Card className="p-3">
              <div className="space-y-2">
                <div className="text-sm font-semibold mb-2">Profit Realization</div>
                <div className="flex justify-between text-sm">
                  <span>Target</span>
                  <span className="font-semibold">{formatCurrency(stats.totalTargetProfit)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Actual</span>
                  <span className="font-semibold">{formatCurrency(stats.totalActualProfit)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Realization</span>
                  <span className={
                    getRealizationPercentage() >= 80 ? 'text-green-600' :
                    getRealizationPercentage() >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }>
                    {getRealizationPercentage()}%
                  </span>
                </div>
              </div>
            </Card>
          </div>

          <Separator className="mb-6" />

          {/* Province Status Summary */}
          <div className="space-y-4">
            <h3 className="font-semibold">Province Status</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.greenProvinces}</div>
                <div className="text-xs text-green-700">Green</div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.yellowProvinces}</div>
                <div className="text-xs text-yellow-700">Yellow</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-red-600">{stats.redProvinces}</div>
                <div className="text-xs text-red-700">Red</div>
              </div>
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold">Current Configuration</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium">Business Sectors ({state.config.selectedSectors.length})</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {state.config.selectedSectors.slice(0, 3).map(sector => (
                    <Badge key={sector} variant="outline" className="text-xs">
                      {sector.split(' ')[0]}...
                    </Badge>
                  ))}
                  {state.config.selectedSectors.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{state.config.selectedSectors.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium">Customer Segments ({state.config.selectedCustomerSegments.length})</div>
                <div className="mt-1 flex flex-wrap gap-1">
                  {state.config.selectedCustomerSegments.slice(0, 4).map(segment => (
                    <Badge key={segment} variant="outline" className="text-xs">
                      {segment}
                    </Badge>
                  ))}
                  {state.config.selectedCustomerSegments.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{state.config.selectedCustomerSegments.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="flex-1">
          <MapContainerWrapper className="h-full" />
        </div>
      </div>
    </div>
  );
};