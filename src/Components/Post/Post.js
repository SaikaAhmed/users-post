import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: "40px",
    textAlign: 'center',
    width: "30%",
    padding: "20px",
    boxShadow: "0 8px 40px -12px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0, 0, 0, 0.3)"
    }
  },

});


const Post = (props) => {

    const { id, title, body} = props.post;
   
    const history = useHistory();
        const handleClick = (id) => {
            history.push(`/detail/${id}`);
      }      
      const classes = useStyles();
    

    return (   

             <Card className={classes.card}>
                <CardContent>
                <Typography variant="h5" component="h2">
                         Id:{id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                         TItle: {title}
                    </Typography>
                    <br/>
                    <Typography variant="body2" component="h3">
                     Post: {body}
                    </Typography>
                </CardContent>
                <CardActions>
                 
                <Button style={{marginLeft:'25%'}} onClick={() => handleClick(id)}  variant="contained" color="primary">See More</Button>
          
                </CardActions> 
            </Card>
          
          );    
             
        
    
        };
          
     
 
export default Post;