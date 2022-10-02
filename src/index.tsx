/* eslint-disable react/react-in-jsx-scope */
import App from 'app/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoudary } from 'app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <ErrorBoudary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoudary>
  </BrowserRouter>,
  document.getElementById('root')
);
