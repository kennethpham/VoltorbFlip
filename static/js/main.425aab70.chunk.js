(this["webpackJsonpvoltorb-flip"]=this["webpackJsonpvoltorb-flip"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('{"levelOne":[3,1,6],"levelTwo":[1,3,7],"levelThree":[2,3,8],"levelFour":[3,3,8],"levelFive":[7,1,10],"levelSix":[3,4,10],"levelSeven":[7,2,10],"levelEight":[0,7,10]}')},function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),l=a(7),n=a.n(l),o=(a(13),a(1)),c=a(2),i=a(4),m=a(3),u=(a(14),a(5)),d=(a(15),a(16),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={hidden:!0},s.onClick=s.onClick.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"onClick",value:function(){this.state.hidden&&(this.props.updateScore(this.props.val),this.setState({hidden:!this.state.hidden}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"tileButton"},this.state.hidden?r.a.createElement("button",{className:"tile_button",onClick:this.onClick},"?"):r.a.createElement("button",{className:"tile_button",disabled:!0},this.props.val))}}]),a}(r.a.Component)),v=(a(17),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).tileItem=s.tileItem.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"tileItem",value:function(e){return r.a.createElement("div",{className:"tile".concat(e.toString()),key:e},r.a.createElement(d,{val:this.props.vals[e],updateScore:this.props.updateScore}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board-container"},this.props.ids.map((function(t){return e.tileItem(t)})))}}]),a}(r.a.Component)),h=(a(18),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).createBox=s.createBox.bind(Object(u.a)(s)),s}return Object(c.a)(a,[{key:"createBox",value:function(e){return r.a.createElement("div",null,e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"rightSide-container"},r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"rMultTotal"},this.props.totals[0]),r.a.createElement("div",{className:"rPic"},"V"),r.a.createElement("div",{className:"rVoltorbs"},this.props.numZeros[0])),r.a.createElement("div",{className:"right1"},r.a.createElement("div",{className:"r1MultTotal"},this.props.totals[1]),r.a.createElement("div",{className:"r1Pic"},"V"),r.a.createElement("div",{className:"r1Voltorbs"},this.props.numZeros[1])),r.a.createElement("div",{className:"right2"},r.a.createElement("div",{className:"r2MultTotal"},this.props.totals[2]),r.a.createElement("div",{className:"r2Pic"},"V"),r.a.createElement("div",{className:"r2Voltorbs"},this.props.numZeros[2])),r.a.createElement("div",{className:"right3"},r.a.createElement("div",{className:"r3MultTotal"},this.props.totals[3]),r.a.createElement("div",{className:"r3Pic"},"V"),r.a.createElement("div",{className:"r3Voltorbs"},this.props.numZeros[3])),r.a.createElement("div",{className:"right4"},r.a.createElement("div",{className:"r4MultTotal"},this.props.totals[4]),r.a.createElement("div",{className:"r4Pic"},"V"),r.a.createElement("div",{className:"r4Voltorbs"},this.props.numZeros[4])))}}]),a}(r.a.Component)),p=(a(19),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bottom-container"},r.a.createElement("div",{className:"bot"},r.a.createElement("div",{className:"bMultTotal"},this.props.totals[5]),r.a.createElement("div",{className:"bPic"},"V"),r.a.createElement("div",{className:"bVoltorbs"},this.props.numZeros[5])),r.a.createElement("div",{className:"bot1"},r.a.createElement("div",{className:"b1MultTotal"},this.props.totals[6]),r.a.createElement("div",{className:"b1Pic"},"V"),r.a.createElement("div",{className:"b1Voltorbs"},this.props.numZeros[6])),r.a.createElement("div",{className:"bot2"},r.a.createElement("div",{className:"b2MultTotal"},this.props.totals[7]),r.a.createElement("div",{className:"b2Pic"},"V"),r.a.createElement("div",{className:"b2Voltorbs"},this.props.numZeros[7])),r.a.createElement("div",{className:"bot3"},r.a.createElement("div",{className:"b3MultTotal"},this.props.totals[8]),r.a.createElement("div",{className:"b3Pic"},"V"),r.a.createElement("div",{className:"b3Voltorbs"},this.props.numZeros[8])),r.a.createElement("div",{className:"bot4"},r.a.createElement("div",{className:"b4MultTotal"},this.props.totals[9]),r.a.createElement("div",{className:"b4Pic"},"V"),r.a.createElement("div",{className:"b4Voltorbs"},this.props.numZeros[9])))}}]),a}(r.a.Component)),b=(a(20),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"leftSide-container"},r.a.createElement("div",{className:"score"},"Score: ",this.props.score),r.a.createElement("div",{className:"level"},"Level: ",this.props.lvl))}}]),a}(r.a.Component)),f=function(e){Object(i.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={lvl:0,id:[],boardVals:[],numZeros:[],totals:[],score:1},a.createBoardValues=a.createBoardValues.bind(Object(u.a)(a)),a.updateScore=a.updateScore.bind(Object(u.a)(a)),a}return Object(c.a)(s,[{key:"createBoardValues",value:function(){var e,t,s=this.state.lvl+1,r=[],l=[];for(e=0;e<25;e++)r[e]=e,l[e]=1;switch(s){case 1:var n=a(21),o=n.levelOne[0],c=n.levelOne[1],i=n.levelOne[2],m=[],u=0;for(e=0;e<i;e++){for(u=Math.floor(Math.random()*Math.floor(25));m.includes(u);)u=Math.floor(Math.random()*Math.floor(25));m.push(u),l[u]=0}for(e=0;e<c;e++){for(u=Math.floor(Math.random()*Math.floor(25));m.includes(u);)u=Math.floor(Math.random()*Math.floor(25));m.push(u),l[u]=3}for(e=0;e<o;e++){for(u=Math.floor(Math.random()*Math.floor(25));m.includes(u);)u=Math.floor(Math.random()*Math.floor(25));m.push(u),l[u]=2}break;case 2:break;default:console.log("default")}var d=0,v=[],h=[],p=0;for(e=0;e<5;e++){for(t=0;t<5;t++)0===l[5*e+t]?d+=1:p+=l[5*e+t];v.push(d),d=0,h.push(p),p=0}for(e=0;e<5;e++){for(t=0;t<5;t++)0===l[5*t+e]?d+=1:p+=l[5*t+e];v.push(d),d=0,h.push(p),p=0}console.log(v),console.log(h),this.setState((function(e){return{id:r,boardVals:l,numZeros:v,totals:h}}))}},{key:"updateScore",value:function(e){var t=this.state.score*e;this.setState({score:t})}},{key:"componentDidMount",value:function(){this.createBoardValues()}},{key:"render",value:function(){return r.a.createElement("div",{className:"game-container"},r.a.createElement("h1",{className:"top"},"Voltorb Flip"),r.a.createElement("div",{className:"middle"},r.a.createElement(v,{ids:this.state.id,vals:this.state.boardVals,updateScore:this.updateScore,totals:this.state.totals,numZeros:this.state.numZeros})),r.a.createElement("div",{className:"leftSide"},r.a.createElement(b,{score:this.state.score,lvl:this.state.lvl})),r.a.createElement("div",{className:"rightSide"},r.a.createElement(h,{totals:this.state.totals,numZeros:this.state.numZeros})),r.a.createElement("div",{className:"bottom"},r.a.createElement(p,{totals:this.state.totals,numZeros:this.state.numZeros})))}}]),s}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"homepage-container"},r.a.createElement(f,null))}}]),a}(r.a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.425aab70.chunk.js.map