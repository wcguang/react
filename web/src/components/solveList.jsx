import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class SolveList extends React.Component{
	componentDidMount(){
		let {sendSolveDate}=this.props;
		fetch('http://localhost:8090/solve',{
			headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
			},
		}).then((res)=>{
			if(res.ok){
				res.json().then((date)=>{
					// console.log(date)
					setTimeout(function(){
						sendSolveDate(date)
					},0)
					
				})
			}
		}).catch((res)=>{})

		$(function(){
			$('.height_limit').css({
				height:'430px',
				overflow:'hidden'
			})
			$('.show_hide').css('position','absolute')
			$('.am-two,.am-three,.am-four').attr('style','transform:translate(-1500px,0);position:absolute')
			$('.event_click').click(function(){
				var $index=$(this).index();
				$(this).addClass("am-active").siblings().removeClass('am-active ')
				$('.show_hide').eq($index).attr('style','transform:translate(0,0)').siblings().attr('style','transform:translate(-1500px,0);position:absolute')
			})
		})
	}
	render(){
		let {solveDate}=this.props;
		return (
			<div>
			    <div className="toppic">
			        <div className="am-container-1">
			            <div className="toppic-title left">
			                <i className="am-icon-lightbulb-o toppic-title-i"></i>
			                <span className="toppic-title-span">解决方案</span>
			                <p>Solutions</p>
			            </div>
			            <div className="right toppic-progress">
			                <span><a href="index.html" className="w-white">首页</a></span>
			                <i className=" am-icon-arrow-circle-right w-white"></i>
			                <span><a href="solutions.html" className="w-white">解决方案</a></span>
			            </div>
			        </div>
			    </div>
			    <div data-am-widget="tabs" className="am-tabs am-tabs-d2 ">
			        <ul className="am-tabs-nav am-cf solutions-tabs-ul ">
			            <li className="event_click solutions-tabs-ul-li1"><a href="javascript:;"><i className=" am-icon-desktop"></i><span>网站解决方案</span></a></li>
			            <li className="solutions-tabs-ul-li2 event_click"><a href="javascript:;"><i className=" am-icon-mobile-phone mobile-phone"></i><span>解决方案</span></a></li>
			            <li className="solutions-tabs-ul-li3 event_click"><a href="javascript:;"><i className=" am-icon-desktop"></i><span>网站解决方案</span></a></li>
			            <li className="solutions-tabs-ul-li4 event_click"><a href="javascript:;"><i className=" am-icon-mobile-phone mobile-phone"></i><span>解决方案</span></a></li>
			        </ul>
			        <div className="am-tabs-bd solutions-tabs-content height_limit ">
			            <div className=" show_hide am-one">
			                <ul className=" solutions-content-ul">
			                {
			                	solveDate.map((val,index)=>{
			                		return (
											<li key={index} className="am-u-sm-12 am-u-md-6 am-u-lg-12">
						                        <Link to={'solve/newsArticle/'+val._id}>
						                            <div className="am-u-sm-12 am-u-md-12 am-u-lg-3 solution-tabs-img">
						                                <img src={val.img}/>
						                            </div>
						                            <div className="am-u-sm-12 am-u-md-12 am-u-lg-9 solution-tabs-words">
						                                <h5>{val.title}</h5>
						                                <p>{val.subtitle}</p>
						                            </div>
						                        </Link>
						                    </li>
			                			)
			                	})
			                }
			                    
			                    <div className="clear"></div>
			                </ul>
			            </div>
			            <div className="show_hide am-two">
			                <ul className="am-container-1 solutions-content-ul">
			                    
			                </ul>
			            </div>
			            <div className="show_hide am-three">
			                <ul className="am-container-1 solutions-content-ul">
			                    
			                </ul>
			            </div>
			            <div className="show_hide am-four">
			                <ul className="am-container-1 solutions-content-ul">
			                    
			                </ul>
			            </div>
			        </div>
			    </div>
			</div>
			)
	}
}
let mapStateToProps=(state)=>{
	return{
		solveDate:state.solve
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		sendSolveDate:(date)=>{
			dispatch({
				type:'solveDate',
				payload:date
			})
		}
	}
}
let ChangeSolveList=connect(
	mapStateToProps,
	mapDispatchToProps
	)(SolveList)
export default ChangeSolveList