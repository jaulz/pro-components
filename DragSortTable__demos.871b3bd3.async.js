"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[5353],{96913:function(Y,D,e){var O=e(64769),y=e(50959),I=e(83919),R=e(88081),C=function(A,K){return y.createElement(R.Z,(0,O.Z)((0,O.Z)({},A),{},{ref:K,icon:I.Z}))};C.displayName="MenuOutlined",D.Z=y.forwardRef(C)},37914:function(Y,D,e){e.r(D);var O=e(54306),y=e.n(O),I=e(57213),R=e.n(I),C=e(25359),n=e.n(C),A=e(49811),K=e.n(A),V=e(96913),f=e(32130),B=e(49302),L=e(50959),_=e(11527),E=[{key:"key1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",index:0},{key:"key2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",index:1},{key:"key3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",index:2}],W=function(){var S=K()(n()().mark(function l(){var h,v=arguments;return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return h=v.length>0&&v[0]!==void 0?v[0]:1e3,T.abrupt("return",new Promise(function(w){return setTimeout(function(){return w(void 0)},h)}));case 2:case"end":return T.stop()}},l)}));return function(){return S.apply(this,arguments)}}(),z=E.map(function(S){return R()(R()({},S),{},{name:"[remote data] ".concat(S.name)})}),q=function(){var S=K()(n()().mark(function l(){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,W(3e3);case 2:return v.abrupt("return",{data:z,total:z.length,success:!0});case 3:case"end":return v.stop()}},l)}));return function(){return S.apply(this,arguments)}}();D.default=function(){var S=[{title:"\u6392\u5E8F",dataIndex:"sort",render:function(m,P,de){return(0,_.jsx)("span",{className:"customRender",children:"\u81EA\u5B9A\u4E49Render[".concat(P.name,"-").concat(de,"]")})}},{title:"\u59D3\u540D",dataIndex:"name",className:"drag-visible"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"}],l=[{title:"\u6392\u5E8F",dataIndex:"sort"},{title:"\u59D3\u540D",dataIndex:"name",className:"drag-visible"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"}],h=(0,L.useRef)(),v=(0,L.useState)(E),o=y()(v,2),T=o[0],w=o[1],X=(0,L.useState)(E),Q=y()(X,2),ee=Q[0],ne=Q[1],ae=function(m){console.log("\u6392\u5E8F\u540E\u7684\u6570\u636E",m),w(m),B.ZP.success("\u4FEE\u6539\u5217\u8868\u6392\u5E8F\u6210\u529F")},re=function(m){console.log("\u6392\u5E8F\u540E\u7684\u6570\u636E",m),ne(m),B.ZP.success("\u4FEE\u6539\u5217\u8868\u6392\u5E8F\u6210\u529F")},te=function(m){var P;console.log("\u6392\u5E8F\u540E\u7684\u6570\u636E",m),z=m,(P=h.current)===null||P===void 0||P.reload(),B.ZP.success("\u4FEE\u6539\u5217\u8868\u6392\u5E8F\u6210\u529F")},oe=function(m,P){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(V.Z,{style:{cursor:"grab",color:"gold"}}),"\xA0",P+1," - ",m.name]})};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f.Z,{headerTitle:"\u62D6\u62FD\u6392\u5E8F(\u9ED8\u8BA4\u628A\u624B)",columns:S,rowKey:"key",pagination:!1,dataSource:T,dragSortKey:"sort",onDragSortEnd:ae}),(0,_.jsx)(f.Z,{headerTitle:"\u62D6\u62FD\u6392\u5E8F(\u81EA\u5B9A\u4E49\u628A\u624B)",columns:l,rowKey:"index",search:!1,pagination:!1,dataSource:ee,dragSortKey:"sort",dragSortHandlerRender:oe,onDragSortEnd:re}),(0,_.jsx)(f.Z,{actionRef:h,headerTitle:"\u4F7F\u7528 request \u83B7\u53D6\u6570\u636E\u6E90",columns:l,rowKey:"index",search:!1,pagination:!1,request:q,dragSortKey:"sort",onDragSortEnd:te})]})}},53984:function(Y,D,e){e.r(D);var O=e(54306),y=e.n(O),I=e(32130),R=e(49302),C=e(50959),n=e(11527),A=[{title:"\u6392\u5E8F",dataIndex:"sort",width:60,className:"drag-visible"},{title:"\u59D3\u540D",dataIndex:"name",className:"drag-visible"},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"\u5730\u5740",dataIndex:"address"}],K=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",index:0},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",index:1},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",index:2}];D.default=function(){var V=(0,C.useState)(K),f=y()(V,2),B=f[0],L=f[1],_=function(W){console.log("\u6392\u5E8F\u540E\u7684\u6570\u636E",W),L(W),R.ZP.success("\u4FEE\u6539\u5217\u8868\u6392\u5E8F\u6210\u529F")};return(0,n.jsx)(I.Z,{headerTitle:"\u62D6\u62FD\u6392\u5E8F(\u9ED8\u8BA4\u628A\u624B)",columns:A,rowKey:"key",pagination:!1,dataSource:B,dragSortKey:"sort",onDragSortEnd:_})}},32130:function(Y,D,e){e.d(D,{Z:function(){return ie}});var O=e(25359),y=e.n(O),I=e(49811),R=e.n(I),C=e(57213),n=e.n(C),A=e(54306),K=e.n(A),V=e(12342),f=e.n(V),B=e(89486),L=e(61447),_=e(44797),E=e(50959),W=e(27753),z=e(65854),q=e.n(z),S=e(24627),l=e(43089),h=e(79897),v=e(84341),o=e(11527),T=["DragHandle","dragSortKey"],w=["dragSortKey"],X=(0,E.createContext)({handle:null}),Q=function(r){var u=(0,h.nB)({id:r.id}),g=u.attributes,x=u.listeners,U=u.setNodeRef,Z=u.transform,$=u.transition,F=n()({transform:v.ux.Transform.toString(Z),transition:$},r==null?void 0:r.style),p=r.DragHandle,j=r.dragSortKey,M=f()(r,T);if(j){var i=[];return E.Children.forEach(M.children,function(t,c){if(t.key===j){var d,b;i.push((0,o.jsx)(X.Provider,{value:{handle:(0,o.jsx)(p,n()(n()({rowData:t==null||(d=t.props)===null||d===void 0?void 0:d.record,index:t==null||(b=t.props)===null||b===void 0?void 0:b.index},x),g))},children:t},t.key||c));return}i.push(t)}),(0,o.jsx)("tr",n()(n()({},M),{},{ref:U,style:F,children:i}))}return(0,o.jsx)("tr",n()(n()(n()({},M),{},{ref:U,style:F},g),x))},ee=E.memo(function(a){var r=a.dragSortKey,u=f()(a,w),g=(0,E.useContext)(X),x=g.handle;return x?(0,o.jsx)("td",n()(n()({},u),{},{children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[x," ",u.children]})})):(0,o.jsx)("td",n()({},u))}),ne=function(r){return(0,o.jsx)("tbody",n()({},r))};function ae(a){var r=a.dataSource,u=r===void 0?[]:r,g=a.onDragSortEnd,x=a.DragHandle,U=a.dragSortKey,Z=(0,l.Dy)((0,l.VT)(l.we),(0,l.VT)(l.MA));function $(i){var t,c=i.active,d=i.over;if(d!=null&&(t=d.id)!==null&&t!==void 0&&t.toString()&&c.id!==(d==null?void 0:d.id)){var b=(0,h.Rp)(u||[],parseInt(c.id),parseInt(d.id));g==null||g(b||[])}}var F=(0,S.J)(function(i){return(0,o.jsx)(h.Fo,{items:u.map(function(t,c){return c==null?void 0:c.toString()}),strategy:h.qw,children:(0,o.jsx)(ne,n()({},i))})}),p=(0,S.J)(function(i){var t,c=Object.assign({},(q()(i),i)),d=(t=u.findIndex(function(b){var H;return b[(H=a.rowKey)!==null&&H!==void 0?H:"index"]===c["data-row-key"]}))===null||t===void 0?void 0:t.toString();return(0,o.jsx)(Q,n()({id:d,dragSortKey:U,DragHandle:x},c),d)}),j=a.components||{};if(U){var M;j.body=n()(n()({},((M=a.components)===null||M===void 0?void 0:M.body)||{}),{},{wrapper:F,row:p,cell:ee})}return{DndContext:function(t){return(0,o.jsx)(l.LB,{sensors:Z,collisionDetection:l.pE,onDragEnd:$,children:t.children})},components:j}}var re=e(52510),te=e.n(re),oe=e(33698),N=function(r){return te()({},r.componentCls,{"&-icon":{marginInlineEnd:8,color:r.colorTextSecondary,cursor:"grab !important",padding:4,fontSize:12,borderRadius:r.borderRadius,"&:hover":{color:r.colorText,backgroundColor:r.colorInfoBg}}})};function m(a){return(0,oe.Xj)("DragSortTable",function(r){var u=n()(n()({},r),{},{componentCls:".".concat(a)});return[N(u)]})}var P=["rowKey","dragSortKey","dragSortHandlerRender","onDragSortEnd","onDataSourceChange","defaultData","dataSource","onLoad"],de=["rowData","index","className"];function le(a){var r,u=a.rowKey,g=a.dragSortKey,x=a.dragSortHandlerRender,U=a.onDragSortEnd,Z=a.onDataSourceChange,$=a.defaultData,F=a.dataSource,p=a.onLoad,j=f()(a,P),M=(0,E.useContext)(L.ZP.ConfigContext),i=M.getPrefixCls,t=(0,_.Z)(function(){return $||[]},{value:F,onChange:Z}),c=K()(t,2),d=c[0],b=c[1],H=m(i("pro-table-drag")),ce=H.wrapSSR,_e=H.hashId,ve=(0,E.useMemo)(function(){return function(s){var k=s.rowData,J=s.index,ue=s.className,G=f()(s,de),fe=(0,o.jsx)(B.Z,n()(n()({},G),{},{className:"".concat(i("pro-table-drag-icon")," ").concat(ue||""," ").concat(_e||"").trim()})),Ee=x?x(s==null?void 0:s.rowData,s==null?void 0:s.index):fe;return(0,o.jsx)(o.Fragment,{children:Ee})}},[i]),se=ae({dataSource:d==null?void 0:d.slice(),dragSortKey:g,onDragSortEnd:U,components:a.components,rowKey:u,DragHandle:ve}),me=se.components,ge=se.DndContext,De=function(){var s=R()(y()().mark(function k(J){return y()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return b(J),G.abrupt("return",p==null?void 0:p(J));case 2:case"end":return G.stop()}},k)}));return function(J){return s.apply(this,arguments)}}();return ce((0,o.jsx)(W.Z,n()(n()({},j),{},{columns:(r=j.columns)===null||r===void 0?void 0:r.map(function(s){return(s.dataIndex==g||s.key===g)&&(s.render||(s.render=function(){return null})),s}),onLoad:De,rowKey:u,tableViewRender:function(k,J){return(0,o.jsx)(ge,{children:J})},dataSource:d,components:me,onDataSourceChange:Z})))}var ie=le},83919:function(Y,D){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};D.Z=e}}]);