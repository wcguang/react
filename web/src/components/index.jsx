import React from 'react';
import NavBar from './navBar.jsx';
import Footer from './footer.jsx';
class Index extends React.Component{
    componentDidMount(){
        this.props.router.replace({pathname:'home'})
    }
    render(){
         console.log(this.props.router.location.pathname)

    	return (
    		<div>    
                <NavBar></NavBar>
                {this.props.children}
                <Footer></Footer>
    		</div>
    		)
    }
}

export default Index;