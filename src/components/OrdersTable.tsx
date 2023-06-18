import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';


// Column definitions should match your data structure
const columns: GridColDef[] = [
  { field: 'order_id', headerName: 'Order ID', width: 150, resizable: true },
  { 
    field: 'opened_timestamp', 
    headerName: 'Opened Timestamp', 
    width: 200, 
    resizable: true 
  },
  { 
    field: 'discount_amount', 
    headerName: 'Discount Amount', 
    width: 150, 
    resizable: true,
    valueFormatter: ({ value }) => value.toFixed(2) 
  },
  { 
    field: 'amount', 
    headerName: 'Amount', 
    width: 100, 
    resizable: true,
    valueFormatter: ({ value }) => value.toFixed(2) 
  },
  { 
    field: 'tax', 
    headerName: 'Tax', 
    width: 100, 
    resizable: true,
    valueFormatter: ({ value }) => value.toFixed(2) 
  },
  { 
    field: 'tip', 
    headerName: 'Tip', 
    width: 100, 
    resizable: true,
    valueFormatter: ({ value }) => value.toFixed(2) 
  },
  { field: 'destination', headerName: 'Destination', width: 150, resizable: true },
  { field: 'delivery', headerName: 'Delivery', width: 100, resizable: true },
  { field: 'customer_id', headerName: 'Customer ID', width: 150, resizable: true },
  { field: 'customer_name', headerName: 'Customer Name', width: 200, resizable: true },
];

// Generate 20 dummy orders
const dummyOrders = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  order_id: `Dummy Order ${i + 1}`,
  opened_timestamp: new Date().toISOString(),
  discount_amount: Math.random() * 100,
  amount: Math.random() * 1000,
  tax: Math.random() * 200,
  tip: Math.random() * 50,
  destination: `Dummy Destination ${i + 1}`,
  delivery: Math.random() > 0.5,
  customer_id: `Dummy Customer ID ${i + 1}`,
  customer_name: `Dummy Customer Name ${i + 1}`,
}));

export default function App() {
  const [rows, setRows] = React.useState(dummyOrders);

  React.useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setRows(data);
        }
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        disableColumnMenu={false}
        disableColumnFilter={false}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}
