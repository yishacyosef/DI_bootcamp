import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error, errorInfo){
    this.setState({
      error:error,
      errorInfo:errorInfo
    })
  }
  render(){
    if(this.state.errorInfo){
      console.log('nnnnn');
    }
    return this.props.children
  }
}
export default ErrorBoundary
