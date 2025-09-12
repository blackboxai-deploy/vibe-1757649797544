import type { FeatureCollection, Feature, Polygon } from 'geojson';

export interface ProvinceProperties {
  id: string;
  name: string;
  capital: string;
  population: number;
  area: number; // km²
  realizationStatus: 'green' | 'yellow' | 'red';
  realizationPercentage: number;
  targetProfit: number;
  actualProfit: number;
  wondrUsers: number;
  nonUsers: number;
  totalBranches: number;
  totalATMs: number;
  totalAgen46: number;
  subsectorDensity: number; // 0-1 for heatmap intensity
}

export type ProvinceFeature = Feature<Polygon, ProvinceProperties>;
export type IndonesiaGeoJSON = FeatureCollection<Polygon, ProvinceProperties>;

// Mock Indonesian provinces with realistic boundaries (simplified)
export const indonesiaProvinces: IndonesiaGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [95.2, 5.8], [97.8, 5.8], [97.8, 3.2], [95.2, 3.2], [95.2, 5.8]
        ]]
      },
      properties: {
        id: "NAD",
        name: "Aceh",
        capital: "Banda Aceh",
        population: 5371977,
        area: 57956,
        realizationStatus: "green",
        realizationPercentage: 87,
        targetProfit: 50000000000,
        actualProfit: 43500000000,
        wondrUsers: 892000,
        nonUsers: 4479977,
        totalBranches: 45,
        totalATMs: 120,
        totalAgen46: 234,
        subsectorDensity: 0.75
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [98.0, 4.0], [100.8, 4.0], [100.8, 1.0], [98.0, 1.0], [98.0, 4.0]
        ]]
      },
      properties: {
        id: "SU",
        name: "Sumatera Utara",
        capital: "Medan",
        population: 15386640,
        area: 72981,
        realizationStatus: "green",
        realizationPercentage: 92,
        targetProfit: 120000000000,
        actualProfit: 110400000000,
        wondrUsers: 2456000,
        nonUsers: 12930640,
        totalBranches: 87,
        totalATMs: 245,
        totalAgen46: 456,
        subsectorDensity: 0.88
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [98.5, 1.5], [101.5, 1.5], [101.5, -1.2], [98.5, -1.2], [98.5, 1.5]
        ]]
      },
      properties: {
        id: "SB",
        name: "Sumatera Barat",
        capital: "Padang",
        population: 5534472,
        area: 42012,
        realizationStatus: "yellow",
        realizationPercentage: 68,
        targetProfit: 45000000000,
        actualProfit: 30600000000,
        wondrUsers: 743000,
        nonUsers: 4791472,
        totalBranches: 42,
        totalATMs: 98,
        totalAgen46: 187,
        subsectorDensity: 0.62
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [100.0, 0.8], [104.5, 0.8], [104.5, -4.2], [100.0, -4.2], [100.0, 0.8]
        ]]
      },
      properties: {
        id: "RI",
        name: "Riau",
        capital: "Pekanbaru",
        population: 6394087,
        area: 87023,
        realizationStatus: "green",
        realizationPercentage: 84,
        targetProfit: 75000000000,
        actualProfit: 63000000000,
        wondrUsers: 1087000,
        nonUsers: 5307087,
        totalBranches: 54,
        totalATMs: 156,
        totalAgen46: 298,
        subsectorDensity: 0.79
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [101.5, -1.0], [105.8, -1.0], [105.8, -4.8], [101.5, -4.8], [101.5, -1.0]
        ]]
      },
      properties: {
        id: "JA",
        name: "Jambi",
        capital: "Jambi",
        population: 3566156,
        area: 50058,
        realizationStatus: "yellow",
        realizationPercentage: 71,
        targetProfit: 35000000000,
        actualProfit: 24850000000,
        wondrUsers: 534000,
        nonUsers: 3032156,
        totalBranches: 28,
        totalATMs: 67,
        totalAgen46: 134,
        subsectorDensity: 0.58
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [102.0, -2.5], [106.8, -2.5], [106.8, -5.8], [102.0, -5.8], [102.0, -2.5]
        ]]
      },
      properties: {
        id: "SS",
        name: "Sumatera Selatan",
        capital: "Palembang",
        population: 8497927,
        area: 91592,
        realizationStatus: "green",
        realizationPercentage: 88,
        targetProfit: 65000000000,
        actualProfit: 57200000000,
        wondrUsers: 1354000,
        nonUsers: 7143927,
        totalBranches: 62,
        totalATMs: 178,
        totalAgen46: 321,
        subsectorDensity: 0.73
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [106.0, 5.5], [108.8, 5.5], [108.8, -7.8], [106.0, -7.8], [106.0, 5.5]
        ]]
      },
      properties: {
        id: "JK",
        name: "DKI Jakarta",
        capital: "Jakarta",
        population: 10609681,
        area: 664,
        realizationStatus: "green",
        realizationPercentage: 95,
        targetProfit: 200000000000,
        actualProfit: 190000000000,
        wondrUsers: 3892000,
        nonUsers: 6717681,
        totalBranches: 156,
        totalATMs: 567,
        totalAgen46: 789,
        subsectorDensity: 0.95
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [105.5, -5.2], [108.5, -5.2], [108.5, -7.8], [105.5, -7.8], [105.5, -5.2]
        ]]
      },
      properties: {
        id: "JB",
        name: "Jawa Barat",
        capital: "Bandung",
        population: 48274160,
        area: 35377,
        realizationStatus: "green",
        realizationPercentage: 91,
        targetProfit: 350000000000,
        actualProfit: 318500000000,
        wondrUsers: 8934000,
        nonUsers: 39340160,
        totalBranches: 234,
        totalATMs: 789,
        totalAgen46: 1245,
        subsectorDensity: 0.92
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [108.0, -6.2], [111.8, -6.2], [111.8, -8.8], [108.0, -8.8], [108.0, -6.2]
        ]]
      },
      properties: {
        id: "JT",
        name: "Jawa Tengah",
        capital: "Semarang",
        population: 36516035,
        area: 32800,
        realizationStatus: "yellow",
        realizationPercentage: 76,
        targetProfit: 280000000000,
        actualProfit: 212800000000,
        wondrUsers: 6234000,
        nonUsers: 30282035,
        totalBranches: 189,
        totalATMs: 534,
        totalAgen46: 892,
        subsectorDensity: 0.81
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [111.0, -7.0], [114.8, -7.0], [114.8, -8.8], [111.0, -8.8], [111.0, -7.0]
        ]]
      },
      properties: {
        id: "JI",
        name: "Jawa Timur",
        capital: "Surabaya",
        population: 40665795,
        area: 47799,
        realizationStatus: "green",
        realizationPercentage: 89,
        targetProfit: 320000000000,
        actualProfit: 284800000000,
        wondrUsers: 7456000,
        nonUsers: 33209795,
        totalBranches: 213,
        totalATMs: 645,
        totalAgen46: 1034,
        subsectorDensity: 0.86
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [115.0, -8.2], [117.8, -8.2], [117.8, -9.2], [115.0, -9.2], [115.0, -8.2]
        ]]
      },
      properties: {
        id: "BA",
        name: "Bali",
        capital: "Denpasar",
        population: 4362777,
        area: 5780,
        realizationStatus: "green",
        realizationPercentage: 93,
        targetProfit: 65000000000,
        actualProfit: 60450000000,
        wondrUsers: 1234000,
        nonUsers: 3128777,
        totalBranches: 45,
        totalATMs: 134,
        totalAgen46: 223,
        subsectorDensity: 0.89
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [116.0, -8.2], [124.0, -8.2], [124.0, -11.2], [116.0, -11.2], [116.0, -8.2]
        ]]
      },
      properties: {
        id: "NTB",
        name: "Nusa Tenggara Barat",
        capital: "Mataram",
        population: 5320092,
        area: 18572,
        realizationStatus: "yellow",
        realizationPercentage: 65,
        targetProfit: 35000000000,
        actualProfit: 22750000000,
        wondrUsers: 567000,
        nonUsers: 4753092,
        totalBranches: 32,
        totalATMs: 78,
        totalAgen46: 145,
        subsectorDensity: 0.52
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [118.0, -8.5], [131.0, -8.5], [131.0, -12.0], [118.0, -12.0], [118.0, -8.5]
        ]]
      },
      properties: {
        id: "NTT",
        name: "Nusa Tenggara Timur",
        capital: "Kupang",
        population: 5325566,
        area: 48718,
        realizationStatus: "red",
        realizationPercentage: 45,
        targetProfit: 30000000000,
        actualProfit: 13500000000,
        wondrUsers: 234000,
        nonUsers: 5091566,
        totalBranches: 23,
        totalATMs: 45,
        totalAgen46: 87,
        subsectorDensity: 0.32
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [108.0, -3.8], [118.0, -3.8], [118.0, -4.8], [108.0, -4.8], [108.0, -3.8]
        ]]
      },
      properties: {
        id: "KB",
        name: "Kalimantan Barat",
        capital: "Pontianak",
        population: 5414390,
        area: 147307,
        realizationStatus: "yellow",
        realizationPercentage: 69,
        targetProfit: 40000000000,
        actualProfit: 27600000000,
        wondrUsers: 634000,
        nonUsers: 4780390,
        totalBranches: 38,
        totalATMs: 89,
        totalAgen46: 167,
        subsectorDensity: 0.61
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [112.0, -2.8], [118.0, -2.8], [118.0, -4.0], [112.0, -4.0], [112.0, -2.8]
        ]]
      },
      properties: {
        id: "KT",
        name: "Kalimantan Tengah",
        capital: "Palangka Raya",
        population: 2669969,
        area: 153564,
        realizationStatus: "red",
        realizationPercentage: 52,
        targetProfit: 25000000000,
        actualProfit: 13000000000,
        wondrUsers: 287000,
        nonUsers: 2382969,
        totalBranches: 19,
        totalATMs: 42,
        totalAgen46: 78,
        subsectorDensity: 0.38
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [114.0, -2.5], [119.0, -2.5], [119.0, -4.5], [114.0, -4.5], [114.0, -2.5]
        ]]
      },
      properties: {
        id: "KS",
        name: "Kalimantan Selatan",
        capital: "Banjarmasin",
        population: 4182695,
        area: 38744,
        realizationStatus: "green",
        realizationPercentage: 82,
        targetProfit: 42000000000,
        actualProfit: 34440000000,
        wondrUsers: 734000,
        nonUsers: 3448695,
        totalBranches: 35,
        totalATMs: 98,
        totalAgen46: 189,
        subsectorDensity: 0.74
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [115.5, 2.8], [119.5, 2.8], [119.5, -1.2], [115.5, -1.2], [115.5, 2.8]
        ]]
      },
      properties: {
        id: "KI",
        name: "Kalimantan Timur",
        capital: "Samarinda",
        population: 3766000,
        area: 129066,
        realizationStatus: "green",
        realizationPercentage: 86,
        targetProfit: 55000000000,
        actualProfit: 47300000000,
        wondrUsers: 823000,
        nonUsers: 2943000,
        totalBranches: 42,
        totalATMs: 123,
        totalAgen46: 234,
        subsectorDensity: 0.78
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [117.0, 3.2], [122.0, 3.2], [122.0, 0.8], [117.0, 0.8], [117.0, 3.2]
        ]]
      },
      properties: {
        id: "KU",
        name: "Kalimantan Utara",
        capital: "Tanjung Selor",
        population: 701814,
        area: 75467,
        realizationStatus: "yellow",
        realizationPercentage: 63,
        targetProfit: 15000000000,
        actualProfit: 9450000000,
        wondrUsers: 95000,
        nonUsers: 606814,
        totalBranches: 8,
        totalATMs: 21,
        totalAgen46: 34,
        subsectorDensity: 0.45
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.0, 2.2], [125.5, 2.2], [125.5, -6.2], [119.0, -6.2], [119.0, 2.2]
        ]]
      },
      properties: {
        id: "SN",
        name: "Sulawesi Utara",
        capital: "Manado",
        population: 2621923,
        area: 13851,
        realizationStatus: "green",
        realizationPercentage: 81,
        targetProfit: 28000000000,
        actualProfit: 22680000000,
        wondrUsers: 456000,
        nonUsers: 2165923,
        totalBranches: 26,
        totalATMs: 74,
        totalAgen46: 134,
        subsectorDensity: 0.72
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.5, -0.5], [124.5, -0.5], [124.5, -3.8], [119.5, -3.8], [119.5, -0.5]
        ]]
      },
      properties: {
        id: "ST",
        name: "Sulawesi Tengah",
        capital: "Palu",
        population: 2985734,
        area: 61841,
        realizationStatus: "yellow",
        realizationPercentage: 59,
        targetProfit: 22000000000,
        actualProfit: 12980000000,
        wondrUsers: 323000,
        nonUsers: 2662734,
        totalBranches: 21,
        totalATMs: 48,
        totalAgen46: 89,
        subsectorDensity: 0.48
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [119.0, -3.5], [125.0, -3.5], [125.0, -6.5], [119.0, -6.5], [119.0, -3.5]
        ]]
      },
      properties: {
        id: "SS2",
        name: "Sulawesi Selatan",
        capital: "Makassar",
        population: 9073509,
        area: 46717,
        realizationStatus: "green",
        realizationPercentage: 87,
        targetProfit: 85000000000,
        actualProfit: 73950000000,
        wondrUsers: 1567000,
        nonUsers: 7506509,
        totalBranches: 78,
        totalATMs: 234,
        totalAgen46: 423,
        subsectorDensity: 0.83
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [121.0, -3.2], [126.0, -3.2], [126.0, -5.8], [121.0, -5.8], [121.0, -3.2]
        ]]
      },
      properties: {
        id: "SG",
        name: "Sulawesi Tenggara",
        capital: "Kendari",
        population: 2624875,
        area: 38067,
        realizationStatus: "red",
        realizationPercentage: 48,
        targetProfit: 20000000000,
        actualProfit: 9600000000,
        wondrUsers: 234000,
        nonUsers: 2390875,
        totalBranches: 18,
        totalATMs: 38,
        totalAgen46: 67,
        subsectorDensity: 0.39
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [122.0, -0.8], [127.0, -0.8], [127.0, -2.8], [122.0, -2.8], [122.0, -0.8]
        ]]
      },
      properties: {
        id: "GO",
        name: "Gorontalo",
        capital: "Gorontalo",
        population: 1171681,
        area: 11257,
        realizationStatus: "yellow",
        realizationPercentage: 67,
        targetProfit: 12000000000,
        actualProfit: 8040000000,
        wondrUsers: 134000,
        nonUsers: 1037681,
        totalBranches: 12,
        totalATMs: 28,
        totalAgen46: 45,
        subsectorDensity: 0.55
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [120.0, -1.8], [125.0, -1.8], [125.0, -3.2], [120.0, -3.2], [120.0, -1.8]
        ]]
      },
      properties: {
        id: "SR",
        name: "Sulawesi Barat",
        capital: "Mamuju",
        population: 1419229,
        area: 16787,
        realizationStatus: "red",
        realizationPercentage: 43,
        targetProfit: 15000000000,
        actualProfit: 6450000000,
        wondrUsers: 123000,
        nonUsers: 1296229,
        totalBranches: 11,
        totalATMs: 23,
        totalAgen46: 41,
        subsectorDensity: 0.34
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [126.0, -2.0], [132.0, -2.0], [132.0, -9.0], [126.0, -9.0], [126.0, -2.0]
        ]]
      },
      properties: {
        id: "MA",
        name: "Maluku",
        capital: "Ambon",
        population: 1848923,
        area: 46914,
        realizationStatus: "red",
        realizationPercentage: 41,
        targetProfit: 18000000000,
        actualProfit: 7380000000,
        wondrUsers: 156000,
        nonUsers: 1692923,
        totalBranches: 14,
        totalATMs: 32,
        totalAgen46: 56,
        subsectorDensity: 0.31
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [124.0, 1.5], [129.5, 1.5], [129.5, -3.5], [124.0, -3.5], [124.0, 1.5]
        ]]
      },
      properties: {
        id: "MU",
        name: "Maluku Utara",
        capital: "Ternate",
        population: 1282937,
        area: 31982,
        realizationStatus: "red",
        realizationPercentage: 38,
        targetProfit: 14000000000,
        actualProfit: 5320000000,
        wondrUsers: 98000,
        nonUsers: 1184937,
        totalBranches: 9,
        totalATMs: 21,
        totalAgen46: 34,
        subsectorDensity: 0.28
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [130.0, -0.5], [142.0, -0.5], [142.0, -12.0], [130.0, -12.0], [130.0, -0.5]
        ]]
      },
      properties: {
        id: "PA",
        name: "Papua",
        capital: "Jayapura",
        population: 4303707,
        area: 319036,
        realizationStatus: "red",
        realizationPercentage: 35,
        targetProfit: 32000000000,
        actualProfit: 11200000000,
        wondrUsers: 234000,
        nonUsers: 4069707,
        totalBranches: 21,
        totalATMs: 45,
        totalAgen46: 78,
        subsectorDensity: 0.25
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[
          [130.5, -0.2], [135.0, -0.2], [135.0, -4.5], [130.5, -4.5], [130.5, -0.2]
        ]]
      },
      properties: {
        id: "PB",
        name: "Papua Barat",
        capital: "Manokwari",
        population: 1134068,
        area: 99671,
        realizationStatus: "red",
        realizationPercentage: 32,
        targetProfit: 12000000000,
        actualProfit: 3840000000,
        wondrUsers: 78000,
        nonUsers: 1056068,
        totalBranches: 8,
        totalATMs: 18,
        totalAgen46: 28,
        subsectorDensity: 0.22
      }
    }
  ]
};

