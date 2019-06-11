import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import axios from 'axios';

class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            transactions:[],
            data1:[]
        }
    }
    //to go back to homepage
    goBack=()=>{
        this.props.history.push('/home/'+this.state.transactions.fromAccountNo);
    }
    //gets required details on page render
    componentDidMount(){
        axios.get(`http://13.233.166.249:6666/retailbankapp/retailbank/viewLastTenTransaction/${this.props.match.params.accno}`).then((response)=>{
            console.log(response.data.list);
            this.setState({transactions:response.data.list})
            console.log(this.state.transactions)
        }).catch((err)=>{
            console.log(err);
        })
    }

    getData=(i)=>{
        const{data}=this.state;
        console.log(i.transactionId);
        axios.get('http://13.233.166.249:6666/retailbankapp/retailbank/transactionDetails/?transactionId='+i.transactionId).then((response)=>{
           // console.log(response.data);
            this.setState({data1:response.data.transactionDetails})
            //console.log(this.state.arr);
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.state.data1.closingBalance);
        return(
            <div>      
                <div className="home">
                    <Button onClick={this.goBack}>Back</Button>
                    <div className="bodytitle">
                        <b>Product details and list of statements</b>
                        <hr/>
                    </div>
                    <div className="tablealign">
                    <table>
                        <tbody>
                            <tr>
                                <td>Account Number:</td>
                                <td>{this.props.match.params.accno}</td>
                            </tr>
                            <tr>
                                <td>Balance:</td>
                                <td>{this.props.match.params.balance}</td>
                            </tr>
                            <tr>
                                <td>Creation Date:</td>
                                <td>{this.props.match.params.date}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <br/>
                    <div className="dropdown">
                        <div className="bord">
                        <table>
                            <thead>
                                <tr><th><b>TransactionId</b></th><br/>
                                    <th><b>TransactionType</b></th>
                                    <th><b>Comments</b></th>
                                </tr>
                            </thead>
                            <hr/>
                        <tbody>
                        {this.state.transactions.map((val,j)=>{
                            return(
                                <tr>
                                    <td><Button onClick={()=>this.getData(val)}>{val.transactionId}</Button></td><br/>
                                    <td><Button onClick={()=>this.getData(val)}>{val.transactionType}</Button></td>
                                    <td><Button onClick={()=>this.getData(val)}>{val.comments}</Button></td>
                                </tr>
                            ) 
                        })}
                        </tbody>
                        </table>
                        <div className="dropdown-content">
                                <tbody>
                            
                                        <div>
                                            <tr>
                                                <td><b>closingBalance:</b></td>
                                                <td>{this.state.data1.transactionType}</td>
                                            </tr>
                                            <tr>
                                                <td><b>closingBalance:</b></td>
                                                <td>{this.state.data1.comments}</td>
                                            </tr>
                                            <tr>
                                                <td><b>closingBalance:</b></td>
                                                <td>{this.state.data1.closingBalance}</td>
                                            </tr>
                                            <tr>
                                                <td><b>From Account:</b></td>
                                                <td>{this.state.data1.fromAccountNo}</td>
                                            </tr>
                                            <tr>
                                                <td><b>To Account:</b></td>
                                                <td>{this.state.data1.toAccountNo}</td>
                                            </tr>
                                            <tr>
                                                <td><b>Creation Date:</b></td>
                                                <td>{this.state.data1.createDt}</td>
                                            </tr>
                                        </div>
                                    
                                </tbody>                     
                            </div>
                        </div>
                </div>

            </div>
        </div>
        )
    }
}
export default AccountDetails;