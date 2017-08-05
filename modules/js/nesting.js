var React = require('react');
import { Router, Route, browserHistory, IndexRoute} from 'react-router'


module.exports = React.createClass({
	github:function(){
		console.log('GitHub')
		browserHistory.push('/nesting/githubSearch')
	},
	todo:function(){
		console.log('ToDo')
		browserHistory.push('/nesting/todo')
	},
	dbms:function(){
		console.log('DbmS')
		browserHistory.push('/nesting/dbms')
	},
	render:function(){
		return(
			<div>
				<h2>Nesting One</h2>
		        <center>
					<input type="button" value="GitHub" onClick={this.github}/>
					<input type="button" value="TODO" onClick={this.todo}/>
		        	<input type="button" value="DBMS" onClick={this.dbms}/><br/>
		        </center>
		        
		        {this.props.children}
			</div>
			);
	}
})
