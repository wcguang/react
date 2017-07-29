import React from 'react';
import {Link} from 'react-router'
class Footer extends React.Component{
	render(){
		return (
			<footer className="footer ">
        <ul>
            <li className="am-u-lg-4 am-u-md-4 am-u-sm-12 part-5-li2">
                <div className="part-5-title">联系我们</div>
                <div className="part-5-words2">
                    <span>地址:武汉市洪山区街道口鹏程国际B座2511</span>
                    <span>电话:18238765101</span>
                    <span>传真:(123) 456-7890</span>
                    <span>邮箱:support@vectorlab.com</span>
                </div>
            </li>
            <li className="am-u-lg-4 am-u-md-4 am-u-sm-12 ">
                <div className="part-5-title">相关链接</div>
                <div className="part-5-words2">
                    <ul className="part-5-words2-ul">
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='solve'>解决方案</Link></li>
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='product'>产品展示</Link></li>
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='case'>客户案例</Link></li>
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='center'>服务中心</Link></li>
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='about'>关于我们</Link></li>
                        <li className="am-u-lg-4 am-u-md-6 am-u-sm-4"> <Link to='recruit'>招贤纳士</Link></li>
                        <div className="clear"></div>
                    </ul>
                </div>
            </li>
            <div className="clear"></div>
        </ul>
    </footer>
			)
	}
}
export default Footer;