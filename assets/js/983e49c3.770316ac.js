"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[357],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var l=a(7462),n=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),d=a(7392),u=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:l,default:n}}=e;return{value:t,label:a,attributes:l,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const l=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:l}=e,r=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=a.find((e=>e.default))??a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,d]=b({queryString:a,groupId:l}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,u.Nk)(a);return[l,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:l}),h=(()=>{const e=s??m;return c({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var h=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),l=d[a].value;l!==i&&(m(t),s(l))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:p},o,{className:(0,r.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:l}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function f(e){const t=k(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",x.tabList)},n.createElement(N,(0,l.Z)({},e,t)),n.createElement(y,(0,l.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return n.createElement(f,(0,l.Z)({key:String(t)},e))}},9814:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294);function n(){return l.createElement("div",{style:{height:"1px"}})}},1853:(e,t,a)=>{function l(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function n(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];l(t),window.toggleNavOnScroll=l.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function r(){setTimeout((()=>{const e=document.querySelectorAll(".plugin-pages > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}a.r(t),a.d(t,{fadeIn:()=>r,readdAutoNavShadowToggle:()=>n})},9272:(e,t,a)=>{a.d(t,{Z:()=>r,v:()=>n});var l=a(7294);function n(e){return e?.children[0]?.children[0]}function r(e){let{children:t,minHeight:a}=e;return l.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||343}px`}},l.createElement("div",null,t))}},523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>N,frontMatter:()=>m,metadata:()=>c,toc:()=>k});var l=a(7462),n=(a(7294),a(3905)),r=a(4336),o=a(9272),i=a(9814),s=a(1262),d=a(5162),u=a(4866);const m={sidebar_position:6},p="Column",c={unversionedId:"docs/column",id:"docs/column",title:"Column",description:"Properties related to table columns.",source:"@site/docs/docs/column.mdx",sourceDirName:"docs",slug:"/docs/column",permalink:"/docs/column",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/active-table/tree/main/website/docs/docs/column.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Row",permalink:"/docs/row"},next:{title:"Column Type",permalink:"/docs/columnType"}},b={},k=[{value:"<code>customColumnsSettings</code>",id:"customColumnsSettings",level:3},{value:"Example",id:"example",level:4},{value:"<code>isColumnResizable</code>",id:"isColumnResizable",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>columnResizerColors</code>",id:"columnResizerColors",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>columnDropdown</code>",id:"columnDropdown",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>maxColumns</code>",id:"maxColumns",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>preserveNarrowColumns</code>",id:"preserveNarrowColumns",level:3},{value:"<code>displayAddNewColumn</code>",id:"displayAddNewColumn",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>displayIndexColumn</code>",id:"displayIndexColumn",level:3},{value:"Example",id:"example-6",level:4},{value:"Types",id:"types",level:2},{value:"<code>ColumnDropdownSettings</code>",id:"ColumnDropdownSettings",level:3},{value:"Example",id:"example-7",level:4}],h={toc:k},x="wrapper";function N(e){let{components:t,...m}=e;return(0,n.kt)(x,(0,l.Z)({},h,m,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"column"},"Column"),(0,n.kt)("p",null,"Properties related to table columns."),(0,n.kt)("h3",{id:"customColumnsSettings"},(0,n.kt)("inlineCode",{parentName:"h3"},"customColumnsSettings")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: {",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("inlineCode",{parentName:"li"},"headerName: string"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./columnType#defaultColumnTypeName"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultColumnTypeName?: string")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./columnType#availableDefaultColumnTypes"},(0,n.kt)("inlineCode",{parentName:"a"},"availableDefaultColumnTypes?: DEFAULT_COLUMN_TYPES[]")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./columnType#customColumnTypes"},(0,n.kt)("inlineCode",{parentName:"a"},"customColumnTypes?: ColumnType[]")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./content#defaultText"},(0,n.kt)("inlineCode",{parentName:"a"},"defaultText?: string|number")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./content#isDefaultTextRemovable"},(0,n.kt)("inlineCode",{parentName:"a"},"isDefaultTextRemovable?: boolean")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./content#cellStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"cellStyle?: cellStyle")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./content#isCellTextEditable"},(0,n.kt)("inlineCode",{parentName:"a"},"isCellTextEditable?: boolean")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"#isColumnResizable"},(0,n.kt)("inlineCode",{parentName:"a"},"isColumnResizable?: boolean")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./header#headerStyles"},(0,n.kt)("inlineCode",{parentName:"a"},"headerStyles?: headerStyles")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./header#isHeaderTextEditable"},(0,n.kt)("inlineCode",{parentName:"a"},"isHeaderTextEditable?: boolean")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"./header#HeaderIconStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"headerIconStyle?: HeaderIconStyle")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("a",{parentName:"li",href:"#ColumnDropdownSettings"},(0,n.kt)("inlineCode",{parentName:"a"},"columnDropdown?: ColumnDropdownSettings"))," ",(0,n.kt)("br",null),"\n}[]")),(0,n.kt)("p",null,"Array of custom properties for columns with header text that matches the ",(0,n.kt)("inlineCode",{parentName:"p"},"headerName"),". Values for properties that are not set will\nautomatically be inherited from the corresponding component level properties (except ",(0,n.kt)("inlineCode",{parentName:"p"},"headerName"),")."),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{customColumnsSettings:[{headerName:"Planet",defaultText:"Insert Planet",cellStyle:{width:"150px"},isHeaderTextEditable:!1},{headerName:"Number",cellStyle:{backgroundColor:"#fdfdfd"},defaultColumnTypeName:"number",isHeaderTextEditable:!1},{headerName:"Shape",cellStyle:{backgroundColor:"#f8f8f8"},defaultColumnTypeName:"Select",isHeaderTextEditable:!1},{headerName:"Date Created",cellStyle:{backgroundColor:"#f1f1f1"},defaultColumnTypeName:"Date d-m-y",isHeaderTextEditable:!1}],content:[["Planet","Number","Shape","Date Created"],["",12756,"Sphere","01-02-2012"],["",6792,"Dinosaur","14-05-1990"],["",142984,"Triangle","04-12-2020"],["",120536,"Square","23-10-2008"],["",49528,"Flat","19-02-2006"]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table\n  customColumnsSettings=\'[\n    { "headerName": "Planet", "defaultText": "Insert Planet", "cellStyle": {"width": "150px"}, "isHeaderTextEditable": false },\n    { "headerName": "Number", "cellStyle": {"backgroundColor": "#fdfdfd"}, "defaultColumnTypeName": "number", "isHeaderTextEditable": false },\n    { "headerName": "Shape", "cellStyle": {"backgroundColor": "#f8f8f8"}, "defaultColumnTypeName": "Select", "isHeaderTextEditable": false },\n    { "headerName": "Date Created", "cellStyle": {"backgroundColor": "#f1f1f1"}, "defaultColumnTypeName": "Date d-m-y", "isHeaderTextEditable": false }\n  ]\'\n></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  customColumnsSettings=\'[\n    { "headerName": "Planet", "defaultText": "Insert Planet", "cellStyle": {"width": "150px"}, "isHeaderTextEditable": false },\n    { "headerName": "Number", "cellStyle": {"backgroundColor": "#fdfdfd"}, "defaultColumnTypeName": "number", "isHeaderTextEditable": false },\n    { "headerName": "Shape", "cellStyle": {"backgroundColor": "#f8f8f8"}, "defaultColumnTypeName": "Select", "isHeaderTextEditable": false },\n    { "headerName": "Date Created", "cellStyle": {"backgroundColor": "#f1f1f1"}, "defaultColumnTypeName": "Date d-m-y", "isHeaderTextEditable": false }\n  ]\'\n  content=\'[\n    ["Planet", "Number", "Shape", "Date Created"],\n    ["", 12756, "Sphere", "01-02-2012"],\n    ["", 6792, "Dinosaur", "14-05-1990"],\n    ["", 142984, "Triangle", "04-12-2020"],\n    ["", 120536, "Square", "23-10-2008"],\n    ["", 49528, "Flat", "19-02-2006"]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"isColumnResizable"},(0,n.kt)("inlineCode",{parentName:"h3"},"isColumnResizable")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("em",{parentName:"li"},"true"))),(0,n.kt)("p",null,"Determines if columns can be resized via the use of the overlay between header cells. When ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," is defined in ",(0,n.kt)("a",{parentName:"p",href:"./content#cellStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"cellStyle")),"\nand ",(0,n.kt)("a",{parentName:"p",href:"./table#tableStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"tableStyle"))," properties, and this is set to ",(0,n.kt)("em",{parentName:"p"},"true")," - the column ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," will be automatically overwritten to\nmeet the set table ",(0,n.kt)("inlineCode",{parentName:"p"},"width"),". However if this is set to ",(0,n.kt)("em",{parentName:"p"},"false"),", columns will permanently hold the initially set ",(0,n.kt)("inlineCode",{parentName:"p"},"width"),"."),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{isColumnResizable:!0,content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table isColumnResizable="true"></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  isColumnResizable="true"\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"columnResizerColors"},(0,n.kt)("inlineCode",{parentName:"h3"},"columnResizerColors")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: { ",(0,n.kt)("inlineCode",{parentName:"li"},"hover?: string"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"click?: string")," }"),(0,n.kt)("li",{parentName:"ul"},"Default: { ",(0,n.kt)("em",{parentName:"li"},"hover: #808080"),", ",(0,n.kt)("em",{parentName:"li"},"click: #4668ed")," }")),(0,n.kt)("p",null,"Column width resizer overlay background color style for hover and click events."),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{columnResizerColors:{hover:"#87ddff",click:"#369cfd"},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table columnResizerColors=\'{ "hover": "#87ddff", "click": "#369cfd" }\'></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  columnResizerColors=\'{ "hover": "#87ddff", "click": "#369cfd" }\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"columnDropdown"},(0,n.kt)("inlineCode",{parentName:"h3"},"columnDropdown")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: {",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("a",{parentName:"li",href:"./sharedTypes#DropdownDisplaySettings"},(0,n.kt)("inlineCode",{parentName:"a"},"displaySettings?: DropdownDisplaySettings")),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("a",{parentName:"li",href:"#ColumnDropdownSettings"},(0,n.kt)("inlineCode",{parentName:"a"},"ColumnDropdownSettings"))," ",(0,n.kt)("br",null),"\n} ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},"Default: {",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"displaySettings: {isAvailable: true, openMethod: {cellClick: true}}"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isSortAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isDeleteAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isInsertLeftAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isInsertRightAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isMoveAvailable: true"),", ",(0,n.kt)("br",null),"\n}")),(0,n.kt)("p",null,"Settings for the column dropdown. If ",(0,n.kt)("inlineCode",{parentName:"p"},"displaySettings")," object's ",(0,n.kt)("inlineCode",{parentName:"p"},"openMethod")," property has ",(0,n.kt)("inlineCode",{parentName:"p"},"cellClick")," set to ",(0,n.kt)("em",{parentName:"p"},"true")," - open the dropdown by clicking\non the header cell. If ",(0,n.kt)("inlineCode",{parentName:"p"},"openMethod")," has ",(0,n.kt)("inlineCode",{parentName:"p"},"overlayClick")," set to ",(0,n.kt)("em",{parentName:"p"},"true")," - hover over the header cell, then click on the overlay component that will\nappear over it."),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{columnDropdown:{displaySettings:{openMethod:{overlayClick:!0}},isSortAvailable:!1,isMoveAvailable:!1},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table\n  columnDropdown=\'{\n    "displaySettings": {\n      "openMethod": {"overlayClick": true}},\n    "isSortAvailable": false,\n    "isMoveAvailable": false\n  }\'\n></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  columnDropdown=\'{\n    "displaySettings": {\n      "openMethod": {"overlayClick": true}},\n    "isSortAvailable": false,\n    "isMoveAvailable": false\n  }\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"maxColumns"},(0,n.kt)("inlineCode",{parentName:"h3"},"maxColumns")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("em",{parentName:"li"},"unset"))),(0,n.kt)("p",null,"Maximum number of columns allowed (not including the index and add columns column)."),(0,n.kt)("h4",{id:"example-4"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{maxColumns:4,content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table maxColumns="4"></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  maxColumns="4"\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"preserveNarrowColumns"},(0,n.kt)("inlineCode",{parentName:"h3"},"preserveNarrowColumns")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("em",{parentName:"li"},"true"))),(0,n.kt)("p",null,"When ",(0,n.kt)("a",{parentName:"p",href:"./table#tableStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"tableStyle"))," is set with a ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"maxWidth")," property to limit its size, the insertion of new columns will\ncause all existing column widths to automatically be reduced to make space for the new ones (except columns set with ",(0,n.kt)("inlineCode",{parentName:"p"},"isColumnResizable")," as ",(0,n.kt)("em",{parentName:"p"},"false"),"\ninside ",(0,n.kt)("a",{parentName:"p",href:"./content#cellStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"cellStyle"))," of the ",(0,n.kt)("a",{parentName:"p",href:"#customColumnsSettings"},(0,n.kt)("inlineCode",{parentName:"a"},"customColumnsSettings"))," object). This can however become problematic when\nexisting column widths eventually become too narrow","*"," and their widths cannot be reduced any further. ",(0,n.kt)("br",null),"\nWhen ",(0,n.kt)("inlineCode",{parentName:"p"},"preserveNarrowColumns")," is ",(0,n.kt)("em",{parentName:"p"},"true")," and column widths are too narrow","*",", the table width will be increased to allow new columns to be inserted. ",(0,n.kt)("br",null),"\nWhen ",(0,n.kt)("inlineCode",{parentName:"p"},"preserveNarrowColumns")," is ",(0,n.kt)("em",{parentName:"p"},"false")," and column widths are too narow","*",", no new columns will be allowed to be inserted.\nset to true by default.",(0,n.kt)("br",null),"\n",(0,n.kt)("em",{parentName:"p"},"*","Minimal column size is recognised as 33px")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example where preset table width of 300px is exceeded")),(0,n.kt)(o.Z,{minHeight:"189",mdxType:"TableContainer"},(0,n.kt)(r.Z,{content:[["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"],["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"]],tableStyle:{width:"300px",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table\n  preserveNarrowColumns="true"\n  tableStyle=\'{"width":"300px"}\'\n  content=\'[\n    ["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"],\n    ["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"]]\'\n></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  content=\'[\n      ["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"],\n      ["1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2","1","2"]]\'\n  tableStyle=\'{"width":"300px", "boxShadow": "rgb(172 172 172 / 17%) 0px 0.5px 1px 0px", "borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please note that when ",(0,n.kt)("a",{parentName:"p",href:"./table#tableStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"tableStyle"))," contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"width")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"maxWidth")," property with a ",(0,n.kt)("em",{parentName:"p"},"%")," or ",(0,n.kt)("em",{parentName:"p"},"vw")," unit and the window width is changed - if columns\ncannot be reduced any further the excess ones will not be removed even if ",(0,n.kt)("inlineCode",{parentName:"p"},"preserveNarrowColumns")," is set to ",(0,n.kt)("em",{parentName:"p"},"false")," to prevent loss of data.")),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"displayAddNewColumn"},(0,n.kt)("inlineCode",{parentName:"h3"},"displayAddNewColumn")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean")),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("em",{parentName:"li"},"true"))),(0,n.kt)("p",null,"A toggle for a clickable '+' column on the right which is used to add new empty columns. ",(0,n.kt)("br",null),"\nYou can set the add new column style via ",(0,n.kt)("a",{parentName:"p",href:"./table#frameComponentsStyles"},(0,n.kt)("inlineCode",{parentName:"a"},"frameComponentsStyles")),"."),(0,n.kt)("h4",{id:"example-5"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{displayAddNewColumn:!0,content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table displayAddNewColumn="true"></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  displayAddNewColumn="true"\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h3",{id:"displayIndexColumn"},(0,n.kt)("inlineCode",{parentName:"h3"},"displayIndexColumn")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean")," | {",(0,n.kt)("inlineCode",{parentName:"li"},"wrapIndexCellText: boolean"),"}"),(0,n.kt)("li",{parentName:"ul"},"Default: ",(0,n.kt)("em",{parentName:"li"},"{wrapIndexCellText: false }"))),(0,n.kt)("p",null,"A toggle for the index column on the left. ",(0,n.kt)("br",null),"\nWhen ",(0,n.kt)("inlineCode",{parentName:"p"},"wrapIndexCellText")," is set to ",(0,n.kt)("em",{parentName:"p"},"true"),", the index column width will be static and any overflowing digits inside its cells will be wrapped within its boundaries. This is\nuseful in a scenario where ",(0,n.kt)("inlineCode",{parentName:"p"},"width"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"maxWidth")," is set within ",(0,n.kt)("a",{parentName:"p",href:"./table#tableStyle"},(0,n.kt)("inlineCode",{parentName:"a"},"tableStyle"))," and the addition of any more columns would cause the width to be breached\ndue to all columns having the mimimal width of ",(0,n.kt)("em",{parentName:"p"},"33px"),". Hence by keeping index column width narrow - more columns can be added without breaching the set ",(0,n.kt)("inlineCode",{parentName:"p"},"width"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"maxWidth"),".\nIf ",(0,n.kt)("inlineCode",{parentName:"p"},"wrapIndexCellText")," is set to ",(0,n.kt)("em",{parentName:"p"},"false")," and ",(0,n.kt)("a",{parentName:"p",href:"#preserveNarrowColumns"},(0,n.kt)("inlineCode",{parentName:"a"},"preserveNarrowColumns"))," is set to ",(0,n.kt)("em",{parentName:"p"},"true")," - if the table width is also about to be breached,\n",(0,n.kt)("inlineCode",{parentName:"p"},"wrapIndexCellText")," will be automatically set to ",(0,n.kt)("em",{parentName:"p"},"true")," and the index width will be set back to the initial width. ",(0,n.kt)("br",null),"\nYou can set the index column style via ",(0,n.kt)("a",{parentName:"p",href:"./table#frameComponentsStyles"},(0,n.kt)("inlineCode",{parentName:"a"},"frameComponentsStyles")),"."),(0,n.kt)("h4",{id:"example-6"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{displayIndexColumn:{wrapIndexCellText:!1},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"<active-table displayIndexColumn='{\"wrapIndexCellText\": false}'></active-table>\n"))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  displayIndexColumn=\'{"wrapIndexCellText": false}\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If ",(0,n.kt)("a",{parentName:"p",href:"./header#dataStartsAtHeader"},(0,n.kt)("inlineCode",{parentName:"a"},"dataStartsAtHeader"))," is ",(0,n.kt)("em",{parentName:"p"},"true"),", the index count will start from the header row, otherwise it will start from the first data row. ",(0,n.kt)("br",null))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that cell unwrapping detection is not supported and once the index column is wrapped via ",(0,n.kt)("inlineCode",{parentName:"p"},"wrapIndexCellText")," it will stay in this\nform for the rest of the session.")),(0,n.kt)(i.Z,{mdxType:"LineBreak"}),(0,n.kt)("h2",{id:"types"},"Types"),(0,n.kt)("p",null,"Shared object property types related to columns:"),(0,n.kt)("h3",{id:"ColumnDropdownSettings"},(0,n.kt)("inlineCode",{parentName:"h3"},"ColumnDropdownSettings")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type: {",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isSortAvailable?: boolean"),",",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isDeleteAvailable?: boolean"),",",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isInsertLeftAvailable?: boolean"),",",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isInsertRightAvailable?: boolean"),",",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isMoveAvailable?: boolean"),(0,n.kt)("br",null),"\n}"),(0,n.kt)("li",{parentName:"ul"},"Default: {",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isSortAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isDeleteAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isInsertLeftAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isInsertRightAvailable: true"),", ",(0,n.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,n.kt)("em",{parentName:"li"},"isMoveAvailable: true")," ",(0,n.kt)("br",null),"\n}")),(0,n.kt)("h4",{id:"example-7"},"Example"),(0,n.kt)(o.Z,{mdxType:"TableContainer"},(0,n.kt)(r.Z,{columnDropdown:{isSortAvailable:!1,isDeleteAvailable:!0,isInsertLeftAvailable:!1,isInsertRightAvailable:!0},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,n.kt)(u.Z,{mdxType:"Tabs"},(0,n.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<active-table\n  columnDropdown=\'{\n    "isSortAvailable": false,\n    "isDeleteAvailable": true,\n    "isInsertLeftAvailable": false,\n    "isInsertRightAvailable": true\n  }\'\n></active-table>\n'))),(0,n.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  columnDropdown=\'{\n    "isSortAvailable": false,\n    "isDeleteAvailable": true,\n    "isInsertLeftAvailable": false,\n    "isInsertRightAvailable": true\n  }\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))))}N.isMDXComponent=!0}}]);