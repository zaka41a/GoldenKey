import { useTranslation } from "react-i18next";
import MarketingLayout from "../../components/marketing/MarketingLayout";
import { Link } from "react-router-dom";

export default function BusinessLogin(){
  const { t } = useTranslation();
  return (
    <MarketingLayout>
      <section className="container my-5" style={{maxWidth: 880}}>
        <div className="row g-4">
          {/* Formulaire login */}
          <div className="col-lg-6">
            <div className="card p-4 rounded-4 shadow-sm">
              <h1 className="h4 mb-3">{t('business.login')}</h1>
              <div className="d-grid gap-3">
                <div>
                  <label className="form-label">Email</label>
                  <input className="form-control form-control-lg" type="email" placeholder="corp@company.com" />
                </div>
                <div>
                  <label className="form-label">{t('business.pwd')}</label>
                  <input className="form-control form-control-lg" type="password" placeholder="••••••••" />
                </div>
                <button className="btn btn-primary btn-lg rounded-4">{t('business.enter')}</button>
                <div className="text-muted">{t('bookings.noacc')} <Link to="/business/signup">{t('business.signup')}</Link></div>
              </div>
            </div>
          </div>

          {/* Avantages entreprise (enrichi) */}
          <div className="col-lg-6">
            <div className="card p-4 rounded-4 shadow-sm h-100">
              <h5 className="mb-3">Avantages entreprise</h5>
              <ul className="m-0 list-unstyled">
                <li className="mb-2"><i className="bi bi-building me-2" />Tarifs négociés multi-destinations</li>
                <li className="mb-2"><i className="bi bi-wallet2 me-2" />Facturation centralisée (mensuelle)</li>
                <li className="mb-2"><i className="bi bi-people me-2" />Gestion des voyageurs & politiques</li>
                <li className="mb-2"><i className="bi bi-calendar2-check me-2" />Modifications & annulations facilitées</li>
                <li className="mb-2"><i className="bi bi-shield-check me-2" />Conditions préférentielles (late check-in garanti)</li>
                <li className="mb-2"><i className="bi bi-credit-card me-2" />Moyens de paiement multiples (CB, bon, PO)</li>
                <li className="mb-2"><i className="bi bi-graph-up-arrow me-2" />Reporting par centre de coûts</li>
                <li className="mb-2"><i className="bi bi-gift me-2" />Programme fidélité & perks voyageurs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
