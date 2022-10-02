import React, { ReactNode } from 'react';
import { ErrorInfo, Suspense } from 'react';
import { ErrorPage } from 'widgets/PageError/ui/ErrorPage';

interface ErrorBoudaryProps {
  children: ReactNode;
}

interface ErorBoudaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoudaryProps, ErorBoudaryState> {
  constructor(props: ErrorBoudaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="Loading...">
          <ErrorPage />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary; // withTranslation()(ErrorBoundary);
