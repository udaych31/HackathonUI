import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import '../App.css';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            accNum:props.match.params.accNo,
            account:[]
        }
    }

    componentDidMount(){
        const{account}=this.state;
        axios.get(`http://13.233.166.249:6666/retailbankapp/retailbank/accountSummary/${this.state.accNum}`).then((response)=>{
            console.log(response);
            this.setState({account:response.data})
            console.log(this.state.account)
        }).catch((err)=>{
            console.log(err);
        })
    }

    accountDetails=(e)=>{
        this.props.history.push('/accDetails'+'/'+this.state.account.accountNo+'/'+this.state.account.closingBalance+'/'+this.state.account.createDt);
    }

    fundTransfer=()=>{
        this.props.history.push('/fundTransfer/'+this.state.account.accountNo);
    }

    render(){
        return(
            <div>     
                <div className="home">
                    <div className="bodytitle">
                        <b>N Products ING</b>
                        <hr/>
                    </div>
                    <h3>Savings account 1</h3>
                   <ol className="homelist">
                        <li>Account Number--<b>{this.state.account.accountNo}</b></li><button onClick={this.accountDetails}>Account Details</button><br/><br/>
                        <li>Balance--<b>{this.state.account.closingBalance}</b></li><button onClick={this.fundTransfer}>Transfer</button>
                   </ol>
                  
                </div>
            </div>
        )
    }
}
export default Home;