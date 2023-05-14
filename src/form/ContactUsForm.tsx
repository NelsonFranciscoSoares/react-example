import { SyntheticEvent, useEffect, useState } from "react";

export function ContactUsForm() {
    const [department, setDepartment] = useState('');
    const [message, setMessage] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
  
    const [departmentError, setDepartmentError] = useState<string | null>(null);
    const [messageError, setMessageError] = useState<string | null>(null);
    const [agreedToTermsError, setAgreedToTermsError] = useState<string | null>(null);
  
    const [departmentTouched, setDepartmentTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [agreedToTermsTouched, setAgreedToTermsTouched] = useState(false);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        const isValid = !departmentError && !messageError && !agreedToTermsError;
        if (!isValid) return;
        console.log('Submit: ', {department, message, agreedToTerms}); 
    }

    const stateToString = () => JSON.stringify({
            value: { department, message, agreedToTerms },
            errors: { departmentError, messageError, agreedToTermsError},
            touched: { departmentTouched, messageTouched, agreedToTermsTouched }
        },null, ' ');

    const validate = () => {
        setDepartmentError(null);
        setMessageError(null);
        setAgreedToTermsError(null);
        if (department == '') setDepartmentError('Department is required.');
        if (message == '') setMessageError('Message is required.');
        if (agreedToTerms == false) setAgreedToTermsError('You must agree to the terms and conditions.')
    }

    useEffect(() => {
        console.log('UseEffect');
        validate();
    },[department, message, agreedToTerms]);

    return (
        <form onSubmit={handleSubmit}>
            <select name="department" value={department} 
                onChange={(e) => setDepartment(e.target.value)}
                onBlur={(e) => setDepartmentTouched(true)}>
                <option value="">Select...</option>
                <option value="hr">Human Resources</option>
                <option value="pr">Public Relations</option>
                <option value="support">Support</option>
            </select>
            <br/>
            {departmentError && departmentTouched && (<p className="alert">{departmentError}</p>)}
            <br/>
            <textarea name="message" value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={(e) => setMessageTouched(true)}
                cols={30}
                rows={10}>
            </textarea>
            <br/>
            {messageError && messageTouched && (<p className="alert">{messageError}</p>)}
            <input type="checkbox" name="agreedToTerms" checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                onBlur={(e) => setAgreedToTermsTouched(true)}
            />
            I agree to the terms and conditions.
            <br/>
            {agreedToTermsError && agreedToTermsTouched && (<p className="alert">{agreedToTermsError}</p>)}
            <button>Send</button>
            <pre>{stateToString()}</pre>
        </form>
    );
}