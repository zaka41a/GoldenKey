import { useState } from "react";
import { useTranslation } from "react-i18next";

/* ============ CONFIG API ============ */
/* Dans le front, mets dans .env :
   - VITE_API_BASE=http://localhost:8080
     (si tu lances `php -S localhost:8080 -t backend/public`)
     OU
   - VITE_API_BASE=http://localhost/backend/public/index.php
     (si Apache/XAMPP sans rewrite)
*/
const BASE_URL = import.meta.env.VITE_API_BASE ?? "http://localhost:8080";

/** Construit l’URL selon qu’on pointe sur .../index.php ou un répertoire avec rewrite */
function apiUrl(path: string, qs?: Record<string, string>) {
  const isPhp = BASE_URL.endsWith("index.php");
  const clean = path.replace(/^\//, ""); // "api/inventory"
  const search = qs ? new URLSearchParams(qs as any).toString() : "";
  return isPhp
    ? `${BASE_URL}?q=${clean}${search ? `&${search}` : ""}`
    : `${BASE_URL}/${clean}${search ? `?${search}` : ""}`;
}

/* ============ COMPOSANT ============ */
export default function SearchBar() {
  const { t } = useTranslation();

  // états
  const [city, setCity] = useState("");
  const [from, setFrom] = useState(toISO(new Date()));
  const [to, setTo] = useState(toISO(new Date(Date.now() + 86400000)));
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<any[]>([]);

  const labelRooms =
    rooms === 1 ? t("search.oneRoom", { count: rooms }) : t("search.rooms", { count: rooms });
  const labelGuests =
    guests === 1 ? t("search.oneGuest", { count: guests }) : t("search.guestsWord", { count: guests });

  async function onSearch() {
    setError(null);
    setResults([]);

    // validations
    if (!from || !to) { setError("Merci de choisir des dates."); return; }
    if (new Date(to) <= new Date(from)) { setError("La date de départ doit être après l’arrivée."); return; }
    if (rooms < 1 || guests < 1) { setError("Au moins 1 chambre et 1 invité."); return; }

    setLoading(true);
    try {
      // on envoie `q` (ville OU nom d’hôtel) ; `city` reste accepté si ton backend l’utilise
      const url = apiUrl("/api/inventory", {
        q: city.trim(),
        city: city.trim(),
        from,
        to,
        guests: String(guests),
        rooms: String(rooms),
      });

      const res = await fetch(url, { credentials: "include" });
      const text = await res.text();
      const json = text ? JSON.parse(text) : {};

      if (!res.ok || json.ok === false) {
        const msg = json?.error
          ? `${json.error}${json.details ? " — " + JSON.stringify(json.details) : ""}`
          : `HTTP ${res.status} ${res.statusText}`;
        throw new Error(msg);
      }
      setResults(json.data?.results ?? json.results ?? []);
    } catch (e: any) {
      setError(e?.message || "Failed to fetch (vérifie l’URL API / CORS).");
    } finally {
      setLoading(false);
    }
  }

  // UI — forme identique
  const today = new Date();
  const tISO = (d: Date) => d.toISOString().split("T")[0];

  return (
    <>
      <form className="bg-white rounded-4 shadow p-3 p-md-4 d-flex flex-column flex-lg-row align-items-stretch gap-2">
        <div className="flex-fill">
          <label className="form-label small text-muted">{t("search.placeHolder")}</label>
          <input
            className="form-control form-control-lg"
            placeholder={t("search.placeHolder")}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label small text-muted">{t("search.dates")}</label>
          <div className="d-flex gap-2">
            <input
              type="date"
              defaultValue={tISO(today)}
              value={from}
              min={tISO(today)}
              onChange={(e) => setFrom(e.target.value)}
              className="form-control form-control-lg"
            />
            <input
              type="date"
              defaultValue={tISO(new Date(today.getTime() + 86400000))}
              value={to}
              min={from || tISO(new Date(today.getTime() + 86400000))}
              onChange={(e) => setTo(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
        </div>

        <div style={{ minWidth: 280 }}>
          <label className="form-label small text-muted">{t("search.guests")}</label>
          <div className="input-group input-group-lg">
            <span className="input-group-text"><i className="bi bi-people" /></span>
            <input
              className="form-control bg-white"
              value={`${labelRooms}, ${labelGuests}`}
              readOnly
            />
            <button className="btn btn-outline-secondary" type="button" onClick={() => setRooms(Math.max(1, rooms - 1))}>-</button>
            <button className="btn btn-outline-secondary" type="button" onClick={() => setRooms(rooms + 1)}>+</button>
            <button className="btn btn-outline-secondary" type="button" onClick={() => setGuests(Math.max(1, guests - 1))}>-</button>
            <button className="btn btn-outline-secondary" type="button" onClick={() => setGuests(guests + 1)}>+</button>
          </div>
        </div>

        <div className="d-grid">
          <label className="form-label invisible">.</label>
          <button
            className="btn btn-primary btn-lg rounded-4"
            type="button"
            onClick={onSearch}
            disabled={loading}
          >
            {loading ? t("search.loading", "Recherche…") : t("search.submit")}
          </button>
        </div>
      </form>

      {/* messages / résultats sous la barre */}
      {error && <div className="alert alert-danger mt-2">{error}</div>}

      {!error && !loading && results.length > 0 && (
        <div className="card mt-2 border-0 shadow-sm rounded-4">
          <div className="list-group list-group-flush">
            {results.map((r: any, i: number) => (
              <div key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-semibold">{r.name} — {r.city}</div>
                  <small className="text-muted">{r.room_type} · {r.available_rooms} dispo</small>
                </div>
                <div className="text-end">
                  <div className="fw-semibold">{Number(r.price).toFixed(0)} {r.currency}</div>
                  <small className="text-muted">par nuit (BAR)</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ===== Utils ===== */
function toISO(d: Date) {
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}
