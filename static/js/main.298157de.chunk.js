(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3dzvr",description:"Profile_description__2GJPq",avatar:"Profile_avatar__aV4u5",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm",stats:"Profile_stats__25zJx",statsItem:"Profile_statsItem__3NWvo",label:"Profile_label__3Zjy8",quantity:"Profile_quantity__1zFQ4"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1k0Uk",tableHead:"TransactionHistory_tableHead__3v1bo",tableItem:"TransactionHistory_tableItem__pDB0b"}},function(e,a,t){e.exports={online:"FriendListItem_online__3U9mm",offline:"FriendListItem_offline__3dqWG",item:"FriendListItem_item__1JfCM",avatar:"FriendListItem_avatar__39YKi",name:"FriendListItem_name__3Mkg3"}},function(e,a,t){e.exports={section:"Statistics_section___gy6i",list:"Statistics_list__3oKT7",item:"Statistics_item__1vE2T"}},,,function(e,a,t){e.exports=t.p+"static/media/avatardefault.739297c3.png"},function(e,a,t){e.exports={friendList:"FriendList_friendList__1lQQU"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(6),s=t.n(r),i=(t(18),t(7)),l=t.n(i),m=t(1),o=t.n(m);function d(e){var a=e.name,t=e.tag,n=e.location,r=e.avatar,s=e.stats;return c.a.createElement("div",{className:o.a.profile},c.a.createElement("div",{className:o.a.description},c.a.createElement("img",{src:r,alt:"user avatar",className:o.a.avatar}),c.a.createElement("p",{className:o.a.name},a),c.a.createElement("p",{className:o.a.tag},"@",t),c.a.createElement("p",{className:o.a.location},n)),c.a.createElement("ul",{className:o.a.stats},c.a.createElement("li",{className:o.a.statsItem},c.a.createElement("span",{className:o.a.label},"Followers"),c.a.createElement("span",{className:o.a.quantity},s.followers)),c.a.createElement("li",{className:o.a.statsItem},c.a.createElement("span",{className:o.a.label},"Views"),c.a.createElement("span",{className:o.a.quantity},s.views)),c.a.createElement("li",{className:o.a.statsItem},c.a.createElement("span",{className:o.a.label},"Likes"),c.a.createElement("span",{className:o.a.quantity},s.likes))))}d.defaultProps={avatar:l.a};var u=d,f=t(4),p=t.n(f);var b=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:p.a.section},a?c.a.createElement("h2",{className:p.a.title},a):null,c.a.createElement("ul",{className:p.a.list},t.map((function(e){return c.a.createElement("li",{key:e.id,style:{background:"rgb(".concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random()),",").concat(Math.round(255*Math.random())," )")},className:p.a.item},c.a.createElement("span",{className:"label"},e.label),c.a.createElement("span",{className:"percentage"},e.percentage,"%"))}))))},y=t(8),_=t.n(y),E=t(3),v=t.n(E);var N=function(e){var a=e.friends;return c.a.createElement(n.Fragment,null,a.map((function(e){return c.a.createElement("li",{key:e.id,className:v.a.item},c.a.createElement("span",{className:e.isOnline?v.a.online:v.a.offline}),c.a.createElement("img",{className:v.a.avatar,src:e.avatar,alt:"user avatar",width:"48"}),c.a.createElement("p",{className:v.a.name},e.name))})))};var w=function(e){var a=e.friends;return c.a.createElement("ul",{className:_.a.friendList},c.a.createElement(N,{friends:a}))},g=t(2),h=t.n(g);var I=function(e){var a=e.items;return c.a.createElement("table",{className:h.a.transactionHistory},c.a.createElement("thead",{className:h.a.tableHead},c.a.createElement("tr",null,c.a.createElement("th",{className:h.a.tableItem},"Type"),c.a.createElement("th",{className:h.a.tableItem},"Amount"),c.a.createElement("th",{className:h.a.tableItem},"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:h.a.tableItem},e.type),c.a.createElement("td",{className:h.a.tableItem},e.amount),c.a.createElement("td",{className:h.a.tableItem},e.currency))}))))},P=t(9),k=t(10),L=t(11),x=t(12);function O(){return c.a.createElement(n.Fragment,null,c.a.createElement(u,P),c.a.createElement(b,{title:"Upload stats",stats:k}),c.a.createElement(w,{friends:L}),c.a.createElement(I,{items:x}))}s.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.298157de.chunk.js.map