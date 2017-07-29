import React from 'react';
class CaseDetails extends React.Component{
	constructor(){
		super();
		this.state={
			arr:[]
		}
	}
	render(){
		fetch('http://localhost:8090/case',{
			headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
			}
		}).then((res)=>{
			if(res.ok){
				res.json().then((date)=>{
					// console.log(date)
					this.setState({
						arr:date
					})
				})
			}
		}).catch((res)=>{})
		var id=this.props.router.params.uuid;
		var arr=this.state.arr
		return (
			<div>
				<div className="toppic">
			        <div className="am-container-1">
			            <div className="toppic-title left">
			                <i className="am-icon-paper-plane toppic-title-i"></i>
			                <span className="toppic-title-span">案例详情</span>
			                <p>Case Information</p>
			            </div>
			            <div className="right toppic-progress">
			                <span><a href="customer-case.html" className="w-white">客户案例</a></span>
			                <i className=" am-icon-arrow-circle-right w-white"></i>
			                <span><a href="case-inform.html" className="w-white">案例详情</a></span>
			            </div>
			        </div>
			    </div>
			    <div>
			        <div className=" product-show-ul">
			            <div className="product-content">
			                <div className="left am-u-sm-12 am-u-md-6 am-u-lg-6 product-content-left case-left">
			                    <div className="product-show-title">
			                        <h3>{arr.length!=0?arr[id].title:""}</h3>
			                    </div>
			                    <div className="product-show-content">
			                        <div className="product-intro case-inform">
			                            <div>
			                                <p>{arr.length!=0?arr[id].subtitle:""}</p>
			                            </div>
			                            <i className="am-icon-tasks"></i>
			                            <img src={arr.length!=0?arr[id].img_big:""} />
			                        </div>
			                    </div>
			                </div>
			                <div className="right am-u-sm-12 am-u-md-6 am-u-lg-6 product-content-right">
			                    <img className="case-img" src="src/components/style/img/case1.png" />
			                </div>
			                <div className="clear"></div>
			            </div>
			        </div>
			    </div>
			</div>
			)
	}
}
export default CaseDetails