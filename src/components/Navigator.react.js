import React, { Component } from "react";
import PropTypes from "prop-types";
import { observable } from "mobx";
import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderSpecial from "@material-ui/icons/FolderSpecial";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home.react";
import NotFound from "../views/NotFound.react";
import About from "../views/About.react";
import PaperIcon from "@material-ui/icons/Note";
// import MdClose from "@material-ui/icons/Close";
// import MdAdd from "@material-ui/icons/Add";
import ContactsIcon from "@material-ui/icons/Contacts";
import Avatar from "@material-ui/core/Avatar";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Papers from "../views/Papers.react";
import Contact from "../views/Contact.react";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./compstyles.css";
// import {
//   FloatingMenu,
//   MainButton,
//   ChildButton
// } from "react-floating-button-menu";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 300;

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  },
  root: {
    flexGrow: 1,
    // zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
  // menuItem: {
  //   "&:focus": {
  //     backgroundColor: theme.palette.secondary.main,
  //     "& $primary, & $icon": {
  //       color: theme.palette.common.white
  //     }
  //   }
  // }
});

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

@observer
class Navigator extends Component {
  @observable open = false;
  @observable showSnack = false;
  @observable selectedIndex = 0;
  // @observable anchorEl = null;

  componentWillMount() {
    if (this.props.history.location.pathname === "/") this.openProjects();
  }

  handleDrawerToggle = () => {
    this.open = !this.open;
  };

  openProjects = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 0;
    this.props.history.push("/Home");
  };

  openPapers = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 1;
    this.props.history.push("/Papers");
  };

  openAbout = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 2;
    this.props.history.push("/About");
  };

  openContact = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 3;
    this.props.history.push("/Contact");
  };

  componentDidMount() {
    // console.log(this.props.history.location.pathname);
    switch (this.props.history.location.pathname) {
      case "/Home":
        // console.log("yoo");
        this.selectedIndex = 0;
        break;
      case "/Papers":
        this.selectedIndex = 1;
        break;
      case "/About":
        this.selectedIndex = 2;
        break;
      case "/Contact":
        this.selectedIndex = 3;
        break;
      default:
        this.selectedIndex = 0;
    }
    this.showSnack = true;
  }

  componentDidUpdate(x, y) {
    if (this.props.history.location.pathname === "/") this.openProjects();
    switch (this.props.history.location.pathname) {
      case "/Home":
        // console.log("yoo");
        this.selectedIndex = 0;
        break;
      case "/Papers":
        this.selectedIndex = 1;
        break;
      case "/About":
        this.selectedIndex = 2;
        break;
      case "/Contact":
        this.selectedIndex = 3;
        break;
      default:
        this.selectedIndex = 0;
    }
  }

  handleCloseSnack = () => {
    this.showSnack = false;
  };

  render() {
    const { classes, theme } = this.props;
    const drawer = (
      <div>
        <MenuList>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              backgroundImage:
                "url(https://wallpapersite.com/images/pages/pic_w/10125.jpg)",
              backgroundSize: "cover",
              marginTop: "-8px"
            }}
          >
            <Avatar
              aria-label="Mohammed Aijaaz"
              src={require("../static/images/dp.jpg")}
              className={classes.bigAvatar}
              style={{ marginBottom: "1em" }}
            />
            <Typography
              variant="title"
              style={{ marginTop: "0.5em", color: "#fff" }}
            >
              Mohammed Aijaaz
            </Typography>
            <Typography
              variant="subheading"
              style={{ marginTop: "0.5em", color: "#fff" }}
            >
              mdaijaaz3@gmail.com
            </Typography>
          </div>
          <Divider />
          <MenuItem
            button
            onClick={this.openProjects}
            // className={classes.menuItem}
            selected={this.selectedIndex === 0}
          >
            <ListItemIcon>
              <FolderSpecial style={{ fill: "#3f50b5" }} />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
          <MenuItem
            button
            onClick={this.openPapers}
            // className={classes.menuItem}
            selected={this.selectedIndex === 1}
          >
            <ListItemIcon>
              <PaperIcon style={{ fill: "rgb(15, 255, 8)" }} />
            </ListItemIcon>
            <ListItemText>Papers</ListItemText>
          </MenuItem>
          <MenuItem
            button
            onClick={this.openAbout}
            // className={classes.menuItem}
            selected={this.selectedIndex === 2}
          >
            <ListItemIcon>
              <AccountCircle style={{ fill: "#00b0ff" }} />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </MenuItem>
          <MenuItem
            button
            onClick={this.openContact}
            // className={classes.menuItem}
            selected={this.selectedIndex === 3}
          >
            <ListItemIcon>
              <ContactsIcon style={{ fill: "#ff0003" }} />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mohammed Aijaaz - Expo
            </Typography>
            <div>
              <IconButton
                aria-label="GitHub"
                onClick={() => {
                  window.open("https://github.com/MohammedAijaaz", "_blank");
                }}
              >
                <SvgIcon style={{ fill: "white" }}>
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />{" "}
                </SvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.open}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main
          className={classes.content}
          style={{ height: "93vh", overflowY: "scroll" }}
        >
          <div
            id="bgi"
            style={{
              display:
                this.props.location.pathname !== "/Contact" ? "none" : "block"
            }}
          />
          <div className={classes.toolbar} />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
            open={this.showSnack}
            autoHideDuration={5000}
            onClose={this.handleCloseSnack}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            TransitionComponent={TransitionRight}
            message={<span id="message-id">Hey there! Welcome to my Expo</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleCloseSnack}
              >
                <CloseIcon />
              </IconButton>
            ]}
          />
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/Papers" component={Papers} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigator);
