import { Card } from 'react-bootstrap';
import DateRangePicker from '../../components/ui/DateRangePicker';
import { useState } from 'react';


export default function RevenuePage() {
const [range, setRange] = useState({ from: '2025-10-01', to: '2025-10-31' });
return (
<Card className="p-3">
<div className="d-flex justify-content-between align-items-center mb-3">
<h5>Revenue – Règles dynamiques</h5>
<DateRangePicker value={range} onChange={setRange} />
</div>
<div>Règle exemple: si OCC ≥ 80% & Pickup > J-7 ⇒ +15% (mock)</div>
<div className="mt-3">Calendrier 365 (mock)</div>
</Card>
);
}