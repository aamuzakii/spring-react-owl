import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  let listCategory = useSelector( state => state.company.listCategory)

  // let arr = []
  // for (let key in productByCategory) {
  //   arr.push({ name: productByCategory[key].name, qty: productByCategory[key].count })
  // }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {listCategory.map(({name, qty_inside}, index) => (
            <Item key={index} >
            <Typography variant="h7" component="div" color="text.primary">
              { name }
            </Typography>
            <Typography variant="body4" sx={{ mb: 1.5 }} color="text.secondary">
              {qty_inside} produk
            </Typography>
          </Item> 
        ))}
      </Stack>
    </Box>
  );
}
