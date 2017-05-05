const React = require('react');

const About = () => {
    return (
        <div>
            <h2 className="text-center page-title">About component</h2>
            <p>A weather application build on React</p>
            <p>Here are some of the tools used to build this app</p>
            <ul>
                <li><a href="https://facebook.github.io.react">React</a>- The Javascript framework</li>
                 <li><a href="https://openweathermap.org">OpenWeatherMap</a>- The API for the weather</li>
            </ul>
        </div>
    );
};

module.exports = About;