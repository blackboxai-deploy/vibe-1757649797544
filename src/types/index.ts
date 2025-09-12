import type { BusinessSector, CustomerSegment } from '@/lib/data/business-sectors';
import type { ProvinceFeature } from '@/lib/data/indonesia-provinces';

export interface AppConfig {
  targetProfit: number;
  selectedSectors: BusinessSector[];
  selectedSubsectors: Record<BusinessSector, string[]>;
  selectedCustomerSegments: CustomerSegment[];
}

export interface MapLevel {
  type: 'national' | 'province' | 'branch';
  provinceId?: string;
  branchId?: string;
}

export interface BranchData {
  id: string;
  name: string;
  lat: number;
  lng: number;
  provinceId: string;
  type: 'KC' | 'KCP' | 'KK';
  wondrUsers: number;
  nonUsers: number;
  salesLeads: number;
  deposits: number;
  loans: number;
  investments: number;
  radius: number; // 10km
  potentialScore: number; // 0-1
}

export interface FinancialMetrics {
  deposits: number;
  loans: number;
  investments: number;
  totalAssets: number;
  growth: number; // percentage
}

export interface CustomerData {
  type: 'wondr_user' | 'non_user' | 'sales_lead';
  lat: number;
  lng: number;
  segment: CustomerSegment;
  age: number;
  income: string;
  businessSector?: string;
}

export interface HexagonData {
  id: string;
  lat: number;
  lng: number;
  potentialScore: number; // 0-1
  trafficLevel: 'high' | 'medium' | 'low';
  isUnderserved: boolean;
  customerCount: number;
  wondrUsers: number;
  nonUsers: number;
}

export interface FilterState {
  ageGroups: string[];
  incomeRanges: string[];
  businessSectors: string[];
  customerSegments: string[];
  showWondrUsers: boolean;
  showNonUsers: boolean;
  showSalesLeads: boolean;
}

export interface ChartData {
  name: string;
  value: number;
  percentage?: number;
  color?: string;
}

export interface TrendData {
  month: string;
  value: number;
  target?: number;
}

// Map view types
export type ViewLevel = 'national' | 'province' | 'branch';

// Status types
export type RealizationStatus = 'green' | 'yellow' | 'red';

// Infrastructure types
export interface InfrastructurePoint {
  id: string;
  type: 'KC' | 'Agen46' | 'ATM';
  name: string;
  lat: number;
  lng: number;
  status: 'active' | 'inactive';
}

// Value chain types
export interface ValueChainPoint {
  id: string;
  type: 'producer' | 'distributor' | 'consumer';
  name: string;
  lat: number;
  lng: number;
  isWondrUser: boolean;
  businessSector: string;
  volume: number; // business volume
}

export { type BusinessSector, type CustomerSegment, type ProvinceFeature };