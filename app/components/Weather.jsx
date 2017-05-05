const React = require('react');
const { Component } = require('react');
require('url-search-params-polyfill');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        let search = this.props.location.search;
        let params = new URLSearchParams(search);
        let location = params.get('location');

        if (location) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    // Fonction built in: s'éxécute à chaque fois que les props 
    // de ce component changent
    componentWillReceiveProps(newProps) {
        let search = newProps.location.search;
        let params = new URLSearchParams(search);
        let location = params.get('location');

        if (location) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }

    render() {
        let { isLoading, temp, location } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h4 className="text-center">Loading...</h4>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />
            }
        }
        return (
            <div>
                <h2 className="text-center page-title">Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div >
        );
    }
    handleSearch(value) {
        let that = this;
        this.setState({ isLoading: true });
        OpenWeatherMap.getTemp(value).then(function (temp) {
            that.setState({
                location: value,
                temp: temp,
                isLoading: false
            });
        }, function (err) {
            alert(err);
            that.setState({ isLoading: false });
        });

    }


}

module.exports = Weather;