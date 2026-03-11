'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default marker icon issues with Webpack
const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons for different places
const createIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-icon',
        html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
}

const hotelIcon = createIcon('#38bdf8');
const conferenceIcon = createIcon('#10b981');
const airportIcon = createIcon('#f59e0b');
const dangerIcon = createIcon('#ef4444');
const foodIcon = createIcon('#db2777');
const museumIcon = createIcon('#6366f1');

export interface LocationItem {
    name: string;
    type: string;
    pos: [number, number];
    desc: string;
}

export default function Map({ locations }: { locations: LocationItem[] }) {
    // Center roughly between Hotel and Conference
    const center: [number, number] = [48.8650, 2.3200];
    const zoom = 14;

    const getIcon = (type: string) => {
        switch (type) {
            case 'hotel': return hotelIcon;
            case 'conference':
            case 'clinic': return conferenceIcon;
            case 'airport': return airportIcon;
            case 'danger': return dangerIcon;
            case 'food': return foodIcon;
            case 'museum': return museumIcon;
            default: return neutralIcon;
        }
    }

    return (
        <div style={{ height: 'calc(100vh - 140px)', width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                {/* Use a dark themed map tile */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {locations.map((loc, idx) => (
                    <Marker key={idx} position={loc.pos} icon={getIcon(loc.type)}>
                        <Popup>
                            <div style={{ padding: '4px' }}>
                                <strong style={{ fontSize: '1.1rem', color: '#1e293b' }}>{loc.name}</strong>
                                <p style={{ margin: '4px 0 0', fontSize: '0.9rem', color: '#475569' }}>{loc.desc}</p>
                                {loc.type === 'danger' && <p style={{ color: '#ef4444', fontWeight: 'bold', margin: '4px 0 0', fontSize: '0.8rem' }}>Avoid this area at night</p>}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}
