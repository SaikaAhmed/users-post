import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {

    const useStyles = makeStyles({
        root: {
          width: "100%",
          backgroundColor: "lightblue",
          padding: "10px"
        },
      });
      
      const classes = useStyles();
      const [value, setValue] = React.useState(0);
    return (
        <div>
              <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" color="action" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
            
        </div>
    );
};

export default Header;