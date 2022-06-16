import { Global } from '@emotion/react';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryStack from './BasicStack';
import CustomSelect from './CustomSelect';
import { setProductToShow } from '../../store/actions/company'

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  // backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
  backgroundColor: 'white'
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableBottomDrawer(props) {

  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  let listCategory = useSelector( state => state.company.listCategory)

  const categoryChip = { backgroundColor: 'rgb(234, 232, 244)', borderRadius: 4, fontSize: 12, fontWeight: 300, padding: 5, paddingLeft: 10, paddingRight: 10, marginRight: 20, cursor: 'pointer' }

  const dispatch = useDispatch();

  const completeProduct = useSelector(state => state.company.completeProduct)

  const distinguishChip = (e) => {
    e.target.parentElement.childNodes.forEach(element => {
      element.style.fontWeight = '300';
    });
    e.target.style.fontWeight = '500';
  }

  const selectCategory = (e) => {
    distinguishChip(e)

    let input = e.target.innerHTML;
    let res = completeProduct.filter((item)=>{
      if(item.category.name === input){
        return item
      }
    });
    dispatch(setProductToShow(res))
  }

  const selectAllCategory = (e) => {
    distinguishChip(e)
    dispatch(setProductToShow(completeProduct))
  }

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
        <div style={{display: 'flex', alignItems: 'center', overflow: 'auto' }}>
          <CustomSelect clickHandler={toggleDrawer(true)} ></CustomSelect>
          <div onClick={selectAllCategory} style={categoryChip} >Semua</div>
          {
            listCategory.map(({name}, index)=> (
              <div onClick={selectCategory} key={index} style={categoryChip} >{name}</div>
            ))
          }
        </div>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            // top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            pt: 3,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <CategoryStack/>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableBottomDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableBottomDrawer;
