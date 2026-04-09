/** Venue media sourced from listing on Heerby (same imagery as Google/venue photos). */
const PLACE_PHOTO_BASE =
  'https://d2wbaszx2bpbs9.cloudfront.net/photos/ChIJn5ugNQjTpw0R6hwwoBhokqc'

export const HEERBY_URL =
  'https://heerby.ma/en/restaurant/3Hw4am7hQsY'

/** Local hero image in `public/hero-bg.jpg` (~2400px). Replace file anytime; overlay in `App.css`. */
export const heroBackground = '/hero-bg.jpg'

export const venuePhotos = [
  `${PLACE_PHOTO_BASE}/0_small.jpeg`,
  `${PLACE_PHOTO_BASE}/1_small.jpeg`,
  `${PLACE_PHOTO_BASE}/2_small.jpeg`,
  `${PLACE_PHOTO_BASE}/3_small.jpeg`,
  `${PLACE_PHOTO_BASE}/4_small.jpeg`,
]

export const menuPhotos = [
  `${PLACE_PHOTO_BASE}/1741698296202_0_A1A07AC2.jpeg`,
  `${PLACE_PHOTO_BASE}/1741698296202_1_30A1D3F7.jpeg`,
  `${PLACE_PHOTO_BASE}/1741698296202_2_106DA57E.jpeg`,
]

/** WhatsApp chat link (same number as phone; no + in path). */
export const whatsappUrl =
  'https://wa.me/212661361014?text='

export const SITE = {
  name: "Kiki's Café",
  tagline: 'Café & bakery — Casablanca',
  address:
    "237 Bd Zerktouni (croisement avec Bd d'Anfa), Casablanca 20250, Morocco",
  phoneDisplay: '06 61 36 10 14',
  phoneTel: '+212661361014',
  hours: 'Every day · 7:00 AM — 12:00 AM',
  priceNote: 'About 50–100 DH',
  instagram: 'https://www.instagram.com/kikis_cafe_bakery/',
  mapsUrl: 'https://maps.google.com/?cid=12074828005909732586',
  embedQuery: '33.5901784,-7.635507',
}
