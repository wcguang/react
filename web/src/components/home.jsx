import React from 'react';
class Home extends React.Component{
	    componentDidMount(){
        var mySwiper = new Swiper('.swiper-container',{
            autoplay : 2000,
            loop:true,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            pagination : '.swiper-pagination'
        })
    }
	render(){
		return (
				<div>
<div className="swiper-container">
    <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="src/components/style/img/hw_bg1.png" /></div>
        <div className="swiper-slide"><img src="src/components/style/img/hw_bg.png" /></div>
        <div className="swiper-slide"><img src="src/components/style/img/hw_bg3.png" /></div>
    </div>

    <div className="swiper-pagination"></div>
    

    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>

</div>
    <div className="am-container-1">
        <div className="solutions part-all">
            <div className="part-title">
                <a href="solutions.html">
        <i className="am-icon-lightbulb-o part-title-i"></i>
           <span className="part-title-span">解决方案</span>
            <p>Solutions</p>
               </a>
            </div>
            <ul className="am-g part-content solutions-content">
                <li className="am-u-sm-6 am-u-md-3 am-u-lg-3">
                    <i className="am-icon-safari solution-circle"></i>
                    <span className="solutions-title">网站、移动网站</span>
                    <p className="solutions-way">微信公众号开发移动网站微信公众号开发</p>
                </li>
                <li className="am-u-sm-6 am-u-md-3 am-u-lg-3">
                    <i className="am-icon-magic solution-circle"></i>
                    <span className="solutions-title">网站、移动网站</span>
                    <p className="solutions-way">移动网站微信公众号开发移动网站微信公众号开发,解决方案</p>
                </li>
                <li className="am-u-sm-6 am-u-md-3 am-u-lg-3">
                    <i className="am-icon-phone solution-circle"></i>
                    <span className="solutions-title">网站、移动网站</span>
                    <p className="solutions-way">移动网站微信公众号开发移动网站微信公众号开发</p>
                </li>
                <li className="am-u-sm-6 am-u-md-3 am-u-lg-3">
                    <i className="am-icon-hacker-news solution-circle"></i>
                    <span className="solutions-title">网站、移动网站</span>
                    <p className="solutions-way">网站、移动网站微信公众号开发移动网站微信公众号开发,解决方案</p>
                </li>
            </ul>
        </div>
    </div>
    <div className="gray-li">
        <div className="customer-case part-all ">
            <div className="part-title">
                <a href="customer-case.html">
         <i className=" am-icon-briefcase part-title-i"></i>
                <span className="part-title-span">客户案例</span>
              <p>Customer Case</p>
               </a>
            </div>
            <ul data-am-widget="gallery" className=" am-avg-sm-1
  am-avg-md-4 am-avg-lg-4 am-gallery-bordered customer-case-content">
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app1.png"  />
                
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">响应式商城</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app2.png"  />              
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">物流红娘</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app3.png"  />             
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">车型湖北</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app4.png"  />             
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">管理系统</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app5.png"  />              
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">智众商城</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app6.png"  />                
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">汇众商城</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app7.png"  />                
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">无鞋网</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
                <li className="case-li am-u-sm-6 am-u-md-6 am-u-lg-3">
                    <div className="am-gallery-item case-img1">
                        <a href="#">
              <img src="src/components/style/img/app8.png"  />               
            </a>
                    </div>
                    <div className="case-li-mengban">
                        <div className=" case-word">
                            <h3 className="am-gallery-title">响应式商城</h3>
                            <p>2015-06-11</p>
                            <a><span><i className="am-icon-eye"></i>查看更多</span></a>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="lan-bott">
                <div className="left"><span>全方位解决方案,为您轻松解决不同问题</span>
                    <p>A full range of solutions for you to solve different problems</p>
                </div>
                <div className="right">
                    <a href="customer-case.html">
          <span className="see-more">查看更多<i className="am-icon-angle-double-right"></i></span>
        </a>
                </div>
                <div className="clear"></div>
            </div>
            <div className="part-title">
            </div>
        </div>
    </div>
    <div className=" news-all">
        <div className="am-container-1">
            <div className="news part-all">
                <div className="part-title">
                    
     			 <i className="am-icon-newspaper-o part-title-i"></i>
     					 <span className="part-title-span">新闻动态</span>
     				 <p>Hengwang News</p>
     					
                </div>
                <div className="news-content ">
                    <ul className="news-content-ul">
                        <li className="am-u-sm-12 am-u-md-6 am-u-lg-6">
                                <div className=" am-u-sm-12 am-u-md-12 am-u-lg-5">
                                    <div className="news-img">
                                        <img src="src/components/style/img/news.png" />
                                    </div>
                                </div>
                                <div className=" am-u-sm-12 am-u-md-12 am-u-lg-7">
                                    <span className="news-right-title">关于召开年会的通知</span>
                                    <p className="news-right-time">2015-06-11</p>
                                    <p className="news-right-words">互联网，又称网际网路或音译因特网、英特网，是网络与网络之间所串连成的庞大网络网络与网络之...</p>
                                    <a><span className="see-more2">查看更多<i className="am-icon-angle-double-right"></i></span></a>
                                </div>
                                <div className="clear"></div>
                        </li>
                        <li className="am-u-sm-12 am-u-md-6 am-u-lg-6">
                          
                                <div className=" am-u-sm-12 am-u-md-12 am-u-lg-5">
                                    <div className="news-img">
                                        <img src="src/components/style/img/news1.png" />
                                    </div>
                                </div>
                                <div className=" am-u-sm-12 am-u-md-12 am-u-lg-7">
                                    <span className="news-right-title">关于召开年会的通知</span>
                                    <p className="news-right-time">2015-06-11</p>
                                    <p className="news-right-words">互联网，又称网际网路或音译因特网、英特网，是网络与网络之间所串连成的庞大网络网络与网络之...</p>
                                    <a><span className="see-more2">查看更多<i className="am-icon-angle-double-right"></i></span></a>
                                </div>
                                <div className="clear"></div>
                           
                        </li>
                        <div className="clear"></div>
                    </ul>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="part-all gray-li">
        <div className="customer  am-container-1">
            <div className="part-title">
                <i className="am-icon-users part-title-i"></i>
                <span className="part-title-span">服务客户</span>
                <p>Serve Customers</p>
            </div>
            <div className="am-slider am-slider-default am-slider-carousel part-all" style={{backgroundColor:"#f0eeed",boxShadow:"none"}}>
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
export default Home