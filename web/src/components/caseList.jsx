import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
class CaseList extends React.Component{
	componentDidMount(){
		let {caseDate}=this.props
		fetch('http://localhost:8090/case',{
			headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
			}
		}).then((res)=>{
			if(res.ok){
				res.json().then((date)=>{
					// console.log(date)
					setTimeout(function(){
						caseDate(date)
					},0)
				})
			}
		}).catch((res)=>{})
	}
	render(){
		let {cased}=this.props;
		return (
			<div>
			   <div className="toppic">
			        <div className="am-container-1">
			            <div className="toppic-title left">
			                <i className="am-icon-briefcase toppic-title-i"></i>
			                <span className="toppic-title-span">客户案例</span>
			                <p>Customer Case</p>
			            </div>
			            <div className="right toppic-progress">
			                <span><a href="index.html" className="w-white">首页</a></span>
			                <i className=" am-icon-arrow-circle-right w-white"></i>
			                <span><a href="customer-case.html" className="w-white">客户案例</a></span>
			            </div>
			        </div>
			    </div>
			    <div className="am-container-1">
			        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1
			            am-avg-md-3 am-avg-lg-4 am-gallery-bordered customer-case-ul">
			            {
			            	cased.map((val,index)=>{
			            		return (
										<li key={index}>
							                <div className="am-gallery-item">
							      				 <Link to={"case/caseDetails/"+val._id}>
							                        <div className="customer-case-img">
							                            <img src={val.img_small} />
							                        </div>
							                        <h3 className="am-gallery-title">{val.title}</h3>
							                        <div className="am-gallery-desc gallery-words">{val.subtitle}</div>
							                  </Link>
							                </div>
							            </li>
			            			)
			            		 
			            	})
			            }
			           
			        </ul>
			        </div>
			        <div className="part-all gray-li">
			            <div className="customer  am-container-1">
			                <div className="part-title">
			                    <i className="am-icon-users part-title-i"></i>
			                    <span className="part-title-span">服务客户</span>
			                    <p>Serve Customers</p>
			                </div>
			                <div className="am-slider am-slider-default am-slider-carousel part-all" style={{backgroundColor: "#f0eeed", boxShadow:"none"}}>
			                    <ul className="am-slides">
			                        <li><img src="src/components/style/img/ptn4.png" /></li>
			                        <li><img src="src/components/style/img/ptn5.png" /></li>
			                        <li><img src="src/components/style/img/ptn6.png" /></li>
			                        <li><img src="src/components/style/img/ptn7.png" /></li>
			                        <li><img src="src/components/style/img/ptn8.png" /></li>
			                        <li><img src="src/components/style/img/ptn4.png" /></li>
			                        <li><img src="src/components/style/img/ptn5.png" /></li>
			                        <li><img src="src/components/style/img/ptn6.png" /></li>
			                        <li><img src="src/components/style/img/ptn7.png" /></li>
			                        <li><img src="src/components/style/img/ptn8.png" /></li>
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
		cased:state.case
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		caseDate:(date)=>{
			dispatch({
				type:'caseDate',
				payload:date
			})
		}
	}
}
let ChangeCaseList=connect(
	mapStateToProps,
	mapDispatchToProps
	)(CaseList)
export default ChangeCaseList