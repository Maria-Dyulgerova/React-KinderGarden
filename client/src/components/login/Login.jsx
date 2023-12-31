import useForm from "../../hooks/useForm"

export default function Login({
    loginSubmitHandler,
}) {
    const{ values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: "",
        password:"",
    });

    return(
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="username@someserver.com" 
                        onChange={onChange}
                        value={values.email}
                        />
{/* ! value.??? must be same as id! */}
                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password" 
                        onChange={onChange}
                        value={values.password}
                        />
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you are not registered click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>

    )
}