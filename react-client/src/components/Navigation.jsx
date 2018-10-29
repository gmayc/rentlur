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
import List from '@material-ui/icons/ListAltSharp';
import Close from '@material-ui/icons/CloseSharp';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


import App from '../index.jsx';
//import List from './List.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import SavedRentals from './SavedRentals.jsx';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
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
    marginRight: 30,
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
      location: '',
      open: false,

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.reset = this.reset.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleClickAway = () =>{
    this.setState({open: null});
  }
  handleClick = e => {
    this.setState({anchorEl: e.currentTarget});
  }

  handleClose = () => {
    console.log("handle close called")
    this.setState({anchorEl: null});
  }

  changeState(loc) {
    this.setState({
      location: loc
    });

  }
  reset() {
    this.setState({
      location: '',
    });
  }

  onChange(e) {
    console.log(e.target.value)
    this.changeState(e.target.value);
  }

  handleSubmit(e) {
    console.log(this.state.location)
    this.props.search(this.state.location)
    e.preventDefault();
  }

  changeState(loc) {
    console.log(loc);
    this.setState({
      location: loc
    });

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
                <MenuItem onClick={this.handleClose} component={Link} to="/saved-rentals">Saved Properties</MenuItem>
                <MenuItem onClick={this.handleClose} component={Link} to="/signup">Signup</MenuItem>
                <MenuItem onClick={this.handleClose} component={Link} to="/login">Login</MenuItem>
                <MenuItem onClick={this.handleClose} component={Link} to="/details">Details</MenuItem>
                </Menu> */}

                <Typography variant="h5" className={classes.title} variant="title" color="inherit" component={Link} to="/">
                Rentlur
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <form onSubmit={this.handleSubmit} >
                  <InputBase
                    placeholder="Search Location..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }} 
                    value = {this.state.location} 
                    onChange = {this.onChange} />
                    </form>
                </div>
                {/* <Button color="inherit">Login</Button> */}
              
                {this.props.username ? 
                (<IconButton className={classes.Button} color="inherit" aria-label="Menu" component={Link} to="/details">
                  <List/>
                </IconButton>) : null}


                {this.props.username ?                 
                (<IconButton className={classes.Button} color="inherit" aria-label="Menu" component={Link} to="/saved-rentals">
                  <CollectionBookmark/>
                </IconButton>) : null}

                
                

                {!this.props.username ?  
                  (<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" component={Link} to="/login">
                  <AccountCircle 
                  aria-owns={anchorEl ? 'menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  onClose={this.handleClose}
                  />
                </IconButton>) : null}     

                <Menu
                id='menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                >
                <MenuItem onClick={this.handleClose} component={Link} to="/signup">Signup</MenuItem>
                <MenuItem onClick={this.handleClose} component={Link} to="/login">Login</MenuItem>
                </Menu>        



                {this.props.username ?                 
                (<IconButton className={classes.menuButton} color="inherit" aria-label="Menu" component={Link} to="/logout">
                  <Close />
                </IconButton> ): null}




                        {/* <Route exact path='/' component={App} />
                <Route path="/saved-rentals" component={SavedRentals}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={Login}/> */}
            </Toolbar>
        </AppBar>
        </div>

    )
    }

}
export default withStyles(styles)(Navigation);