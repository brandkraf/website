// Office address — single source of truth. Imported by the footer, contact page,
// legal pages, directions card, the Cheras HQ schema (LocationPage) and the
// prerenderer. index.html carries a static copy in its JSON-LD because it cannot
// import JS — keep that block in sync whenever this changes.
//
// Coordinates are decoded from the official Waze link (geohash w283erujt, +/-2 m),
// not estimated; the Google Maps link resolves to the same address.
export const OFFICE = {
  streetAddress: '55A, Jalan Kencana 15, Taman Kencana',
  postalCode: '56100',
  locality: 'Kuala Lumpur',
  region: 'Wilayah Persekutuan Kuala Lumpur',
  country: 'MY',
  lat: 3.119709,
  lng: 101.750114,
  mapsUrl: 'https://maps.app.goo.gl/oebBJM1r4sUB7pnn6',
  wazeUrl: 'https://waze.com/ul/hw283erujt',
};

// Display forms, split the way the postal address is written.
export const OFFICE_LINE_1 = `${OFFICE.streetAddress},`;
export const OFFICE_LINE_2 = `${OFFICE.postalCode} ${OFFICE.locality}, ${OFFICE.region}`;
export const OFFICE_FULL = `${OFFICE.streetAddress}, ${OFFICE_LINE_2}`;

// schema.org PostalAddress + GeoCoordinates, shared by every JSON-LD emitter.
export const OFFICE_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: OFFICE.streetAddress,
  addressLocality: OFFICE.locality,
  addressRegion: OFFICE.region,
  postalCode: OFFICE.postalCode,
  addressCountry: OFFICE.country,
};
export const OFFICE_GEO = { '@type': 'GeoCoordinates', latitude: OFFICE.lat, longitude: OFFICE.lng };
