import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Slide from "@material-ui/core/Slide";
import { Document, Page } from "react-pdf";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    margin: "0px",
    padding: "0px"
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

@observer
class Papers extends Component {
  @observable open = false;

  handleClickOpen = () => {
    this.open = true;
  };

  handleClose = () => {
    this.open = false;
  };

  render() {
    let { classes, fullScreen } = this.props;
    return (
      <div>
        <Button
          variant="raised"
          className={classes.button}
          onClick={this.handleClickOpen}
        >
          <Card className={classes.card} raised={true}>
            <CardMedia
              className={classes.media}
              image="http://cdn2.alphr.com/sites/alphr/files/styles/16x9_480/public/2016/10/hololens_uk_release_date.jpg?itok=TBHVxnum&timestamp=1476269755"
              title="Interactive Learning in Mixed Reality"
            />
            <CardContent>
              <Typography variant="subheading">
                A paper on Interactive Learning in Mixed Reality
              </Typography>
            </CardContent>
          </Card>
        </Button>
        <Dialog
          fullScreen={fullScreen}
          maxWidth="80%"
          open={this.open}
          onClose={this.handleClose}
          aria-labelledby="Interactive Learning in Mixed Reality"
          TransitionComponent={Transition}
        >
          <DialogContent>
            <IconButton
              color="inherit"
              onClick={this.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
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
