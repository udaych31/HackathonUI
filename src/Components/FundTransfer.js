import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import axios from 'axios';

class FundTransfer extends Component{
    constructor(props){
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            fundObj:{
            date: date,
            fromAccount:props.match.params.accNum,
            toAccount:'',
            amount:'',
            comments:''
            },
            notification:''
        };
    }

     goBack=()=>{
        this.props.history.push('/home/'+this.state.fundObj.fromAccount)
    }
    //to handle entered data on onChange of textfield
    handleChange=(event)=>{
        console.log("HI");
        const{fundObj}=this.state;
        fundObj[event.target.name]=event.target.value;
        this.setState({fundObj});
        console.log(this.state.fundObj);
    }
    //transfers money to given account.no on onClick
    transfer=()=>{
        const{fundObj}=this.state;
        const{notification}=this.state;
        axios.post('http://13.233.166.249:6666/retailbankapp/retailbank/fundTransfer',this.state.fundObj).then((response)=>{
            console.log(response);
            if(response.data.statusCode===500){
                this.setState({notification:response.data.message});
            }else{
                this.setState({notification:response.data.message});
                alert(response.data.message);
                this.props.history.push('/home/'+this.state.fundObj.fromAccount)
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>    
                 {this.state.notification ? <div className="alert alert-danger" >{this.state.notification}</div> : ''}  
            <div className="home">
                <Button onClick={this.goBack}>Back</Button>
                <div className="bodytitle">
                    <b>Transfer between customer accounts</b>
                    <hr/>
                </div>
                <div className="fundtable">
                    <table>
                        <tbody>
                            <tr>
                                <td>Origin Account:</td>
                                <td><input type="text" name="fromAccount" value={this.state.fundObj.fromAccount} onChange={this.handleChange} disabled/></td>
                            </tr>
                            <tr>
                                <td>Destination Account:</td>
                                <td><input type="text" name="toAccount" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Amount:</td>
                                <td><input type="text" name="amount" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Comments:</td>
                                <td><input type="text" name="comments" onChange={this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Date:</td>
                                <td>{this.state.fundObj.date}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button onClick={this.transfer}>Confirm</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
        )
    }
}
export default FundTransfer;