import React from 'react';

const FormField= ({formdata, change, id}) => {

    const showError = () =>{
        let errorMessage = null;
        if(formdata.validation && !formdata.valid){
            errorMessage =  (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    const renderTempalate = () =>{
        let temaplate = null;
        switch(formdata.element){
            case('input'):
                temaplate = (
                    <div className="formBlock">
                        <input 
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event)=>change({event,id,blur:true})}
                            onChange={(event)=>change({event,id})}
                        />
                        {showError()}
                    </div>
                )
                break;
            default:
             temaplate = null;
        }
        return temaplate;
    }
    
  return (
    <div>
       { renderTempalate()}
    </div>
  )
}
export default FormField;
