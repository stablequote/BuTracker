import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import AddTaskIcon from '@mui/icons-material/AddTask';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="194"
            image="https://images.pexels.com/photos/10942519/pexels-photo-10942519.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Tooltip title="add to favourite">
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="create new issue">
                <IconButton aria-label="create new issue">
                    <AddTaskIcon />
                </IconButton>
            </Tooltip>
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
            <CardContent sx={{display: 'flex', justifyContent: 'end'}}>
                <Tooltip title="Delete">
                    <IconButton aria-label="add to favorites">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Pin comment">
                    <IconButton aria-label="create new issue">
                        <PushPinIcon />
                    </IconButton>
                </Tooltip>
            </CardContent>
        </Collapse>
        </Card>
        {/* <Box>
            <Button variant="contained" color="primary">Add comment</Button>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="write your comment here"
                style={{ width: 200 }}
            />
        </Box> */}
    </>
  );
}
