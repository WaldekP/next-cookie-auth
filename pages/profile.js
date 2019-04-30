import { getUserProfile } from "../lib/auth";

export default class Profile extends React.Component {

    state = {
        user: null,
    }

    componentDidMount() {
        getUserProfile().then(user => this.setState({user}))
    }

    render() {
        return (
            <div>{JSON.stringify(this.state.user, null, 2)}</div>
        )
    }
}
