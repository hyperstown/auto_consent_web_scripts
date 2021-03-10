// ==UserScript==
// @name         avoid Google's "before you continue"
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  How to block the annoying “Before you continue” popup on Google?
// @author       jonas, felix
// @match        https://*.google.com/*
// @grant        none
// ==/UserScript==

// Version 0.2
const style = document.createElement('style');

style.innerHTML = /* css */ `
 html {
   overflow: auto !important;
 }
 
 .lxG8Hd.aID8W{
    background-color:#000;
    opacity:0;
    display: none;
    visibility:visible
}
.qW28Ef.aID8W{
    background-color:#000;
    opacity:0;
    display: none;
    visibility:visible
}
.m114nf.aID8W{
    background-color:#333;
    opacity:0;
    display: none;
    visibility:visible
}
.xq162b.aID8W{
    background-color:#000;
    opacity:0;
    display: none;
    visibility:visible
}
.Xz5tfb.aID8W{
    background-color:#f5f5f5;
    opacity:0;
    display: none;
    visibility:visible
}
.Kg0gUe.aID8W{
    background-color:#202124;
    opacity:0;
    display: none;
    visibility:visible
}
.NJfJb.aID8W{
    opacity:0
}
.bErdLd.aID8W{
    opacity:0;
    display: none;
    visibility:visible
}
.bErdLd.hFCnyd{
    cursor:pointer
}
.bErdLd.hFCnyd .NJfJb{
    cursor:default
}
.t7xA6{
    position:fixed;
    z-index:9997;
    right:0;
    bottom:-200px;
    top:0;
    left:0;
    transition:opacity 0.25s;
    opacity:0;
    visibility:hidden
}
.NJfJb{
    border-radius:8px;
    border-radius:8px;
    display:inline-block;
    z-index:9999;
    background-color:#fff;
    opacity:0;
    text-align:left;
    white-space:normal;
    overflow:hidden;
    box-shadow:0px 5px 26px 0px rgba(0, 0, 0, 0.22), 0px 20px 28px 0px rgba(0, 0, 0, 0.30)
}
.NJfJb.o1VDwe{
    background-color:transparent;
    box-shadow:none
}
.NJfJb.Sr5CLc{
    position:relative;
    vertical-align:middle
}
.NJfJb.ZbLCRc{
    position:absolute
}
.NJfJb.mr5vfb{
    border:1px solid #d5d5d5;
    box-shadow:0 2px 4px #d5d5d5;
    box-shadow:0 2px 4px #d5d5d5
}
.bErdLd{
    position:fixed;
    right:0;
    bottom:0;
    top:0;
    left:0;
    z-index:9998;
    vertical-align:middle;
    visibility:visible;
    white-space:nowrap;
    max-height:100%;
    max-width:100%;
    overflow-x:hidden;
    overflow-y:auto
}
.bErdLd.wwYr3{
    text-align:center
}
.bErdLd::after{
    content:'';
    display:inline-block;
    height:100%;
    vertical-align:middle
}
.bErdLd{
    tap-highlight-color:rgba(0,0,0,0)
}
.ls8Qne{
    height:0;
    opacity:0;
    position:absolute;
    width:0
}
.OxAxec{
    visibility:visible
}
.QVCmK{
    overflow:hidden;
}

`;

document.body.append(style);






try {
    document.getElementById('kwHrRc').remove();
}
catch(err) {
    console.error(err)
}
// try {
//     document.getElementById('yDmH0d').remove(); // class
// }
// catch(err) {
//     console.error(err)
// }
try {
    document.getElementById('Sx9Kwc').remove();
}
catch(err) {
    console.error(err);
}
try {
    document.getElementsByClassName('NJfJb')[0].remove();
}
catch(err) {
    console.error(err);
}
try {
    document.getElementsByClassName('gb_7')[0].remove(); // google translate
}
catch(err) {
    console.error(err);
}
