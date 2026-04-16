/**
 * Site-wide config. Single source of truth for business metadata.
 */

export const site = {
  name: 'Eclipse Media',
  tagline: 'Melbourne Wedding Photography',
  owner: 'Yasitha Waduge',
  url: 'https://eclipsemedia.au',

  email: 'hello@eclipsemedia.au',
  phone: '',
  instagram: 'https://instagram.com/eclipsemediaphotography',
  googleBusinessUrl: '',

  // Service area
  addressLocality: 'Melbourne',
  addressRegion: 'Victoria',
  addressCountry: 'AU',
  serviceAreas: ['Melbourne', 'Yarra Valley', 'Mornington Peninsula', 'Geelong', 'Bellarine Peninsula', 'Victoria'],

  // Booking / availability
  availabilityMessage: 'Now booking 2026 · Limited 2027 dates',
  priceFrom: 'AUD $1,200',

  // Web3Forms — get an access key from https://web3forms.com (free)
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/investment', label: 'Investment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
