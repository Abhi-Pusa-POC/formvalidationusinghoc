import React,{Component , PropTypes} from 'react';
// import Form from './Form';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this._onClickHandler = this._onClickHandler.bind(this);
        this._onChangeHandler = this._onChangeHandler.bind(this);

        console.log("props",props);
        this.state = {name :""};
    }
    
    // static propTypes = { 
    //       theme: "secondary",
    //       label: "Button Text"
    // };
    _onChangeHandler(e){
        this.setState({
           name : e.target.value
        })
    }

    _onClickHandler(){
        console.log("refs details in the page", this.refs.username["type"]);
        for(var key in this.refs){
            if(this.refs[key].type === "text"){
                console.log("get the value",this.refs[key]["value"]);
            }else if(this.refs[key].type === "checkbox"){
                console.log(this.refs[key]["checked"]);
            }
        }
    }
    render(){
        console.log("all props ",this.props);
        return(
            <div>
                {/* <Form submit={this._onClickHandler} {...this.props}> */}
                    <div>
                     <input  value={this.state.name} ref="username" type="text" onChange={this._onChangeHandler} placeholder="enter username" required ></input><br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <div>
                     <input ref="password" type="text" placeholder="enter password" required ></input> <br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <div>
                     <input ref="cfmpassword" type="text" placeholder="confirm password" required></input><br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <div>
                     <input ref="address" type="text" placeholder="address" required ></input><br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <div>
                     <input ref="phone" type="text" placeholder="phone"  required ></input><br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <div>
                     <input ref="country1" type="checkbox" required /><br />
                     <span className="invalid-feedback"></span>
                    </div>
                    <button type="submit">Submit</button>
                {/* </Form> */}
            </div>
        )
    }
}

export default MyComponent;