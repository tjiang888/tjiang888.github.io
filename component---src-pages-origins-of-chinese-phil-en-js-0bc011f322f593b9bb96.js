(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[749],{21453:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(9781),i=n(5734),o=n(66431),l=n(7315);t.default=function(){return r.createElement(l.Z,{lang:"en"},r.createElement(a.Z,{lang:"en",cover:i.Z,bookData:o.Z.chinese_phil}))}},9781:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(41788),a=n(67294),i=n(47499),o=n.n(i),l=n(91804),c=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.scrollTo(0,0)},n.render=function(){var e=this.props,t=e.lang,n=e.cover,r=e.bookData,i="en"===t,c=r.pageName,s=r.seoTitle,m=r.seoTitleCN,p=r.title,u=r.titleCN,d=r.publisher,h=r.publisherCN,b=r.bookLink,f=r.preOrderLink,g=r.readLink,E=r.bookIntroduction,v=r.bookIntroductionCN,k=r.reviews,N=c.toLowerCase().replace(/ /g,"_"),w=k&&a.createElement("ul",{className:"more-book-review"},k.map((function(e){return a.createElement("li",{key:e.reviewer,className:"review-item"},a.createElement("div",{className:"book-text"},a.createElement(o(),{className:e.magazine?"commentor magazine":"commentor",key:e.reviewer,children:i?e.reviewer:e.reviewerCN,linkTarget:"_blank"}),a.createElement(o(),{className:"review-content",key:e.review,children:i?e.review:e.reviewCN,linkTarget:"_blank"})))})));return a.createElement("div",{id:"maincontent-container"},a.createElement("main",{className:"book"},a.createElement(l.pQ,{title:i?s:m,description:i?E.join(" "):v.join(" "),location:i?"/"+N:"/cn/"+N}),a.createElement("div",{className:"grid"},a.createElement("h2",{className:"bookname"},i?p:u),a.createElement("div",{className:"book-pic-container"},a.createElement("div",{className:"gap"},a.createElement("img",{className:"book-img",src:n,alt:"The cover of '"+p+"'"}),a.createElement("p",{className:"publisher"},i?d:h),b&&a.createElement("a",{className:"book-link",target:"_blank",href:b,rel:"noopener noreferrer"},i?"Available on Amazon":"亚马逊有售"),f&&a.createElement("a",{className:"book-link",target:"_blank",href:f,rel:"noopener noreferrer"},i?"Preorder":"预购"),g&&a.createElement("a",{className:"book-link",href:g},i?"Read Online":"在线阅读"))),a.createElement("div",{className:"book-introduction"},i&&E&&E.map((function(e,t){return a.createElement(o(),{className:"book-text bigger-first-letter",key:p+" introduction "+t,children:e})})),!i&&v&&v.map((function(e,t){return a.createElement(o(),{className:"book-text bigger-first-letter",key:p+" introduction "+t,children:e})}))),k&&a.createElement("div",{className:"book-review"},a.createElement("h2",null,i?"Reviews":"评荐"),w))))},t}(a.PureComponent)},7315:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(41788),a=n(67294),i=n(66431),o=n(25444),l=n(45641),c=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).generateNavLinks=function(e,n,r,i,c){return a.createElement(a.Fragment,null,a.createElement("li",{className:c?"sidebar-item":"nav-item"},a.createElement(l.Z,{lang:e})),!c&&a.createElement("span",{className:"link-separator"},"|"),n.map((function(i,l){return a.createElement("li",{className:c?"sidebar-item":"nav-item",key:l},a.createElement(o.Link,{to:t.getLink(e,i),className:c?"sidebar-link":"nav-link",activeClassName:"active"},"en"===e?i:r[l]),!c&&l!==n.length-1&&a.createElement("span",{className:"link-separator"},"|"))})))},t.getLink=function(e,t){var n="en"===e?"":"cn/";return"home"!==t.toLowerCase()?"/"+n+t.toLowerCase().replace(/ /g,"_"):"/"+n},t}return(0,r.Z)(t,e),t.prototype.render=function(){var e=i.Z.pageNames,t=i.Z.pageNamesCN.map((function(e){return e.toLowerCase()})),n=this.props,r=n.lang,o=n.themeColors,l=n.isInSidebar,c=this.generateNavLinks(r,e,t,o,l);return a.createElement("ul",{className:"nav"},c)},t}(a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.lang,n=e.links,r=e.themeColors,i=e.closeSidebar;return a.createElement(c,{lang:t,links:n,themeColors:r,isInSidebar:!0,closeSidebar:i})},t}(a.Component),m=n.p+"static/logo-5cf5fa44decbe7d6fef23a11e84a2256.png",p=n(68902),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.lang,n=e.links,r=e.themeColors,i=e.isMobileDevice,o=e.isSidebarOpen,l=i?"":a.createElement(c,{lang:t,links:n,themeColors:r});return a.createElement("header",{id:o?"":"main-header"},a.createElement("h1",{style:{width:"100%",margin:"0"}},a.createElement(p.ZP,{to:"en"===t?"/":"/cn",style:{verticalAlign:"middle"}},a.createElement("img",{src:m,alt:"logo"}))),l)},t}(a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e="en"===this.props.lang,t=(new Date).getFullYear(),n=2018<t?"2018 - "+t:t.toString();return a.createElement("footer",{className:"footer"},a.createElement("div",null,a.createElement("a",{href:"mailto:tjiang@rutgers.edu"},e?"Email":"电子邮箱"),a.createElement("span",{className:"icon-gap"}),a.createElement("a",{href:"https://rccs.rutgers.edu/people/director",target:"_blank",rel:"noopener noreferrer"},e?"Rutgers":"罗格斯大学"),a.createElement("span",{className:"icon-gap"}),a.createElement("a",{href:"https://www.linkedin.com/in/tao-jiang-bb80b837/",target:"_blank",rel:"noopener noreferrer"},e?"Linkedin":"领英"),a.createElement("span",{className:"icon-gap"}),a.createElement("a",{href:"https://twitter.com/taojiangscholar",target:"_blank",rel:"noopener noreferrer"},e?"Twitter":"推特")),a.createElement("p",{className:"footer-text"},"© ",n," ",e?"Tao Jiang":"蒋韬保留所有权利"),a.createElement("p",{className:"footer-text"},e?"Created by Biyun Wu":"此网站由 Biyun Wu 开发"))},t}(a.Component),h=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={viewportWidth:0,maxMobileWidth:500,isSidebarOpen:!1},t.updateViewportWidth=function(){t.setState({viewportWidth:window.innerWidth}),window.innerWidth>t.state.maxMobileWidth&&t.setState({isSidebarOpen:!1})},t.getPageThemeColors=function(e){var t={};return Object.keys(e).forEach((function(n){var r=e[n].themeColor;r&&(t[n]=r)})),t},t.updateSidebarStatus=function(){t.setState((function(e){return{isSidebarOpen:!e.isSidebarOpen}}))},t}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateViewportWidth(),window.addEventListener("resize",this.updateViewportWidth)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateViewportWidth)},n.render=function(){var e=this.state,t=e.viewportWidth,n=e.maxMobileWidth,r=e.isSidebarOpen,o=this.props.lang,l=t<=n,c=this.getPageThemeColors(i.Z),m=r?{height:"100%"}:{height:"0"},p="hamburger hamburger--collapse",h=r?p.concat(" is-active"):p,b=r?{position:"fixed"}:{};return a.createElement(a.Fragment,null,l&&a.createElement(a.Fragment,null,a.createElement("button",{id:"burger",className:h,type:"button","aria-label":"Menu","aria-controls":"sidebar",onClick:this.updateSidebarStatus,style:b},a.createElement("span",{className:"hamburger-box"},a.createElement("span",{className:"hamburger-inner"}))),a.createElement("div",{id:"sidebar",style:m},a.createElement(u,{isMobileDevice:!0,isSidebarOpen:!0}),a.createElement(s,{lang:o,themeColors:c,closeSidebar:this.updateSidebarStatus}),a.createElement(d,{isMobileDevice:l}))),a.createElement("div",{id:"app",style:b},a.createElement(u,{lang:o,themeColors:c,isMobileDevice:l}),this.props.children,a.createElement(d,{lang:o})))},t}(a.Component)},5734:function(e,t,n){"use strict";t.Z=n.p+"static/cover_chinese_phil-147c5f87d7cf6a23d3d5c258fb1f9621.jpg"}}]);
//# sourceMappingURL=component---src-pages-origins-of-chinese-phil-en-js-0bc011f322f593b9bb96.js.map