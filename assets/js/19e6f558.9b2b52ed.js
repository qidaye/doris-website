"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[824e3],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>g});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?t.createElement(g,i(i({ref:n},d),{},{components:r})):t.createElement(g,i({ref:n},d))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},412968:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const o={title:"Dev & Debug prepare on Mac",language:"en"},i=void 0,l={unversionedId:"developer-guide/mac-dev/dev-prepare",id:"developer-guide/mac-dev/dev-prepare",title:"Dev & Debug prepare on Mac",description:"\x3c!--",source:"@site/community/developer-guide/mac-dev/dev-prepare.md",sourceDirName:"developer-guide/mac-dev",slug:"/developer-guide/mac-dev/dev-prepare",permalink:"/community/developer-guide/mac-dev/dev-prepare",draft:!1,tags:[],version:"current",frontMatter:{title:"Dev & Debug prepare on Mac",language:"en"},sidebar:"community",previous:{title:"Development and Debugging of Apache Doris BE -- Clion",permalink:"/community/developer-guide/be-clion-dev"},next:{title:"Setting Up Dev Env on Mac for Doris BE - CLion",permalink:"/community/developer-guide/mac-dev/be-clion-dev"}},p={},s=[{value:"Install environment dependency",id:"install-environment-dependency",level:2},{value:"Install thrift",id:"install-thrift",level:2},{value:"pull your own code",id:"pull-your-own-code",level:2},{value:"Download Doris compilation dependencies",id:"download-doris-compilation-dependencies",level:2},{value:"Set <code>file descriptors</code>",id:"set-file-descriptors",level:2},{value:"compile Doris",id:"compile-doris",level:2},{value:"Compilation Error with Higher Version of Node.js",id:"compilation-error-with-higher-version-of-nodejs",level:2},{value:"Configure Debug environment",id:"configure-debug-environment",level:2},{value:"Start Debugging with IDE",id:"start-debugging-with-ide",level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"install-environment-dependency"},"Install environment dependency"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"brew install automake autoconf libtool pkg-config texinfo coreutils gnu-getopt \\\npython@3 cmake ninja ccache bison byacc gettext wget pcre maven llvm@16 openjdk@17 npm\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"The version of jdk installed using brew is 17, because on macOS, the arm64 version of brew does not have version 8 of jdk by default"),"\n",(0,a.yg)("em",{parentName:"p"},"Currently, Doris only supports jdk8 and jdk17")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Dependency description:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Java, Maven, etc. can be downloaded separately for easy management",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Mac recommend ",(0,a.yg)("a",{parentName:"li",href:"https://www.azul.com/downloads/?version=java-8-lts&os=macos&package=jdk#zulu"},"Zulu JDK8")),(0,a.yg)("li",{parentName:"ul"},"Maven Download from ",(0,a.yg)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven website")," is ok",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"  - Self-downloaded Java and Maven need to configure environment variables\n"))))),(0,a.yg)("li",{parentName:"ol"},"Other dependent environment variables (example for Apple Silicon Macs)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"llvm: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH="/opt/homebrew/opt/llvm/bin:$PATH"')),(0,a.yg)("li",{parentName:"ul"},"bison: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH = "/opt/homebrew/opt/bison/bin:$PATH')),(0,a.yg)("li",{parentName:"ul"},"texinfo: ",(0,a.yg)("inlineCode",{parentName:"li"},'export PATH = "/opt/homebrew/opt/texinfo/bin:$PATH')),(0,a.yg)("li",{parentName:"ul"},"python: ",(0,a.yg)("inlineCode",{parentName:"li"},"ln -s -f /opt/homebrew/bin/python3 /opt/homebrew/bin/python"))))),(0,a.yg)("h2",{id:"install-thrift"},"Install thrift"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note\uff1a")," Thrift needs to be installed only when debugging FE only. When debugging BE and FE at the same time, the three-party library of BE contains thrift"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"MacOS: \n    1. Download\uff1a`brew install thrift@0.16.0`\n    2. Create a soft link\uff1a \n        `mkdir -p ./thirdparty/installed/bin`\n        # Apple Silicon CPU macOS\n        `ln -s /opt/homebrew/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n        # Intel CPU macOS\n        `ln -s /usr/local/Cellar/thrift@0.16.0/0.16.0/bin/thrift ./thirdparty/installed/bin/thrift`\n    \nNote\uff1amacOS implement `brew install thrift@0.16.0` it may report an error that the version cannot be found. The solution is as follows, execute in the terminal:\n    1. `brew tap homebrew/core --force`\n    2. `brew tap-new $USER/local-tap`\n    3. `brew extract --version='0.16.0' thrift $USER/local-tap`\n    4. `brew install thrift@0.16.0`\nreference link: `https://gist.github.com/tonydeng/02e571f273d6cce4230dc8d5f394493c`\n")),(0,a.yg)("h2",{id:"pull-your-own-code"},"pull your own code"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"pull code"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd ~\nmkdir DorisDev\ncd DorisDev\ngit clone https://github.com/GitHubID/doris.git\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"set environment variables"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"export DORIS_HOME=~/DorisDev/doris\nexport PATH=$DORIS_HOME/bin:$PATH\n")))),(0,a.yg)("h2",{id:"download-doris-compilation-dependencies"},"Download Doris compilation dependencies"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt")," page contains the source code of all third-party libraries. You can download ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-source.tgz"},"doris-thirdparty-source.tgz")," to obtain them.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"You can download the ",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"precompiled"))," third party library from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-thirdparty/releases/tag/automation"},"Apache Doris Third Party Prebuilt")," page. You may refer to the following commands:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd thirdparty\nrm -rf installed\n\n# Intel chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-x86_64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Apple Silicon chips\ncurl -L https://github.com/apache/doris-thirdparty/releases/download/automation/doris-thirdparty-prebuilt-darwin-arm64.tar.xz \\\n    -o - | tar -Jxf -\n\n# Make sure that protoc and thrift can run successfully.\ncd installed/bin\n\n./protoc --version\n./thrift --version\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"When running ",(0,a.yg)("inlineCode",{parentName:"p"},"protoc")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"thrift"),", you may meet an error which says ",(0,a.yg)("strong",{parentName:"p"},"the app can not be opened because the developer cannot be verified"),". Go to ",(0,a.yg)("inlineCode",{parentName:"p"},"Security & Privacy"),". Click the ",(0,a.yg)("inlineCode",{parentName:"p"},"Open Anyway")," button in the ",(0,a.yg)("inlineCode",{parentName:"p"},"General")," pane to confirm your intent to open the app. See ",(0,a.yg)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT202491"},"https://support.apple.com/en-us/HT202491"),"."))),(0,a.yg)("h2",{id:"set-file-descriptors"},"Set ",(0,a.yg)("inlineCode",{parentName:"h2"},"file descriptors")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# bash\necho 'ulimit -n 65536' >>~/.bashrc\n    \n# zsh\necho 'ulimit -n 65536' >>~/.zshrc\n")),(0,a.yg)("h2",{id:"compile-doris"},"compile Doris"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd $DORIS_HOME\nsh build.sh\n")),(0,a.yg)("h2",{id:"compilation-error-with-higher-version-of-nodejs"},"Compilation Error with Higher Version of Node.js"),(0,a.yg)("p",null,"During the compilation process, errors may occur due to a higher version of Node.js."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"opensslErrorStack: ","[ 'error:03000086:digital envelope routines::initialization error' ]",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"library: 'digital envelope routines'"),(0,a.yg)("li",{parentName:"ul"},"reason: 'unsupported'"),(0,a.yg)("li",{parentName:"ul"},"code: 'ERR_OSSL_EVP_UNSUPPORTED'")))),(0,a.yg)("p",null,"For more information and a possible solution, you can refer to this ",(0,a.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/74726224/opensslerrorstack-error03000086digital-envelope-routinesinitialization-e"},"Stack Overflow post"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"## Instruct Node.js to use an older version of the OpenSSL provider.\nexport NODE_OPTIONS=--openssl-legacy-provider\n")),(0,a.yg)("h2",{id:"configure-debug-environment"},"Configure Debug environment"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# cp out the compiled package\n    \ncp -r output ../doris-run\n    \n# Configure FE/BE's conf\n1\u3001IP\u3001directory\n2\u3001BE additional configuration min_file_descriptor_number = 10000\n")),(0,a.yg)("h2",{id:"start-debugging-with-ide"},"Start Debugging with IDE"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/community/developer-guide/mac-dev/be-clion-dev"},"CLion Debug BE On Mac")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/community/developer-guide/mac-dev/fe-idea-dev"},"IntelliJ IDEA Debug FE On Mac")))}u.isMDXComponent=!0}}]);