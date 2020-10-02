(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{291:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),r=(t(0),t(317)),o=t(326),s=t(327),c={id:"login-session",title:"Configuring And Checking for Login Sessions"},l={unversionedId:"guides/login-session",id:"guides/login-session",isDocsHomePage:!1,title:"Configuring And Checking for Login Sessions",description:"A login session is created when a user signs in. The session is stored as a",source:"@site/docs/guides/login-session.mdx",slug:"/guides/login-session",permalink:"/kratos/docs/next/guides/login-session",editUrl:"https://github.com/ory/kratos/edit/master/docs/docs/guides/login-session.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598961933,sidebar:"docs",previous:{title:"Configuring Cookies",permalink:"/kratos/docs/next/guides/configuring-cookies"},next:{title:"Secret and Key Rotation",permalink:"/kratos/docs/next/guides/secret-key-rotation"}},d=[{value:"Login Session Configuration",id:"login-session-configuration",children:[]},{value:"Checking for Login Sessions",id:"checking-for-login-sessions",children:[{value:"Browser Client",id:"browser-client",children:[]},{value:"API Client",id:"api-client",children:[]}]}],u={rightToc:d};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A login session is created when a user signs in. The session is stored as a\ncookie or as a token, depending on the interaction type."),Object(r.b)("h2",{id:"login-session-configuration"},"Login Session Configuration"),Object(r.b)("p",null,"A session is valid for the session lifespan you specify in the ORY Kratos\nconfig:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  lifespan: 720h # 30 days\n")),Object(r.b)("p",null,"Per default the session cookie has the ",Object(r.b)("inlineCode",{parentName:"p"},"max-age")," parameter set to the specified\nsession lifespan. You may disable this behavior by setting:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="path/to/kratos/config.yml',title:'"path/to/kratos/config.yml'}),"session:\n  cookie:\n    persistent: false\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The cookie ",Object(r.b)("inlineCode",{parentName:"p"},"max-age")," parameter behaves as follows:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"The browser interprets the cookie to be removed when the session ends if\n",Object(r.b)("inlineCode",{parentName:"li"},"max-age")," is not set as part of the ",Object(r.b)("inlineCode",{parentName:"li"},"Set-Cookie")," header. A session ends if the\nbrowser is terminated due to a reboot or when shutting down the browser."),Object(r.b)("li",{parentName:"ul"},"The browser keeps the cookie until ",Object(r.b)("inlineCode",{parentName:"li"},"max-age")," is reached otherwise.")))),Object(r.b)("p",null,"Once the lifespan is reached, the user needs to sign in again."),Object(r.b)("h2",{id:"checking-for-login-sessions"},"Checking for Login Sessions"),Object(r.b)("h3",{id:"browser-client"},"Browser Client"),Object(r.b)("p",null,"The easiest way to check if a user is signed in is to call the\n",Object(r.b)("inlineCode",{parentName:"p"},"http(s)://<kratos-public/sessions/whoami")," endpoint which will return either a\n401 Unauthorized or HTTP 200 OK with the session."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Make sure to include the ORY Kratos Session Cookie when calling this endpoint.\nIf you are calling this endpoint from a proxy or middleware, make sure to\nforward the cookies sent to the proxy/middleware. If you are calling this\nendpoint as an AJAX call, make sure to include credentials and configure CORS\nproperly."))),Object(r.b)("p",null,"A typical session payload will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')),Object(r.b)("h4",{id:"code-examples"},"Code Examples"),Object(r.b)(o.a,{defaultValue:"nodejs",values:[{label:"ExpressJS",value:"nodejs"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"nodejs",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { PublicApi } from '@oryd/kratos-client'\n\nconst publicEndpoint = new PublicApi(config.kratos.public)\nconst protect = (req: Request, res: Response, next: NextFunction) => {\n  req.headers['host'] = config.kratos.public.split('/')[2]\n  publicEndpoint\n    .whoami(req)\n    .then(({ body, response }) => {\n      req.user = { session: body }\n      next()\n    })\n    .catch(() => {\n      // Redirect to login if not logged in\n      res.redirect('/auth/login')\n    })\n\n// const app = expres()\n// ...\n\napp.get('/', protect, dashboard)\n")))),Object(r.b)("h3",{id:"api-client"},"API Client"),Object(r.b)("p",null,"API clients receive and use ORY Kratos Session Tokens which can be checked by\ncalling the ",Object(r.b)("inlineCode",{parentName:"p"},"/sessions/whoami")," endpoint and including the ORY Kratos Session\nToken as a bearer token in the HTTP Authorization Header:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),'$ sessionToken=oFZzgLpsacUpUy2cvQPtrGa2046WcXCR\n$ curl -s -X POST -H  "Accept: application/json" \\\n    -H "Authorization: Bearer $sessionToken" \\\n    http://127.0.0.1:4433/sessions/whoami | jq\n\n{\n  "id": "8f660ce3-69ec-4aeb-9fda-f9230dc3243f",\n  "active": true,\n  "expires_at": "2020-08-25T13:42:15.7411522Z",\n  "authenticated_at": "2020-08-24T13:42:15.7411522Z",\n  "issued_at": "2020-08-24T13:42:15.7412042Z",\n  "identity": {\n    "id": "bf32596a-f853-47c4-91e6-a3f41cf4949d",\n    "schema_id": "default",\n    "schema_url": "http://127.0.0.1:4433/schemas/default",\n    "traits": {\n      "email": "api@user.org",\n      "name": {\n        "last": "User",\n        "first": "API"\n      }\n    },\n    "verifiable_addresses": [\n      {\n        "id": "f877db6c-7dfb-45e3-bbeb-ac8349348128",\n        "value": "api@user.org",\n        "verified": false,\n        "via": "email",\n        "verified_at": null,\n        "expires_at": "2020-08-24T14:35:59.125873Z"\n      }\n    ],\n    "recovery_addresses": [\n      {\n        "id": "065a908c-82be-4110-bf67-9910f36242b7",\n        "value": "api@user.org",\n        "via": "email"\n      }\n    ]\n  }\n}\n')))}b.isMDXComponent=!0},317:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,f=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return t?i.a.createElement(f,s(s({ref:n},l),{},{components:t})):i.a.createElement(f,s({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},323:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},326:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(329),o=t(323),s=t(49),c=t.n(s),l=37,d=39;n.a=function(e){var n=e.block,t=e.children,s=e.defaultValue,u=e.values,b=e.groupId,p=Object(r.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,h=Object(a.useState)(s),g=h[0],v=h[1],O=Object(a.useState)(!1),j=O[0],y=O[1];if(null!=b){var w=f[b];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&v(w)}var k=function(e){v(e),null!=b&&m(b,e)},N=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},u.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e),x(e)},onFocus:function(){return k(n)},onClick:function(){k(n),y(!1)},onPointerDown:function(){return y(!1)}},t)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===g}))[0]))}},327:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){return i.a.createElement("div",null,e.children)}},328:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},329:function(e,n,t){"use strict";var a=t(0),i=t(328);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);