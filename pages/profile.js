import { getUserProfile, authInitialProps } from "../lib/auth";
import Layout from '../commponents/Layout';

export default class Profile extends React.Component {

    state = {
        user: null,
    }

    componentDidMount() {
        getUserProfile().then(user => this.setState({user}))
    }

    render() {
        return (
            <Layout title="profile" {...this.props}>{JSON.stringify(this.state.user, null, 2)}</Layout>
        )
    }
}

Profile.getInitialProps = authInitialProps(true);
