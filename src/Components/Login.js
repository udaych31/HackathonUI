import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/Textfield';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            loginData:{
                userName:'',
                password:''
            }
        }
    }
    //to handle entered data on onChange of textfield
    handleChange=(event)=>{
        const{loginData}=this.state;
        console.log(event.target.value);
        loginData[event.target.name]=event.target.value;
        this.setState({loginData});
        console.log(this.state.loginData)
    }
    //on click of button to send login credentials to validate
    login=()=>{
        const{loginData}=this.state;
        //this.props.history.push('/home/'+"1")
        axios.post('http://13.233.166.249:5555/retailbankapp/retailbank/login',loginData).then((response)=>{
            console.log(response);
            if(response.data.statusCode===404){
                alert(response.data.message);
            }
            else{
                this.props.history.push('/home/'+response.data.accounNumber)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
            <div className="main"> 
            <h3 className="textcolor">Please enter login credentials</h3>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <td><label>User Id</label></td>
                            <td><Textfield placeholder="Enter UserId" id="userName" name="userName" onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><Textfield type="password" placeholder="Enter Password" id="password" name="password" onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td><label></label></td>
                            <td><Button onClick={this.login}>Continue</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        )
    }
}
export default Login;