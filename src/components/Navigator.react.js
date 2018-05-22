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

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

@observer
class Navigator extends Component {
  @observable open = false;

  componentWillMount() {
    this.openProjects();
  }

  toggleDrawer = open => () => {
    this.open = open;
  };

  openProjects = () => {
    this.toggleDrawer(false);
    this.props.history.push("/Home");
  };

  openAbout = () => {
    this.toggleDrawer(false);
    this.props.history.push("/About");
  };

  render() {
    const { classes, theme } = this.props;
    const drawer = (
      <div className={classes.list}>
        <List>
          <ListItem button onClick={this.openProjects}>
            <ListItemIcon>
              <FolderSpecial />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </ListItem>
          <ListItem button onClick={this.openAbout}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.open}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
              className={classNames(
                classes.menuButton,
                this.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mohammed Aijaaz - Expo
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.open && classes.drawerPaperClose
            )
          }}
          open={this.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.toggleDrawer(false)}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>{drawer}</List>
        </Drawer>
        <main className={classes.content}>
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
