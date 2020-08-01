import React from 'react'


export default class FetchError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            message: null
        };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {

        console.log(error, errorInfo);
        return { message: error.message }
    }

    render() {
        if (this.state.hasError) {

            return (<>
                <h1>Something went wrong.</h1>
                <h2>{this.state.message}</h2>
            </>
            )
        }

        return this.props.children;
    }
}
