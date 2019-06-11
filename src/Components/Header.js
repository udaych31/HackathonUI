import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../assets/ing-logo.jpg';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <div className="header">
                <div className="title">
                    <ul>
                        <li><img src={logo} width="100px" height="100px"/></li>
                        <li className="titlespace"><h2 className="title"><b>ING Model Banking Platform</b></h2></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;