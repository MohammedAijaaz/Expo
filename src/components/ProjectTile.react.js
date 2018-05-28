import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Img from "react-image";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SvgIcon from "@material-ui/core/SvgIcon";
import Code from "@material-ui/icons/Code";
import OpenIcon from "@material-ui/icons/OpenWith";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  card: {
    //   maxWidth: 400,
    margin: "1px"
  },
  actions: {
    display: "flex"
  },

  open: {
    marginLeft: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

@observer
class ProjectTile extends Component {
  @observable open = false;

  handleClickOpen = () => {
    this.open = true;
  };

  handleClose = () => {
    this.open = false;
  };

  displayTech = () => {
    let { project } = this.props;
    let languages = project.languages;
    let retval = [];
    for (let i = 0; i < languages.length; i++) {
      switch (languages[i]) {
        case "C#":
          retval.push(
            <Img
              src="https://cdn.iconscout.com/public/images/icon/free/png-512/c-sharp-logo-344be1179ff0b537-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Unity":
          retval.push(
            <Img
              src="https://cdn.iconscout.com/public/images/icon/free/png-512/unity-logo-334cbb9e5012d791-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Blender":
          retval.push(
            <Img
              src="http://icons.iconarchive.com/icons/xenatt/the-circle/512/App-Blender-icon.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "React":
          retval.push(
            <Img
              src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "HTML":
          retval.push(
            <Img
              src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "CSS":
          retval.push(
            <Img
              src="https://www.abouthack.com/wp-content/uploads/2014/07/css3_logo.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "JS":
          retval.push(
            <Img
              src="https://coderdojo.com/wp-content/uploads/2016/08/Unofficial_JavaScript_logo_2.svg.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "NodeJs":
          retval.push(
            <Img
              src="https://cdn.iconscout.com/public/images/icon/free/png-512/nodejs-logo-36559ec903b263f5-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Firebase":
          retval.push(
            <Img
              src="https://www.shareicon.net/data/512x512/2016/07/08/117548_google_512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Android":
          retval.push(
            <Img
              src="https://images.vexels.com/media/users/3/139556/isolated/preview/1718a076e29822051df8bcf8b5ce1124-android-logo-by-vexels.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Java":
          retval.push(
            <Img
              src="https://d1q6f0aelx0por.cloudfront.net/product-logos/191bf3e6-f5e5-4430-abb9-2294aa3bb728-java-logo-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "MySQL":
          retval.push(
            <Img
              src="https://www.seeklogo.net/wp-content/uploads/2017/05/mysql-logo.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "PHP":
          retval.push(
            <Img
              src="https://www.icoldo.com/wordpress/wp-content/uploads/2015/03/php.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Bootstrap":
          retval.push(
            <Img
              src="https://cdn.iconscout.com/public/images/icon/free/png-512/bootstrap-logo-brand-development-tools-3af54ac4f4700735-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        case "Python":
          retval.push(
            <Img
              src="https://cdn.iconscout.com/public/images/icon/free/png-512/python-logo-31578242a9b4f4ae-512x512.png"
              style={{ maxWidth: "10%", marginLeft: "1em" }}
              key={i}
            />
          );
          break;
        // case "Scikit Learn":
        //   retval.push(
        //     <Img
        //       src="https://cdn.iconscout.com/public/images/icon/free/png-512/python-logo-31578242a9b4f4ae-512x512.png"
        //       style={{ maxWidth: "10%" }}
        //     />
        //   );
        //   break;
        default:
          break;
      }
    }
    return retval;
  };

  render() {
    let { project, classes, fullScreen } = this.props;

    return (
      <div>
        <Card className={classes.card} raised={true} style={{ height: "100%" }}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Mohammed Aijaaz"
                src={require("../static/images/dp.jpg")}
                className={classes.avatar}
              />
            }
            // action={
            //   <IconButton>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={project.name}
            subheader={project.date}
          />
          <CardMedia
            className={classes.media}
            title={project.name}
            style={{ height: "15em", overflow: "hidden" }}
            src=" "
          >
            <Img src={project.images[0]} style={{ maxWidth: "100%" }} />
          </CardMedia>
          <CardContent style={{ overflowY: "hidden" }}>
            <Typography component="p" align="justify">
              {project.description.length >= 100
                ? project.description.substr(0, 90) + "..."
                : project.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon style={{ fill: "red" }} />
            </IconButton>
            {project.git !== "" ? (
              <IconButton
                aria-label="Share"
                onClick={() => {
                  window.open(project.git);
                }}
              >
                <SvgIcon style={{ fill: "black" }}>
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
                </SvgIcon>
              </IconButton>
            ) : null}

            {project.link !== "" ? (
              <IconButton
                aria-label="Link"
                onClick={() => {
                  window.open(project.link);
                }}
              >
                <Code />
              </IconButton>
            ) : null}
            <IconButton
              aria-label="Open"
              className={classes.open}
              onClick={this.handleClickOpen}
            >
              <OpenIcon style={{ fill: "black" }} />
            </IconButton>
          </CardActions>
        </Card>
        <Dialog
          fullScreen={fullScreen}
          open={this.open}
          onClose={this.handleClose}
          aria-labelledby={project.name}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                {project.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent style={{ marginTop: "1em" }}>
            <Img src={project.images[0]} style={{ maxWidth: "100%" }} />
            <Typography variant="subheading" color="inherit" align="justify">
              {project.description}
            </Typography>
            {/* <Typography variant="subheading" color="inherit" align="justify">
              Technologies used:<br />
            </Typography> */}
            <div style={{ marginTop: "1em" }}>{this.displayTech()}</div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

ProjectTile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withMobileDialog()(
  withStyles(styles, { withTheme: true })(ProjectTile)
);
