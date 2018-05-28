import React, { Component } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Fade } from "@material-ui/core";

class Social extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <Tooltip id="tooltip-icon" title="GitHub">
          <Fade in={true} timeout={1000}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open("https://github.com/MohammedAijaaz", "_blank");
              }}
            >
              <SvgIcon style={{ fill: "black" }}>
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
              </SvgIcon>
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Instagram">
          <Fade in={true} timeout={1200}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/mohammedaijaaz/",
                  "_blank"
                );
              }}
            >
              <img
                src={require("../static/images/instagram.svg")}
                style={{ maxWidth: "60%" }}
                alt="Instagram"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Facebook">
          <Fade in={true} timeout={1400}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open("https://www.facebook.com/md.aijaaz", "_blank");
              }}
            >
              <img
                src={require("../static/images/facebook.svg")}
                style={{ maxWidth: "60%" }}
                alt="Facebook"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Twitter">
          <Fade in={true} timeout={1600}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open("https://twitter.com/mdaijaaz", "_blank");
              }}
            >
              <img
                src={require("../static/images/twitter.svg")}
                style={{ maxWidth: "60%" }}
                alt="Twitter"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="LinkedIn">
          <Fade in={true} timeout={1800}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mohammed-aijaaz-88a631103/",
                  "_blank"
                );
              }}
            >
              <img
                src={require("../static/images/linkedin.svg")}
                style={{ maxWidth: "60%" }}
                alt="Linkedin"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Google+">
          <Fade in={true} timeout={2000}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open(
                  "https://plus.google.com/+MohammedAijaaz",
                  "_blank"
                );
              }}
            >
              <img
                src={require("../static/images/google-plus.svg")}
                style={{ maxWidth: "60%" }}
                alt="Google+"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Outlook: mdaijaaz@outlook.com">
          <Fade in={true} timeout={2200}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open("mailto: mdaijaaz@outlook.com");
              }}
            >
              <img
                src={require("../static/images/outlook.svg")}
                style={{ maxWidth: "60%" }}
                alt="Outlook"
              />
            </IconButton>
          </Fade>
        </Tooltip>

        <Tooltip id="tooltip-icon" title="Gmail: mdaijaaz3@gmail.com">
          <Fade in={true} timeout={2400}>
            <IconButton
              aria-label="Share"
              onClick={() => {
                window.open("mailto: mdaijaaz3@gmail.com");
              }}
            >
              <img
                src={require("../static/images/inbox.svg")}
                style={{ maxWidth: "60%" }}
                alt="Inbox"
              />
            </IconButton>
          </Fade>
        </Tooltip>
      </div>
    );
  }
}

export default Social;
