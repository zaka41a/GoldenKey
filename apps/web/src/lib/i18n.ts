// src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: { hotels: 'Hôtels', bookings: 'Mes réservations', business: 'Compte entreprise', lang: 'FR' },
      hero: { title: 'Come join us', subtitle: 'Plus de 250 hôtels dans 100+ destinations en Europe.' },
      search: {
        placeHolder: 'Ville ou hôtel', dates: 'Dates', guests: 'Chambres & invités', submit: 'RECHERCHER',
        oneRoom: '{{count}} chambre', rooms: '{{count}} chambres', oneGuest: '{{count}} invité', guestsWord: '{{count}} invités'
      },
      best: { title: 'Les meilleures destinations', seeAll: 'Tout voir' },
      offers: {
        city: 'City Breaks', cityText: 'Escapades urbaines pour le week-end.',
        limited: 'Limited Edition', limitedText: 'Adresses signature & expériences exclusives.',
        resort: 'Resort Getaways', resortText: 'Soleil, farniente & clubs enfants.'
      },
      footer: { dest: 'Destinations', help: 'Aide', brand: 'GoldenKey', newsletter: 'Newsletter', ok: 'OK', copy: '© {{year}} GoldenKey Group' },
      bookings: { title: 'Mes réservations', ref: 'Référence', name: 'Nom', email: 'Email', find: 'Retrouver ma réservation', noacc: 'Pas de compte ?' },
      business: {
        login: 'Connexion entreprise', signup: 'Créer un compte entreprise',
        company: 'Société', vat: 'TVA', phone: 'Téléphone', pwd: 'Mot de passe',
        have: 'Déjà un compte ?', create: 'Créer', enter: 'Se connecter'
      }
    }
  },
  en: {
    translation: {
      nav: { hotels: 'Hotels', bookings: 'My bookings', business: 'Business account', lang: 'EN' },
      hero: { title: 'Come join us', subtitle: 'Over 250 hotels across 100+ destinations in Europe.' },
      search: {
        placeHolder: 'City or hotel', dates: 'Dates', guests: 'Rooms & guests', submit: 'SEARCH',
        oneRoom: '{{count}} room', rooms: '{{count}} rooms', oneGuest: '{{count}} guest', guestsWord: '{{count}} guests'
      },
      best: { title: 'Top destinations', seeAll: 'See all' },
      offers: {
        city: 'City Breaks', cityText: 'Urban getaways for the weekend.',
        limited: 'Limited Edition', limitedText: 'Signature addresses & exclusive experiences.',
        resort: 'Resort Getaways', resortText: 'Sun, relax & kids clubs.'
      },
      footer: { dest: 'Destinations', help: 'Help', brand: 'GoldenKey', newsletter: 'Newsletter', ok: 'OK', copy: '© {{year}} GoldenKey Group' },
      bookings: { title: 'My bookings', ref: 'Reference', name: 'Name', email: 'Email', find: 'Find my booking', noacc: 'No account?' },
      business: {
        login: 'Business login', signup: 'Create business account',
        company: 'Company', vat: 'VAT', phone: 'Phone', pwd: 'Password',
        have: 'Already have an account?', create: 'Create', enter: 'Enter'
      }
    }
  },
  de: {
    translation: {
      nav: { hotels: 'Hotels', bookings: 'Meine Buchungen', business: 'Firmenkonto', lang: 'DE' },
      hero: { title: 'Come join us', subtitle: 'Über 250 Hotels in 100+ Reisezielen in Europa.' },
      search: {
        placeHolder: 'Stadt oder Hotel', dates: 'Daten', guests: 'Zimmer & Gäste', submit: 'SUCHE',
        oneRoom: '{{count}} Zimmer', rooms: '{{count}} Zimmer', oneGuest: '{{count}} Gast', guestsWord: '{{count}} Gäste'
      },
      best: { title: 'Top Reiseziele', seeAll: 'Alle anzeigen' },
      offers: {
        city: 'City Breaks', cityText: 'Städtetrips fürs Wochenende.',
        limited: 'Limited Edition', limitedText: 'Signature Häuser & exklusive Erlebnisse.',
        resort: 'Resort Getaways', resortText: 'Sonne, Entspannung & Kids Clubs.'
      },
      footer: { dest: 'Reiseziele', help: 'Hilfe', brand: 'GoldenKey', newsletter: 'Newsletter', ok: 'OK', copy: '© {{year}} GoldenKey Group' },
      bookings: { title: 'Meine Buchungen', ref: 'Buchungsnr.', name: 'Name', email: 'E-Mail', find: 'Buchung finden', noacc: 'Kein Konto?' },
      business: {
        login: 'Firmen-Login', signup: 'Firmenkonto erstellen',
        company: 'Firma', vat: 'USt-IdNr.', phone: 'Telefon', pwd: 'Passwort',
        have: 'Schon ein Konto?', create: 'Erstellen', enter: 'Anmelden'
      }
    }
  }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
