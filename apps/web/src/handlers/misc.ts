import { http, HttpResponse } from 'msw';
export const handlers = [
http.post('/api/auth/login', async () => HttpResponse.json({ id: 1, name: 'Marie', role: 'FrontOffice', token: 'mock' })),
http.get('/api/auth/me', async () => HttpResponse.json({ id: 1, name: 'Marie', role: 'FrontOffice' })),
http.post('/api/auth/logout', async () => HttpResponse.json({ ok: true })),
http.get('/api/reports/daily-manager', async () => HttpResponse.json({ occ: 0.82, adr: 195, revpar: 160 })),
http.get('/api/inventory', async () => HttpResponse.json({ data: [], total: 0 })),
http.get('/api/housekeeping/tasks', async () => HttpResponse.json({ data: [] }))
];