(this.webpackJsonpreact_shopping_cart=this.webpackJsonpreact_shopping_cart||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),c=a.n(i),s=a(7),l=a(1),u=a(2),o=a(4),p=a(3),d=a(5),m=a(6),h=(a(15),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("section",null,n.a.createElement("label",{htmlFor:"price"},"Order By"),n.a.createElement("select",{onChange:this.props.handleSort,name:"price",id:"price"},n.a.createElement("option",null,"Select"),n.a.createElement("option",{value:"ascending"},"Lowest to highest"),n.a.createElement("option",{value:"decsending"},"Highest to lowest"))),n.a.createElement("div",{id:"heading"},"Shopi-Fy"),n.a.createElement("div",null,n.a.createElement("i",{onClick:this.props.isOpen,className:"fa-solid fa-cart-shopping"}))))}}]),t}(n.a.Component)),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.addProduct;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main"},t.map((function(e){return n.a.createElement("div",{className:"collection"},n.a.createElement("figure",null,n.a.createElement("img",{src:"/static/products/"+e.sku+"_1.jpg"}),n.a.createElement("span",{className:e.isFreeShipping?"active":"inactive"},e.isFreeShipping?"Free -shipping":"Paid-shipping")),n.a.createElement("h1",{className:"main-title"},e.title),n.a.createElement("hr",null),n.a.createElement("p",null,e.currencyFormat+e.price),n.a.createElement("button",{className:"main-btn",onClick:function(){return a(e)},id:e.id},"Add to Cart"))}))))}}]),t}(n.a.Component),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object(s.a)(new Set(m.products.map((function(e){return e.availableSizes})).flat()));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"aside"},t.map((function(t,a){return n.a.createElement("button",{className:"aside-btn",onClick:function(){e.props.handleSize(t)}},t)}))))}}]),t}(n.a.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={quantity:1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=(this.state.cart,this.props),a=t.handleDelete,r=t.productId,i=0;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"cart-container"},r.map((function(t,r){return i+=t.price,n.a.createElement("div",{className:"cart"},n.a.createElement("figure",null,n.a.createElement("img",{src:"/static/products/"+t.sku+"_2.jpg"})),n.a.createElement("div",null,n.a.createElement("h1",{className:"cart-title"},t.title),n.a.createElement("span",{className:"cart-span"},t.availableSizes),n.a.createElement("p",{className:"cart-style"},t.style),n.a.createElement("p",{className:"cart-quantity"}," Quantity :",e.state.quantity)),n.a.createElement("div",null,n.a.createElement("button",{className:"cart-btn",onClick:function(){return a(r)}},"X"),n.a.createElement("p",{className:"cart-price"},t.price),n.a.createElement("button",{className:"cart-btn",onClick:e.handleInc},"+"),n.a.createElement("button",{className:"cart-btn",onClick:e.handleDec},"-")))})),n.a.createElement("div",{className:"total-amount"},"Total amount : ",n.a.createElement("span",null,i)),n.a.createElement("button",{className:"checkout"},"CheckOut")))}}]),t}(n.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).handleSize=function(e){var t=m.products.filter((function(t){return t.availableSizes.includes(e)}));a.setState({data:t})},a.addProduct=function(e){a.setState({productId:[].concat(Object(s.a)(a.state.productId),[e])})},a.handleSort=function(e){var t;t="ascending"===e.target.value?a.state.data.sort((function(e,t){return e.price-t.price})):a.state.data.sort((function(e,t){return t.price-e.price})),a.setState({data:t})},a.isOpen=function(){a.setState({displayCart:!a.state.displayCart})},a.handleDelete=function(e){a.state.productId.splice(e,1),a.setState({productId:a.state.productId})},a.state={data:m.products,productId:[],displayCart:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{handleSort:this.handleSort,isOpen:this.isOpen}),this.state.displayCart&&n.a.createElement(b,{productId:this.state.productId,handleDelete:this.handleDelete}),n.a.createElement("div",{className:"home"},n.a.createElement(y,{data:m,handleSize:this.handleSize}),n.a.createElement(S,{data:this.state.data,addProduct:this.addProduct})))}}]),t}(n.a.Component);c.a.render(n.a.createElement(v,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"products":[{"availableSizes":["S","XS"],"currencyFormat":"$","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":10.9,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt"},{"availableSizes":["M"],"currencyFormat":"$","currencyId":"USD","description":"","id":13,"installments":5,"isFreeShipping":true,"price":29.45,"sku":51498472915966370,"style":"Front print and paisley print","title":"Dark Thug Blue-Navy T-Shirt"},{"availableSizes":["X","L","XL"],"currencyFormat":"$","currencyId":"USD","description":"GPX Poly 1","id":14,"installments":3,"isFreeShipping":true,"price":9,"sku":10686354557628304,"style":"Front tie dye print","title":"Sphynx Tie Dye Wine T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"Treino 2014","id":15,"installments":5,"isFreeShipping":true,"price":14,"sku":11033926921508488,"style":"Black T-Shirt with front print","title":"Skuul"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"","id":11,"installments":3,"isFreeShipping":true,"price":13.25,"sku":39876704341265610,"style":"Wine","title":"Wine Skul T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/n\xba","id":0,"installments":9,"isFreeShipping":true,"price":10.9,"sku":8552515751438644,"style":"Branco com listras pretas","title":"Cat Tee Black T-Shirt"},{"availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/n\xba","id":1,"installments":9,"isFreeShipping":true,"price":10.9,"sku":18644119330491310,"style":"Preta com listras brancas","title":"Sphynx Tie Dye Grey T-Shirt"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/n\xba","id":2,"installments":7,"isFreeShipping":true,"price":14.9,"sku":11854078013954528,"style":"Branco com listras pretas","title":"Danger Knife Grey"},{"availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"2014 s/n\xba","id":3,"installments":7,"isFreeShipping":true,"price":14.9,"sku":876661122392077,"style":"Preto com listras brancas","title":"White DGK Script Tee"},{"availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/n\xba - Jogador","id":4,"installments":12,"isFreeShipping":false,"price":25.9,"sku":9197907543445676,"style":"Branco com listras pretas","title":"Born On The Streets"},{"availableSizes":["X","L","XL"],"currencyFormat":"$","currencyId":"USD","description":"14/15 + Camiseta 1\xba Mundial","id":5,"installments":9,"isFreeShipping":false,"price":10.9,"sku":10547961582846888,"style":"Preto","title":"Tso 3D Short Sleeve T-Shirt A"},{"availableSizes":["XL","XXL"],"currencyFormat":"$","currencyId":"USD","description":"Goleiro 13/14","id":6,"installments":0,"isFreeShipping":true,"price":49.9,"sku":6090484789343891,"style":"Branco","title":"Man Tie Dye Cinza Grey T-Shirt"},{"availableSizes":["S"],"currencyFormat":"$","currencyId":"USD","description":"1977 Infantil","id":7,"installments":4,"isFreeShipping":true,"price":22.5,"sku":18532669286405344,"style":"Preto com listras brancas","title":"Crazy Monkey Black T-Shirt"},{"availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":8,"installments":4,"isFreeShipping":false,"price":18.7,"sku":5619496040738316,"style":"Azul escuro","title":"Tso 3D Black T-Shirt"},{"availableSizes":["L","XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":9,"installments":5,"isFreeShipping":true,"price":134.9,"sku":11600983276356164,"style":"","title":"Crazy Monkey Grey"},{"availableSizes":["L","XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":10,"installments":9,"isFreeShipping":true,"price":49,"sku":27250082398145996,"style":"","title":"On The Streets Black T-Shirt"}]}')}},[[10,1,2]]]);
//# sourceMappingURL=main.ca020127.chunk.js.map