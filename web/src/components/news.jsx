import React from 'react';
import NewsList from './newsList.jsx';
import {connect} from 'react-redux'
class News extends React.Component{
	render(){
		let {newsd,showNews,hideNews}=this.props;
		var path=this.props.router.location.pathname;
		if(path.indexOf('newsArticle')!=-1){
			setTimeout(function(){
				hideNews()
			},0)
		}else{
			setTimeout(function(){
				showNews()
			},0)
		}
		return (
			<div>
				{newsd?<NewsList></NewsList>:''}
			{this.props.children}
			</div>
			)
	}
}
let mapStateToProps=(state)=>{
	return {
		newsd:state.newsDate
	}
}
let mapDispatchToProps=(dispatch)=>{
	return {
		showNews:()=>{
			dispatch({
				type:'showNews'
			})
		},
		hideNews:()=>{
			dispatch({
				type:'hideNews'
			})
		}
	}
}
let ChangeNews=connect(
	mapStateToProps,
	mapDispatchToProps
	)(News)
export default ChangeNews