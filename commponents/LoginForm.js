import { loginUser } from "../lib/auth";
import Router from 'next/router';

export class LoginForm extends React.Component {
    state = {
        email: 'Sincere@april.biz',
        password: 'hildegard.org',
        errpr: '',
    }

    handleChange = ({target: {name, value}}) => this.setState({
        [name]: value
    })

    handleSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault()
        this.setState({
            error: '',
        })
        loginUser(email, password)
            .then(() => Router.push('/profile')).catch(this.showError)
        ;
    }

    showError = err => {
        const error =  err.response && err.response.data || err.message
        this.setState({
            error,
        })
    }

    render() {
        const { email, password, error } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div><input type="email" name="email" onChange={this.handleChange} placeholder="email" value={email}/></div>
                <div><input type="password" name="password" onChange={this.handleChange} placeholder="password" value={password}/></div>
                <button type="submit">Submit</button>
                {error && <div>Invalid email or password</div>}
            </form>
        )
    }
}

