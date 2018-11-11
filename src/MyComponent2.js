import React,{Component} from 'react';

class MyComponent2 extends Component{
    render(){
        console.log("all props ",this.props);
        return(
            <div>My Component 2</div>
        )
    }
}

export default MyComponent2
