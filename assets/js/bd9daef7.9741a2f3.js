"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[561781],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>m});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(r),p=o,m=g["".concat(u,".").concat(p)]||g[p]||d[p]||a;return r?t.createElement(m,l(l({ref:n},c),{},{components:r})):t.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},557073:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(58168),o=(r(296540),r(15680));const a={title:"Doris Docker quick build development environment",language:"en"},l=void 0,i={unversionedId:"developer-guide/docker-dev",id:"developer-guide/docker-dev",title:"Doris Docker quick build development environment",description:"\x3c!--",source:"@site/community/developer-guide/docker-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/docker-dev",permalink:"/community/developer-guide/docker-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Docker quick build development environment",language:"en"},sidebar:"community",previous:{title:"Debug Tool",permalink:"/community/developer-guide/debug-tool"},next:{title:"Doris BE Storage Layer Benchmark Tool",permalink:"/community/developer-guide/benchmark-tool"}},u={},s=[{value:"Related detailed document navigation",id:"related-detailed-document-navigation",level:2},{value:"Environment preparation",id:"environment-preparation",level:2},{value:"Build image",id:"build-image",level:2},{value:"Compile",id:"compile",level:2},{value:"Run",id:"run",level:2}],c={toc:s},g="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"doris-docker-quick-build-development-environment"},"Doris Docker quick build development environment"),(0,o.yg)("h2",{id:"related-detailed-document-navigation"},"Related detailed document navigation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/install/source-install/compilation"},"Developing mirror compilation using Docker")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/docs/install/install-deploy"},"Deploying Doris")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/community/developer-guide/be-vscode-dev"},"VSCode Be Development Debugging"))),(0,o.yg)("h2",{id:"environment-preparation"},"Environment preparation"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Install Docker"),(0,o.yg)("li",{parentName:"ul"},"VSCode",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Remote plugin")))),(0,o.yg)("h2",{id:"build-image"},"Build image"),(0,o.yg)("p",null,"create dockerfile"),(0,o.yg)("p",null,"VSCode replace all by using Ctrl-d"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"<!!! your user !!!>"),(0,o.yg)("li",{parentName:"ul"},"<!!! your user password !!!>"),(0,o.yg)("li",{parentName:"ul"},"<!!! root password !!!>"),(0,o.yg)("li",{parentName:"ul"},"<!!! your git email !!!>"),(0,o.yg)("li",{parentName:"ul"},"<!!! your git username !!!>")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-dockerfile"},'FROM apache/incubator-doris:build-env-latest\n\nUSER root\nWORKDIR /root\nRUN echo \'<!!! root password !!!>\' | passwd root --stdin\n\nRUN yum install -y vim net-tools man wget git mysql lsof bash-completion \\\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin\n\n# safer usage, create new user instead of using root\nRUN yum install -y sudo \\\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin \\\n        && usermod -a -G wheel <!!! your user !!!>\n\nUSER <!!! your user !!!>\nWORKDIR /home/<!!! your user !!!>\nRUN git config --global color.ui true \\\n        && git config --global user.email "<!!! your git email !!!>" \\\n        && git config --global user.name "<!!! your git username !!!>"\n\n# install zsh and oh my zsh, easier to use on, you can remove it if you don\'t need it\nUSER root\nRUN yum install -y zsh \\\n        && chsh -s /bin/zsh <!!! your user !!!>\nUSER <!!! your user !!!>\nRUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh \\\n        && git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions \\\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n')),(0,o.yg)("p",null,"run build command"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"docker build -t doris .\n")),(0,o.yg)("p",null,"run image"),(0,o.yg)("p",null,"note! ",(0,o.yg)("a",{parentName:"p",href:"../../docs/install/source-install/compilation-general.md"},"problems with mounting")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"See the link above: It is recommended to run the image by mounting the local Doris source code directory as a volume .....")),(0,o.yg)("p",null,"if you are developing on windows, mounting may cause cross-filesystem access problems, please consider setting it manually"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"--cap-add SYS_PTRACE")," parameter allows dockers to use ptrace, making it easier for us to use ptrace and gdb remote debugging functions."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"docker run -it --cap-add SYS_PTRACE doris:latest /bin/bash\n")),(0,o.yg)("p",null,"if you installed zsh, replace plugins in ~/.zshrc after running the container"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")),(0,o.yg)("p",null,"create directory and download doris"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"su <your user>\nmkdir code && cd code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n")),(0,o.yg)("h2",{id:"compile"},"Compile"),(0,o.yg)("p",null,"Note:"),(0,o.yg)("p",null,"use the following command first time compiling"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sh build.sh --clean --be --fe --ui\n")),(0,o.yg)("p",null,"it is because build-env-for-0.15.0 version image upgraded thrift(0.9 -> 0.13), so you need to use --clean command to force use new version of thrift to generate code files, otherwise it will cause incompatibilities."),(0,o.yg)("p",null,"compile Doris"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sh build.sh\n")),(0,o.yg)("h2",{id:"run"},"Run"),(0,o.yg)("p",null,"manually create ",(0,o.yg)("inlineCode",{parentName:"p"},"meta_dir")," metadata storage location, default value is ",(0,o.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/doris-meta")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir meta_dir\n")),(0,o.yg)("p",null,"launch FE"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd output/fe\nsh bin/start_fe.sh --daemon\n")),(0,o.yg)("p",null,"launch BE"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd output/be\nsh bin/start_be.sh --daemon\n")),(0,o.yg)("p",null,"mysql-client connect"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mysql -h 127.0.0.1 -P 9030 -u root\n")))}d.isMDXComponent=!0}}]);