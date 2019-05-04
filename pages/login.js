import { LoginForm } from '../commponents/LoginForm';
import Layout from '../commponents/Layout';
import { authInitialProps } from "../lib/auth";

const Login = (props) => (
    <Layout title="login" {...props}>
        <LoginForm />
    </Layout>
)

Login.getInitialProps = authInitialProps();

export default Login
