import React from 'react';
import SolveList from './solveList.jsx';
import {connect} from 'react-redux';
class Solve extends React.Component{
	componentDidUpdate(){
		// console.log(this.props.router.location.pathname)
	}
	render(){
		// console.log(this.props.router.location.pathname)
		var path=this.props.router.location.pathname;
		let {showSolve,hideSolve,solve}=this.props
		if(path.indexOf('newsArticle')!=-1){
			// alert(12)
			setTimeout(function(){
				hideSolve()
			},0)
		}else{
			setTimeout(function(){
				showSolve()
			},0)
		}
		return (
			<div>
				{solve?<SolveList></SolveList>:''}
				{this.props.children}
			</div>
			)
	}
}
let mapStateToProps=(state)=>{
	return {
		solve:state.solveDate
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		showSolve:()=>{
			dispatch({
				type:"showSolve"
			})
		},
		hideSolve:()=>{
			dispatch({
				type:"hideSolve"
			})
		}
	}
}
let ChangeSolve=connect(
	mapStateToProps,
	mapDispatchToProps
	)(Solve)
export default ChangeSolve