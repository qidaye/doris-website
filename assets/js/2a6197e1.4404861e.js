"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[234005],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>d});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,d=u["".concat(l,".").concat(c)]||u[c]||y[c]||i;return a?t.createElement(d,o(o({ref:n},g),{},{components:a})):t.createElement(d,o({ref:n},g))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},862294:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(296540),a(15680));const i={title:"Release Preparation",language:"en"},o=void 0,s={unversionedId:"release-and-verify/release-prepare",id:"release-and-verify/release-prepare",title:"Release Preparation",description:"\x3c!--",source:"@site/community/release-and-verify/release-prepare.md",sourceDirName:"release-and-verify",slug:"/release-and-verify/release-prepare",permalink:"/community/release-and-verify/release-prepare",draft:!1,tags:[],version:"current",frontMatter:{title:"Release Preparation",language:"en"},sidebar:"community",previous:{title:"Doris Versioning",permalink:"/community/release-versioning"},next:{title:"Release Doris Core",permalink:"/community/release-and-verify/release-doris-core"}},l={},p=[{value:"Release Process",id:"release-process",level:2},{value:"Prepare signatures",id:"prepare-signatures",level:2},{value:"Prepare gpg key",id:"prepare-gpg-key",level:3},{value:"Installation and configuration of the signature software GnuPG",id:"installation-and-configuration-of-the-signature-software-gnupg",level:4},{value:"GnuPG",id:"gnupg",level:5},{value:"installation configuration",id:"installation-configuration",level:5},{value:"Generate a new signature",id:"generate-a-new-signature",level:4},{value:"Preparing a signature",id:"preparing-a-signature",level:5},{value:"Generate a new signature",id:"generate-a-new-signature-1",level:5},{value:"View and output",id:"view-and-output",level:5},{value:"Uploading Signed Public Keys",id:"uploading-signed-public-keys",level:4},{value:"generates fingerprint and uploads it to apache user information",id:"generates-fingerprint-and-uploads-it-to-apache-user-information",level:4},{value:"generates keys",id:"generates-keys",level:4},{value:"Maven Release Preparation",id:"maven-release-preparation",level:2},{value:"Initiating DISCUSS in the community",id:"initiating-discuss-in-the-community",level:2}],g={toc:p},u="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"release-preparation"},"Release Preparation"),(0,r.yg)("p",null,"Releases of Apache projects must strictly follow the Apache Foundation release process. Related guidance and policies can be found at."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing"},"Release Creation Process")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"Release Policy")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://infra.apache.org/publishing-maven-artifacts.html"},"Publishing Maven Releases to Maven Central Repository"))),(0,r.yg)("p",null,"This document describes the main process and prep work for release. For specific Doris component release steps, you can refer to the respective documentation:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/community/release-and-verify/release-doris-core"},"Doris Core Release")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/community/release-and-verify/release-doris-connectors"},"Doris Connectors Release")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./release-doris-manager.md"},"Doris Manager Release")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/community/release-and-verify/release-doris-shade"},"Doris Shade Release")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/community/release-and-verify/release-doris-sdk"},"Doris Sdk Release"))),(0,r.yg)("p",null,"There are three main forms of releases for Apache projects."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Source Release: i.e. source release, this is mandatory."),(0,r.yg)("li",{parentName:"ul"},"Binary Release: e.g., release of a compiled executable. This is optional."),(0,r.yg)("li",{parentName:"ul"},"Convenience Binaries: Release to third-party platforms for user convenience, such as Maven, Docker, etc. This is also optional.")),(0,r.yg)("h2",{id:"release-process"},"Release Process"),(0,r.yg)("p",null,"Each project release requires a PMC member or Committer as the ",(0,r.yg)("strong",{parentName:"p"},"Release Manager"),"."),(0,r.yg)("p",null,"The overall release process is as follows."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Environment preparation"),(0,r.yg)("li",{parentName:"ol"},"Release preparation",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"the community initiates DISCUSS and communicates with the community about the specific release plan"),(0,r.yg)("li",{parentName:"ol"},"create a branch for the release"),(0,r.yg)("li",{parentName:"ol"},"clean up the issue"),(0,r.yg)("li",{parentName:"ol"},"merge the necessary patches into the released branch"))),(0,r.yg)("li",{parentName:"ol"},"verify the branch",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"stability testing"),(0,r.yg)("li",{parentName:"ol"},"verify the compilation flow of the branch code"),(0,r.yg)("li",{parentName:"ol"},"Prepare Release Notes"))),(0,r.yg)("li",{parentName:"ol"},"prepare release materials",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Tagging"),(0,r.yg)("li",{parentName:"ol"},"upload the content to be released to the ",(0,r.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/doris"},"Apache Dev SVN repository")),(0,r.yg)("li",{parentName:"ol"},"preparation of other Convenience Binaries (e.g. upload to ",(0,r.yg)("a",{parentName:"li",href:"https://repository.apache.org/#stagingRepositories"},"Maven Staging repository"),")"))),(0,r.yg)("li",{parentName:"ol"},"Community Release Polling Process\n2. Initiate a VOTE in the ",(0,r.yg)("a",{parentName:"li",href:"dev@doris.apache.org"},"Doris Community Dev Mail Group"),".\n3. After the vote is approved, send a Result email in the Doris community."),(0,r.yg)("li",{parentName:"ol"},"Complete the work",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Upload the signed packages to the ",(0,r.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/doris"},"Apache Release repository")," and generate the relevant links."),(0,r.yg)("li",{parentName:"ol"},"Post the download links on the Doris website and github, and clean up the old packages on svn."),(0,r.yg)("li",{parentName:"ol"},"Send an Announce email to ",(0,r.yg)("a",{parentName:"li",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org"))))),(0,r.yg)("h2",{id:"prepare-signatures"},"Prepare signatures"),(0,r.yg)("p",null,"If this is your first time as Release Manager, then you need to prepare the following tools in your environment"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.apache.org/dev/release-signing.html"},"Release Signing")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.apache.org/dev/openpgp.html"},"gpg")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.apache.org/dev/openpgp.html"},"svn"))),(0,r.yg)("h3",{id:"prepare-gpg-key"},"Prepare gpg key"),(0,r.yg)("p",null,"Release manager needs to create its own signature public key before release, and upload it to the public key server, then you can use this public key to sign the package to be released.\nIf your KEY already exists in ",(0,r.yg)("a",{parentName:"p",href:"https://downloads.apache.org/doris/KEYS"},"KEYS"),", then you can skip this step."),(0,r.yg)("h4",{id:"installation-and-configuration-of-the-signature-software-gnupg"},"Installation and configuration of the signature software GnuPG"),(0,r.yg)("h5",{id:"gnupg"},"GnuPG"),(0,r.yg)("p",null,"In 1991, programmer Phil Zimmermann developed the encryption software PGP in order to avoid government surveillance; it worked so well that it quickly spread and became an essential tool for many programmers. However, it was commercial software and could not be used freely. So, the Free Software Foundation decided to develop a replacement for PGP, named GnuPG, and that's how GPG came to be."),(0,r.yg)("h5",{id:"installation-configuration"},"installation configuration"),(0,r.yg)("p",null,"CentOS installation command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"yum install gnupg\n")),(0,r.yg)("p",null,"After installation, the default configuration file gpg.conf will be placed in the home directory."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"~/.gnupg/gpg.conf\n")),(0,r.yg)("p",null,"If this directory or file does not exist, you can just create an empty file."),(0,r.yg)("p",null,"Apache recommends SHA512 for signatures, which can be done by configuring gpg.\nEdit gpg.conf, adding the following three lines."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"personal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\n")),(0,r.yg)("h4",{id:"generate-a-new-signature"},"Generate a new signature"),(0,r.yg)("h5",{id:"preparing-a-signature"},"Preparing a signature"),(0,r.yg)("p",null,"Recommended settings for generating new signatures."),(0,r.yg)("p",null,"Here you must log in to the user account directly through a terminal such as SecureCRT, not through su - user or ssh, otherwise the password input box will not show up and an error will be reported."),(0,r.yg)("p",null,"First look at the version of gpg and whether it supports SHA512."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ gpg --version\ngpg (GnuPG) 2.0.22\nlibgcrypt 1.5.3\nCopyright (C) 2013 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nHome: ~/.gnupg\nSupported algorithms:\nPubkey: RSA, ?, ?, ELG, DSA\nCipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,\n        CAMELLIA128, CAMELLIA192, CAMELLIA256\nHash: MD5, SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224\nCompression: Uncompressed, ZIP, ZLIB, BZIP2\n")),(0,r.yg)("h5",{id:"generate-a-new-signature-1"},"Generate a new signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ gpg --gen-key\ngpg (GnuPG) 2.0.22; Copyright (C) 2013 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: xxx\nName must be at least 5 characters long\nReal name: xxx-yyy\nEmail address: xxx@apache.org\nComment: xxx's key\nYou selected this USER-ID:\n    \"xxx-yyy (xxx's key) <xxx@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o\n")),(0,r.yg)("p",null,"Real name should be the same as the id shown in id.apache.org.\nEmail address is the apache email address."),(0,r.yg)("p",null,"Enter passphrase, twice, more than 8 characters."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The secret key here must be remembered, it will be used later when signing. It will also be used for publishing other components")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"If the ",(0,r.yg)("inlineCode",{parentName:"strong"},"gpg --gen-key")," command gets stuck for a long time, try opening another terminal and execute the ",(0,r.yg)("inlineCode",{parentName:"strong"},"find / | xargs file")," command to generate enough random characters, usually after a few minutes, the gpg command will complete. ")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Notice:")),(0,r.yg)("p",{parentName:"blockquote"},"If the generation is stuck when it can be generated and cannot be completed for a long time, the following solutions can be used to solve it:"),(0,r.yg)("p",{parentName:"blockquote"},"Install the rng-tools tool by ",(0,r.yg)("inlineCode",{parentName:"p"},"yum install rng-tools")," to complete the installation.\nThen open a new window and execute the command: rngd -r /dev/urandom, and the key generation can be completed instantly.")),(0,r.yg)("h5",{id:"view-and-output"},"View and output"),(0,r.yg)("p",null,'The first line shows the public key file name (pubring.gpg), the second line shows the public key characteristics (4096 bits, hash string and generation time), the third line shows the "user ID", comments, emails, and the fourth line shows the private key characteristics.'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ gpg --list-keys\n/home/lide/.gnupg/pubring.gpg\n-----------------------------\npub 4096R/33DBF2E0 2018-12-06\nuid xxx-yyyy (xxx's key) <xxx@apache.org>\nsub 4096R/0E8182E6 2018-12-06\n")),(0,r.yg)("p",null,"where xxx-yyyy is the user ID."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"gpg --armor --output public-key.txt --export [user-id]\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ gpg --armor --output public-key.txt --export xxx-yyyy\nThe file 'public-key.txt' already exists. Is it overwritten? (y/N)y\n$ cat public-key.txt\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2.0.22 (GNU/Linux)\n\nmQINBFwJEQ0BEACwqLluHfjBqD/RWZ4uoYxNYHlIzZvbvxAlwS2mn53BirLIU/G3\n9opMWNplvmK+3+gNlRlFpiZ7EvHsF/YJOAP59HmI2Z...\n")),(0,r.yg)("h4",{id:"uploading-signed-public-keys"},"Uploading Signed Public Keys"),(0,r.yg)("p",null,"A public key server is a server on the network dedicated to storing the user's public key. send-keys parameter can upload the public key to the server."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"gpg --send-keys xxxx --keyserver https://keyserver.ubuntu.com/\n\n")),(0,r.yg)("p",null,"where xxxx is the string after pub in the ",(0,r.yg)("inlineCode",{parentName:"p"},"-list-keys")," result of the previous step, e.g., 33DBF2E0"),(0,r.yg)("p",null,"You can also upload the contents of the above public-key.txt via ",(0,r.yg)("a",{parentName:"p",href:"https://keyserver.ubuntu.com/"},"https://keyserver.ubuntu.com/"),"."),(0,r.yg)("p",null,"After successful upload, you can query this ",(0,r.yg)("a",{parentName:"p",href:"https://keyserver.ubuntu.com/"},"https://keyserver.ubuntu.com/")," by entering 0x33DBF2E0. (Note that it needs to start with 0x)"),(0,r.yg)("p",null,"There is a delay in querying this website, you may need to wait for 1 hour."),(0,r.yg)("h4",{id:"generates-fingerprint-and-uploads-it-to-apache-user-information"},"generates fingerprint and uploads it to apache user information"),(0,r.yg)("p",null,"Since the public key server has no checking mechanism, anyone can upload a public key in your name, so there is no way to guarantee the reliability of the public key on the server. Usually, you can publish a public key fingerprint on your website and let other people check whether the downloaded public key is genuine or not."),(0,r.yg)("p",null,"The fingerprint parameter generates a public key fingerprint."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"gpg --fingerprint [user-id]\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"$ gpg --fingerprint xxx-yyyy\npub 4096R/33DBF2E0 2018-12-06\n      Key fingerprint = 07AA E690 B01D 1A4B 469B 0BEF 5E29 CE39 33DB F2E0\nuid xxx-yyyy (xxx's key) <xxx@apache.org>\nsub 4096R/0E8182E6 2018-12-06\n")),(0,r.yg)("p",null,"Paste the fingerprint above (i.e. 07AA E690 B01D 1A4B 469B 0BEF 5E29 CE39 33DB F2E0) into your own user information at"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://id.apache.org"},"https://id.apache.org")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"OpenPGP Public Key Primary Fingerprint:")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note: Each person can have more than one Public Key.")),(0,r.yg)("h4",{id:"generates-keys"},"generates keys"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Be careful not to delete existing content in the KEYS file, it can only be added.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'svn co https://dist.apache.org/repos/dist/dev/doris/\n# edit doris/KEYS file\ngpg --list-sigs [user-id] >> doris/KEYS\ngpg --armor --export [user ID] >> doris/KEYS\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "UPDATE KEYS"\n')),(0,r.yg)("p",null,"Note that the KEYS file should also be published to the following svn library."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'svn co https://dist.apache.org/repos/dist/release/doris\n# edit doris/KEYS file\nsvn ci --username $ASF_USERNAME --password "$ASF_PASSWORD" -m "UPDATE KEYS"\n')),(0,r.yg)("p",null,"After that it will automatically sync to."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"https://downloads.apache.org/doris/KEYS\n")),(0,r.yg)("p",null,"In subsequent release poll emails, use the KEYS file here in ",(0,r.yg)("inlineCode",{parentName:"p"},"https://downloads.apache.org/doris/KEYS"),"."),(0,r.yg)("h2",{id:"maven-release-preparation"},"Maven Release Preparation"),(0,r.yg)("p",null,"For components such as the Doris Connector, you need to use maven for the release."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Generate a master password"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"mvn --encrypt-master-password <password>")),(0,r.yg)("p",{parentName:"li"},"This password is only used to encrypt other passwords that follow, and the output is something like ",(0,r.yg)("inlineCode",{parentName:"p"},"{VSb+6+76djkH/43...} ")," Then create the ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.m2/settings-security.xml")," file with the following content"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"<settingsSecurity>\n  <master>{VSb+6+76djkH/43...}</master>\n</settingsSecurity>\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Encrypt apache passwords"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"`mvn --encrypt-password <password>`\n\nThe password is the password for the apache account. The output is similar to `{GRKbCylpwysHfV...}`\n\nAdd in `~/.m2/settings.xml`\n\n```\n<servers>\n  \x3c!-- To publish a snapshot of your project --\x3e\n  <server>\n    <id>apache.snapshots.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n  \x3c!-- To stage a release of your project --\x3e\n  <server>\n    <id>apache.releases.https</id>\n    <username>yangzhg</username>\n    <password>{GRKbCylpwysHfV...}</password>\n  </server>\n</servers>\n```\n")),(0,r.yg)("h2",{id:"initiating-discuss-in-the-community"},"Initiating DISCUSS in the community"),(0,r.yg)("p",null,"DISCUSS is not a required process before a release, but it is highly recommended to start a discussion in the dev@doris mail group before a major release. Content includes, but is not limited to, descriptions of important features, bug fixes, etc."))}y.isMDXComponent=!0}}]);