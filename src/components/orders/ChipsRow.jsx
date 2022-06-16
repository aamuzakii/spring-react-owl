import * as React from 'react';
import Chip from '@mui/material/Chip';


export default function ChipsRow() {
  const arrOfChip = [
    {
      label: 'Semua Pesanan',
      value: 'all'
    },
    {
      label: 'Belum Dibayar',
      value: 'unpaid'
    },
    {
      label: 'Diproses',
      value: 'on_process'
    },
    {
      label: 'Dikirim',
      value: 'on_delivery'
    },
    {
      label: 'Selesai',
      value: 'finished'
    },
    {
      label: 'Gagal',
      value: 'done'
    }
  ]
  return (
    <div style={{ display: 'flex', margin: '10px 0px 10px 10px', overflow: 'auto'}} >
      {arrOfChip.map(({label, value}) => (
        <Chip
          label={label}
          component="a"
          href={"/orders?type=" + value}
          variant="outlined"
          clickable
          sx={{ margin: 0.5, fontWeight: 'bold', color: 'rgb(21, 101, 192)'}}
          key={value}
        />
      ))}
      
    </div>
  );
}