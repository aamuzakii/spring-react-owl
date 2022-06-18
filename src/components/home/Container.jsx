import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts, fetchListCategories } from '../../store/actions/company';
import CircularProgress from '@mui/material/CircularProgress';
import { groupProductByCategory } from '../../helpers/Function'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  let productToShow = useSelector( state => state.company.productToShow)
  let insideCart = useSelector( state => state.company.insideCart)
  let isLoading = useSelector( state => state.company.isLoading)


  productToShow.map(getArrayValues);

  function getArrayValues(item) {
    let a = insideCart[item.id]
    if (a) {
      item.qty = insideCart[item.id].qty
    }
  }

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchAllProducts())
    dispatch(fetchListCategories())
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
        {
          (isLoading)
            ? <div style={{ display: 'flex', flex: 1, justifyContent: 'center', marginTop: 50 }} ><CircularProgress /></div>
            : productToShow.map((obj, index) => (
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center'}} key={obj.id} >
                <Card name={obj.name} price={obj.price} image_url={obj.image_url} id={obj.id} qty={obj.qty} int_price={obj.int_price} ></Card>
              </Grid>
            ))
        }
      </Grid>
    </Box>
  );
}
