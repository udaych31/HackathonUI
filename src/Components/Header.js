import React,{Component} from 'react';
import logo from '../assets/ing-logo.jpg';
import logout from '../assets/logout.png';
import '../App.css';
import {withRouter} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    logout=()=>{
        this.props.history.push('/login');
    }

    render(){
        return(
            <div className="header">
                <div className="title">
                    <ul>
                        <li><img src={logo} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title"><b>ING RUBIK's BANKING PLATFORM</b></h2></li>
                    </ul>
                    <ul>
                        <marquee>ING,the safer Bank</marquee>
                    </ul>
                </div>
                <div>
                    <button onClick={this.logout}><img src={logout} width="30px" height="30px"/></button>
                </div>
            </div>
        )
    }
}
export default (withRouter)(Header);