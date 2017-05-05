const React = require('react');

const WeatherMessage = (props) => {
    return (
        <h4 className="text-center">It's {props.temp} degree in {props.location}.</h4>
    );
};

module.exports = WeatherMessage;