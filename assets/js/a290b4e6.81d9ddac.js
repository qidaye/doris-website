"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[372942],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),g=r,y=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},790340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const i={title:"Compilation on macOS",language:"en"},o=void 0,l={unversionedId:"install/source-install/compilation-mac",id:"version-1.2/install/source-install/compilation-mac",title:"Compilation on macOS",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/install/source-install/compilation-mac.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-mac",permalink:"/docs/1.2/install/source-install/compilation-mac",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Compilation on macOS",language:"en"},sidebar:"docs",previous:{title:"Compilation on Windows",permalink:"/docs/1.2/install/source-install/compilation-win"},next:{title:"Data Model",permalink:"/docs/1.2/data-table/data-model"}},p={},s=[{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Third-Party Libraries",id:"third-party-libraries",level:2},{value:"Start-up",id:"start-up",level:2},{value:"FAQ",id:"faq",level:2},{value:"Java Version",id:"java-version",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"compile-with-macos"},"Compile With macOS"),(0,r.yg)("p",null,"This topic is about how to compile Doris from source with macOS (both x86_64 and arm64)."),(0,r.yg)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"macOS 12 (Monterey) or newer\uff08",(0,r.yg)("em",{parentName:"li"},(0,r.yg)("strong",{parentName:"em"},"both Intel chip and Apple Silicon chips are supported")),"\uff09"),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"))),(0,r.yg)("h2",{id:"steps"},"Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," to install dependencies."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\n    python@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@15 openjdk@8 npm\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Compile from source."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"bash build.sh\n")))),(0,r.yg)("h2",{id:"third-party-libraries"},"Third-Party Libraries"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt")," page contains the source code of all third-party libraries. You can download ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-source.tgz"},"doris-thirdparty-source.tgz")," to obtain them.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can download the ",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("strong",{parentName:"em"},"precompiled"))," third party library from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt")," page. You may refer to the following commands:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd thirdparty\nrm -rf installed\n\n# Intel chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Make sure that protoc and thrift can run successfully.\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When running ",(0,r.yg)("inlineCode",{parentName:"p"},"protoc")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"thrift"),", you may meet an error which says ",(0,r.yg)("strong",{parentName:"p"},"the app can not be opened because the developer cannot be verified"),". Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"Security & Privacy"),". Click the ",(0,r.yg)("inlineCode",{parentName:"p"},"Open Anyway")," button in the ",(0,r.yg)("inlineCode",{parentName:"p"},"General")," pane to confirm your intent to open the app. See ",(0,r.yg)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT202491"},"https://support.apple.com/en-us/HT202491"),"."))),(0,r.yg)("h2",{id:"start-up"},"Start-up"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"file descriptors")," \uff08",(0,r.yg)("em",{parentName:"p"},(0,r.yg)("strong",{parentName:"em"},"NOTICE: If you have closed the current session, you need to set this variable again")),"\uff09\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"ulimit -n 65536\n")),(0,r.yg)("p",{parentName:"li"},"You can also write this configuration into the initialization files so you don't need to set the variables again when opening a new terminal session."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# bash\necho 'ulimit -n 65536' >>~/.bashrc\n\n# zsh\necho 'ulimit -n 65536' >>~/.zshrc\n")),(0,r.yg)("p",{parentName:"li"},"Check if the configuration works by executing the following command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ ulimit -n\n65536\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start BE up"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd output/be/bin\n./start_be.sh --daemon\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start FE up"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd output/fe/bin\n./start_fe.sh --daemon\n")))),(0,r.yg)("h2",{id:"faq"},"FAQ"),(0,r.yg)("p",null,"Fail to start BE up. The log shows: ",(0,r.yg)("inlineCode",{parentName:"p"},"fail to open StorageEngine, res=file descriptors limit is too small")),(0,r.yg)("p",null,'To fix this, please refer to the "Start-up" section above and reset  ',(0,r.yg)("inlineCode",{parentName:"p"},"file descriptors"),"."),(0,r.yg)("h3",{id:"java-version"},"Java Version"),(0,r.yg)("p",null,"Java 8 is recommended."))}u.isMDXComponent=!0}}]);