import React from 'react';
class NewArticle extends React.Component{
	constructor(){
		super();
		this.state={
			arr:[]
		}
	}
	componentDidMount(){
		var path=this.props.router.location.pathname
		// console.log("---"+path)
		if(path.indexOf('solve')!=-1){
			fetch('http://localhost:8090/solve',{
				headers:{
				'Accept':'application/json,text/plain,*/*',
				'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
				},
			}).then((res)=>{
				if(res.ok){
					res.json().then((date)=>{
						// console.log(date)
						this.setState({
							arr:date
						})
						// console.log(this.state.arr[0].title)
					})
				}
			}).catch((res)=>{})
		}else{
			fetch('http://localhost:8090/news',{
				headers:{
				'Accept':'application/json,text/plain,*/*',
				'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
				},
			}).then((res)=>{
				if(res.ok){
					res.json().then((date)=>{
						// console.log(date)
						this.setState({
							arr:date
						})
						// console.log(this.state.arr[0].title)
					})
				}
			}).catch((res)=>{})
		}
	}
	render(){
		var id=this.props.router.params.uuid-1
		// console.log(id);
		var arr=this.state.arr;
		return (
			<div>
				   <div className="toppic">
				        <div className="am-container-1">
				            <div className="toppic-title left">
				                <i className="am-icon-newspaper-o toppic-title-i"></i>
				                <span className="toppic-title-span">新闻详情</span>
				                <p>News Information</p>
				            </div>
				            <div className="right toppic-progress">
				                <span><a href="news.html" className="w-white">新闻动态</a></span>
				                <i className=" am-icon-arrow-circle-right w-white"></i>
				                <span><a href="news-inform.html" className="w-white">新闻详情</a></span>
				            </div>
				        </div>
				    </div>
				    <div className="am-container-1 margin-t30">
				        <div className="words-title ">
				            <span>{arr.length!=0?arr[id].title:''}</span>
				            <div>2015-12-29</div>
				        </div>
				    </div>
				    <div className="solution-inform">
				        <div className=" solution-inform-content-all">
				            <div className="solution-inform-content">
				                <p className="inform-content-p">{arr.length!=0?arr[id].content:''}</p>
				            </div>
				        </div>
				    </div> 
			</div>
			)
	}
}
export default NewArticle