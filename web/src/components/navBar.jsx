import React from 'react';
import {Link} from 'react-router'
 class NavBar extends React.Component{
 	render(){
 		return (
	<header className="am-topbar header">
        <div className="am-container-1">
            <div className="left hw-logo">
                <img className=" logo" src="src/components/style/img/HENGWANG.png" />
                <img className="word" src="src/components/style/img/hw-word.png" />
            </div>
            <button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}"><span className="am-sr-only">导航切换</span> <span className="am-icon-bars"></span></button>
            <div className="am-collapse am-topbar-collapse right" id="doc-topbar-collapse">
                <div className=" am-topbar-left am-form-inline am-topbar-right" role="search">
                    <ul className="am-nav am-nav-pills am-topbar-nav hw-menu">
                        <li><Link activeClassName="hw-menu-active" to='home'>首页</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='solve'>解决方案</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='product'>产品展示</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='case'>客户案例</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='center'>服务中心</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='news'>新闻动态</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='about'>关于我们</Link></li>
                        <li><Link activeClassName="hw-menu-active" to='recruit'>招贤纳士</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
 			)
 	}
 }
 export default NavBar