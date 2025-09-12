'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { businessSectors, customerSegments } from '@/lib/data/business-sectors';
import { useApp } from '@/contexts/AppContext';
import type { BusinessSector, CustomerSegment, AppConfig } from '@/types';

interface ConfigurationPanelProps {
  onComplete: (config: AppConfig) => void;
}

export const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({ onComplete }) => {
  const { actions } = useApp();
  const [targetProfit, setTargetProfit] = useState<string>('');
  const [selectedSectors, setSelectedSectors] = useState<BusinessSector[]>([]);
  const [selectedSubsectors, setSelectedSubsectors] = useState<Record<BusinessSector, string[]>>({} as Record<BusinessSector, string[]>);
  const [selectedCustomerSegments, setSelectedCustomerSegments] = useState<CustomerSegment[]>([]);
  const [expandedSectors, setExpandedSectors] = useState<Record<BusinessSector, boolean>>({} as Record<BusinessSector, boolean>);

  const formatNumber = (value: string) => {
    const number = value.replace(/\D/g, '');
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleTargetProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setTargetProfit(formatted);
  };

  const handleSectorChange = (sector: BusinessSector, checked: boolean) => {
    if (checked) {
      setSelectedSectors([...selectedSectors, sector]);
      setExpandedSectors({ ...expandedSectors, [sector]: true });
    } else {
      setSelectedSectors(selectedSectors.filter(s => s !== sector));
      setSelectedSubsectors({
        ...selectedSubsectors,
        [sector]: []
      });
      setExpandedSectors({ ...expandedSectors, [sector]: false });
    }
  };

  const handleSubsectorChange = (sector: BusinessSector, subsector: string, checked: boolean) => {
    const current = selectedSubsectors[sector] || [];
    const updated = checked
      ? [...current, subsector]
      : current.filter(s => s !== subsector);
    
    setSelectedSubsectors({
      ...selectedSubsectors,
      [sector]: updated
    });
  };

  const handleCustomerSegmentChange = (segment: CustomerSegment, checked: boolean) => {
    if (checked) {
      setSelectedCustomerSegments([...selectedCustomerSegments, segment]);
    } else {
      setSelectedCustomerSegments(selectedCustomerSegments.filter(s => s !== segment));
    }
  };

  const toggleSectorExpansion = (sector: BusinessSector) => {
    setExpandedSectors({
      ...expandedSectors,
      [sector]: !expandedSectors[sector]
    });
  };

  const handleSubmit = () => {
    if (!targetProfit || selectedSectors.length === 0 || selectedCustomerSegments.length === 0) {
      return;
    }

    const config: AppConfig = {
      targetProfit: parseInt(targetProfit.replace(/\./g, '')),
      selectedSectors,
      selectedSubsectors,
      selectedCustomerSegments
    };

    actions.setConfig(config);
    onComplete(config);
  };

  const getTotalSelectedSubsectors = () => {
    return Object.values(selectedSubsectors).reduce((total, subsectors) => total + (subsectors as string[]).length, 0);
  };

  const isFormValid = targetProfit && selectedSectors.length > 0 && selectedCustomerSegments.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Wondr Analytics Platform</h1>
          <p className="text-xl text-gray-600">Configure your business strategy parameters</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              Strategy Configuration
            </CardTitle>
            <CardDescription>
              Set up your target profit and business focus areas to get personalized insights across Indonesia
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Target Profit */}
            <div className="space-y-2">
              <Label htmlFor="targetProfit" className="text-lg font-semibold">Target Profit (IDR)</Label>
              <div className="relative">
                <Input
                  id="targetProfit"
                  type="text"
                  placeholder="e.g., 20.000.000.000"
                  value={targetProfit}
                  onChange={handleTargetProfitChange}
                  className="text-lg h-12"
                />
                <span className="absolute right-3 top-3 text-sm text-gray-500">IDR</span>
              </div>
              {targetProfit && (
                <p className="text-sm text-gray-600">
                  Target: {targetProfit} IDR ({Math.round(parseInt(targetProfit.replace(/\./g, '')) / 1000000000)} Billion)
                </p>
              )}
            </div>

            <Separator />

            {/* Business Sectors */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Business Sectors & Subsectors</Label>
                <Badge variant="secondary">
                  {selectedSectors.length} sectors, {getTotalSelectedSubsectors()} subsectors selected
                </Badge>
              </div>
              
              <ScrollArea className="h-96 w-full border rounded-md p-4">
                <div className="space-y-4">
                  {(Object.keys(businessSectors) as BusinessSector[]).map((sector) => (
                    <div key={sector} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={sector}
                          checked={selectedSectors.includes(sector)}
                          onCheckedChange={(checked) => handleSectorChange(sector, checked as boolean)}
                        />
                        <Label
                          htmlFor={sector}
                          className="font-medium cursor-pointer flex-1"
                          onClick={() => toggleSectorExpansion(sector)}
                        >
                          {sector}
                        </Label>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleSectorExpansion(sector)}
                          className="h-6 w-6 p-0"
                        >
                          {expandedSectors[sector] ? '−' : '+'}
                        </Button>
                      </div>
                      
                      {expandedSectors[sector] && (
                        <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-4">
                          {businessSectors[sector].map((subsector) => (
                            <div key={subsector} className="flex items-center space-x-2">
                              <Checkbox
                                id={`${sector}-${subsector}`}
                                checked={(selectedSubsectors[sector] || []).includes(subsector)}
                                onCheckedChange={(checked) => 
                                  handleSubsectorChange(sector, subsector, checked as boolean)
                                }
                                disabled={!selectedSectors.includes(sector)}
                              />
                              <Label
                                htmlFor={`${sector}-${subsector}`}
                                className="text-sm cursor-pointer"
                              >
                                {subsector}
                              </Label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <Separator />

            {/* Customer Segmentation */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-semibold">Customer Segmentation</Label>
                <Badge variant="secondary">{selectedCustomerSegments.length} segments selected</Badge>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {customerSegments.map((segment) => (
                  <div key={segment} className="flex items-center space-x-2">
                    <Checkbox
                      id={segment}
                      checked={selectedCustomerSegments.includes(segment)}
                      onCheckedChange={(checked) => handleCustomerSegmentChange(segment, checked as boolean)}
                    />
                    <Label htmlFor={segment} className="cursor-pointer">
                      {segment}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!isFormValid}
                size="lg"
                className="px-12 py-3 text-lg"
              >
                Start Analysis
                <span className="ml-2">→</span>
              </Button>
            </div>

            {!isFormValid && (
              <div className="text-center">
                <p className="text-sm text-red-600">
                  Please fill in target profit, select at least one business sector, and one customer segment
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};