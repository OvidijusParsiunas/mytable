"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[242],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(o.tabItem,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(7462),l=a(7294),o=a(6010),r=a(2466),s=a(6550),i=a(1980),u=a(7392),d=a(12);function c(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[r,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:a,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??c;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==s&&(c(t),i(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:m},r,{className:(0,o.Z)("tabs__item",y.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=b(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function k(e){const t=(0,f.Z)();return l.createElement(C,(0,n.Z)({key:String(t)},e))}},9814:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(){return n.createElement("div",{style:{height:"1px"}})}},1853:(e,t,a)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function l(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];n(t),window.toggleNavOnScroll=n.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function o(){setTimeout((()=>{var e;const t=null==(e=document.querySelectorAll(".plugin-pages > body > #__docusaurus > nav"))?void 0:e[0];try{t.classList.add("fade-in")}catch(a){console.error(a),console.log("element was not rendered in time - use MutationObserver")}}),2)}a.r(t),a.d(t,{fadeIn:()=>o,readdAutoNavShadowToggle:()=>l})},9272:(e,t,a)=>{a.d(t,{Z:()=>o,v:()=>l});var n=a(7294);function l(e){var t;return null==e||null==(t=e.children[0])?void 0:t.children[0]}function o(e){let{children:t,minHeight:a}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||343}px`}},n.createElement("div",null,t))}},7300:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(9272),l=a(7294);function o(e){null!=e&&e.isConnected&&setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let n="";n=1===a||2===a?"$"+Math.round(1e3*Math.random()*10)/100:3===a?(Math.round(Math.random())?1:-1)*Math.round(1.5*Math.random()*10)/10+"%":Math.round(2.5*Math.random()*10)/10+"%",e.updateCell({newText:n,rowIndex:t,columnIndex:a}),o(e)}),10)}function r(e){null!=e&&e.isConnected&&setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let n="";n=1===a?Math.round(20*Math.random()*10)/10+"%":2===a?Math.round(1500*Math.random()*10)/10+"MB":3===a?Math.round(1.5*Math.random()*10)/10+"MB/s":Math.round(1.5*Math.random()*10)/10+"Mbps",null==e||e.updateCell({newText:n,rowIndex:t,columnIndex:a}),r(e)}),40)}function s(e){let{children:t,isStock:a,minHeight:s}=e;const i=l.useRef(null);return setTimeout((()=>{if(i.current){const e=a?o:r;setTimeout((()=>{var t;const a=(0,n.v)(null==(t=i.current)?void 0:t.children[0]);e(a)}))}})),l.createElement("div",{ref:i},l.createElement(n.Z,{minHeight:s},t))}},8219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>h,metadata:()=>f,toc:()=>g});var n=a(7462),l=a(7294),o=a(3905),r=a(7300),s=a(4336);function i(e){let{isDisplayed:t,children:a}=e;return t?l.createElement("div",null,a):l.createElement("div",null)}function u(e){let{children:t}=e;const[a,n]=l.useState(!1);return l.createElement("div",null,l.createElement("div",{className:"code-toggle",onClick:()=>n(!a)},a?"Hide":"View"," Code"),l.createElement(i,{isDisplayed:a},t))}var d=a(9272),c=a(9814),m=a(1262),p=a(5162);a(4866);const h={sidebar_position:0},b="Design",f={unversionedId:"examples/design",id:"examples/design",title:"Design",description:"Basic examples to help you get started with Active Table.",source:"@site/docs/examples/design.mdx",sourceDirName:"examples",slug:"/examples/design",permalink:"/examples/design",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/active-table/tree/main/website/docs/examples/design.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"examples",next:{title:"Frameworks",permalink:"/examples/frameworks"}},y={},g=[{value:"Unique column types",id:"uniqueColumnTypes",level:3},{value:"Not editable",id:"notEditable",level:3},{value:"Dark theme",id:"darkTheme",level:3},{value:"Dynamic updates",id:"dynamicUpdates",level:3}],v={toc:g},C="wrapper";function k(e){let{components:t,...l}=e;return(0,o.kt)(C,(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design"},"Design"),(0,o.kt)("p",null,"Basic examples to help you get started with Active Table."),(0,o.kt)("h3",{id:"uniqueColumnTypes"},"Unique column types"),(0,o.kt)("p",null,"This example makes use of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/column#customColumnsSettings"},(0,o.kt)("inlineCode",{parentName:"a"},"customColumnsSettings"))," property to set static types for individual columns. The ",(0,o.kt)("em",{parentName:"p"},"Date Created"),"\ncolumn has two available date formats."),(0,o.kt)(m.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,o.kt)(d.Z,{mdxType:"TableContainer"},(0,o.kt)(s.Z,{customColumnsSettings:[{headerName:"Planet",availableDefaultColumnTypes:["text"]},{headerName:"Age",availableDefaultColumnTypes:["Number"]},{headerName:"Shape",availableDefaultColumnTypes:["Select"]},{headerName:"Date Created",defaultColumnTypeName:"Date d-m-y",availableDefaultColumnTypes:["Date d-m-y","Date m-d-y"]}],content:[["Planet","Age","Shape","Date Created"],["Earth",12756,"Sphere","01-02-2012"],["Mars",6792,"Dinosaur","14-05-1990"],["Jupiter",142984,"Triangle","04-12-2020"],["Saturn",120536,"Square","23-10-2008"],["Neptune",49528,"Flat","19-02-2006"]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,o.kt)(u,{mdxType:"CodeToggle"},(0,o.kt)(p.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<active-table\n  customColumnsSettings=\'[\n    {"headerName": "Planet", "availableDefaultColumnTypes": ["Text"]},\n    {"headerName": "Number", "availableDefaultColumnTypes": ["Number"]},\n    {"headerName": "Shape", "availableDefaultColumnTypes": ["Select"]},\n    {"headerName": "Date Created", "defaultColumnTypeName": "Date d-m-y", "availableDefaultColumnTypes": ["Date d-m-y", "Date m-d-y"]}\n  ]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n  content=\'[\n    ["Planet", "Age", "Shape", "Date Created"],\n    ["Earth", 12756, "Sphere", "01-02-2012"],\n    ["Mars", 6792, "Dinosaur", "14-05-1990"],\n    ["Jupiter", 142984, "Triangle", "04-12-2020"],\n    ["Saturn", 120536, "Square", "23-10-2008"],\n    ["Neptune", 49528, "Flat", "19-02-2006"]]\'\n></active-table>\n')))),(0,o.kt)(c.Z,{mdxType:"LineBreak"}),(0,o.kt)("h3",{id:"notEditable"},"Not editable"),(0,o.kt)("p",null,"Data in this table cannot be changed."),(0,o.kt)(d.Z,{minHeight:"301",mdxType:"TableContainer"},(0,o.kt)(s.Z,{isCellTextEditable:!1,displayAddNewColumn:!1,displayAddNewRow:!1,columnDropdown:{displaySettings:{isAvailable:!1}},rowDropdown:{displaySettings:{isAvailable:!1}},frameComponentsStyles:{style:{hoverColors:{backgroundColor:"white"}}},headerStyles:{hoverColors:{backgroundColor:"white"}},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,o.kt)(u,{mdxType:"CodeToggle"},(0,o.kt)(p.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<active-table\n  isCellTextEditable="false"\n  displayAddNewColumn="false"\n  displayAddNewRow="false"\n  columnDropdown=\'{"displaySettings": {"isAvailable": false}}\'\n  rowDropdown=\'{"displaySettings": {"isAvailable": false}}\'\n  frameComponentsStyles=\'{"style": {"hoverColors": {"backgroundColor": "white"}}}\'\n  headerStyles=\'{"hoverColors": {"backgroundColor": "white"}}\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons","Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n></active-table>\n')))),(0,o.kt)(c.Z,{mdxType:"LineBreak"}),(0,o.kt)("h3",{id:"darkTheme"},"Dark theme"),(0,o.kt)("p",null,"Table configuration for a dark design."),(0,o.kt)(d.Z,{minHeight:"341",mdxType:"TableContainer"},(0,o.kt)(s.Z,{tableStyle:{width:"100%",borderRadius:"5px",border:"unset",backgroundColor:"black"},cellStyle:{color:"white",borderRight:"1px solid #00000029"},columnResizerColors:{click:"#727272"},stripedRows:{odd:{backgroundColor:"#4f4f4f"},even:{backgroundColor:"#373737"}},headerIconStyle:{filterColor:"brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(6%) hue-rotate(76deg) brightness(100%) contrast(104%)"},headerStyles:{default:{backgroundColor:"#2d2d2d"},hoverColors:{backgroundColor:"#353535"}},frameComponentsStyles:{style:{hoverColors:{backgroundColor:"#5f5f5f"}},inheritHeaderColors:!0},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],mdxType:"ActiveTable"})),(0,o.kt)(u,{mdxType:"CodeToggle"},(0,o.kt)(p.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Frameworks) --\x3e\n\n<active-table\n  tableStyle=\'{"borderRadius": "5px", "border": "unset", "backgroundColor": "black"}\'\n  cellStyle=\'{"color": "white", "borderRight": "1px solid #00000029"}\'\n  columnResizerColors=\'{"click": "#727272"}\'\n  stripedRows=\'{"odd": {"backgroundColor": "#4f4f4f"}, "even": {"backgroundColor": "#373737"}}\'\n  headerStyles=\'{"default": {"backgroundColor": "#2d2d2d"}, "hoverColors": {"backgroundColor": "#353535"}}\'\n  headerIconStyle=\'{\n    "filterColor": "brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(6%) hue-rotate(76deg) brightness(100%) contrast(104%)"\n  }\'\n  frameComponentsStyles=\'{\n    "style": {"hoverColors": {"backgroundColor": "#5f5f5f"}},\n    "inheritHeaderColors": true\n  }\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n></active-table>\n')))),(0,o.kt)(c.Z,{mdxType:"LineBreak"}),(0,o.kt)("h3",{id:"dynamicUpdates"},"Dynamic updates"),(0,o.kt)("p",null,"The programmatic cell update functionality is provided by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/methods#updateCell"},(0,o.kt)("inlineCode",{parentName:"a"},"updateCell"))," method that exists on the component element reference.\nThe example additionally makes use of properties like ",(0,o.kt)("a",{parentName:"p",href:"/docs/column#customColumnsSettings"},(0,o.kt)("inlineCode",{parentName:"a"},"customColumnsSettings"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/row#stripedRows"},(0,o.kt)("inlineCode",{parentName:"a"},"stripedRows")),"\nto set a stock related look. Whilst all of the columns are set to not be editable, the ",(0,o.kt)("em",{parentName:"p"},"Stock")," column allows its data to be changed and its rows to be sorted."),(0,o.kt)(r.Z,{isStock:!0,minHeight:"300",mdxType:"TableContainerProgrammaticUpdates"},(0,o.kt)(s.Z,{customColumnsSettings:[{headerName:"Stock",isCellTextEditable:!0,columnDropdown:{isSortAvailable:!0}},{headerName:"Current",availableDefaultColumnTypes:["Currency"],cellStyle:{fontWeight:"500"}},{headerName:"Last",cellStyle:{fontWeight:"500",color:"grey"},headerStyles:{default:{color:"#575757"}},availableDefaultColumnTypes:["Currency"]},{headerName:"Change",defaultColumnTypeName:"Change",cellStyle:{fontWeight:"500"},customColumnTypes:[{name:"Change",customTextProcessing:{changeStyleFunc:e=>({color:Number.parseFloat(e)>=0?"green":"red"})}}]}],displayIndexColumn:!1,displayAddNewColumn:!1,displayAddNewRow:!1,stripedRows:{odd:{backgroundColor:""},even:{backgroundColor:"#eeeeee7a"}},cellStyle:{paddingLeft:"10px"},isCellTextEditable:!1,availableDefaultColumnTypes:[],columnDropdown:{displaySettings:{openMethod:{overlayClick:!0}},isSortAvailable:!1,isDeleteAvailable:!1,isInsertLeftAvailable:!1,isInsertRightAvailable:!1,isMoveAvailable:!1},rowDropdown:{displaySettings:{isAvailable:!1}},displayHeaderIcons:!1,content:[["Stock","Current","Last","Change","Yield"],["JPA","$88.22","$85.73","-0.1%","1.4%"],["REFR","$18.52","$88","1.5%","0.4%"],["CORA","$69.08","$84.46","0%","1.6%"],["SOR","$46.84","$48.69","0.9%","2.4%"],["LCRDA","$20.25","$29.3","0.4%","0.8%"]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,o.kt)(u,{mdxType:"CodeToggle"},(0,o.kt)(p.Z,{value:"js",label:"Show code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  id="active-table"\n  customColumnsSettings=\'[\n    {\n      "headerName": "Stock",\n      "isCellTextEditable": true,\n      "columnDropdown": {"isSortAvailable": true}\n    },\n    {\n      "headerName": "Current",\n      "availableDefaultColumnTypes": ["Currency"],\n      "cellStyle": {"fontWeight": "500"}\n    },\n    {\n      "headerName": "Last",\n      "cellStyle": {"fontWeight": "500", "color": "grey"},\n      "headerStyles": {"default": {"color": "#575757"}},\n      "availableDefaultColumnTypes": ["Currency"]\n    },\n    {\n      "headerName": "Change",\n      "defaultColumnTypeName": "Change",\n      "cellStyle": {"fontWeight": "500"},\n      "customColumnTypes": [\n        {\n          "name": "Change",\n          "customTextProcessing": {\n            "changeStyleFunc": "(cellText) => { const percentageNumber = Number.parseFloat(cellText); return {color: percentageNumber >= 0 ? `green` : `red`}; }"\n          }\n        }\n      ]\n    }\n  ]\'\n  stripedRows=\'{"odd": {"backgroundColor": ""}, "even": {"backgroundColor": "#eeeeee7a"}}\'\'\n  cellStyle=\'{"paddingLeft": "10px"}\'\n  isCellTextEditable="false"\n  availableDefaultColumnTypes=\'[]\'\n  columnDropdown=\'{\n    "displaySettings": {"openMethod": {"overlayClick": true}},\n    "isSortAvailable": false,\n    "isDeleteAvailable": false,\n    "isInsertLeftAvailable": false,\n    "isInsertRightAvailable": false,\n    "isMoveAvailable": false\n  }\'\n  rowDropdown=\'{"displaySettings": {"isAvailable": false}}\'\n  displayIndexColumn="false"\n  displayAddNewColumn="false"\n  displayAddNewRow="false"\n  displayHeaderIcons="false"\n  tableStyle=\'{"borderRadius":"2px"}\'\n  content=\'[\n    ["Stock", "Current", "Last", "Change", "Yield"],\n    ["JPA", "$88.22", "$85.73", "-0.1%", "1.4%"],\n    ["REFR", "$18.52", "$88", "1.5%", "0.4%"],\n    ["CORA", "$69.08", "$84.46", "0%", "1.6%"],\n    ["SOR", "$46.84", "$48.69", "0.9%", "2.4%"],\n    ["LCRDA", "$20.25", "$29.3", "0.4%", "0.8%"]\n  ]\'\n></active-table>\n\n<script>\n  function updateCell(tableElement) {\n    if (!tableElement.isConnected) return;\n    setTimeout(() => {\n      const rowIndex = Math.floor(Math.random() * 5 + 1);\n      const columnIndex = Math.floor(Math.random() * 5 + 1);\n      let newText = \'\';\n      if (columnIndex === 1) {\n        newText = `$${Math.round(Math.random() * 1000 * 10) / 100}`;\n      } else if (columnIndex === 2) {\n        newText = `$${Math.round(Math.random() * 1000 * 10) / 100}`;\n      } else if (columnIndex === 3) {\n        newText = `${((Math.round(Math.random()) ? 1 : -1) * Math.round(Math.random() * 1.5 * 10)) / 10}%`;\n      } else {\n        newText = `${Math.round(Math.random() * 2.5 * 10) / 10}%`;\n      }\n      tableElement.updateCell({newText, rowIndex, columnIndex});\n      updateCell(tableElement);\n    }, 10);\n  }\n  const tableElementRef = document.getElementById(\'active-table\');\n  updateCell(tableElementRef);\n<\/script>\n')))))}k.isMDXComponent=!0}}]);