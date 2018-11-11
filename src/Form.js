import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Form.less';

const FormHigherOrderComponent = (WrapperComponent) => {
    class Form extends Component {
        state = {
            isValidated: false
        }
    
        validate = () => {
            const formLength = this.formEl.length;
    
            if (this.formEl.checkValidity() === false) {
                for(let i=0; i<formLength; i++) {
                    const elem = this.formEl[i];
                    console.log("abhinav",elem);
                    const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                    console.log("error label",errorLabel);
                    if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                        if (!elem.validity.valid) {
                            errorLabel.textContent = elem.validationMessage;
                        } else {
                            errorLabel.textContent = '';
                        }
                    }
                }
    
                return false;
            } else {
                for(let i=0; i<formLength; i++) {
                    const elem = this.formEl[i];
                    console.log("abhinav1",elem);
                    const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
                    console.log("error label",errorLabel);
                    if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
                        errorLabel.textContent = '';
                    }
                };
    
                return true;
            }
        }
    
        submitHandler = (event) => {
            event.preventDefault();
    
            if (this.validate()) {
                this.props.submit();
            }
    
            this.setState({isValidated: true});
        }
    
        render() {
            //const props = [...this.props];
    
            // let classNames = [];
            // if (props.className) {
            //     classNames = [...props.className];
            //     delete props.className;
            // }
    
            // if (this.state.isValidated) {
            //     classNames.push('.was-validated');
            // }
    
            return (
                <form ref={form => this.formEl = form} onSubmit={this.submitHandler} noValidate>
                    {/* {this.props.children} */}
                    <WrapperComponent />
                </form>
            );
        }
    }
    
    Form.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        submit: PropTypes.func.isRequired
    };
    return Form
}


export default FormHigherOrderComponent;