import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Signup.css";

class AboutPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "",
            dob: "",
            email: "",
            password: ""
        };
    }

    validateForm(){
        return this.state.userName.length > 0 && this.state.dob.length > 0 &&
        this.state.email.length > 0 && this.state.password.length > 5;
    }

    handleChange(event){
        this.setState({
            [event.target.id] : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <h1>Ready to SignUp?</h1>
                <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            </FormGroup>

            <FormGroup controlId="dob" bsSize="large">
            <ControlLabel>Date Of Birth</ControlLabel>
            <FormControl
              
              type="DateOfBirth"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            </FormGroup>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
        </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            bsStyle="primary"
            // disabled={!this.validateForm()}
            type="submit"
          >
            SignUp
          </Button>
        </form>
      </div>
                
            </div>
        );
    }
}

export default AboutPage;