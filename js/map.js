// Drive KKTC — Interactive Leaflet.js Mapping Handler

let activeMap = null;

function cleanupMap() {
  if (activeMap) {
    activeMap.remove();
    activeMap = null;
  }
}

function initRouteMap(containerId, routeData) {
  cleanupMap();

  const container = document.getElementById(containerId);
  if (!container) return;

  const stops = routeData.stops;
  if (!stops || stops.length === 0) return;

  // Initialize Map centering on the first stop or center coordinate
  const startLat = routeData.coordinates ? routeData.coordinates.lat : stops[0].latitude;
  const startLng = routeData.coordinates ? routeData.coordinates.lng : stops[0].longitude;

  activeMap = L.map(containerId, {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([startLat, startLng], 10);

  // Add Premium/Clean OpenStreetMap Tiles
  // Using CartoDB Positron (extremely clean grey layout matching premium magazine aesthetics)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(activeMap);

  // Custom SVG Pin Icon
  const customPinIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="
        width: 32px;
        height: 32px;
        background-color: var(--accent);
        border: 3px solid white;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const latlngs = [];
  const markers = [];

  // Add markers for all stops
  stops.forEach((stop, index) => {
    const lat = stop.latitude;
    const lng = stop.longitude;
    latlngs.push([lat, lng]);

    const popupContent = `
      <div style="font-family: 'Manrope', sans-serif; padding: 0.5rem; max-width: 220px;">
        <h4 style="margin: 0 0 0.25rem 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: var(--primary);">${index + 1}. ${stop.name}</h4>
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: var(--accent); display: block; margin-bottom: 0.5rem;">${stop.category}</span>
        <p style="margin: 0 0 0.8rem 0; font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">${stop.description}</p>
        <div style="font-size: 0.75rem; color: var(--text-main); margin-bottom: 0.8rem;">
          <div><strong>🕒 ${window.t('routeDetail.visitTime')}:</strong> ${stop.estimatedVisitTime}</div>
        </div>
        <a href="${stop.googleMapsLink}" target="_blank" rel="noopener noreferrer" style="
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background-color: var(--accent);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
        ">
          📍 ${window.t('routeDetail.directions')}
        </a>
      </div>
    `;

    const marker = L.marker([lat, lng], { icon: customPinIcon })
      .bindPopup(popupContent)
      .addTo(activeMap);
      
    markers.push(marker);
  });

  // Draw Route Polyline
  const routePath = L.polyline(latlngs, {
    color: 'var(--accent)',
    weight: 4,
    opacity: 0.75,
    dashArray: '8, 8',
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(activeMap);

  // Fit map boundaries to include all markers
  if (stops.length > 1) {
    activeMap.fitBounds(routePath.getBounds(), {
      padding: [50, 50]
    });
  } else {
    activeMap.setView([stops[0].latitude, stops[0].longitude], 12);
  }

  // Handle map interaction
  activeMap.on('focus', () => { activeMap.scrollWheelZoom.enable(); });
  activeMap.on('blur', () => { activeMap.scrollWheelZoom.disable(); });
}

window.initRouteMap = initRouteMap;
window.cleanupMap = cleanupMap;
