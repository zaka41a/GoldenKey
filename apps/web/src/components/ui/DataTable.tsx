import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo } from 'react';


export default function DataTable<T>({ rowData, columnDefs }: { rowData: T[]; columnDefs: any[] }) {
const defaultColDef = useMemo(() => ({ sortable: true, filter: true, resizable: true }), []);
return (
<div className="ag-theme-quartz" style={{ height: 520 }}>
<AgGridReact rowData={rowData} columnDefs={columnDefs} defaultColDef={defaultColDef} animateRows />
</div>
);
}