import { useState } from "react";
import { useTranslation } from "react-i18next";
import MarketingLayout from "../../components/marketing/MarketingLayout";
import { api } from "../../lib/api";

export default function BookingsPage(){
  const { t } = useTranslation();
  const [ref, setRef] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [booking, setBooking] = useState<any | null>(null);

  async function onFind(e: React.FormEvent) {
    e.preventDefault();
    setError(null); setBooking(null); setLoading(true);
    try {
      const data = await api.findReservation(ref.trim(), email.trim());
      setBooking(data);
    } catch (err:any) {
      setError(err.message || "Erreur");
    } finally { setLoading(false); }
  }

  return (
    <MarketingLayout>
      <section className="container my-5">
        <div className="row g-4">
          <div className="col-lg-7">
            <form className="card p-4 rounded-4 shadow-sm" onSubmit={onFind}>
              <h1 className="h3 mb-3">{t('bookings.title')}</h1>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">{t('bookings.ref')}</label>
                  <input value={ref} onChange={e=>setRef(e.target.value)}
                         className="form-control form-control-lg" placeholder="ABC123456" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">{t('bookings.email')}</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)}
                         className="form-control form-control-lg" placeholder="you@example.com" required />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary btn-lg rounded-4" disabled={loading}>
                    {loading ? t('loading') : t('bookings.find')}
                  </button>
                </div>
                {error && <div className="col-12"><div className="alert alert-danger">{error}</div></div>}
                {booking && (
                  <div className="col-12">
                    <div className="alert alert-success">
                      <div className="fw-semibold">{booking.hotel_name}</div>
                      <div>{booking.guest_name} • {booking.guest_email}</div>
                      <div>{booking.date_from} → {booking.date_to} • {booking.status}</div>
                      <div>Code: <code>{booking.confirmation_code}</code></div>
                      <div>Total: {booking.total_price} EUR</div>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Astuces */}
          <div className="col-lg-5">
            <div className="card p-4 rounded-4 shadow-sm">
              <h5 className="mb-3">Astuces</h5>
              <ul className="list-unstyled m-0">
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Modifier les dates si le tarif est flexible.</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Ajoutez vos préférences (étage, oreillers, allergènes…).</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Pré-enregistrez votre check-in pour gagner du temps.</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Téléversez vos documents (ID, moyen de paiement sécurisé).</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Activez les notifications SMS/e-mail pour votre arrivée.</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Regroupez vos charges en une seule facture en fin de séjour.</li>
                <li className="mb-2"><i className="bi bi-check-circle text-success me-2" />Utilisez un code promo entreprise si disponible.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
