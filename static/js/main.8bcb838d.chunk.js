(this["webpackJsonplaunch-countdown-timer-main"]=this["webpackJsonplaunch-countdown-timer-main"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(3),a=s.n(c),r=(s(12),s(13),s.p+"static/media/icon-facebook.a9208377.svg"),l=s.p+"static/media/icon-instagram.b94ff26a.svg",h=s.p+"static/media/icon-pinterest.ea0db8e7.svg",o=s(4),u=s(5),f=s(7),d=s(6),j=s(0);function b(e){var t=e.digit,s=e.shuffle,n=t,i=t+1;i="hours"!==e.unit?-1===i?59:i:-1===i?23:i,n<10&&(n="0".concat(n)),i<10&&(i="0".concat(i));var c=s?i:n,a=s?n:i,r=s?"fold":"unfold",l=s?"unfold":"fold";return Object(j.jsxs)("div",{className:"flipUnitContainer",children:[Object(j.jsx)("div",{className:"upperCard",children:Object(j.jsx)("span",{children:n})}),Object(j.jsx)("div",{className:"lowerCard",children:Object(j.jsx)("span",{children:i})}),Object(j.jsx)("div",{className:"flipCard ".concat(r),children:Object(j.jsx)("span",{children:c})}),Object(j.jsx)("div",{className:"flipCard ".concat(l),children:Object(j.jsx)("span",{children:a})})]})}var m=function(e){Object(f.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={counter:8854200,days:0,daysShuffle:!0,hours:0,hoursShuffle:!0,minutes:0,minutesShuffle:!0,seconds:0,secondsShuffle:!0},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.updateTime()}),50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"updateTime",value:function(){var e=this.state.counter-50;this.setState({counter:e}),e<=0&&this.setState({counter:82e8});var t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),n=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);if(t!==this.state.days){var c=!this.state.daysShuffle;this.setState({days:t,daysShuffle:c})}if(s!==this.state.hours){var a=!this.state.hoursShuffle;this.setState({hours:s,hoursShuffle:a})}if(n!==this.state.minutes){var r=!this.state.minutesShuffle;this.setState({minutes:n,minutesShuffle:r})}if(i!==this.state.seconds){var l=!this.state.secondsShuffle;this.setState({seconds:i,secondsShuffle:l})}}},{key:"render",value:function(){var e=this.state,t=e.days,s=e.hours,n=e.minutes,i=e.seconds,c=e.daysShuffle,a=e.hoursShuffle,r=e.minutesShuffle,l=e.secondsShuffle;return Object(j.jsxs)("div",{className:"flipClock",children:[Object(j.jsxs)("div",{className:"flipConteiner",children:[Object(j.jsx)(b,{unit:"days",digit:t,shuffle:c}),Object(j.jsx)("span",{className:"flipText",children:"DAYS"})]}),Object(j.jsxs)("div",{className:"flipConteiner",children:[Object(j.jsx)(b,{unit:"hours",digit:s,shuffle:a}),Object(j.jsx)("span",{className:"flipText",children:"HOURS"})]}),Object(j.jsxs)("div",{className:"flipConteiner",children:[Object(j.jsx)(b,{unit:"minutes",digit:n,shuffle:r}),Object(j.jsx)("span",{className:"flipText",children:"MINUTES"})]}),Object(j.jsxs)("div",{className:"flipConteiner",children:[Object(j.jsx)(b,{unit:"seconds",digit:i,shuffle:l}),Object(j.jsx)("span",{className:"flipText",children:"SECONDS"})]})]})}}]),s}(i.a.Component);var O=function(){return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)("h1",{children:"WE'RE LAUNCHING SOON"}),Object(j.jsx)(m,{}),Object(j.jsx)("footer",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("img",{src:r,alt:"Facebook icon"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("img",{src:l,alt:"Instagram icon"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"!#",children:Object(j.jsx)("img",{src:h,alt:"Pinterest icon"})})})]})})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.8bcb838d.chunk.js.map