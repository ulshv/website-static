(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(68),s=(a(13),a(244),a(35)),o=a(247),l=a(248),d=a.n(l),c=a(64),u=a(239),A=s.b.div.withConfig({displayName:"bio__Wrapper",componentId:"sc-9jmuas-0"})(["display:flex;margin-bottom:",";@media ","{flex-direction:column;}"],Object(c.a)(2.5),"(max-width: 600px)"),f=Object(s.b)(d.a).withConfig({displayName:"bio__ImageStyled",componentId:"sc-9jmuas-1"})(["&&&{margin:0 "," 0 0;border-radius:50%;@media ","{margin:0 auto ","}}"],Object(c.a)(.5),"(max-width: 600px)",Object(c.a)(.5)),g={en:{writtenBy:"In this blog Sergey is sharing his experience, thoughts and ideas on many different topics such as software developement, traveling, books, lifestyle, finances, tech and more. ",readInDiffLang:"Этот блог также доступен на русском"},ru:{writtenBy:"В этом блоге Сергей делится опытом, мылями и идеями по многим темам, которые ему интересны: разработка ПО, путешествия, книги, лайфстайл и многое другое. ",readInDiffLang:"This blog is also available in English"}},p=function(e){var t=e.langKey,a=void 0===t?"en":t,r=o.data,s=r.site.siteMetadata.author,l="en"===a?"/ru":"/";return i.a.createElement(A,null,i.a.createElement(f,{fixed:r.avatar.childImageSharp.fixed,alt:s,style:{minWidth:100,minHeight:100,width:100,height:100},imgStyle:{borderRadius:"50%"}}),i.a.createElement("div",null,i.a.createElement("p",null,g[a].writtenBy.replace("%s",s)," ",i.a.createElement("br",null),i.a.createElement(n.Link,{to:l},g[a].readInDiffLang),"."),i.a.createElement(u.a,{langKey:a})))},h=a(237),m=a(238);a.d(t,"pageQuery",(function(){return E}));var b={en:{allPostsTitle:"All posts"},ru:{allPostsTitle:"Все записи"}},y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.pathContext.langKey,t=this.props.data.allMarkdownRemark.edges,a=b[e].allPostsTitle;return i.a.createElement(h.a,{location:this.props.location,langKey:e},i.a.createElement(m.a,{title:a,langKey:e}),i.a.createElement(p,{langKey:e}),t.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("article",{key:t.fields.slug},i.a.createElement("header",null,i.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:t.frontmatter.url},a)),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))},r}(i.a.Component),E=(t.default=y,"1101213680")},244:function(e,t,a){"use strict";a(246)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},246:function(e,t,a){var r=a(1),i=a(9),n=a(48),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},247:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAHRnpjKuCM05Qaf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAAxETIf/aAAgBAQABBQJzgDOrxh4MLy5jLDr9GE//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwGEP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAERABBRAhIhMUH/2gAIAQEABj8C47gGo7nYD9oDMWInP//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExEEFRcf/aAAgBAQABPyFNK2BeoUULyk4Bs9SyqOWOAA62iOtUqOOt9n//2gAMAwEAAgADAAAAELgPA//EABcRAQEBAQAAAAAAAAAAAAAAAAEQIUH/2gAIAQMBAT8QA1Op/8QAFxEBAQEBAAAAAAAAAAAAAAAAARARQf/aAAgBAgEBPxBXZ0n/xAAcEAACAgIDAAAAAAAAAAAAAAABEQAhEDFBYZH/2gAIAQEAAT8QD6i8B27i+7mvh2MKICL3qJEATk3yA/cGSRAw3uLaFQKshuEaIaQEz//Z","width":280,"height":280,"src":"/static/5055fb7087ea723b25c066c97e637f53/244c7/profile-pic.jpg","srcSet":"/static/5055fb7087ea723b25c066c97e637f53/244c7/profile-pic.jpg 1x"}}},"site":{"siteMetadata":{"author":"Sergey Ulyashev","social":{"twitter":""}}}}}')},248:function(e,t,a){"use strict";a(11),a(10),a(4),a(86),a(167),a(244);var r=a(23);t.__esModule=!0,t.default=void 0;var i,n=r(a(88)),s=r(a(85)),o=r(a(164)),l=r(a(165)),d=r(a(0)),c=r(a(50)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},A=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=u(e),a=A(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(j,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,A=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,onClick:u,ref:t,loading:A,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&m&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,I=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,l.default)({opacity:C?1:0,transition:O?"opacity "+m+"ms":"none"},o),R="boolean"==typeof h?"lightgray":h,x={transitionDelay:m+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&x,{},o,{},A),N={title:t,alt:this.state.isVisible?"":a,style:k,className:f,itemProp:E};if(g){var P=g,T=P[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&x)}),T.base64&&d.default.createElement(L,{src:T.base64,spreadProps:N,imageVariants:P,generateSources:v}),T.tracedSVG&&d.default.createElement(L,{src:T.tracedSVG,spreadProps:N,imageVariants:P,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(P),d.default.createElement(j,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},T,{imageVariants:P}))}}))}if(p){var V=p,z=V[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},O&&x)}),z.base64&&d.default.createElement(L,{src:z.base64,spreadProps:N,imageVariants:V,generateSources:v}),z.tracedSVG&&d.default.createElement(L,{src:z.tracedSVG,spreadProps:N,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(j,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:w},z,{imageVariants:V}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),Q=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:O,sizes:Q,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([Q,c.default.arrayOf(Q)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=C;t.default=R}}]);
//# sourceMappingURL=component---src-templates-blog-index-tsx-d38b82bc810f594e6810.js.map