import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children}){
//const modal = ReactDOM.createPortal(document.getElementById('modal'));
return ReactDOM.createPortal(
    children,
    document.getElementById('modal')
);
}

export {Modal};