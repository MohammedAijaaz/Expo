import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Slide from "@material-ui/core/Slide";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/OpenWith";
import classnames from "classnames";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  // card: {
  //   maxWidth: "100%"
  // },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    margin: "0px",
    padding: "0px"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  expand1: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen1: {
    transform: "rotate(180deg)"
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

@observer
class Papers extends Component {
  @observable open = false;
  @observable open1 = false;
  @observable expanded = false;
  @observable expanded1 = false;

  handleExpandClick = () => {
    this.expanded = !this.expanded;
  };

  handleExpandClick1 = () => {
    this.expanded1 = !this.expanded1;
  };

  handleClickOpen = () => {
    this.open = true;
  };

  handleClose = () => {
    this.open = false;
  };

  handleClickOpen1 = () => {
    this.open1 = true;
  };

  handleClose1 = () => {
    this.open1 = false;
  };

  render() {
    let { classes, fullScreen } = this.props;
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 0.3fr))",
          gridGap: "3rem",
          justifyContent: "center"
        }}
      >
        <div>
          <Card className={classes.card} raised={true}>
            <CardMedia
              className={classes.media}
              image="http://cdn2.alphr.com/sites/alphr/files/styles/16x9_480/public/2016/10/hololens_uk_release_date.jpg?itok=TBHVxnum&timestamp=1476269755"
              title="Interactive Learning in Mixed Reality"
            />
            <CardContent>
              <Typography variant="subheading">
                Interactive Learning in Mixed Reality
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Open" onClick={this.handleClickOpen}>
                <FavoriteIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Abstract:
                </Typography>
                <Typography align="justify" paragraph>
                  Mixed reality is the result of blending the physical world
                  with the digital world. It is the next evolution in human,
                  computer, and environmental interaction and unlocks
                  possibilities that before now were restricted to our
                  imaginations. It is made possible by advancements in computer
                  vision, graphical processing power, display technology, and
                  input systems. Microsoft HoloLens is the first self-contained,
                  holographic computer, enabling to engage with the digital
                  content and interact with holograms in the world. Specialized
                  components—like multiple sensors, advanced optics, and a
                  custom holographic processing unit—enable to go beyond the
                  screen. We present a method of utilizing the HoloLens for
                  advanced learning in Mixed Reality. One methodology of
                  achieving this goal is, when a user is reading a book while
                  wearing the HoloLens, if the user comes across a word which
                  he/she has no idea about, then the user taps on the word using
                  a tapping gesture, this will be recognized by the HoloLens. It
                  then uses Optical Character Recognition (OCR) tools to
                  recognize the word. The next step is to use the word and look
                  up using Google search APIs to get relevant results. The most
                  relevant result will be chosen and is prepared to be rendered
                  as a hologram. The user can interact with the hologram to
                  understand more about it, to have a look from all angles etc.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <div>
          <Card className={classes.card} raised={true}>
            <CardMedia
              className={classes.media}
              image={require("../static/images/arduino.jpg")}
              title="Vehicle Tracking System using GSM and GPS"
            />
            <CardContent>
              <Typography variant="subheading">
                Vehicle Tracking System using GSM and GPS
              </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label="Open" onClick={this.handleClickOpen1}>
                <FavoriteIcon />
              </IconButton>
              <IconButton
                className={classnames(classes.expand1, {
                  [classes.expandOpen1]: this.expanded1
                })}
                onClick={this.handleExpandClick1}
                aria-expanded={this.expanded1}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.expanded1} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Abstract:
                </Typography>
                <Typography align="justify" paragraph>
                  With the growing need of GPS as a technology, vehicle tracking
                  system becomes a common application. While GPS has many
                  applications, vehicle tracking system is vastly used. This
                  paper is proposed to design and develop a tracking system for
                  vehicles. Within the daily operation of vehicles, people who
                  board other transport facilities like office cars, city buses
                  and college buses face problems with unexpected delays or
                  irregular dispatching times. The tracking system proposed here
                  helps you to locate any vehicle right at your fingertips. An
                  app in your mobile phone will send an SMS to the GSM. No
                  sooner, a message with longitude and latitude will be sent
                  back to the mobile device which is parsed to display the
                  approximate geographical position on the route map.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
        <Dialog
          fullScreen={fullScreen}
          maxWidth="80%"
          open={this.open}
          onClose={this.handleClose}
          aria-labelledby="Interactive Learning in Mixed Reality"
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
                Interactive Learning in Mixed Reality
              </Typography>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <Document
              file={require("../static/paper.pdf")}
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={1} />
              <Page pageNumber={2} />
              <Page pageNumber={3} />
              <Page pageNumber={4} />
              <Page pageNumber={5} />
              <Page pageNumber={6} />
            </Document>
          </DialogContent>
        </Dialog>
        <Dialog
          fullScreen={fullScreen}
          maxWidth="80%"
          open={this.open1}
          onClose={this.handleClose1}
          aria-labelledby="Vehicle Tracking System using GSM and GPS"
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose1}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Vehicle Tracking System using GSM and GPS
              </Typography>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <Document
              file={require("../static/paper1.pdf")}
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={1} />
              <Page pageNumber={2} />
            </Document>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

Papers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withMobileDialog()(
  withStyles(styles, { withTheme: true })(Papers)
);
