"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[839972],{15680:(e,l,n)=>{n.d(l,{xA:()=>c,yg:()=>y});var t=n(296540);function r(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function a(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function o(e,l){if(null==e)return{};var n,t,r=function(e,l){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),u=function(e){var l=t.useContext(i),n=l;return e&&(n="function"==typeof e?e(l):s(s({},l),e)),n},c=function(e){var l=u(e.components);return t.createElement(i.Provider,{value:l},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},g=t.forwardRef((function(e,l){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,y=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return n?t.createElement(y,s(s({ref:l},c),{},{components:n})):t.createElement(y,s({ref:l},c))}));function y(e,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var i in l)hasOwnProperty.call(l,i)&&(o[i]=l[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},117149:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=n(58168),r=(n(296540),n(15680));const a={title:"Deploying Doris Cluster",language:"en"},s=void 0,o={unversionedId:"install/cluster-deployment/k8s-deploy/install-doris-cluster",id:"version-3.0/install/cluster-deployment/k8s-deploy/install-doris-cluster",title:"Deploying Doris Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/install-doris-cluster.md",sourceDirName:"install/cluster-deployment/k8s-deploy",slug:"/install/cluster-deployment/k8s-deploy/install-doris-cluster",permalink:"/docs/install/cluster-deployment/k8s-deploy/install-doris-cluster",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Deploying Doris Cluster",language:"en"},sidebar:"docs",previous:{title:"Configuring Doris Cluster",permalink:"/docs/install/cluster-deployment/k8s-deploy/install-config-cluster"},next:{title:"Accessing Doris Cluster",permalink:"/docs/install/cluster-deployment/k8s-deploy/install-access-cluster"}},i={},u=[{value:"Deploy cluster",id:"deploy-cluster",level:2},{value:"Deploy using Custom Resource files",id:"deploy-using-custom-resource-files",level:3},{value:"Deploy using Helm",id:"deploy-using-helm",level:3},{value:"View cluster status",id:"view-cluster-status",level:2},{value:"Check cluster status",id:"check-cluster-status",level:3},{value:"Check deployment resource status",id:"check-deployment-resource-status",level:3}],c={toc:u},p="wrapper";function d(e){let{components:l,...n}=e;return(0,r.yg)(p,(0,t.A)({},c,n,{components:l,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"After planning the cluster topology, you can deploy the Doris cluster in Kubernetes."),(0,r.yg)("h2",{id:"deploy-cluster"},"Deploy cluster"),(0,r.yg)("h3",{id:"deploy-using-custom-resource-files"},"Deploy using Custom Resource files"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Online Deployment")),(0,r.yg)("p",null,"Deploying a cluster online requires the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create namespace:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace ${namespace}\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Deploy Doris cluster")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Offline deployment")),(0,r.yg)("p",null,"To deploy Doris cluster offline, you need to upload the docker image used by Doris cluster to all nodes on a machine with external network. Then use docker load to install the image on the server. Offline deployment requires the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download the required image")),(0,r.yg)("p",null,"Deploying Doris cluster requires the following images:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"selectdb/doris.fe-ubuntu:2.0.2\nselectdb/doris.be-ubuntu:2.0.2\n")),(0,r.yg)("p",null,"Download the image locally and package it into a tar file"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"## download docker image\ndocker pull selectdb/doris.fe-ubuntu:2.0.2\ndocker pull selectdb/doris.be-ubuntu:2.0.2\n\n## save docker image as a tar package\ndocker save -o doris.fe-ubuntu-v2.0.2.tar selectdb/doris.fe-ubuntu:2.0.2\ndocker save -o doris.be-ubuntu-v2.0.2.tar docker pull selectdb/doris.be-ubuntu:2.0.2\n")),(0,r.yg)("p",null,"Upload the image tar package to the server and execute the docker load command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"## load docker image\ndocker load -i doris.fe-ubuntu-v2.0.2.tar\ndocker load -i doris.be-ubuntu-v2.0.2.tar\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Create namespace:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace ${namespace}\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Deploy Doris cluster")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")),(0,r.yg)("h3",{id:"deploy-using-helm"},"Deploy using Helm"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Online Deployment")),(0,r.yg)("p",null,"Before installation, you need to add a deployment warehouse. If it has been added, you can directly install Doris Cluster. Otherwise, please refer to the operation of ",(0,r.yg)("strong",{parentName:"p"},"Add Deployment Warehouse")," when adding ",(0,r.yg)("a",{parentName:"p",href:"/docs/install/cluster-deployment/k8s-deploy/install-operator#Option%203:%20Helm%20deploys%20Doris%20Operator"},"Deploy Doris Operator")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install Doris Cluster")),(0,r.yg)("p",null,"Install ",(0,r.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris"},"doriscluster"),", using the default configuration this deployment only deploys 3 FE and 3 BE components, using the default ",(0,r.yg)("inlineCode",{parentName:"p"},"storageClass")," to implement PV dynamic provisioning."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install doriscluster doris-repo/doris\n")),(0,r.yg)("p",null,"If you need to customize resources and cluster shapes, please customize the resource configuration according to the annotations of each resource configuration in ",(0,r.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," and execute The following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install -f values.yaml doriscluster doris-repo/doris\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Verify doris cluster installation results")),(0,r.yg)("p",null,"You can check the pod deployment status through the ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command. When the Pod of ",(0,r.yg)("inlineCode",{parentName:"p"},"doriscluster")," is in ",(0,r.yg)("inlineCode",{parentName:"p"},"Running")," state and all containers in the Pod are ready, the deployment is successful."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod --namespace doris\n")),(0,r.yg)("p",null,"The return result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Offline deployment")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download the Doris Cluster Chart resource")),(0,r.yg)("p",null,"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-{chart_version}.tgz")," to install Doris Cluster chart. If you need to download the 2.0.6 version of the Doris cluster, you can use the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://charts.selectdb.com/doris-2.0.6.tgz\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Install Doris cluster")),(0,r.yg)("p",null,"Doris cluster can be installed through the ",(0,r.yg)("inlineCode",{parentName:"p"},"helm install")," command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install doriscluster doris-1.4.0.tgz\n")),(0,r.yg)("p",null,"If you need to customize the assembly ",(0,r.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml"),", you can refer to the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"helm install -f values.yaml doriscluster doris-1.4.0.tgz\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Verify doris cluster installation results")),(0,r.yg)("p",null,"You can check the pod deployment status through the ",(0,r.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command. When the Pod of ",(0,r.yg)("inlineCode",{parentName:"p"},"doriscluster")," is in ",(0,r.yg)("inlineCode",{parentName:"p"},"Running")," state and all containers in the Pod are ready, the deployment is successful."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod --namespace doris\n")),(0,r.yg)("p",null,"The return result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,r.yg)("h2",{id:"view-cluster-status"},"View cluster status"),(0,r.yg)("h3",{id:"check-cluster-status"},"Check cluster status"),(0,r.yg)("p",null,"After the cluster deployment resources are delivered, you can check the cluster status by running the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n ${namespace}\n")),(0,r.yg)("p",null,"The return result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-0   1/1     Running   0          20m\ndoriscluster-sample-be-0   1/1     Running   0          19m\n")),(0,r.yg)("p",null,"When the ",(0,r.yg)("inlineCode",{parentName:"p"},"STATUS")," of all pods is in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Running")," state, and all containers in the pods of all components are ",(0,r.yg)("inlineCode",{parentName:"p"},"READY"),", it means that the entire cluster is deployed normally."),(0,r.yg)("h3",{id:"check-deployment-resource-status"},"Check deployment resource status"),(0,r.yg)("p",null,"Doris Operator will collect the status of cluster services and display them in the distributed resources. Doris Operator defines the abbreviation ",(0,r.yg)("inlineCode",{parentName:"p"},"dcr")," for the ",(0,r.yg)("inlineCode",{parentName:"p"},"DorisCluster")," type resource name, which can be replaced by the abbreviation when using the resource type to view the cluster status."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get dcr\n")),(0,r.yg)("p",null,"The return result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"NAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,r.yg)("p",null,"When the ",(0,r.yg)("inlineCode",{parentName:"p"},"STATUS")," of the configured related services is ",(0,r.yg)("inlineCode",{parentName:"p"},"available"),", the cluster deployment is successful."))}d.isMDXComponent=!0}}]);