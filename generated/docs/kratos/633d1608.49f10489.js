(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{187:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(411)),s={id:"browser-redirect-flow-completion",title:"HTTP Redirection Configuration"},a={unversionedId:"concepts/browser-redirect-flow-completion",id:"version-v0.4/concepts/browser-redirect-flow-completion",isDocsHomePage:!1,title:"HTTP Redirection Configuration",description:"Self-Service flows such as Login, Registration, Updating Settings support two",source:"@site/versioned_docs/version-v0.4/concepts/browser-redirect-flow-completion.mdx",slug:"/concepts/browser-redirect-flow-completion",permalink:"/kratos/docs/v0.4/concepts/browser-redirect-flow-completion",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.4/concepts/browser-redirect-flow-completion.mdx",version:"v0.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594198226,sidebar:"version-v0.4/docs",previous:{title:"Social Sign In, OpenID Connect, and OAuth2",permalink:"/kratos/docs/v0.4/concepts/credentials/openid-connect-oidc-oauth2"},next:{title:"Out-of-band communication via E-Mail and SMS",permalink:"/kratos/docs/v0.4/concepts/email-sms"}},l=[{value:"Redirection",id:"redirection",children:[{value:"Post-Login Redirection",id:"post-login-redirection",children:[]},{value:"Post-Registration Redirection",id:"post-registration-redirection",children:[]},{value:"Post-Settings Redirection",id:"post-settings-redirection",children:[]}]},{value:"JSON",id:"json",children:[]}],c={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Self-Service flows such as Login, Registration, Updating Settings support two\nsuccessful response modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For browsers, the response will be a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#redirection"}),"redirection"),"."),Object(i.b)("li",{parentName:"ul"},"For API clients (this includes AJAX) the response will be in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#json"}),"JSON"),".")),Object(i.b)("h2",{id:"redirection"},"Redirection"),Object(i.b)("p",null,"Browser requests, identified by the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/html")," header, complete with a\nredirection flow. If no redirection URL is set for the flow, the Default\nRedirect URL will be used for most flows (e.g. login, registration):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  default_browser_return_url: https://always-end-up-here-per-default/\n")),Object(i.b)("p",null,"It is possible to specify a redirect URL per Self-Service Flow:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://end-up-here-after-login/\n    registration:\n      after:\n        default_browser_return_url: https://end-up-here-after-registration/\n    # ...\n")),Object(i.b)("p",null,"You may also set redirect URLs per strategy (overrides\n",Object(i.b)("inlineCode",{parentName:"p"},"selfservice.<login|registration|...>.default_return_to"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    login:\n      after:\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n      # ...\n")),Object(i.b)("p",null,"It is also possible to redirect someone back to the original URL. For example,\nif a user requests ",Object(i.b)("inlineCode",{parentName:"p"},"https://www.myapp.com/blog/write")," but is not logged in, we\nwant the user to end up at that page after login. To achieve that, you append\n",Object(i.b)("inlineCode",{parentName:"p"},"?return_to=https://www.myapp.com/blog/write")," when initializing the Login /\nRegistration /Settings flow."),Object(i.b)("p",null,"Because ORY Kratos prevents Open Redirect Attacks, you need to whitelist the\ndomain in your ORY Kratos config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  whitelisted_return_urls:\n    - https://www.myapp.com/\n")),Object(i.b)("h3",{id:"post-login-redirection"},"Post-Login Redirection"),Object(i.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    login:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.login.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-login-with-password/\n")),Object(i.b)("h3",{id:"post-registration-redirection"},"Post-Registration Redirection"),Object(i.b)("p",null,"Post-login redirection considers the following configuration keys:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  default_browser_return_url: https://end-up-here-per-default/\n  flows:\n    registration:\n      after:\n        # overrides url.default_browser_return_url\n        default_browser_return_url: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.registration.after.default_browser_return_url\n          default_browser_return_url: https://end-up-here-after-registration-with-password/\n")),Object(i.b)("h3",{id:"post-settings-redirection"},"Post-Settings Redirection"),Object(i.b)("p",null,"Post-settings redirection ",Object(i.b)("strong",{parentName:"p"},"does not use")," the ",Object(i.b)("inlineCode",{parentName:"p"},"urls.default_redirect_to"),"\nconfiguration key. Instead the redirect ends at the same Settings UI with the\nsame Settings Request ID and key ",Object(i.b)("inlineCode",{parentName:"p"},"update_successful")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". If the\nlisted keys are set, the redirection will end up at the specified values:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'file="path/to/my/kratos.config.yml"',file:'"path/to/my/kratos.config.yml"'}),"selfservice:\n  flows:\n    settings:\n      after:\n        # overrides url.default_redirect_to\n        default_redirect_to: https://this-is-overridden-by-password/\n        password:\n          # overrides selfservice.settings.after.default_redirect_to\n          default_redirect_to: https://end-up-here-after-settings-with-password/\n")),Object(i.b)("h2",{id:"json"},"JSON"),Object(i.b)("p",null,"This feature is currently in prototype phase and will be documented at a later\nstage."))}p.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,b=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?o.a.createElement(b,a(a({ref:t},c),{},{components:r})):o.a.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);