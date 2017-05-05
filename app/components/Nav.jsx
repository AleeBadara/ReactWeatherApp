const React = require('react');
const { NavLink } = require('react-router-dom');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e) {
        e.preventDefault();
        let location = this.refs.search.value;
        let encodedLocation = encodeURIComponent(location);
        if (encodedLocation) {
            this.refs.search.value = '';
            window.location.hash = `#/?location=${encodedLocation}`;
        }
    }
    render() {
        return (
            <div className="top-bar">

                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li><NavLink exact to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Weather</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</NavLink></li>
                        <li><NavLink to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</NavLink></li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search Weather by City" ref="search" /></li>
                            <li><input type="submit" className="button" value="Search" /></li>
                        </ul>
                    </form>
                </div >

            </div >
        );
    }

};

module.exports = Nav;