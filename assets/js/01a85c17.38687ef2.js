(self.webpackChunkacm_uic_github_io=self.webpackChunkacm_uic_github_io||[]).push([[4013],{6165:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(9973),n=a(7294),l=a(6010),c=a(3938),i=a(6742),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",g="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",b=a(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(c.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},94:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(6165),l=a(6584),c=a(7861);t.default=function(e){var t=e.tags,a=e.sidebar,i=(0,c.MA)();return r.createElement(n.Z,{title:i,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,i),r.createElement(l.Z,{tags:Object.values(t)}))}},7211:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(6742),c="tag_1Okp",i="tagRegular_3MiF",s="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(c,(t={},t[i]=!o,t[s]=o,t))},m,o&&r.createElement("span",null,o))}},6584:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7294),n=a(7211),l=a(7861),c="tag_21yA";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var s=function(e){var t=e.tags,a=(0,l.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);