import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app'
import App from './App';
import AppTheme from './theme/AppTheme';
import './index.css';
import { configFirebase } from './config/firebase';

initializeApp(configFirebase);

ReactDOM.createRoot(document.getElementById('root')).render(
		<React.StrictMode>
			<AppTheme>
				<App />
			</AppTheme>
		</React.StrictMode>
);
