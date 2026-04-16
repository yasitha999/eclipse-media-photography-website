/**
 * Site-wide config. Single source of truth for business metadata.
 */

export const site = {
  name: 'Eclipse Media',
  tagline: 'Melbourne Wedding Photography',
  owner: 'Yasitha Waduge',
  url: 'https://eclipsemedia.au',

  email: 'info@eclipsemedia.au',
  phone: '0489 228 444',
  instagram: 'https://www.instagram.com/eclipse.media.photography/',
  googleBusinessUrl: 'https://share.google/uOcKemqGjMp7o0Sfw',

  // Service area
  addressLocality: 'Melbourne',
  addressRegion: 'Victoria',
  addressCountry: 'AU',
  serviceAreas: ['Melbourne', 'Yarra Valley', 'Mornington Peninsula', 'Geelong', 'Bellarine Peninsula', 'Victoria'],

  // Booking / availability
  availabilityMessage: 'Now booking 2026 · Limited 2027 dates',
  priceFrom: 'AUD $1,200',

  // Web3Forms — get an access key from https://web3forms.com (free)
  web3formsAccessKey: '303af9c3-ae54-4909-be95-50e0efadeed5',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
