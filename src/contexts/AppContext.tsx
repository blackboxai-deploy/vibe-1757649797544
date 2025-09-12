'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import type { 
  AppConfig, 
  MapLevel, 
  FilterState, 
  ProvinceFeature
} from '@/types';

interface AppState {
  isConfigured: boolean;
  config: AppConfig;
  currentView: MapLevel;
  filters: FilterState;
  selectedProvince: ProvinceFeature | null;
  selectedBranchId: string | null;
}

type AppAction = 
  | { type: 'SET_CONFIG'; payload: AppConfig }
  | { type: 'SET_VIEW'; payload: MapLevel }
  | { type: 'SET_FILTERS'; payload: Partial<FilterState> }
  | { type: 'SELECT_PROVINCE'; payload: ProvinceFeature | null }
  | { type: 'SELECT_BRANCH'; payload: string | null }
  | { type: 'RESET_CONFIG' };

const initialState: AppState = {
  isConfigured: false,
  config: {
    targetProfit: 0,
    selectedSectors: [],
    selectedSubsectors: {} as Record<any, string[]>,
    selectedCustomerSegments: []
  },
  currentView: {
    type: 'national'
  },
  filters: {
    ageGroups: [],
    incomeRanges: [],
    businessSectors: [],
    customerSegments: [],
    showWondrUsers: true,
    showNonUsers: true,
    showSalesLeads: true
  },
  selectedProvince: null,
  selectedBranchId: null
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_CONFIG':
      return {
        ...state,
        isConfigured: true,
        config: action.payload
      };
    
    case 'SET_VIEW':
      return {
        ...state,
        currentView: action.payload
      };
    
    case 'SET_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    
    case 'SELECT_PROVINCE':
      return {
        ...state,
        selectedProvince: action.payload,
        currentView: action.payload ? 
          { type: 'province', provinceId: action.payload.properties.id } : 
          { type: 'national' }
      };
    
    case 'SELECT_BRANCH':
      return {
        ...state,
        selectedBranchId: action.payload,
        currentView: action.payload ?
          { ...state.currentView, type: 'branch', branchId: action.payload } :
          state.currentView
      };
    
    case 'RESET_CONFIG':
      return initialState;
    
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  actions: {
    setConfig: (config: AppConfig) => void;
    setView: (view: MapLevel) => void;
    setFilters: (filters: Partial<FilterState>) => void;
    selectProvince: (province: ProvinceFeature | null) => void;
    selectBranch: (branchId: string | null) => void;
    resetConfig: () => void;
    goToNational: () => void;
    goToProvince: (provinceId: string) => void;
    goToBranch: (branchId: string) => void;
  };
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    setConfig: (config: AppConfig) => dispatch({ type: 'SET_CONFIG', payload: config }),
    setView: (view: MapLevel) => dispatch({ type: 'SET_VIEW', payload: view }),
    setFilters: (filters: Partial<FilterState>) => dispatch({ type: 'SET_FILTERS', payload: filters }),
    selectProvince: (province: ProvinceFeature | null) => dispatch({ type: 'SELECT_PROVINCE', payload: province }),
    selectBranch: (branchId: string | null) => dispatch({ type: 'SELECT_BRANCH', payload: branchId }),
    resetConfig: () => dispatch({ type: 'RESET_CONFIG' }),
    
    // Navigation helpers
    goToNational: () => dispatch({ type: 'SET_VIEW', payload: { type: 'national' } }),
    goToProvince: (provinceId: string) => dispatch({ type: 'SET_VIEW', payload: { type: 'province', provinceId } }),
    goToBranch: (branchId: string) => dispatch({ type: 'SET_VIEW', payload: { type: 'branch', branchId } })
  };

  return (
    <AppContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Utility hooks
export const useCurrentView = () => {
  const { state } = useApp();
  return state.currentView;
};

export const useFilters = () => {
  const { state, actions } = useApp();
  return {
    filters: state.filters,
    setFilters: actions.setFilters
  };
};

export const useConfig = () => {
  const { state, actions } = useApp();
  return {
    config: state.config,
    isConfigured: state.isConfigured,
    setConfig: actions.setConfig,
    resetConfig: actions.resetConfig
  };
};