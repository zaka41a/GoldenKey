import { Form } from 'react-bootstrap';
export default function MoneyInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
return <Form.Control type="number" step="0.01" value={value} onChange={(e) => onChange(Number(e.target.value))} />;
}