import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

class FundTransfer extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        return(
            <div>      
            <div className="home">
                <Button onClick={this.goBack}>Back</Button>
                <div className="bodytitle">
                    <b>Transfer between customer accounts</b>
                    <hr/>
                </div>
               
            </div>
    </div>
        )
    }
}
export default FundTransfer;