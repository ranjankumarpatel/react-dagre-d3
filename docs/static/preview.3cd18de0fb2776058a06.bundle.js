(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{820:function(e,n,t){t(284),t(821),e.exports=t(822)},822:function(e,n,t){"use strict";(function(e){var n=t(620);(0,t(842).setOptions)({name:"REACT-DAGRE-D3 GITHUB",url:"https://github.com/arxenix/React-DagreD3",goFullScreen:!1,showLeftPanel:!0,showDownPanel:!0,showSearchBox:!1,downPanelInRight:!0}),(0,n.configure)(function(){t(844)},e)}).call(this,t(68)(e))},844:function(e,n,t){"use strict";(function(e){var n=c(t(1)),r=t(620),o=t(176),d=t(845),a=c(t(897)),i=l(t(632)),s=l(t(818));function l(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function c(e){return e&&e.__esModule?e:{default:e}}t(953);var u={simple:{nodes:{1:{label:"Node 1"},2:{label:"Node 2"},3:{label:"Node 3"},4:{label:"Node 4"}},edges:[["1","2",{}],["1","3",{}],["2","4",{}],["3","4",{}]]},medium:{nodes:{1:{},2:{},3:{},4:{},5:{},6:{}},edges:[["1","2",{}],["1","3",{}],["2","4",{}],["3","4",{}],["4","5",{}],["1","6",{}],["5","6",{}]]},large:{nodes:{1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{},11:{},12:{}},edges:[["1","2",{}],["1","5",{}],["2","3",{}],["3","4",{}],["5","6",{}],["5","7",{}],["5","8",{}],["6","9",{}],["7","10",{}],["2","9",{}],["2","10",{}],["9","11",{}],["10","11",{}],["11","12",{}]]}};(0,r.storiesOf)("Basic Settings",e).add("basic graph",(0,d.withInfo)("\n        A simple 4 node graph\n        ")(function(){return n.default.createElement(a.default,{nodes:u.simple.nodes,edges:u.simple.edges})})).add("svg size",(0,d.withInfo)("\n        Setting the size of the svg\n        ")(function(){return n.default.createElement(a.default,{nodes:u.simple.nodes,edges:u.simple.edges,height:"400",width:"400",fit:!1})})).add("interactive",(0,d.withInfo)("\n        Make the graph interactive (zoomable and draggable)\n        ")(function(){return n.default.createElement(a.default,{nodes:u.simple.nodes,edges:u.simple.edges,interactive:!0,height:"400",width:"400",fit:!1})})).add("another graph",(0,d.withInfo)("\n        A slightly more complex graph\n        ")(function(){return n.default.createElement(a.default,{nodes:u.medium.nodes,edges:u.medium.edges})})).add("complex graph",(0,d.withInfo)("\n        A more complex graph\n        ")(function(){return n.default.createElement(a.default,{nodes:u.large.nodes,edges:u.large.edges})})),(0,r.storiesOf)("Node Settings",e).add("click events",(0,d.withInfo)("\n        Click handlers on nodes\n        ")(function(){return n.default.createElement(a.default,{nodes:u.simple.nodes,edges:u.simple.edges,onNodeClick:(0,o.action)("clicked node")})})).add("node classes",(0,d.withInfo)("\n        Attach classes to specific nodes\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple));return e.nodes[1].class="red",e.nodes[2].class="green",n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges})})).add("node shapes",(0,d.withInfo)("\n        Set custom node shapes (rect, ellipse, circle, diamond)\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple));return e.nodes[1].shape="circle",e.nodes[2].shape="diamond",e.nodes[3].shape="ellipse",e.nodes[4].shape="rect",n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges})})).add("combined example",(0,d.withInfo)("\n        Example showing all of the above\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple));return e.nodes[1].class="clickable red",e.nodes[1].shape="circle",e.nodes[4].class="clickable red",e.nodes[4].shape="circle",n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges,onNodeClick:(0,o.action)("clicked node")})})).add("custom shape renderer",(0,d.withInfo)("\n        A custom shape renderer\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple));return e.nodes[2].shape="house",n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges,shapeRenderers:{house:function(e,n,t){var r=n.width,o=n.height,d=[{x:0,y:0},{x:r,y:0},{x:r,y:-o},{x:r/2,y:3*-o/2},{x:0,y:-o}],a=e.insert("polygon",":first-child").attr("points",d.map(function(e){return e.x+","+e.y}).join(" ")).attr("transform","translate("+-r/2+","+3*o/4+")");return t.intersect=function(e){return i.intersect.polygon(t,d,e)},a}}})})),(0,r.storiesOf)("Edge Settings",e).add("edge classes",(0,d.withInfo)("\n        Attaching classes to specific edges\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple));return e.edges[1][2].class="dashed",e.edges[2][2].class="dashed",n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges})})).add("custom edge renderer",(0,d.withInfo)("\n        An example of using d3's default curveBasis renderer\n        ")(function(){var e=JSON.parse(JSON.stringify(u.simple)),t=!0,r=!1,o=void 0;try{for(var d,i=e.edges[Symbol.iterator]();!(t=(d=i.next()).done);t=!0){d.value[2].curve=s.curveBasis}}catch(e){r=!0,o=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw o}}return n.default.createElement(a.default,{nodes:e.nodes,edges:e.edges})}))}).call(this,t(68)(e))},848:function(e,n,t){var r={"./nestedObjectAssign":625,"./nestedObjectAssign.js":625};function o(e){var n=d(e);return t(n)}function d(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(r)},o.resolve=d,e.exports=o,o.id=848},897:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,d=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,d=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw d}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),d=u(t(1)),a=u(t(0)),i=c(t(632)),s=c(t(818)),l=u(t(952));function c(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function n(e){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,d.default.Component),o(n,[{key:"shouldComponentUpdate",value:function(e,n){return!(0,l.default)(this.props.nodes,e.nodes)||!(0,l.default)(this.props.edges,e.edges)||!(0,l.default)(this.props.zoom,e.zoom)}},{key:"componentDidMount",value:function(){this.renderDag()}},{key:"componentDidUpdate",value:function(){this.renderDag()}},{key:"renderDag",value:function(){var e=this,n=(new i.graphlib.Graph).setGraph({}),t=!0,o=!1,d=void 0;try{for(var a,l=Object.entries(this.props.nodes)[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){var c=a.value,u=r(c,2),f=u[0],p=u[1];n.setNode(f,p)}}catch(e){o=!0,d=e}finally{try{!t&&l.return&&l.return()}finally{if(o)throw d}}var h=!0,g=!1,m=void 0;try{for(var v,y=this.props.edges[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var b=v.value;n.setEdge(b[0],b[1],b[2])}}catch(e){g=!0,m=e}finally{try{!h&&y.return&&y.return()}finally{if(g)throw m}}var w=s.select(this.nodeTree),k=s.select(this.nodeTreeGroup);if(this.props.interactive){var O=s.zoom().on("zoom",function(){return k.attr("transform",s.event.transform)});w.call(O)}var x=new i.render;if(this.props.shapeRenderers){var N=!0,S=!1,E=void 0;try{for(var _,j=Object.entries(this.props.shapeRenderers)[Symbol.iterator]();!(N=(_=j.next()).done);N=!0){var I=_.value,A=r(I,2),J=A[0],P=A[1];x.shapes()[J]=P}}catch(e){S=!0,E=e}finally{try{!N&&j.return&&j.return()}finally{if(S)throw E}}}if(x(k,n),this.props.fit){var D=n.graph(),T=D.height,C=D.width,R=this.nodeTree.getBBox(),z=R.height,M=R.width,B=M-C,G=z-T;w.attr("height",z),w.attr("width",M),k.attr("transform",s.zoomIdentity.translate(B,G))}this.props.onNodeClick&&w.selectAll(".dagre-d3 .node").on("click",function(n){return e.props.onNodeClick(n)})}},{key:"render",value:function(){var e=this;return d.default.createElement("svg",{className:"dagre-d3",ref:function(n){e.nodeTree=n},width:this.props.height,height:this.props.width},d.default.createElement("g",{ref:function(n){e.nodeTreeGroup=n}}))}}]),n}();f.defaultProps={height:"1",width:"1",fit:!0,interactive:!1},f.propTypes={nodes:a.default.object.isRequired,edges:a.default.array.isRequired,interactive:a.default.bool,fit:a.default.bool,height:a.default.string,width:a.default.string,shapeRenderers:a.default.objectOf(a.default.func),onNodeClick:a.default.func},n.default=f},953:function(e,n,t){var r=t(954);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(956)(r,o);r.locals&&(e.exports=r.locals)},954:function(e,n,t){(e.exports=t(955)(!1)).push([e.i,'.dagre-d3 .node {\n  fill: white; }\n  .dagre-d3 .node rect, .dagre-d3 .node polygon, .dagre-d3 .node circle, .dagre-d3 .node ellipse, .dagre-d3 .node diamond {\n    stroke: black;\n    stroke-width: 1px; }\n  .dagre-d3 .node .label {\n    fill: black; }\n  .dagre-d3 .node text {\n    font-weight: 300;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serf, sans-serif;\n    font-size: 14px; }\n\n.dagre-d3 .edgePath path.path {\n  stroke: black;\n  fill: black;\n  stroke-width: 1.5px; }\n\n.dagre-d3 {\n  border: 1px dashed grey; }\n  .dagre-d3 .node.clickable rect, .dagre-d3 .node.clickable polygon, .dagre-d3 .node.clickable circle, .dagre-d3 .node.clickable ellipse, .dagre-d3 .node.clickable diamond {\n    cursor: pointer; }\n  .dagre-d3 .node.clickable text {\n    cursor: pointer;\n    user-select: none; }\n  .dagre-d3 .node.clickable:hover rect, .dagre-d3 .node.clickable:hover polygon, .dagre-d3 .node.clickable:hover circle, .dagre-d3 .node.clickable:hover ellipse, .dagre-d3 .node.clickable:hover diamond {\n    stroke-width: 3.5px; }\n  .dagre-d3 .node.red rect, .dagre-d3 .node.red polygon, .dagre-d3 .node.red circle, .dagre-d3 .node.red ellipse, .dagre-d3 .node.red diamond {\n    fill: red; }\n  .dagre-d3 .node.green rect, .dagre-d3 .node.green polygon, .dagre-d3 .node.green circle, .dagre-d3 .node.green ellipse, .dagre-d3 .node.green diamond {\n    fill: green; }\n  .dagre-d3 .edgePath.dashed {\n    stroke-dasharray: 5, 5; }\n',""])}},[[820,3,2]]]);
//# sourceMappingURL=preview.3cd18de0fb2776058a06.bundle.js.map