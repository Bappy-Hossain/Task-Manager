import React, {useRef} from 'react';
import {ErrorToast, IsEmpty} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";
import {NewTaskRequest} from "../../APIRequest/APIRequest";

const Create = () => {
    let titleRef,descriptionRef = useRef();
    let navigate = useNavigate();
    const CreateNew = () =>{
        let title = titleRef.value;
        let description = descriptionRef.value;

        if(IsEmpty(title)){
            ErrorToast("Title Required!")
        }
        else if(IsEmpty(description)){
            ErrorToast("Description Required!")
        }
        else{
            NewTaskRequest(title,description).then((res)=>{
                if(res===true){
                    navigate("/all")
                }
            })
        }
    }




    return (
        <div className="container content-body">
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-md-8 col-sm-12 col-lg-8 p-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="p-0">Create New</h4>
                            <br/>
                            <input ref={(input)=>titleRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text"/>
                            <br/>
                            <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text"></textarea>
                            <br/>
                            <button onClick={CreateNew} className="float-end btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Create;