import { Field, Form, Formik } from "formik";
import AuthenticationService from "../api/AuthenticationService";

export default function RegisterComponent(props) {

    function handleSubmit(values) {
        AuthenticationService.signUp(values.firstName, values.lastName, values.username, values.password)
        .then(response => {
            alert('Registered successfully')
            props.history.push("/login")
        })
    }

    return (
        <div className="container col-3 my-3">
            <h3>Register</h3>
            <Formik onSubmit={handleSubmit} initialValues={{username:'', password: '', firstName:'', lastName:''}}>
                <Form>
                    <div id="liveAlertPlaceholder"></div>
                    <div>
                        <label>First Name</label>
                        <Field name='firstName' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name='lastName' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label>Username</label>
                        <Field name='username' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name='password' type='password' className='form-control'/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success my-3">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}