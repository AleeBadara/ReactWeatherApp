const React = require('react');
const { Component } = require('react');

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        let location = this.refs.location.value;

        if (location && location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" placeholder="Search Weather by City" ref="location" />
                    <button className="button expanded hollow">Get weather</button>
                </form>
            </div>
        );
    }
}

module.exports = WeatherForm;

//ef996ae5b40201e7fe54e061dde5d8f9