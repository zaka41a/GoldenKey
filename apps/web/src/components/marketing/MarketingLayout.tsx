import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const setLang = (l: 'fr' | 'en' | 'de') => i18n.changeLanguage(l);

  return (
    <>
      {/* Navbar (sans “Hôtels”) */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src="/images/logo.svg" alt="GoldenKey" width="28" height="28" />
            <span className="fw-semibold">GoldenKey </span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mkNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="mkNav" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              {/* lien “Hôtels” supprimé */}
            </ul>

            <ul className="navbar-nav align-items-center gap-2">
              <li className="nav-item">
                <NavLink to="/bookings" className="nav-link">{t('nav.bookings')}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/business/login" className="nav-link">{t('nav.business')}</NavLink>
              </li>

              {/* Sélecteur de langue */}
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn btn-link" data-bs-toggle="dropdown">
                  {t('nav.lang')}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><button className="dropdown-item" onClick={() => setLang('fr')}>FR</button></li>
                  <li><button className="dropdown-item" onClick={() => setLang('en')}>EN</button></li>
                  <li><button className="dropdown-item" onClick={() => setLang('de')}>DE</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer simple (sans brands) */}
      <footer className="border-top mt-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <h6 className="text-uppercase small text-muted">{t('footer.brand')}</h6>
              <ul className="list-unstyled"><li>À propos</li><li>Carrières</li><li>Presse</li><li>Contact</li></ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="text-uppercase small text-muted">{t('footer.help')}</h6>
              <ul className="list-unstyled"><li>FAQ</li><li>Politique & RGPD</li><li>Garantie meilleur prix</li></ul>
            </div>
            <div className="col-12 col-md-6">
              <h6 className="text-uppercase small text-muted">{t('footer.newsletter')}</h6>
              <form className="d-flex gap-2">
                <input className="form-control" placeholder="Votre email" />
                <button className="btn btn-primary rounded-4" type="button">{t('footer.ok')}</button>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 small text-muted flex-wrap gap-3">
            <div>© {new Date().getFullYear()} GoldenKey Collection</div>
            <div className="d-flex align-items-center gap-3">
              {/* Réseaux sociaux (facultatif) */}
              <i className="bi bi-facebook fs-5" />
              <i className="bi bi-instagram fs-5" />
              <i className="bi bi-twitter-x fs-5" />
              <i className="bi bi-linkedin fs-5" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
