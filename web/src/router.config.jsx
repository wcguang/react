import React from 'react';
import {Link,Router,Route,IndexRoute,hashHistory} from 'react-router';
import Index from './components/index.jsx';
import Home from './components/home.jsx';
import Solve from './components/solve.jsx';
import Product from './components/product.jsx';
import Case from './components/case.jsx';
import Center from './components/center.jsx';
import News from './components/news.jsx';
import About from './components/about.jsx';
import Recruit from './components/recruit.jsx';
import NewsArticle from './components/newsArticle.jsx';
import CaseDetails from './components/caseDetails.jsx';
let RouterConfig=()=>{
	return(
		<Router history={hashHistory}>
			<Route path='/' component={Index}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path='home' component={Home}></Route>
				<Route path='solve' component={Solve}>
					<Route path='newsArticle/:uuid' component={NewsArticle}></Route>
				</Route>
				<Route path='product' component={Product}></Route>
				<Route path='case' component={Case}>
					<Route path='caseDetails/:uuid' component={CaseDetails}></Route>
				</Route>
				<Route path='center' component={Center}></Route>
				<Route path='news' component={News}>
					<Route path="newsArticle/:uuid" component={NewsArticle}></Route>
				</Route>
				<Route path='about' component={About}></Route>
				<Route path='recruit' component={Recruit}></Route>
			</Route>
		</Router>
		)
}
export default RouterConfig