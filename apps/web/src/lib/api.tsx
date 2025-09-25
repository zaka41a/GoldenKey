const BASE_URL = import.meta.env.VITE_API_BASE ?? "http://localhost:8080"; // ou /backend/public

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(opts.headers||{}) },
    ...opts,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.ok === false) {
    const err = json?.error || res.statusText;
    throw new Error(err);
  }
  return (json.data ?? json) as T;
}

export const api = {
  // public
  inventory: (params: { city?: string; hotel_id?: number; from: string; to: string; guests?: number; rooms?: number; }) =>
    request(`/api/inventory?` + new URLSearchParams(params as any).toString()),

  // bookings “find”
  findReservation: (ref: string, email: string) =>
    request(`/api/reservations/find?` + new URLSearchParams({ ref, email }).toString()),

  // demo auth (mock)
  login: (email: string, password: string) =>
    request(`/api/auth/login`, { method: "POST", body: JSON.stringify({ email, password }) }),
};
