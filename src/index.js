import React from "react";
import App from "./app";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(<App />)