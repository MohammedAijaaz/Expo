import React, { Component } from "react";
import PropTypes from "prop-types";
import { observable } from "mobx";
import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderSpecial from "@material-ui/icons/FolderSpecial";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Router, { Route, Switch } from "react-router-dom";
import Home from "../views/Home.react";
import NotFound from "../views/NotFound.react";
import About from "../views/About.react";
import classNames from "classnames";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Avatar from "@material-ui/core/Avatar";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 300;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
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

@observer
class Navigator extends Component {
  @observable open = false;
  @observable selectedIndex = 0;
  // @observable anchorEl = null;

  componentWillMount() {
    this.openProjects();
  }

  handleDrawerToggle = () => {
    this.open = !this.open;
  };

  openProjects = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 0;
    this.props.history.push("/Home");
  };

  openAbout = () => {
    if (this.open) this.handleDrawerToggle();
    this.selectedIndex = 1;
    this.props.history.push("/About");
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
              padding: "16px"
            }}
          >
            <Avatar
              aria-label="Mohammed Aijaaz"
              src={require("../static/images/dp.jpg")}
              className={classes.bigAvatar}
              style={{ marginBottom: "1em" }}
            />
            <Typography variant="title" style={{ marginTop: "0.5em" }}>
              Mohammed Aijaaz
            </Typography>
            <Typography variant="subheading" style={{ marginTop: "0.5em" }}>
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
              <FolderSpecial />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
          <MenuItem
            button
            onClick={this.openAbout}
            // className={classes.menuItem}
            selected={this.selectedIndex === 1}
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
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
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/About" component={About} />
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
