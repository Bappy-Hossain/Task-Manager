import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import store from "../redux/store/store";
import {getToken, setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../redux/state-slice/task-slice";
import {SetSummary} from "../redux/state-slice/summary-slice";
import {SetProfile} from "../redux/state-slice/profile-slice";

const BaseURL = "http://localhost:5000/api/v1";
const AxiosHeader = {headers:{"token":getToken()}}

//Registration
export function RegistrationRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/registration";
    let PostBody={email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password, photo:photo}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }).catch((error)=>{
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    })
}

//Login
export function LoginRequest(email,password){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/login";
    let PostBody={"email":email,"password":password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

//Create New Task
export function NewTaskRequest(title,description){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/createTask";
    let PostBody = {title:title,description:description,status:"New"}
    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("New Task Created")
            return true;
        }
        else{
            ErrorToast("Something went wrong!")
            return false;
        }
    }).catch((error)=>{
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
        return false;
    })
}

//TaskList By Status
export function TaskListByStatus(Status){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/listTaskByStatus/"+Status;
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(Status==="New"){
                store.dispatch(SetNewTask(res.data['data']))
            }
            else if(Status==="Completed"){
                store.dispatch(SetCompletedTask(res.data['data']))
            }
            else if(Status==="Progress"){
                store.dispatch(SetProgressTask(res.data['data']))
            }
            else if(Status==="Canceled"){
                store.dispatch(SetCanceledTask(res.data['data']))
            }
        }
        else{
            ErrorToast("Something went wrong!")
        }
    }).catch((error)=>{
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
    })
}

//Summary Count
export function SummaryRequest(){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/taskStatusCount";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetSummary(res.data['data']))
        }
        else{
            ErrorToast("Something went wrong!")
        }
    }).catch((error)=>{
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
    })
}

//Delete Item
export function DeleteRequest(id){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/deleteTask/"+id;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Delete Success!")
            return true;
        }
        else{
            ErrorToast("Something went wrong!")
        }
    }).catch((error)=>{
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
    })
}

//Update Status
export function UpdateStatusRequest(id,status){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/updateTaskStatus/"+id+"/"+status;
    return axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Status Updated")
            return true;
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return false;
    });
}

//Get Profile Data
export function GetProfileData(){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/profileDetails";
    axios.get(URL,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetProfile(res.data['data'][0]))
        }
        else{
            ErrorToast("Something went wrong!")
        }
    }).catch((error)=>{
        ErrorToast("Something went wrong!")
        store.dispatch(HideLoader())
    })
}

//Profile Update
export function ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/profileUpdate";
    let PostBody = {email:email,firstName:firstName,lastName:lastName,mobile:mobile,password:password,photo:photo}
    let UserDetails = {email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}
    return axios.post(URL,PostBody,AxiosHeader).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            SuccessToast("Profile Update Success");
            setUserDetails(UserDetails);
            return true;
        }
        else{
            ErrorToast("Something Went Wrong!")
            return false;
        }
    }).catch((error)=>{
        ErrorToast("Something Went Wrong!");
        store.dispatch(HideLoader())
        return false;
    })
}

//Recover Verify Email
export function RecoverVerifyEmailRequest(email){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/RecoverVerifyEmail/"+email;

    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast("No User Found");
                return false;
            }
            else{
                setEmail(email);
                SuccessToast("A 6 digit verification code has been send to your email address")
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong!")
            return false;
        }
    }).catch((error)=>{
        ErrorToast("Something Went Wrong!");
        store.dispatch(HideLoader())
        return false;
    })
}

//Verify OTP
export function RecoverVerifyOTPRequest(email,OTP){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/RecoverVerifyOTP/"+email+"/"+OTP;
    return axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
           if(res.data['status']==="fail"){
               ErrorToast(res.data['data'])
               return false;
           }
           else{
               setOTP(OTP);
               SuccessToast("Code Verification Success");
               return true;
           }
        }
        else{
            ErrorToast("Something Went Wrong!")
            return false;
        }
    }).catch((error)=>{
        ErrorToast("Something Went Wrong!");
        store.dispatch(HideLoader())
        return false;
    })
}

//Reset Password
export function RecoverResetPassRequest(email,OTP,password){
    store.dispatch(ShowLoader())
    let URL = BaseURL+"/RecoverResetPass";
    let PostBody = {email:email,OTP:OTP,password:password}
    return axios.post(URL,PostBody).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                ErrorToast(res.data['data'])
                return false;
            }
            else{
                SuccessToast("Password Created Success");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong!")
            return false;
        }
    }).catch((error)=>{
        ErrorToast("Something Went Wrong!");
        store.dispatch(HideLoader())
        return false;
    })
}