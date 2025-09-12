import type { BranchData, HexagonData, CustomerData } from '@/types';

export const mockBranches: BranchData[] = [
  // Jakarta branches
  {
    id: 'JK001',
    name: 'KC Jakarta Pusat',
    lat: -6.2088,
    lng: 106.8456,
    provinceId: 'JK',
    type: 'KC',
    wondrUsers: 12450,
    nonUsers: 8230,
    salesLeads: 340,
    deposits: 45000000000,
    loans: 38000000000,
    investments: 12000000000,
    radius: 10,
    potentialScore: 0.89
  },
  {
    id: 'JK002',
    name: 'KC Jakarta Selatan',
    lat: -6.2615,
    lng: 106.8106,
    provinceId: 'JK',
    type: 'KC',
    wondrUsers: 15600,
    nonUsers: 7890,
    salesLeads: 420,
    deposits: 52000000000,
    loans: 41000000000,
    investments: 15000000000,
    radius: 10,
    potentialScore: 0.92
  },
  
  // Surabaya branches
  {
    id: 'JI001',
    name: 'KC Surabaya',
    lat: -7.2575,
    lng: 112.7521,
    provinceId: 'JI',
    type: 'KC',
    wondrUsers: 9800,
    nonUsers: 6450,
    salesLeads: 280,
    deposits: 35000000000,
    loans: 28000000000,
    investments: 9500000000,
    radius: 10,
    potentialScore: 0.81
  },
  
  // Medan branches
  {
    id: 'SU001',
    name: 'KC Medan',
    lat: 3.5952,
    lng: 98.6722,
    provinceId: 'SU',
    type: 'KC',
    wondrUsers: 7650,
    nonUsers: 5320,
    salesLeads: 220,
    deposits: 28000000000,
    loans: 22000000000,
    investments: 7200000000,
    radius: 10,
    potentialScore: 0.74
  },
  
  // Bandung branches
  {
    id: 'JB001',
    name: 'KC Bandung',
    lat: -6.9175,
    lng: 107.6191,
    provinceId: 'JB',
    type: 'KC',
    wondrUsers: 8900,
    nonUsers: 5780,
    salesLeads: 260,
    deposits: 32000000000,
    loans: 25000000000,
    investments: 8100000000,
    radius: 10,
    potentialScore: 0.78
  }
];

export const generateHexagonGrid = (centerLat: number, centerLng: number, radius: number): HexagonData[] => {
  const hexagons: HexagonData[] = [];
  const gridSize = 20; // Number of hexagons per side
  const hexSize = (radius * 1000) / gridSize; // Size in meters
  
  for (let q = -gridSize; q <= gridSize; q++) {
    const r1 = Math.max(-gridSize, -q - gridSize);
    const r2 = Math.min(gridSize, -q + gridSize);
    
    for (let r = r1; r <= r2; r++) {
      // Convert hex coordinates to lat/lng
      const x = hexSize * (Math.sqrt(3) * q + Math.sqrt(3) / 2 * r);
      const y = hexSize * (3/2 * r);
      
      // Convert to lat/lng offset
      const latOffset = y / 111000; // Rough conversion
      const lngOffset = x / (111000 * Math.cos(centerLat * Math.PI / 180));
      
      const lat = centerLat + latOffset;
      const lng = centerLng + lngOffset;
      
      // Generate realistic hex data
      const customerCount = Math.floor(Math.random() * 100) + 20;
      const wondrUsers = Math.floor(customerCount * (0.15 + Math.random() * 0.3));
      const nonUsers = customerCount - wondrUsers;
      
      const potentialScore = Math.random();
      const trafficLevel: 'high' | 'medium' | 'low' = 
        potentialScore > 0.7 ? 'high' : 
        potentialScore > 0.4 ? 'medium' : 'low';
      
      hexagons.push({
        id: `hex_${q}_${r}`,
        lat,
        lng,
        potentialScore,
        trafficLevel,
        isUnderserved: nonUsers > wondrUsers * 2,
        customerCount,
        wondrUsers,
        nonUsers
      });
    }
  }
  
  return hexagons;
};

export const generateCustomerData = (centerLat: number, centerLng: number, radius: number): CustomerData[] => {
  const customers: CustomerData[] = [];
  const customerCount = 500; // Number of customer points to generate
  
  for (let i = 0; i < customerCount; i++) {
    // Generate random point within radius
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random()) * radius * 1000; // radius in meters
    
    const latOffset = (r * Math.cos(angle)) / 111000;
    const lngOffset = (r * Math.sin(angle)) / (111000 * Math.cos(centerLat * Math.PI / 180));
    
    const lat = centerLat + latOffset;
    const lng = centerLng + lngOffset;
    
    // Randomly assign customer type with realistic distribution
    const rand = Math.random();
    const type: CustomerData['type'] = 
      rand < 0.25 ? 'wondr_user' : 
      rand < 0.85 ? 'non_user' : 'sales_lead';
    
    const segments = ['Pekerja', 'Traveler', 'Gamer', 'Pelajar/Mahasiswa', 'Ibu Rumah Tangga', 'Pengusaha', 'Investor', 'Pensiunan'];
    const segment = segments[Math.floor(Math.random() * segments.length)] as CustomerData['segment'];
    
    customers.push({
      type,
      lat,
      lng,
      segment,
      age: 18 + Math.floor(Math.random() * 50),
      income: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
      businessSector: Math.random() > 0.5 ? 'Perdagangan Besar Dan Eceran, Reparasi Mobil Dan Motor' : undefined
    });
  }
  
  return customers;
};

export const getBranchesByProvince = (provinceId: string): BranchData[] => {
  return mockBranches.filter(branch => branch.provinceId === provinceId);
};

export const getBranchById = (branchId: string): BranchData | undefined => {
  return mockBranches.find(branch => branch.id === branchId);
};