import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Header from './Component/header.js'
import Content from './Component/content.js'
import ContentBody from './Component/contentBody.js'
import style from './index.css'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(

<StrictMode>
<Content />
</StrictMode>

 )