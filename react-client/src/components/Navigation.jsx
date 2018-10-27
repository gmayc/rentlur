import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CollectionBookmark from '@material-ui/icons/CollectionsBookmarkOutlined';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Icon } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 100,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Navigation  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      anchorEl: null,

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClick.bind(this);
  }

  handleClick = e => {
    this.setState({anchorEl: e.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null});
  }


    render(){
      const {anchorEl} = this.state;
      const {classes} = this.props;
      return(
        <div className={classes.root}>
        <AppBar position="static" >
            <Toolbar>
              {/* <IconButton  className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon 
                aria-owns={anchorEl ? 'menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
                />
              </IconButton>
              <Menu
                id='menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                >
                <MenuItem onClick={this.handleClose}>Saved Properties</MenuItem>
                <MenuItem onClick={this.handleClose}>Signup</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu> */}
                <Typography variant="h5" className={classes.title} variant="title" color="inherit">
                Rentlur
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search Location..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }} />
                </div>
                {/* <Button color="inherit">Login</Button> */}
                <IconButton className={classes.Button} color="inherit" aria-label="Menu">
                  <CollectionBookmark />
                </IconButton>

                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <AccountCircle/>
                </IconButton>



                
            </Toolbar>
        </AppBar>
        </div>
    )
    }

}
export default withStyles(styles)(Navigation);