var React = require('react');
import NavLink from './NavLink';


module.exports = React.createClass({
	render:function(){
		return(
			<div>
				<h1>React Main</h1>
				<ul role="nav">
					<li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
		          	<li><NavLink to="/about">About</NavLink></li>
		        	<li><NavLink to="/nesting">Nesting</NavLink></li>
		        </ul>
		        {this.props.children}
	        </div>
			);
	}
})