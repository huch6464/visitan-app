"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// آیکون پیش‌فرض leaflet را اصلاح می‌کنیم (برای نمایش صحیح مارکر)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return position ? <Marker position={position} /> : null;
}

export default function MapPage() {
  // مقدار اولیه موقعیت 
  const [position, setPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('userLocation');
      if (saved) {
        try {
          const pos = JSON.parse(saved);
          if (pos && typeof pos.lat === 'number' && typeof pos.lng === 'number') {
            return pos;
          }
        } catch {}
      }
    }
    return null;
  });

  // مرکز نقشه را بر اساس موقعیت ذخیره‌شده یا مرکز ایران قرار بده
  const mapCenter = position ? [position.lat, position.lng] : [32.4279, 53.688];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-700 mt-6 mb-4 text-center">لطفا موقعیت مکانی خود را ثبت کنید</h1>
      <div className="w-full max-w-4xl h-[70vh] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
        <MapContainer
          center={mapCenter}
          zoom={5}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker position={position} setPosition={setPosition} />
        </MapContainer>
      </div>
      {position && (
        <div className="mt-6 text-center bg-green-50 border border-green-200 rounded-lg p-4 w-full max-w-md shadow">
          <b className="block text-green-700 mb-2">موقعیت شما:</b>
          <div className="mb-1 text-gray-700">عرض جغرافیایی: <span className="font-mono">{position.lat.toFixed(5)}</span></div>
          <div className="mb-3 text-gray-700">طول جغرافیایی: <span className="font-mono">{position.lng.toFixed(5)}</span></div>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors"
            onClick={() => {
              localStorage.setItem('userLocation', JSON.stringify(position));
              alert('موقعیت شما با موفقیت ذخیره شد!');
            }}
          >
            ذخیره موقعیت
          </button>
        </div>
      )}
    </div>
  );
}
