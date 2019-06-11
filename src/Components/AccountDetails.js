import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    goBack=()=>{
        //this.props.history.push();
    }

    render(){
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
                                <td>Product Number:</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Balance:</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Creation Date:</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
        </div>
        )
    }
}
export default AccountDetails;