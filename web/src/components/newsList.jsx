import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
class NewsList extends React.Component{
	componentDidMount(){
		let {newsDate}=this.props;
		fetch('http://localhost:8090/news',{
			headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
			}
		}).then((res)=>{
			if(res.ok){
				res.json().then((date)=>{
					// console.log(date)
					setTimeout(function(){
						newsDate(date)
					},0)
				})
			}
		}).catch((res)=>{})
	}
	render(){
		let {news}=this.props;
		return (
			<div>
				<div className="toppic">
			        <div className="am-container-1">
			            <div className="toppic-title left">
			                <i className="am-icon-newspaper-o toppic-title-i"></i>
			                <span className="toppic-title-span">新闻动态</span>
			                <p>Hengwang News</p>
			            </div>
			            <div className="right toppic-progress">
			                <span><a href="index.html" className="w-white">首页</a></span>
			                <i className=" am-icon-arrow-circle-right w-white"></i>
			                <span><a href="news.html" className="w-white">新闻动态</a></span>
			            </div>
			        </div>
			    </div>
			    <div className="am-container-1 news-content-all">
			        <div className="left am-u-sm-12 am-u-md-8 am-u-lg-9 ">
			            <ul className="news-ul">
			            {
			            	news.map((val,index)=>{
			            		return (
										<li key={index} className="am-u-sm-12 am-u-md-6 am-u-lg-4 ">
						                    <Link to={"news/newsArticle/"+val._id}>
						                        <div className="news-ul-liall">
						                            <img className="news-ul-liimg" src={val.img} />
						                            <div className="inform-list">
						                                <div className="inform-list-date"><i className="am-icon-arrow-circle-right"></i>2015-6-11</div>
						                                <div className="inform-list-label"><i className="am-icon-arrow-circle-right"></i>互联网 开发</div>
						                                <div className="inform-list-numb"><i className="am-icon-arrow-circle-right"></i>点击次数：273</div>
						                            </div>
						                            <span>{val.title}</span>
						                            <p>{val.subtitle}</p>
						                            <span className="see-more3">{val.more}<i className="am-icon-angle-double-right"></i></span>
						                        </div>
						                   </Link>
						                </li>
			            			)
				            	
			            	})
			            }
			                

			                <div className="clear"></div>
			            </ul>
			            <ul className="am-pagination ">
			                <li><a href="#">&laquo;</a></li>
			                <li><a href="#">上一页</a></li>
			                <li><a className="current-page">1</a></li>
			                <li><a href="#">下一页</a></li>
			                <li><a href="#">&raquo;</a></li>
			            </ul>
			        </div>
			        <div className="left am-u-sm-12 am-u-md-4 am-u-lg-3">
			            <section data-am-widget="accordion" className="am-accordion am-accordion-gapped" data-am-accordion='{  }'>
			                <div className="hot-title"><i className="am-icon-thumbs-o-up"></i>热门新闻 / Hot News</div>
			                <dl className="am-accordion-item am-active">
			                    <dt className="am-accordion-title">
			                        用户体验制作当中的一些可视化信息
			                    </dt>
			                    <dd className="am-accordion-bd am-collapse am-in">
			                       
			                        <div className="am-accordion-content">
			                            英特网，是网络与网络之间所串连成的庞大网络网又称网际网路或音译因特网、英特网，是网络与网络之间所串连成的庞大网络网络与网络之
			                        </div>
			                    </dd>
			                </dl>
			                <dl className="am-accordion-item">
			                    <dt className="am-accordion-title">
			                        可视化信息
			                    </dt>
			                    <dd className="am-accordion-bd am-collapse ">
			                       
			                        <div className="am-accordion-content">
			                            英特网，是网络与网络之间所串连成的庞大网络网所串连成的庞大网络网
			                        </div>
			                    </dd>
			                </dl>
			                <dl className="am-accordion-item">
			                    <dt className="am-accordion-title">
			                        响应式购物商城
			                    </dt>
			                    <dd className="am-accordion-bd am-collapse ">
			                        
			                        <div className="am-accordion-content">
			                            英特网，是网络与网络之间所串连成的庞大网络网所串连成的庞大网络网
			                        </div>
			                    </dd>
			                </dl>
			                <dl className="am-accordion-item">
			                    <dt className="am-accordion-title">
			                        可视化信息
			                    </dt>
			                    <dd className="am-accordion-bd am-collapse ">
			                       
			                        <div className="am-accordion-content">
			                            英特网，是网络与网络之间所串连成的庞大网络网所串连成的庞大网络网
			                        </div>
			                    </dd>
			                </dl>
			                <dl className="am-accordion-item">
			                    <dt className="am-accordion-title">
			                        响应式购物商城
			                    </dt>
			                    <dd className="am-accordion-bd am-collapse ">
			                        
			                        <div className="am-accordion-content">
			                            英特网，是网络与网络之间所串连成的庞大网络网所串连成的庞大网络网
			                        </div>
			                    </dd>
			                </dl>
			            </section>
			        </div>
			        <div className="clear"></div>
			    </div>
			</div>
			)
	}
}
let mapStateToProps=(state)=>{
	return {
		news:state.news
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		newsDate:(date)=>{
			dispatch({
				type:'newsDate',
				payload:date
			})
		}
	}
}
let ChangeNewsList=connect(
	mapStateToProps,
	mapDispatchToProps
	)(NewsList)
export default ChangeNewsList