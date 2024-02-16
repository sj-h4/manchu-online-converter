/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import init from '../rust-lib/pkg';

const root = document.getElementById('root');
await init();

render(() => <App />, root!);
