(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(4),l=t.n(o),i=t(0),c=t(2),d=t.n(c),f=t(53),s=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t};e.default=function(n){return i.createElement(f.a,null,(function(e){var t,a=e.getPrefixCls,o=e.direction,c=n.prefixCls,f=n.type,u=void 0===f?"horizontal":f,g=n.orientation,b=void 0===g?"center":g,p=n.className,m=n.children,h=n.dashed,v=n.plain,y=s(n,["prefixCls","type","orientation","className","children","dashed","plain"]),k=a("divider",c),x=b.length>0?"-".concat(b):b,w=!!m,O=d()(k,"".concat(k,"-").concat(u),(t={},l()(t,"".concat(k,"-with-text"),w),l()(t,"".concat(k,"-with-text").concat(x),w),l()(t,"".concat(k,"-dashed"),!!h),l()(t,"".concat(k,"-plain"),!!v),l()(t,"".concat(k,"-rtl"),"rtl"===o),t),p);return i.createElement("div",r()({className:O},y,{role:"separator"}),m&&i.createElement("span",{className:"".concat(k,"-inner-text")},m))}))}},102:function(n,e,t){"use strict";t.r(e);t(35),t(592)},103:function(n,e,t){"use strict";t.r(e);var a=t(4),r=t.n(a),o=t(1),l=t.n(o),i=t(9),c=t.n(i),d=t(0),f=t(2),s=t.n(f),u=t(33),g=t(80),b=t.n(g),p=t(53),m=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},h=function(n){var e,t=n.prefixCls,a=n.className,o=n.checked,i=n.onChange,c=n.onClick,f=m(n,["prefixCls","className","checked","onChange","onClick"]),u=(0,d.useContext(p.b).getPrefixCls)("tag",t),g=s()(u,(e={},r()(e,"".concat(u,"-checkable"),!0),r()(e,"".concat(u,"-checkable-checked"),o),e),a);return d.createElement("span",l()({},f,{className:g,onClick:function(n){i&&i(!o),c&&c(n)}}))},v=t(164),y=t(186),k=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(n);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(n,a[r])&&(t[a[r]]=n[a[r]])}return t},x=new RegExp("^(".concat(v.a.join("|"),")(-inverse)?$")),w=new RegExp("^(".concat(v.b.join("|"),")$")),O=function(n,e){var t,a=n.prefixCls,o=n.className,i=n.style,f=n.children,g=n.icon,m=n.color,h=n.onClose,v=n.closeIcon,O=n.closable,E=void 0!==O&&O,C=k(n,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),z=d.useContext(p.b),F=z.getPrefixCls,X=z.direction,N=d.useState(!0),P=c()(N,2),I=P[0],j=P[1];d.useEffect((function(){"visible"in C&&j(C.visible)}),[C.visible]);var S=function(){return!!m&&(x.test(m)||w.test(m))},U=l()({backgroundColor:m&&!S()?m:void 0},i),_=S(),T=F("tag",a),M=s()(T,(t={},r()(t,"".concat(T,"-").concat(m),_),r()(t,"".concat(T,"-has-color"),m&&!_),r()(t,"".concat(T,"-hidden"),!I),r()(t,"".concat(T,"-rtl"),"rtl"===X),t),o),L=function(n){n.stopPropagation(),h&&h(n),n.defaultPrevented||"visible"in C||j(!1)},R="onClick"in C||f&&"a"===f.type,q=Object(u.a)(C,["visible"]),J=g||null,Y=J?d.createElement(d.Fragment,null,J,d.createElement("span",null,f)):f,$=d.createElement("span",l()({},q,{ref:e,className:M,style:U}),Y,E?v?d.createElement("span",{className:"".concat(T,"-close-icon"),onClick:L},v):d.createElement(b.a,{className:"".concat(T,"-close-icon"),onClick:L}):null);return R?d.createElement(y.a,null,$):$},E=d.forwardRef(O);E.displayName="Tag",E.CheckableTag=h;e.default=E},114:function(n,e,t){"use strict";t.r(e);t(35),t(594)},185:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.deleteUserPermission=e.addUserPermission=e.permissionUserList=e.remove=e.update=e.add=e.allList=e.info=e.list=void 0;var a,r=t(104),o=(a=r)&&a.__esModule?a:{default:a};e.list=function(n){return o.default.get("/admin/contract-template/list",{params:n})},e.info=function(n){return o.default.get("/admin/contract-template/"+n)},e.allList=function(n){return o.default.get("/admin/contract-template/all-list",{params:n})},e.add=function(n){return o.default.post("/admin/contract-template/save",n)},e.update=function(n){return o.default.post("/admin/contract-template/update",n)},e.remove=function(n){return o.default.post("/admin/contract-template/delete/"+n.id)},e.permissionUserList=function(n){return o.default.get("/admin/contract-template/permission/"+n.templateId,{params:n})},e.addUserPermission=function(n){return o.default.post("/admin/contract-template/permission/",n)},e.deleteUserPermission=function(n){return o.default.post("/admin/contract-template/delete-permission",n)}},592:function(n,e,t){var a=t(30),r=t(593);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);n.exports=r.locals||{}},593:function(n,e,t){(e=t(31)(!1)).push([n.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-divider {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  border-top: 1px solid rgba(0, 0, 0, 0.06);\n}\n.ant-divider-vertical {\n  position: relative;\n  top: -0.06em;\n  display: inline-block;\n  height: 0.9em;\n  margin: 0 8px;\n  vertical-align: middle;\n  border-top: 0;\n  border-left: 1px solid rgba(0, 0, 0, 0.06);\n}\n.ant-divider-horizontal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  clear: both;\n  width: 100%;\n  min-width: 100%;\n  margin: 24px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 16px 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  white-space: nowrap;\n  text-align: center;\n  border-top: 0;\n  border-top-color: rgba(0, 0, 0, 0.06);\n}\n.ant-divider-horizontal.ant-divider-with-text::before,\n.ant-divider-horizontal.ant-divider-with-text::after {\n  position: relative;\n  top: 50%;\n  width: 50%;\n  border-top: 1px solid transparent;\n  border-top-color: inherit;\n  border-bottom: 0;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  content: '';\n}\n.ant-divider-horizontal.ant-divider-with-text-left::before {\n  top: 50%;\n  width: 5%;\n}\n.ant-divider-horizontal.ant-divider-with-text-left::after {\n  top: 50%;\n  width: 95%;\n}\n.ant-divider-horizontal.ant-divider-with-text-right::before {\n  top: 50%;\n  width: 95%;\n}\n.ant-divider-horizontal.ant-divider-with-text-right::after {\n  top: 50%;\n  width: 5%;\n}\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 1em;\n}\n.ant-divider-dashed {\n  background: none;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-style: dashed;\n  border-width: 1px 0 0;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {\n  border-top: 0;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::before,\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed::after {\n  border-style: dashed none none;\n}\n.ant-divider-vertical.ant-divider-dashed {\n  border-width: 0 0 0 1px;\n}\n.ant-divider-plain.ant-divider-with-text {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-divider-rtl {\n  direction: rtl;\n}\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::before {\n  width: 95%;\n}\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-left::after {\n  width: 5%;\n}\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::before {\n  width: 5%;\n}\n.ant-divider-rtl.ant-divider-horizontal.ant-divider-with-text-right::after {\n  width: 95%;\n}\n",""]),n.exports=e},594:function(n,e,t){var a=t(30),r=t(595);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);n.exports=r.locals||{}},595:function(n,e,t){(e=t(31)(!1)).push([n.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-tag {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5715;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  display: inline-block;\n  height: auto;\n  margin-right: 8px;\n  padding: 0 7px;\n  font-size: 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  background: #fafafa;\n  border: 1px solid #d9d9d9;\n  border-radius: 2px;\n  opacity: 1;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.ant-tag:hover {\n  opacity: 0.85;\n}\n.ant-tag,\n.ant-tag a,\n.ant-tag a:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-tag > a:first-child:last-child {\n  display: inline-block;\n  margin: 0 -8px;\n  padding: 0 8px;\n}\n.ant-tag-close-icon {\n  margin-left: 3px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 10px;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.ant-tag-close-icon:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-tag-has-color {\n  border-color: transparent;\n}\n.ant-tag-has-color,\n.ant-tag-has-color a,\n.ant-tag-has-color a:hover,\n.ant-tag-has-color .anticon-close,\n.ant-tag-has-color .anticon-close:hover {\n  color: #fff;\n}\n.ant-tag-checkable {\n  background-color: transparent;\n  border-color: transparent;\n  cursor: pointer;\n}\n.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {\n  color: #1890ff;\n}\n.ant-tag-checkable:active,\n.ant-tag-checkable-checked {\n  color: #fff;\n}\n.ant-tag-checkable-checked {\n  background-color: #1890ff;\n}\n.ant-tag-checkable:active {\n  background-color: #096dd9;\n}\n.ant-tag-hidden {\n  display: none;\n}\n.ant-tag-pink {\n  color: #eb2f96;\n  background: #fff0f6;\n  border-color: #ffadd2;\n}\n.ant-tag-pink-inverse {\n  color: #fff;\n  background: #eb2f96;\n  border-color: #eb2f96;\n}\n.ant-tag-magenta {\n  color: #eb2f96;\n  background: #fff0f6;\n  border-color: #ffadd2;\n}\n.ant-tag-magenta-inverse {\n  color: #fff;\n  background: #eb2f96;\n  border-color: #eb2f96;\n}\n.ant-tag-red {\n  color: #f5222d;\n  background: #fff1f0;\n  border-color: #ffa39e;\n}\n.ant-tag-red-inverse {\n  color: #fff;\n  background: #f5222d;\n  border-color: #f5222d;\n}\n.ant-tag-volcano {\n  color: #fa541c;\n  background: #fff2e8;\n  border-color: #ffbb96;\n}\n.ant-tag-volcano-inverse {\n  color: #fff;\n  background: #fa541c;\n  border-color: #fa541c;\n}\n.ant-tag-orange {\n  color: #fa8c16;\n  background: #fff7e6;\n  border-color: #ffd591;\n}\n.ant-tag-orange-inverse {\n  color: #fff;\n  background: #fa8c16;\n  border-color: #fa8c16;\n}\n.ant-tag-yellow {\n  color: #fadb14;\n  background: #feffe6;\n  border-color: #fffb8f;\n}\n.ant-tag-yellow-inverse {\n  color: #fff;\n  background: #fadb14;\n  border-color: #fadb14;\n}\n.ant-tag-gold {\n  color: #faad14;\n  background: #fffbe6;\n  border-color: #ffe58f;\n}\n.ant-tag-gold-inverse {\n  color: #fff;\n  background: #faad14;\n  border-color: #faad14;\n}\n.ant-tag-cyan {\n  color: #13c2c2;\n  background: #e6fffb;\n  border-color: #87e8de;\n}\n.ant-tag-cyan-inverse {\n  color: #fff;\n  background: #13c2c2;\n  border-color: #13c2c2;\n}\n.ant-tag-lime {\n  color: #a0d911;\n  background: #fcffe6;\n  border-color: #eaff8f;\n}\n.ant-tag-lime-inverse {\n  color: #fff;\n  background: #a0d911;\n  border-color: #a0d911;\n}\n.ant-tag-green {\n  color: #52c41a;\n  background: #f6ffed;\n  border-color: #b7eb8f;\n}\n.ant-tag-green-inverse {\n  color: #fff;\n  background: #52c41a;\n  border-color: #52c41a;\n}\n.ant-tag-blue {\n  color: #1890ff;\n  background: #e6f7ff;\n  border-color: #91d5ff;\n}\n.ant-tag-blue-inverse {\n  color: #fff;\n  background: #1890ff;\n  border-color: #1890ff;\n}\n.ant-tag-geekblue {\n  color: #2f54eb;\n  background: #f0f5ff;\n  border-color: #adc6ff;\n}\n.ant-tag-geekblue-inverse {\n  color: #fff;\n  background: #2f54eb;\n  border-color: #2f54eb;\n}\n.ant-tag-purple {\n  color: #722ed1;\n  background: #f9f0ff;\n  border-color: #d3adf7;\n}\n.ant-tag-purple-inverse {\n  color: #fff;\n  background: #722ed1;\n  border-color: #722ed1;\n}\n.ant-tag-success {\n  color: #52c41a;\n  background: #f6ffed;\n  border-color: #b7eb8f;\n}\n.ant-tag-processing {\n  color: #1890ff;\n  background: #e6f7ff;\n  border-color: #91d5ff;\n}\n.ant-tag-error {\n  color: #f5222d;\n  background: #fff1f0;\n  border-color: #ffa39e;\n}\n.ant-tag-warning {\n  color: #fa8c16;\n  background: #fff7e6;\n  border-color: #ffd591;\n}\n.ant-tag > .anticon + span,\n.ant-tag > span + .anticon {\n  margin-left: 7px;\n}\n.ant-tag.ant-tag-rtl {\n  margin-right: 0;\n  margin-left: 8px;\n  direction: rtl;\n  text-align: right;\n}\n.ant-tag-rtl .ant-tag-close-icon {\n  margin-right: 3px;\n  margin-left: 0;\n}\n.ant-tag-rtl.ant-tag > .anticon + span,\n.ant-tag-rtl.ant-tag > span + .anticon {\n  margin-right: 7px;\n  margin-left: 0;\n}\n",""]),n.exports=e},692:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=v(t(88)),r=v(t(90)),o=v(t(73)),l=v(t(60)),i=v(t(101)),c=v(t(32)),d=v(t(103)),f=v(t(56)),s=v(t(66)),u=v(t(55)),g=v(t(51));t(89),t(129),t(72),t(59),t(102),t(46),t(114),t(65),t(64);var b=t(0),p=v(b),m=t(185),h=t(115);function v(n){return n&&n.__esModule?n:{default:n}}e.default=function(n){var e=n.location,t=(n.match,n.history),v=(0,h.useMappedState)((0,b.useCallback)((function(n){return{userInfo:n.userInfo}}),[])).userInfo,y=(0,b.useState)([]),k=(0,g.default)(y,2),x=k[0],w=k[1],O=(0,b.useState)({pageNum:1,pageSize:10,total:0,fetch:!1,name:"",createUser:"",status:null}),E=(0,g.default)(O,2),C=E[0],z=E[1],F=(0,b.useState)(!1),X=(0,g.default)(F,2),N=X[0],P=X[1];(0,b.useEffect)((function(){I()}),[]),(0,b.useEffect)((function(){I()}),[e]),(0,b.useEffect)((function(){C.fetch&&I()}),[C]);var I=function(){P(!0),(0,m.list)(C).then((function(n){w(n.data),z((0,u.default)({},C,{total:n.total,fetch:!1}))})).catch((function(n){console.error(n)})).finally((function(){P(!1)}))},j=[{title:"序号",align:"center",dataIndex:"id",key:"id"},{title:"模板名称",align:"center",dataIndex:"name",key:"name"},{title:"状态",align:"center",dataIndex:"status",key:"status",render:function(n){switch(n){case 1:return p.default.createElement(d.default,{color:"green",key:"F1XO11"},"可用");case 2:return p.default.createElement(d.default,{color:"red",key:"F1XO12"},"不可用")}}},{title:"创建人",align:"center",dataIndex:"createUser",key:"createUser"},{title:"创建时间",align:"center",dataIndex:"createTime",key:"createTime"},{title:"操作",align:"center",width:"20%",render:function(n,e){return p.default.createElement("div",{key:"F1XO21"},p.default.createElement(c.default,{type:"primary",disabled:!v.admin&&e.createUser!==v.username,onClick:function(){t.push({pathname:"/system/contract-template/create",query:(0,u.default)({},e)})},key:"F1XO31"},"编辑"),p.default.createElement(i.default,{type:"vertical",key:"F1XO41"}),p.default.createElement(c.default,{disabled:!v.admin&&e.createUser!==v.username,type:"danger",onClick:function(){var n;n=e,s.default.confirm({title:"删除",content:"确认删除"+n.id+" ?",okText:"确认",cancelText:"取消",onOk:function(){(0,m.remove)(n).then((function(n){f.default.success({message:"删除成功",duration:3}),z((0,u.default)({},C,{fetch:!0}))}))}})},key:"F1XO32"},"删除"))}}];return p.default.createElement("div",{className:"contractTemplate-contain",key:"F1XO22"},p.default.createElement("div",{className:"contractTemplate-contain-search",style:{marginBottom:10},key:"F1XO23"},p.default.createElement(o.default,{name:"horizontal_login",layout:"inline",key:"F1XO51"},p.default.createElement(o.default.Item,{key:"F1XO61"},p.default.createElement(l.default,{value:C.name,onChange:function(n){z((0,u.default)({},C,{name:n.target.value,fetch:!1}))},placeholder:"模板名称",onPressEnter:function(){return z((0,u.default)({},C,{pageNum:1,fetch:!0}))},key:"F1XO71"})),p.default.createElement(o.default.Item,{key:"F1XO62"},p.default.createElement(l.default,{value:C.createUser,onChange:function(n){z((0,u.default)({},C,{createUser:n.target.value,fetch:!1}))},placeholder:"创建人",onPressEnter:function(){return z((0,u.default)({},C,{pageNum:1,fetch:!0}))},key:"F1XO72"})),p.default.createElement(o.default.Item,{key:"F1XO63"},p.default.createElement(r.default,{style:{width:150},allowClear:!0,placeholder:"状态",value:C.status,onChange:function(n){z((0,u.default)({},C,{status:n,fetch:!0}))},key:"F1XO81"},p.default.createElement(r.default.Option,{value:1,key:"F1XO64"},"可用"),p.default.createElement(r.default.Option,{value:2,key:"F1XO65"},"不可用"))),p.default.createElement(o.default.Item,{key:"F1XO66"},p.default.createElement(c.default,{type:"primary",onClick:function(){z((0,u.default)({},C,{pageNum:1,fetch:!0}))},key:"F1XO33"},"查询")),p.default.createElement(o.default.Item,{key:"F1XO67"},p.default.createElement(c.default,{type:"primary",onClick:function(){t.push({pathname:"/system/contract-template/create",query:{id:null}})},key:"F1XO34"},"添加")))),p.default.createElement("div",{className:"contractTemplate-contain-content",key:"F1XO24"},p.default.createElement(a.default,{rowKey:"id",loading:N,dataSource:x,columns:j,pagination:{current:C.pageNum,pageSize:C.pageSize,total:C.total,showSizeChanger:!1,onChange:function(n){z((0,u.default)({},C,{pageNum:n,fetch:!0}))}},key:"F1XO91"})))}}}]);