(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(11),l=(n(0),n(242)),o={id:"functional-aspects",title:"Functional Aspects",sidebar_label:"Functional Aspects"},r={id:"functional-aspects",isDocsHomePage:!1,title:"Functional Aspects",description:"Implicit Returns",source:"@site/docs/functional-aspects.md",permalink:"/functional-aspects",sidebar_label:"Functional Aspects",sidebar:"docs",previous:{title:"Unique Aspects",permalink:"/unique-aspects"},next:{title:"Language Details",permalink:"/languagedetails"}},p=[{value:"Implicit Returns",id:"implicit-returns",children:[]},{value:"Statements",id:"statements",children:[]},{value:"Pipelines",id:"pipelines",children:[{value:"Overview",id:"overview",children:[]},{value:"How to Pipe",id:"how-to-pipe",children:[]},{value:"Indentation Tip",id:"indentation-tip",children:[]}]},{value:"List::Map",id:"listmap",children:[{value:"Tips",id:"tips",children:[]}]},{value:"Blocks (lambdas, anonymous functions)",id:"blocks-lambdas-anonymous-functions",children:[]},{value:"Match",id:"match",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"implicit-returns"},"Implicit Returns"),Object(l.b)("p",null,"Most languages, especially Javascript, are imperative: you tell it to do one\nthing, then do another thing. So whenever you have code, you can add more code\nbelow it to do more stuff."),Object(l.b)("p",null,'Dark uses "implicit returns" (somewhat similar to Ruby, CoffeeScript, Haskell\nand Rust). The value of an expression is that last value in that expression. So\nin the "hello world" example, you don\'t write ',Object(l.b)("inlineCode",{parentName:"p"},'return "hello world"'),", just\n",Object(l.b)("inlineCode",{parentName:"p"},'"hello world"')," is enough."),Object(l.b)("p",null,"A handler or function will return the result of the last expression within it.\nThe return value of an expression is shown below the handler. If the last\nexpression is blank, Dark will return a 500 error."),Object(l.b)("p",null,"You can see some examples are shown here:\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://darklang.com/a/sample-returns"}),"https://darklang.com/a/sample-returns")),Object(l.b)("p",null,"Other computation (side effects) can be done using a statement."),Object(l.b)("h2",{id:"statements"},"Statements"),Object(l.b)("p",null,"If you wish to use a function for side-effect (like ",Object(l.b)("inlineCode",{parentName:"p"},"DB::set")," or ",Object(l.b)("inlineCode",{parentName:"p"},"emit"),") then\nyou can put it on the right hand side of a ",Object(l.b)("inlineCode",{parentName:"p"},"let"),"."),Object(l.b)("p",null,"Dark does not yet support statements without the extra ",Object(l.b)("inlineCode",{parentName:"p"},"let"),". When you hit\n\u201center\u201d at the end of a line that has a return value, we assume you want to make\na new expression. Since that would be the last expression (and returned), we\nwill automatically add the ",Object(l.b)("inlineCode",{parentName:"p"},"let _ =")," to the expression for you."),Object(l.b)("h2",{id:"pipelines"},"Pipelines"),Object(l.b)("h3",{id:"overview"},"Overview"),Object(l.b)("p",null,"In Dark, pipelines make code more readable. Pipelines are similar to method\nchaining in OO languages, and pipes in Bash. Rather than calling functions with\ntheir parameters, you pass the previous value into the ",Object(l.b)("strong",{parentName:"p"},"first")," parameter of an\nexpression:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image2.gif",alt:"functional/image2.gif"}))),Object(l.b)("p",null,"Traditionally, you call functions with their arguments as parameters. However,\nthat is often confusing and can be hard to read:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image6.png",alt:"functional/Image6.png"}))),Object(l.b)("p",null,"Pipelines perform a series of transformations on a value in order. Here, we\nstart with the string ",Object(l.b)("inlineCode",{parentName:"p"},'"live"')," and pipe it to ",Object(l.b)("inlineCode",{parentName:"p"},"String::reverse")," to produce\n",Object(l.b)("inlineCode",{parentName:"p"},'"evil"'),". Then we pipe the result to ",Object(l.b)("inlineCode",{parentName:"p"},"String::toUppercase"),", producing the string\n",Object(l.b)("inlineCode",{parentName:"p"},'"EVIL"'),":"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image9.png",alt:"functional/image9.png"}))),Object(l.b)("h3",{id:"how-to-pipe"},"How to Pipe"),Object(l.b)("p",null,"To start a pipeline, use ",Object(l.b)("inlineCode",{parentName:"p"},"|>")," at the end of the expression you are piping."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/openpipe.png",alt:"functional/openpipe.png"}))),Object(l.b)("p",null,"Once you are in a pipeline, hitting ",Object(l.b)("inlineCode",{parentName:"p"},"return")," at the end of the expression will\ncontinue the pipe."),Object(l.b)("p",null,"If you need to pipe a specific subset of an expression, you can select it and\nthen hit ",Object(l.b)("inlineCode",{parentName:"p"},"shift+enter"),". For example, selecting ",Object(l.b)("inlineCode",{parentName:"p"},"UUID::generate")," to pipe it into\n",Object(l.b)("inlineCode",{parentName:"p"},"toString"),"."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/selectpipe.png",alt:"functional/openpipe.png"})),"\n",Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/successfulpipe.png",alt:"functional/openpipe.png"}))),Object(l.b)("h3",{id:"indentation-tip"},"Indentation Tip"),Object(l.b)("p",null,'Look at the indentation to see what is being piped. A common mistake with\npipelines is introducing them at an unintended "level". For example, here the\npiped value is the let expression as a whole, but the author intended to pipe\nthe expression bound to the variable s:'),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image13.png",alt:"functional/image13.png"}))),Object(l.b)("p",null,"_","To view the live code provided in the examples above, visit\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://darklang.com/a/sample-pipeline"}),"https://darklang.com/a/sample-pipeline"),"."),Object(l.b)("h2",{id:"listmap"},"List::Map"),Object(l.b)("p",null,"Dark does not have a for-loop, it has ",Object(l.b)("inlineCode",{parentName:"p"},"List::map.")," This allows you to do\nsomething to a collection of objects in a list."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"List::map")," takes two parameters. In this case we are passing in a list of\nintegers, and a block."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image4.png",alt:"functional/image4.png"}))),Object(l.b)("p",null,"In this case, we multiply each value by two:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image17.png",alt:"functional/image17.png"}))),Object(l.b)("p",null,"If we wanted to do something involving subsequent list items, we can use a List\nfold (in this case we pipe the output of our previous list into list::fold),\nresulting in a return value of 10,100:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image14.png",alt:"functional/image14.png"}))),Object(l.b)("h3",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The live values within a block on ",Object(l.b)("inlineCode",{parentName:"li"},"List::map")," will show you the last item in\nthe list. The live value for ",Object(l.b)("inlineCode",{parentName:"li"},"List::map")," shows the full outcome."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Known bug:")," Right now, if you use a map with a function that has a side\neffect (like Int::Rand) the analysis will show you the impact of the ",Object(l.b)("em",{parentName:"li"},"last"),"\nversion of the side effect as though it was used for all of them. This is an\nanalysis bug (you are actually getting a random int each time).")),Object(l.b)("p",null,"List map with no side effect:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/listmap1.png",alt:"functional/listmap1.png"}))),Object(l.b)("p",null,"List map with a side effect, appears to use the same Int::random each time:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/listmap2.png",alt:"functional/listmap2.png"}))),Object(l.b)("p",null,"List map with side effect, discrepancy between analysis and values stored in DB:"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/listmap3.png",alt:"functional/listmap3.png"}))),Object(l.b)("h2",{id:"blocks-lambdas-anonymous-functions"},"Blocks (lambdas, anonymous functions)"),Object(l.b)("p",null,"Blocks are anonymous functions that operate on a set of values. Expressions like\n",Object(l.b)("inlineCode",{parentName:"p"},"List::map")," and ",Object(l.b)("inlineCode",{parentName:"p"},"DB::query")," take them as parameters."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/block.png",alt:"functional/block.png"}))),Object(l.b)("p",null,"To open the block type ",Object(l.b)("inlineCode",{parentName:"p"},"\\"),". It auto-populates the parameters it is expecting\n(like ",Object(l.b)("inlineCode",{parentName:"p"},"value")," for ",Object(l.b)("inlineCode",{parentName:"p"},"Db::query")," or ",Object(l.b)("inlineCode",{parentName:"p"},"accum, curr")," for ",Object(l.b)("inlineCode",{parentName:"p"},"List::fold"),")."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/blockfilter.png",alt:"functional/block.png"}))),Object(l.b)("h2",{id:"match"},"Match"),Object(l.b)("p",null,"The match expression is used to destructure complex types, such as the ",Object(l.b)("inlineCode",{parentName:"p"},"Option"),"\ntype (",Object(l.b)("inlineCode",{parentName:"p"},"Just")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Nothing"),") and the ",Object(l.b)("inlineCode",{parentName:"p"},"Result")," type (",Object(l.b)("inlineCode",{parentName:"p"},"Ok")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Error"),"). It can\nalso be used similarly to switch statements in other languages."),Object(l.b)("p",null,"By default, functions that return Option or Result go to the\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://darklang.github.io/docs/unique-aspects#functions-that-use-error-rail"}),"Error Rail"),".\nOnce you remove the function from the Error Rail, use match for destructuring."),Object(l.b)("p",null,"Here\u2019s an example of using a match expression with a dictionary lookup."),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/functional/image16.png",alt:"functional/image16.png"}))),Object(l.b)("p",null,"Using a variable name as one of the branches will catch all matches. The\nvariable can be used on the right side of the branch."))}s.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||l;return n?i.a.createElement(d,r(r({ref:t},c),{},{components:n})):i.a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);