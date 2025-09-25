import MarketingLayout from "../components/marketing/MarketingLayout";
import SearchBar from "../components/marketing/SearchBar";
import DestinationCard from "../components/marketing/DestinationCard";

export default function LandingPage() {
const cities = [
  { title: "Paris",     subtitle: "12 hôtels dès 89€", img: "/images/paris.jpg" },
  { title: "Berlin",    subtitle: "7 hôtels dès 71€",  img: "/images/berlin.jpg" },
  { title: "Munich",    subtitle: "11 hôtels dès 56€", img: "/images/munich.jpg" },
  { title: "Hambourg",  subtitle: "8 hôtels dès 72€",  img: "/images/Hambourg.jpg" },
  { title: "Rome",      subtitle: "9 hôtels dès 75€",  img: "/images/roma.jpg" },
  { title: "Barcelone", subtitle: "10 hôtels dès 79€", img: "/images/barcelone.jpg" },
];


  return (
    <MarketingLayout>
      {/* HERO bleu brand (sans photo, halo bleu) */}
      <section className="position-relative text-white hero-brand-bg">
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="py-5" />
          <h1 className="display-5 fw-semibold">Come join us</h1>
          <p className="lead mb-4">Plus de 250 hôtels dans 100+ destinations en Europe.</p>
          <div className="mb-n4"><SearchBar /></div>
          <div className="py-4" />
        </div>
      </section>

      {/* Destinations */}
      <section id="hotels" className="container my-5">
        <div className="d-flex justify-content-between align-items-end mb-3">
          <h2 className="h3 m-0">Les meilleures destinations</h2>
          <a className="link-secondary" href="#all">Tout voir</a>
        </div>
        <div className="row g-3">
          {cities.map((c, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4">
              <DestinationCard {...c} />
            </div>
          ))}
        </div>
      </section>

      {/* Éditos / Offres : toutes mêmes dimensions */}
      <section id="offers" className="container my-5">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=1600&q=80" className="mk-card-img" alt="City breaks" />
              <div className="card-body"><h5>City Breaks</h5><p className="text-muted m-0">Escapades urbaines pour le week-end.</p></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              {/* ✅ Limited Edition même hauteur */}
              <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1600&q=80" className="mk-card-img" alt="Limited Edition" />
              <div className="card-body"><h5>Limited Edition</h5><p className="text-muted m-0">Adresses signature & expériences exclusives.</p></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80" className="mk-card-img" alt="Resort Getaways" />
              <div className="card-body"><h5>Resort Getaways</h5><p className="text-muted m-0">Soleil, farniente & clubs enfants.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Réseaux sociaux (remplace les brands) */}
      <section className="bg-light py-4">
        <div className="container d-flex flex-wrap justify-content-center gap-4 align-items-center">
          <a aria-label="Facebook"  className="text-dark opacity-75 fs-2" href="#"><i className="bi bi-facebook"></i></a>
          <a aria-label="Instagram" className="text-dark opacity-75 fs-2" href="#"><i className="bi bi-instagram"></i></a>
          <a aria-label="X"         className="text-dark opacity-75 fs-2" href="#"><i className="bi bi-twitter-x"></i></a>
          <a aria-label="LinkedIn"  className="text-dark opacity-75 fs-2" href="#"><i className="bi bi-linkedin"></i></a>
        </div>
      </section>
    </MarketingLayout>
  );
}
