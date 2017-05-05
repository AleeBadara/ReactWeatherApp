const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('Main');
const Weather = require('Weather');
const About = require('About');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load Css
require('style-loader!css-loader!sass-loader!ApplicationStyles');



ReactDOM.render(
    <Main />,
    document.getElementById('app')
);