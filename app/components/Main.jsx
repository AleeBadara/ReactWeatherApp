const React = require('react');
const { HashRouter, Route, NavLink } = require('react-router-dom');

const Nav = require('Nav');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

class Main extends React.Component {
    render() {
        return (
            <HashRouter >
                <div>
                    <Nav />
                    <div className="row">
                        <div className="columns medium-6 large-4 small-centered">
                            <Route exact path="/" component={Weather} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/examples" component={Examples} />
                        </div>
                    </div>
                </div>
            </HashRouter >
        );
    }

}

module.exports = Main;