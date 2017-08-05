var React = require('react');
import { Link } from 'react-router'


module.exports = React.createClass({
	render:function(){
		return(
			   <Link {...this.props} activeClassName="active"/>
			);
	}
})