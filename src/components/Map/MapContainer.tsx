'use client';

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useApp } from '@/contexts/AppContext';
import { indonesiaProvinces } from '@/lib/data/indonesia-provinces';
import type { ProvinceFeature } from '@/types';

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapContainerWrapperProps {
  className?: string;
}

const MapController: React.FC = () => {
  const map = useMap();
  const { state } = useApp();

  useEffect(() => {
    if (state.currentView.type === 'national') {
      map.setView([-2.5, 118], 5);
    } else if (state.currentView.type === 'province' && state.selectedProvince) {
      const bounds = L.geoJSON(state.selectedProvince.geometry).getBounds();
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [map, state.currentView, state.selectedProvince]);

  return null;
};

const ProvinceLayer: React.FC = () => {
  const { state, actions } = useApp();

  const getProvinceStyle = (feature: any) => {
    const province = feature as ProvinceFeature;
    const { realizationStatus, subsectorDensity } = province.properties;
    
    // Base color based on realization status
    let fillColor = '#10B981'; // green
    if (realizationStatus === 'yellow') fillColor = '#F59E0B';
    if (realizationStatus === 'red') fillColor = '#EF4444';

    // Opacity based on subsector density for heatmap effect
    const fillOpacity = Math.max(0.3, subsectorDensity * 0.8);

    return {
      fillColor,
      fillOpacity,
      color: '#374151',
      weight: 1,
      opacity: 0.8
    };
  };

  const onEachFeature = (feature: any, layer: L.Layer) => {
    const province = feature as ProvinceFeature;
    const props = province.properties;

    // Create tooltip content
    const tooltipContent = `
      <div class="p-2">
        <h3 class="font-bold text-lg">${props.name}</h3>
        <div class="mt-2 space-y-1">
          <div class="flex justify-between">
            <span>Status:</span>
            <span class="capitalize font-semibold ${
              props.realizationStatus === 'green' ? 'text-green-600' : 
              props.realizationStatus === 'yellow' ? 'text-yellow-600' : 'text-red-600'
            }">${props.realizationStatus}</span>
          </div>
          <div class="flex justify-between">
            <span>Realization:</span>
            <span>${props.realizationPercentage}%</span>
          </div>
          <div class="flex justify-between">
            <span>Wondr Users:</span>
            <span>${props.wondrUsers.toLocaleString()}</span>
          </div>
          <div class="flex justify-between">
            <span>Non-Users:</span>
            <span>${props.nonUsers.toLocaleString()}</span>
          </div>
          <div class="flex justify-between">
            <span>Branches:</span>
            <span>${props.totalBranches}</span>
          </div>
        </div>
      </div>
    `;

    layer.bindTooltip(tooltipContent, {
      permanent: false,
      sticky: true,
      className: 'custom-tooltip'
    });

    // Add click handler
    layer.on('click', () => {
      actions.selectProvince(province);
    });

    // Add realization status marker at province center
    if (layer instanceof L.Polygon) {
      const center = layer.getBounds().getCenter();
      const statusColor = props.realizationStatus === 'green' ? '#10B981' : 
                         props.realizationStatus === 'yellow' ? '#F59E0B' : '#EF4444';

      const statusMarker = L.circleMarker(center, {
        radius: 8,
        fillColor: statusColor,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      });

      statusMarker.bindTooltip(`${props.name}: ${props.realizationPercentage}% realization`, {
        permanent: false,
        direction: 'top'
      });

      statusMarker.addTo((layer as any)._map || state.currentView);
    }
  };

  if (state.currentView.type !== 'national') return null;

  return (
    <GeoJSON
      key="provinces"
      data={indonesiaProvinces}
      style={getProvinceStyle}
      onEachFeature={onEachFeature}
    />
  );
};

export const MapContainerWrapper: React.FC<MapContainerWrapperProps> = ({ className = '' }) => {
  const mapRef = useRef<L.Map>(null);

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        ref={mapRef}
        center={[-2.5, 118]}
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapController />
        <ProvinceLayer />
      </MapContainer>
      
      {/* Custom zoom controls */}
      <div className="absolute top-4 right-4 z-[1000] bg-white rounded-md shadow-lg">
        <button 
          className="block w-10 h-10 border-b border-gray-200 hover:bg-gray-50 flex items-center justify-center text-lg font-bold"
          onClick={() => mapRef.current?.zoomIn()}
        >
          +
        </button>
        <button 
          className="block w-10 h-10 hover:bg-gray-50 flex items-center justify-center text-lg font-bold"
          onClick={() => mapRef.current?.zoomOut()}
        >
          −
        </button>
      </div>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-white rounded-md shadow-lg p-3">
        <h4 className="font-semibold mb-2 text-sm">Realization Status</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-xs">Green (≥80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs">Yellow (60-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs">Red (&lt;60%)</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t">
          <h5 className="font-semibold mb-1 text-xs">Heatmap Intensity</h5>
          <p className="text-xs text-gray-600">Darker = More subsector POIs</p>
        </div>
      </div>
    </div>
  );
};