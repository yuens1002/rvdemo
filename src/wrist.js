/*! (C) 2017 Andrea Giammarchi - MIT Style License */
var wrist=function(e){"use strict";function t(){}function n(e){var n=new t;return p.set(e,n),n}function r(e,t,n){var r=function(t){var r,l,i;if(this===e){if(f!==t)for(i=f,f=t,c.call(e,f),r=0,l=a.length;r<l;)a[r++].call(e,n,i,f)}else c.call(this,t)},a=[],l=g(e,n)||u,i=l.get||function(){return f},c=l.set||function(e){f=e},f=o.call(l,"value")?l.value:i.call(e);return t[n]={_:a,d:l===u?null:l,h:function(t){r.call(t.target,e[n])},configurable:!0,enumerable:o.call(l,"enumerable")?l.enumerable:"_"!==String(n)[0],get:i,set:r}}function a(e,t,n){var r,a,l,c=p.get(e);c&&t in c&&(l=c[t],r=l._,a=r.indexOf(n),-1<a&&(r.splice(a,1),r.length<1&&(delete c[t],l.d?f(e,t,l.d):(delete e[t],e[t]=l.get.call(e)),i in e&&(e[i]("change",l.h,!1),e[i]("input",l.h,!1)))))}var l="addEventListener",i="removeEventListener",c="__oO()"+Math.random(),u={},o=u.hasOwnProperty,f=e.defineProperty,h=e.getOwnPropertyDescriptor,s=e.getPrototypeOf,g=function(e,t){if(t in e){for(;e&&!o.call(e,t);)e=s(e);if(e)return h(e,t)}},p="function"==typeof WeakMap?new WeakMap:{get:function(e,t){return o.call(e,c)?e[c]:t},set:function(e,t){f(e,c,{value:t})}};return t.prototype=Object.create(null),{watch:function(e,t,i){var c=p.get(e)||n(e),u=c[t]||r(e,c,t),o=u._;return o.indexOf(i)<0&&(o.push(i),f(e,t,u),l in e&&(e[l]("change",u.h,!1),e[l]("input",u.h,!1))),{unwatch:a.bind(null,e,t,i)}},unwatch:a}}(Object);try{module.exports=wrist}catch(e){}
