import React from 'react';
import CaseList from './caseList.jsx';
import {connect} from 'react-redux'
class Case extends React.Component{
	render(){
		let {cased,showCase,hideCase}=this.props;
		var path=this.props.router.location.pathname;
		if(path.indexOf('caseDetails')!=-1){
			setTimeout(function(){
				hideCase()
			},0)
		}else{
			setTimeout(function(){
				showCase()
			},0)
		}
		return (
			<div>
				{cased?<CaseList></CaseList>:''}
			   {this.props.children}
			</div>
			)
	}
}
let mapStateToProps=(state)=>{
	return {
		cased:state.caseDate
	}
    
}
let mapDispatchToProps=(dispatch)=>{
    return {
    	showCase:()=>{
    		dispatch({
    			type:'showCase'
    		})
    	},
    	hideCase:()=>{
    		dispatch({
    			type:'hideCase'
    		})
    	}
    }
}
let ChangeCase=connect(
    mapStateToProps,
    mapDispatchToProps
    )(Case)
export default ChangeCase