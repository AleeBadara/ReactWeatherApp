const React = require('react');
const { NavLink } = require('react-router-dom');

const Examples = () => {
    return (
        <div>
            <h2 className="text-center page-title">Examples component</h2>
            <p>Some examples</p>
            <ol>
                <li><NavLink to="/?location=Paris">Paris, France</NavLink></li>
                <li><NavLink to="/?location=Dakar">Dakar, Sénégal</NavLink></li>
            </ol>
        </div>
    );
};

module.exports = Examples;