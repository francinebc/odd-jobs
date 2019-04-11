import * as React from 'react'

type Props = any;
type State = {
    hasError: boolean
    error?: string
}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: any) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error };
    }
  
    componentDidCatch(error: any, info: any) {
      // You can also log the error to an error reporting service
      console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>WEE WOO WEE WOO Something went wrong: {this.state.error}</h1>;
      }
  
      return this.props.children; 
    }
  }