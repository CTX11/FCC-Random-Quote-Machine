function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const API =
"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [
      {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein" }],


      index: 0 });_defineProperty(this, "getRandomIndex",















    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({
          index });

      }
    });}componentDidMount() {fetch(API).then(res => res.json()).then(res => [this.setState({ quotes: res.quotes }, this.getRandomIndex)]);}

  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetURL =
    "https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}";

    return /*#__PURE__*/(
      React.createElement("div", { className: "wrapper test d-flex align-items-center justify-content-around vh-75" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 box p-5 rounded-circle", id: "quote-box" },
      quote && /*#__PURE__*/
      React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
      React.createElement("strong", { id: "text" }, "\"", quote.quote, "\""), /*#__PURE__*/
      React.createElement("cite", { className: "d-block text-center", id: "author" }, "- ",
      quote.author)), /*#__PURE__*/




      React.createElement("div", { className: "d-flex justify-content-between" }, /*#__PURE__*/
      React.createElement("a", {
        className: "btn btn-small btn-primary",
        target: "_blank",
        href: tweetURL,
        id: "tweet-quote" }, /*#__PURE__*/

      React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/


      React.createElement("button", {
        className: "btn btn-small btn-primary",
        onClick: this.getRandomIndex,
        id: "new-quote" }, /*#__PURE__*/

      React.createElement("i", { className: "fas fa-random" }))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("main"));