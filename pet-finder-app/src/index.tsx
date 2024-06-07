import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './routes/app-router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppRouter />
);

