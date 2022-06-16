import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DynamicButton from '../DynamicButton';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux' 
import  {setInsideCart, setInsideCartArray}  from '../../store/actions/company'
import { objToArr, SetCartLocalAndRedux } from '../../helpers/Function'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({name, price, image_url, id, qty, int_price}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let insideCart = useSelector( state => state.company.insideCart)
  const dispatch = useDispatch()

  const childToParent = (qty) => {
    insideCart = { ...insideCart, [id]: {name, qty, image_url, id, price, int_price} }
    SetCartLocalAndRedux(insideCart, dispatch)
  }

  const isLaptop = window.innerWidth > 600
  const cardWidth = isLaptop ? '226px' : '100%'

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={image_url}
        alt="Paella dish"
        sx={{
          objectFit: 'scale-down',
          width: cardWidth,
          height: '226px'
        }}
      />
      <div style={{ margin: 8 }}>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ marginY: 2 }}>
          {price}
        </Typography>
        <DynamicButton childToParent={childToParent} qtyFromRedux={qty}></DynamicButton>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron ansdsdsd set
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
