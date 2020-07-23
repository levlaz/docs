(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(11),a=(n(0),n(242)),i={title:"Making your first Pull Request"},u={id:"contributing/making-your-first-pull-request",isDocsHomePage:!1,title:"Making your first Pull Request",description:"Right now you've got uncommitted code, let's get that into a Pull Request on",source:"@site/docs/contributing/making-your-first-pull-request.md",permalink:"/contributing/making-your-first-pull-request",sidebar:"Contributing",previous:{title:"Adding your first test",permalink:"/contributing/adding-your-first-test"},next:{title:"Your next contribution",permalink:"/contributing/next-contribution"}},c=[{value:"Formatting the code",id:"formatting-the-code",children:[]},{value:"Set up your fork",id:"set-up-your-fork",children:[]},{value:"Push",id:"push",children:[]},{value:"Make the Pull Request",id:"make-the-pull-request",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Right now you've got uncommitted code, let's get that into a Pull Request on\nGitHub."),Object(a.b)("h2",{id:"formatting-the-code"},"Formatting the code"),Object(a.b)("p",null,"We use a code formatter on all our files, and this is tested during CI on all\nPRs. To format, call ",Object(a.b)("inlineCode",{parentName:"p"},"scripts/format format backend"),". There is also a\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/darklang/dark/blob/main/scripts/pre-commit-hook.sh"}),"git hook you can use"),"."),Object(a.b)("h2",{id:"set-up-your-fork"},"Set up your fork"),Object(a.b)("p",null,"Dark uses a fork model for contributions, like many GitHub projects. Go to the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://darklang.com/darklang/dark"}),"Dark repo")," in your browser and click ",Object(a.b)("inlineCode",{parentName:"p"},"fork"),"\nto add a fork."),Object(a.b)("p",null,"Then change your local repo to use the fork:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git remote rm origin\ngit remote add origin https://github.com/myGitHubUsername/dark.git\n")),Object(a.b)("h2",{id:"push"},"Push"),Object(a.b)("p",null,"Finally commit and push"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'git add backend\ngit commit -m "Add test for List::member"\ngit push --set-upstream origin first-contribution\n')),Object(a.b)("h2",{id:"make-the-pull-request"},"Make the Pull Request"),Object(a.b)("p",null,"Go back to GitHub and make a pull request. Here's a good message for your pull\nrequest:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"Hi - this is my first pull request. I noticed that List::member didn\'t have\nany tests so I added one."')),Object(a.b)("p",null,"While this doesn't follow our\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/contributing/making-a-pull-request#writing-a-successful-pull-request-message"}),"Pull Request guidelines"),",\nit's fine for a first contribution (and you can ignore the PR template too for\nnow)."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"And that's your first PR - congratulations!")),Object(a.b)("p",null,"(Note that if you haven't signed the CLA, a bot will prompt you to do so now.)"))}s.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);