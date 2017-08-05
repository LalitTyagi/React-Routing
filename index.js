import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'


var ReactMain = require('./modules/js/reactMain');
var Home = require('./modules/js/home');
var Contact = require('./modules/js/contact');
var About = require('./modules/js/about');
var Nesting = require('./modules/js/nesting');
var GitHub = require('./modules/js/githubSearch');
var Todo = require('./modules/js/todo');
var DBMS = require('./modules/js/dbms');

render((
	<Router history={browserHistory}>
	    <Route path="/" component={ReactMain}>
			<IndexRoute component={Home}/>
	    	<Route path="contact" component={Contact}/>
	    	<Route path="about" component={About}/>
	    	<Route path="nesting" component={Nesting}>
	    		<Route path="githubSearch" component={GitHub}/>
	    		<Route path="todo" component={Todo}/>
	    		<Route path="dbms" component={DBMS}/>
	  		</Route>
	  	</Route>
  	</Router>
), document.getElementById('app'))