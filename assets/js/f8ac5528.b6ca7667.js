"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[476457],{15680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>u});var n=r(296540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},d=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,t=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,u=c["".concat(i,".").concat(h)]||c[h]||g[h]||t;return r?n.createElement(u,l(l({ref:a},d),{},{components:r})):n.createElement(u,l({ref:a},d))}));function u(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=r.length,l=new Array(t);l[0]=h;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<t;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},69738:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(296540),r(15680));const t={title:"Complete Release",language:"en"},l=void 0,s={unversionedId:"release-and-verify/release-complete",id:"release-and-verify/release-complete",title:"Complete Release",description:"\x3c!--",source:"@site/community/release-and-verify/release-complete.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-complete",permalink:"/community/release-and-verify/release-complete",draft:!1,tags:[],version:"current",frontMatter:{title:"Complete Release",language:"en"},sidebar:"community",previous:{title:"Release Doris SDK",permalink:"/community/release-and-verify/release-doris-sdk"},next:{title:"Verify the Apache Release Version",permalink:"/community/release-and-verify/release-verify"}},i={},p=[{value:"Upload package to release",id:"upload-package-to-release",level:2},{value:"Post links on Doris official website and github",id:"post-links-on-doris-official-website-and-github",level:2},{value:"Create a download link",id:"create-a-download-link",level:3},{value:"Maven",id:"maven",level:3},{value:"Prepare the release note",id:"prepare-the-release-note",level:3},{value:"Clean up old versions of packages on svn",id:"clean-up-old-versions-of-packages-on-svn",level:3},{value:"Announce",id:"announce",level:2}],d={toc:p},c="wrapper";function g(e){let{components:a,...r}=e;return(0,o.yg)(c,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"complete-release"},"Complete release"),(0,o.yg)("p",null,"The steps in this document follow after the release has been voted on and approved in the dev@doris."),(0,o.yg)("h2",{id:"upload-package-to-release"},"Upload package to release"),(0,o.yg)("p",null,"When the official release poll is successful, send the ","[Result]"," email first, then prepare the release package.\nCopy the source package, signature file and hash file from the corresponding folder of the previous release under dev to another directory 1.xx, note that the file name should not be rcxx (you can rename, but do not recalculate the signature, the hash can be recalculated, the result will not change)"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Only PMC members have permission to operate this step.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n')),(0,o.yg)("p",null,"For the first release, you need to copy the KEYS file as well. Then add it to the svn release."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"add \u6210\u529f\u540e\u5c31\u53ef\u4ee5\u5728\u4e0b\u9762\u7f51\u5740\u4e0a\u770b\u5230\u4f60\u53d1\u5e03\u7684\u6587\u4ef6\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n\u7a0d\u7b49\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c\u80fd\u5728 apache \u5b98\u7f51\u770b\u5230\uff1a\nhttp://www.apache.org/dist/doris/1.xx/\n")),(0,o.yg)("h2",{id:"post-links-on-doris-official-website-and-github"},"Post links on Doris official website and github"),(0,o.yg)("p",null,"We will use Doris Core as an example. For other components, replace the name with the corresponding one."),(0,o.yg)("h3",{id:"create-a-download-link"},"Create a download link"),(0,o.yg)("p",null,"Download Link:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n')),(0,o.yg)("p",null,"Original Location:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n")),(0,o.yg)("p",null,"Source package:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n")),(0,o.yg)("p",null,"KEYS:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"http://archive.apache.org/dist/doris/KEYS\n")),(0,o.yg)("p",null,"refer to: ",(0,o.yg)("a",{parentName:"p",href:"http://www.apache.org/dev/release-download-pages#closer"},"http://www.apache.org/dev/release-download-pages#closer")),(0,o.yg)("h3",{id:"maven"},"Maven"),(0,o.yg)("p",null,"Find staging repo on ",(0,o.yg)("a",{parentName:"p",href:"https://repository.apache.org/#stagingRepositories"},"https://repository.apache.org/#stagingRepositories"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If not closed, click ",(0,o.yg)("inlineCode",{parentName:"li"},"close")," first to close."),(0,o.yg)("li",{parentName:"ul"},"Click ",(0,o.yg)("inlineCode",{parentName:"li"},"release")," for official release.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If an error is reported in the ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," stage: ",(0,o.yg)("inlineCode",{parentName:"p"},"No public key: Key with id: (xxx) was not able to be located on"),".")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"You can execute ",(0,o.yg)("inlineCode",{parentName:"p"},"gpg --keyserver hkp://keyserver.ubuntu.com --send-keys xxx")," and then close again. xxx can be viewed through ",(0,o.yg)("inlineCode",{parentName:"p"},"gpg -k"),".")),(0,o.yg)("h3",{id:"prepare-the-release-note"},"Prepare the release note"),(0,o.yg)("p",null,"The following two places need to be modified."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Github's release page")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"https://github.com/apache/doris/releases/tag/0.9.0-rc01\n")),(0,o.yg)("p",null,"2\u3001Doris official website download page"),(0,o.yg)("p",null,"The download page is a markdown file with the following address."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docs/zh-cn/downloads/downloads.md\ndocs/en/downloads/downloads.md\n")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"you need to change the download package address of the last release to the archive address of apache (see later)."),(0,o.yg)("li",{parentName:"ol"},"Add the download information for the new version.")),(0,o.yg)("h3",{id:"clean-up-old-versions-of-packages-on-svn"},"Clean up old versions of packages on svn"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Deleting old packages on svn")),(0,o.yg)("p",null,"Since svn only needs to keep the latest version of packages, old versions of packages should be cleaned from svn when a new version is released."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n")),(0,o.yg)("p",null,"Keep these two addresses with only the latest package versions. 2."),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Change the download address of the older packages on the official Doris website to the address of the archive page ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Download page: http://doris.apache.org/downloads.html\nArchive page: http://archive.apache.org/dist/doris\n")),(0,o.yg)("p",null,"Apache has a synchronization mechanism to archive the history of releases, see ",(0,o.yg)("a",{parentName:"p",href:"https://www.apache.org/legal/release-policy.html#how-to-archive"},"how to archive"),"\nSo even if an old package is removed from svn, it can still be found on the archive page."),(0,o.yg)("h2",{id:"announce"},"Announce"),(0,o.yg)("p",null,"Title:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"[ANNOUNCE] Apache Doris 1.xx release\n")),(0,o.yg)("p",null,"To mail\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dev@doris.apache.org\n")),(0,o.yg)("p",null,"Email body:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n")))}g.isMDXComponent=!0}}]);