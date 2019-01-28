import React, { Component } from 'react';
import './App.css';
import getColors from '../logic/colors'
import getQuotes from '../logic/quotes'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      text: getQuotes()[0].text,
      author: getQuotes()[0].author,
      index: 0,
    }

    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
  }

  handleNewQuoteClick(event){
    
    const colors = getColors();
    const quotes = getQuotes();

    let index = Math.floor(Math.random() * quotes.length);
    const colorIndex = Math.floor(Math.random() * colors.length);
    
    while(index === this.state.index)
        index = Math.floor(Math.random() * quotes.length);

    document.body.style.backgroundColor = colors[colorIndex];
    document.getElementById("quote-box").style.color = colors[colorIndex];

    this.setState({
      text: quotes[index].text,
      author: quotes[index].author,
      index: index
    });
  }
  
  render() {
    return (
      <div id="quote-box"> 

        <div className="text-justify text-center" id="text">
        "{this.state.text}"
        </div>


        <div className="row" id="author">
        - {this.state.author}
        </div>


        <div className="row">
        
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" alt= "Tweet!" href="https://twitter.com/intent/tweet?text=Hello%20world">
        <i className="fab fa-twitter" aria-hidden="true"></i>
        </a>

          <button className="btn btn-primary" id="new-quote" onClick={this.handleNewQuoteClick}>
          New Quote
          </button>

        </div>



      </div>
    );
  }

  //FCC check 
  componentDidMount(){
    
    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    // document.getElementById("quote-box").style.backgroundColor = getColors[0];
  }
}

export default App;

