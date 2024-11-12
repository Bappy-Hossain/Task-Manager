import React, {useRef} from 'react';
import {Link,useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/APIRequest";


const Registration = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    let navigate = useNavigate();

    const onRegistration = () =>{
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQABLAEsAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/wAALCAAwADABAREA/8QAGgABAAMBAQEAAAAAAAAAAAAABwABBAYFCP/EADIQAAEDAwICCAUFAQEAAAAAAAECAwQFBhEAByExCBITFCJhYnEVIzJBkRYkNaHhQoH/2gAIAQEAAD8A+w6lOh02nyKhUJLUWJGbLjzzqglDaQMkknkNBov3cjdqW9H2oYZtu1W1ltd0VNjruScZB7syeY9Sv61qHRuodU+fet7XpdExXFa36mppvPpQj6R5Z1D0b6JS/n2Ve96WvMTxQtipqebz6m1/UPLOsv6+3H2mmMxt2Y7Nw2s4sNoummMFC4xPAd5ZHIepP96c6dNiVGAxPgSWpUSQ2HGXmlBSHEkZBBHMHQZugJG7W8TO1Ed9xu1aC03ULoW0rHeVq4sxMj7H6j/mlK+Lkt7bTb2XW5rSItKpUcJajsJCet/y20hPLJOABorolm7sbnxEXDet8VWyafLAch0GgkNOstnintniMlZGMj7eXLVVqz92Nr4i7isy96re9NiJLkyg10h151ocVFl4DIWBnAxx8+WlWyrit7cvb2LWobTcuk1aOUux30hWM5StpaeWQcgjRdtV3nabeCRtLJfddtettOVG1luqyY6knL0TJ5gcVD/daeh8PilsXZer/imXDcst5azz7NtXUQn2HH86vpa9Rcfbtmd/DuXlCE/P0lPi6oV5Z036mhDojdVFOv8AZg/w7d5Tk0/H0hGU5CfLOq6Xo+FUKzr1Y8My37miOIWOfZOEocT7HhqdD8/C7au2yX/DMt65ZbK0Hn2biuu2r2PH8a7ze2gWxc22lVo921KPS6a82FCc86lvuzqT1kOBSiBkKAPnxH30DbXdJ4UsuWndsGbdTlNPYNV+32FSG5iBwStSDghWOZGcnU3R6Toq6kWjacObai6keweuC4GFR24aFcFLQgZJVjkTjB/Ie9lKBbFs7a0mjWjUY9TpjDee+supc7y4o9ZbhUkkZUok+XLXA9Lw/FaHZ1kseKZcFzRG0oHPsmyVuK9h4fzryN8ZFX2a3Ff3koVJcqlEq0MQrhhNK6vVeQP28jOOAzhJP2/91ssPah/cPud/7w1Nq5JMtCZFPozDuaZBbUMpASk4dVg8Scj356caXTafS4iIlMgxYUdAwlqO0ltAHkAANSqU2nVWIuJU4EWdHWMKakNJcQoeYUCNBt+bVSNuRN3A2eqbVuPREGRUaJIexTJzaRlQKVHDSsDgRge2s2xj9X3i3Ea3mrtKcpdFpkMwbdhOq6xLix+4kZxxGcpB+49tP1RhRKjAfgT4zUqJIbLbzLqQpDiSMEEHmDoN/QG4+08x6VtJJYuC13FlxdrVN8pVHJ4nuzx+kelXD31pHSOpNK+Reth3tbMxPBaXaYX2s+lxB8Q88ah6RtLqvyLJsK9rmmK4IS3TSw1n1OLPhHnjWZO324u681mXu5KYoNsNLDrdq0x4qL5HEd5eH1D0p4e2nKnw4tPgsQYMdqNFjthtllpIShCQMAADkBr/2Q=="

        if(IsEmail(email)){
            ErrorToast("Valid Email Address Required !")
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            ErrorToast("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required !")
        }
        else{
            RegistrationRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
                if(result===true){
                    navigate("/login")
                }
            })
        }

    }

    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up</h4>
                            <hr/>
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                                    </div>
                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="float-end mt-3">
                                    <span>
                                        <span>|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/login">Sign In</Link>
                                        <span className="ms-3">|</span>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;