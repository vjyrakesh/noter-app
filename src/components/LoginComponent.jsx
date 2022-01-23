import { Field, Form, Formik } from "formik";
import AuthenticationService from "../api/AuthenticationService";

export default function LoginComponent(props) {

    function handleSubmit(values) {
        AuthenticationService.login(values.username, values.password)
        .then(response => {
            console.log(response)
            AuthenticationService.registerUser(values.username)
            props.history.push("/notes")
        })
    }

    return (
        <div>
            <h3>Login</h3>
            <Formik onSubmit={handleSubmit} initialValues={{username:'', password: ''}}>
                <Form>
                    <div>
                        <label>Username</label>
                        <Field name='username' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name='password' type='password' className='form-control'/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}