export const getProvinceById = (id: string): ProvinceFeature | undefined => {
  return indonesiaProvinces.features.find(province => province.properties.id === id);
};

export const getProvincesByStatus = (status: 'green' | 'yellow' | 'red'): ProvinceFeature[] => {
  return indonesiaProvinces.features.filter(province => province.properties.realizationStatus === status);
};

export const getTotalStats = () => {
  const features = indonesiaProvinces.features;
  return {
    totalPopulation: features.reduce((sum, f) => sum + f.properties.population, 0),
    totalWondrUsers: features.reduce((sum, f) => sum + f.properties.wondrUsers, 0),
    totalNonUsers: features.reduce((sum, f) => sum + f.properties.nonUsers, 0),
    totalBranches: features.reduce((sum, f) => sum + f.properties.totalBranches, 0),
    totalATMs: features.reduce((sum, f) => sum + f.properties.totalATMs, 0),
    totalAgen46: features.reduce((sum, f) => sum + f.properties.totalAgen46, 0),
    totalTargetProfit: features.reduce((sum, f) => sum + f.properties.targetProfit, 0),
    totalActualProfit: features.reduce((sum, f) => sum + f.properties.actualProfit, 0),
    greenProvinces: features.filter(f => f.properties.realizationStatus === 'green').length,
    yellowProvinces: features.filter(f => f.properties.realizationStatus === 'yellow').length,
    redProvinces: features.filter(f => f.properties.realizationStatus === 'red').length
  };
};