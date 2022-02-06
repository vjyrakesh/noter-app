import { Field, Form, Formik } from "formik";
import AuthenticationService from "../api/AuthenticationService";

export default function LoginComponent(props) {

    function handleSubmit(values) {
        AuthenticationService.login(values.username, values.password)
        .then(response => {
            console.log(response)
            AuthenticationService.registerUser(values.username, values.password)
            props.history.push("/notes")
        })
        .catch(response => {
            console.log("login failed")
            var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
            var wrapper = document.createElement('div')
            const message = 'Invalid credentials'
            wrapper.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            alertPlaceholder.append(wrapper)
        })
    }

    return (
        <div className="container col-3 my-3">
            <h3>Login</h3>
            <Formik onSubmit={handleSubmit} initialValues={{username:'', password: ''}}>
                <Form>
                    <div id="liveAlertPlaceholder"></div>
                    <div>
                        <label>Username</label>
                        <Field name='username' type='text' className='form-control'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name='password' type='password' className='form-control'/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success my-3">Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}