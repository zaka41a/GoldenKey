import dayjs from 'dayjs';
import { Form } from 'react-bootstrap';


export type Range = { from: string; to: string };
export default function DateRangePicker({ value, onChange }: { value: Range; onChange: (r: Range) => void }) {
return (
<div className="d-flex gap-2">
<Form.Control type="date" value={value.from} onChange={(e) => onChange({ ...value, from: e.target.value })} />
<Form.Control type="date" value={value.to} onChange={(e) => onChange({ ...value, to: e.target.value })} />
</div>
);
}