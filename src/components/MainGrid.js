import React, { Component, Fragment } from "react";
import "./MainGrid.css";
import { Button, Typography, Fade, withStyles } from "@material-ui/core";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import { quotes, colors } from "../store.js";

const styles = {
  container: {
    height: "100%",
    width: "100%",
    position: "fixed",
    transition: "background-color 2.5s ease"
  },
  newQuote: {
    position: "absolute",
    right: 0,
    bottom: 0,
    transition: "background-color 2.5s ease"
  },
  text: { marginTop: 30 },
  tweetQuote: {
    position: "absolute",
    left: 0,
    bottom: 0,
    fontSize: 30,
    transition: "background-color 2.5s ease"
  },
  author: {
    position: "absolute",
    right: 80,
    bottom: 70
  }
};

class MainGrid extends Component {
  constructor(props) {
    super(props);

    let random = quotes[Math.floor(Math.random() * quotes.length)];
    let color = colors[Math.floor(Math.random() * colors.length)];

    this.state = {
      quote: random.quote,
      author: random.author,
      color: color
    };
  }

  setNewQuote = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let random = quotes[Math.floor(Math.random() * quotes.length)];

    while (random.quote === this.state.quote) {
      random = quotes[Math.floor(Math.random() * quotes.length)];
    }

    let quote = random.quote;
    let author = random.author;

    this.setState({
      quote: quote,
      author: author,
      color: color
    });
  };

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div
          className={classes.container}
          style={{ background: this.state.color }}
        >
          <div id="quote-box">
            {/* <CSSTransitionGroup
              transitionName="example"
              transitionEnter={true}
              transitionLeave={true}
              transitionEnterTimeout={2000}
              transitionLeaveTimeout={1000}
            > */}
            <Typography
              key={this.state.quote}
              variant="h5"
              className={classes.text}
              style={{ color: this.state.color }}
            >
              {this.state.quote}
            </Typography>

            <div
              key={this.state.author}
              className={classes.author}
              style={{ color: this.state.color }}
            >
              {this.state.author}
            </div>
            {/* </CSSTransitionGroup> */}

            <div className={classes.buttonsContainer}>
              <Button
                className={classes.tweetQuote}
                style={{
                  backgroundColor: this.state.color,
                  color: "white"
                }}
              >
                <i className="fab fa-twitter" />
              </Button>

              <Button
                className={classes.newQuote}
                size="large"
                onClick={this.setNewQuote}
                style={{ backgroundColor: this.state.color }}
              >
                <Typography
                  variant="h5"
                  style={{ textTransform: "capitalize", color: "white" }}
                >
                  New Quote
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainGrid);
