(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{226:function(t,e,s){"use strict";s(4);var i=s(21),a=s(30),r=s(68),n=s(33),o=s(1),c=s(25),l=s(7),d=s(48),_=s(225),u=s(250),p={name:"EcOrderInfo",components:{ShippingLine:_.a,EcSummary:u.a},props:{order:{type:Object,required:!0},isNew:Boolean,skipDataLoad:Boolean,skipFirstDataLoad:Boolean,skipCustomerUpdate:Boolean,accountOrdersUrl:{type:String,default:"/app/#/account/orders"},cartUrl:{type:String,default:"/app/#/cart"},ecomCart:{type:Object,default:()=>l.a},ecomPassport:{type:Object,default:()=>c.a},invoiceBaseLink:{type:String,default:"https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConteudo=7PhJ+gAVw2g=&tipoConsulta=resumo&nfe="}},data(){return{isLoaded:this.skipDataLoad||this.skipFirstDataLoad,isUpdating:!1,reloadInterval:null,orderBody:this.order,canReopenOrder:!1,validThruTimer:null,validThruRemainingTime:null}},computed:{i19buyAgain:()=>Object(a.a)(i.A),i19cancelOrder:()=>Object(a.a)(i.G),i19codeCopied:()=>Object(a.a)(i.R),i19copyCode:()=>Object(a.a)(i.ab),i19copyErrorMsg:()=>Object(a.a)(i.bb),i19days:()=>Object(a.a)(i.fb),i19doPaymentMsg:()=>Object(a.a)(i.kb),i19expirationDate:()=>"Prazo de vencimento",i19freight:()=>Object(a.a)(i.Eb),i19login:()=>Object(a.a)(i.cc),i19loginForOrderDetailsMsg:()=>Object(a.a)(i.ec),i19myOrders:()=>Object(a.a)(i.oc),i19notes:()=>Object(a.a)(i.zc),i19of:()=>Object(a.a)(i.Dc),i19orderConfirmationMsg:()=>Object(a.a)(i.Lc),i19orderNumber:()=>Object(a.a)(i.Nc),i19printBillet:()=>Object(a.a)(i.bd),i19redirectToPayment:()=>Object(a.a)(i.kd),i19referenceCode:()=>Object(a.a)(i.md),i19reopenOrder:()=>Object(a.a)(i.td),i19shippingAddress:()=>Object(a.a)(i.Pd),i19transactionCode:()=>Object(a.a)(i.ee),i19ticketCode:()=>Object(a.a)(i.Zd),i19trackDelivery:()=>Object(a.a)(i.de),i19unsubscribe:()=>Object(a.a)(i.je),i19zipCode:()=>Object(a.a)(i.ue),i19invoice:()=>"Nota fiscal",localOrder:{get(){return this.orderBody},set(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},hasManyTransactions(){const{transactions:t}=this.localOrder;return t&&t.length>1},isPaid(){return this.orderBody&&this.orderBody.financial_status&&"paid"===this.orderBody.financial_status.current},transaction(){const{transactions:t}=this.localOrder;return t&&t.length?t[0]:{}},validThru(){const t=this.transaction.banking_billet||this.transaction.account_deposit;return t&&t.valid_thru},shippingAddress(){const{localOrder:t}=this;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},canShowShippingAddress(){const{localOrder:t,shippingAddress:e}=this;return!(!e||!e.street)&&!/(retira|pick\s?up|e-?mail)/i.test(t.shipping_method_label)},status(){return this.localOrder.status},financialStatus(){const{localOrder:t,transaction:e}=this;if(t.payments_history){const e=t.transactions&&t.transactions.find((t=>"loyalty_points"!==t.payment_method.code));let s;if(t.payments_history.forEach((t=>{!t||e&&t.transaction_id&&t.transaction_id!==e._id||s&&t.date_time&&!(new Date(t.date_time).getTime()>=new Date(s.date_time).getTime())||(s=t)})),s)return s.status}const s=t.financial_status&&t.financial_status.current;return s||(e&&e.status?e.status.current:"pending")},fulfillmentStatus(){const{localOrder:t}=this,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;{const e=t.shipping_lines&&t.shipping_lines[0];if(e&&e.status)return e.status.current}return null},statusEntries(){const t=[];let e=[];return["payments_history","fulfillments"].forEach((t=>{Array.isArray(this.localOrder[t])&&(e=e.concat(this.localOrder[t]))})),e.length&&(e=e=e.sort(((t,e)=>t.date_time&&e.date_time?new Date(t.date_time).getTime()>new Date(e.date_time).getTime()?-1:1:0)),e.forEach(((s,i)=>{i>0&&s.status===e[i-1].status||t.push(s)}))),t},isAuthenticated(){return this.ecomPassport.checkAuthorization()},isSubscription(){return this.localOrder.transactions&&this.localOrder.transactions.find((t=>{let{type:e}=t;return"recurrence"===e}))}},methods:{i19FinancialStatus:t=>Object(a.a)(i.a)[t],i19FulfillmentStatus:t=>Object(a.a)(i.b)[t],i19OrderStatus:t=>Object(a.a)(i.e)[t],formatMoney:r.a,formatDate:n.a,formatTime(t){const e=Date.parse(t);return new Date(e).toLocaleTimeString()},toClipboard(t){this.$copyText(t).then((()=>{this.$toast({title:this.i19codeCopied,body:t,variant:"success",delay:2e3})}),(e=>{console.error(e),this.$toast({title:"Oops",body:`${this.i19copyErrorMsg}: <i>${t}</i>`,variant:"warning",delay:3e3})}))},saveCustomerOrder(){const{localOrder:t,ecomPassport:e}=this;!this.skipCustomerUpdate&&t.number&&e.checkAuthorization()&&(t.transactions&&t.transactions.find((t=>"loyalty_points"===t.payment_method.code))&&e.setCustomer({loyalty_points_entries:[]}),e.requestApi("/me.json").then((s=>{let{data:i}=s;const a=i.orders?i.orders.slice(-300):[],r={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((e=>{t[e]&&(r[e]=t[e])}));const n=a.findIndex((e=>{let{_id:s,number:i}=e;return s===t._id||i===t.number}));n>-1?Object.assign(a[n],r):a.push(r),e.requestApi("/me.json","patch",{orders:a})})))},buyAgain(){const{localOrder:t}=this;if(t.items){const{items:e}=t;l.a.clear(),e.forEach(((t,s)=>{l.a.addItem(t,!1),s+1===e.length&&(l.a.save(),window.location=this.cartUrl)}))}},toggle(){this.isUpdating=!0;const t="cancelled"!==this.localOrder.status?{status:"cancelled",cancel_reason:"customer"}:{status:"open"};c.a.requestApi(`/orders/${this.order._id}.json`,"patch",t).then((()=>{this.localOrder={...this.localOrder,...t}})).finally((()=>{this.isUpdating=!1}))}},watch:{isLoaded:{handler(t){if(t&&this.isAuthenticated&&"cancelled"===this.status){const{items:t}=this.localOrder;if(t&&t.length){const e=t.map((t=>t.product_id)),s=new d.a;s.setPageSize(e.length).setProductIds(e).fetch(!0).then((()=>{for(let e=0;e<t.length;e++){const i=t[e],a=s.getItems().find((t=>{let{_id:e}=t;return e===i.product_id}));if(a){if(i.variation_id&&a.variations){const t=a.variations.find((t=>{let{sku:e}=t;return e===i.sku}));if(t&&t.quantity>=i.quantity)continue}if(a.quantity>=i.quantity)continue}return void(this.canReopenOrder=!1)}this.canReopenOrder=!0})).catch(console.error)}}},immediate:!0}},created(){if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){const t=`/orders/${this.order._id}.json`,e=()=>(this.ecomPassport.checkAuthorization()?this.ecomPassport.requestApi(t):Object(o.g)({url:t})).then((t=>{let{data:e}=t;this.localOrder={...this.localOrder,...e}})).catch((t=>{console.error(t)}));this.reloadInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((()=>{e().finally((()=>{this.isLoaded=!0}))}),this.isNew?1e3:3e3)}},mounted(){if(this.validThru){const t=new Date(this.validThru),e=Date.now();if(t.getTime()>e){let s;const a=864e5;Math.floor((t.getTime()-e)/a)>2?(s=new Date,s.setHours(23,59,59,999)):s=t;const r=t=>t<10?`0${t}`:t,n=()=>{const t=s.getTime()-Date.now(),e=Math.floor(t/a),n=Math.floor(t%a/36e5),o=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3);return(e>0?`${r(e)} ${i.fb} - `:"")+`${r(n)}:${r(o)}:${r(c)}`};this.validThruTimer=setInterval((()=>{this.validThruRemainingTime=n()}),1e3)}}},beforeDestroy(){clearInterval(this.reloadInterval),this.validThruTimer&&clearInterval(this.validThruTimer)}};e.a=p},248:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-info py-4"},[t.isNew?s("div",{staticClass:"order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),s("transition-group",{attrs:{"enter-active-class":"animated fadeInDown slower"}},[t.isLoaded?s("div",{key:"loaded"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-5 col-lg-3"},[s("h2",{staticClass:"order-info__number"},[s("small",[t._v(t._s(t.i19orderNumber)+":")]),t._v(" #"),s("span",[t._v(t._s(t.localOrder.number))])]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp fast"}},[t.isUpdating||"cancelled"!==t.status?t._e():s("p",{staticClass:"order-info__cancelled h3"},[t._v(" "+t._s(t.i19OrderStatus(t.status))+" "),s("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.canReopenOrder?s("button",{staticClass:"order-info__toggle btn",class:"cancelled"===t.status?"btn-success":"btn-secondary",on:{click:t.toggle}},[s("i",{staticClass:"i-check-circle mr-1"}),t._v(" "+t._s(t.i19reopenOrder)+" ")]):t._e()])],1)]),t.statusEntries.length?s("ul",{staticClass:"order-info__timeline"},t._l(t.statusEntries,(function(e,i){return s("li",{key:"status-"+i,staticClass:"order-info__timeline-status",class:"order-info__timeline-status--"+e.status},[e.date_time?s("div",{staticClass:"order-info__timeline-date"},[t._v(" "+t._s(t.formatDate(e.date_time))+" "+t._s(t.formatTime(e.date_time))+" ")]):t._e(),t._v(" "+t._s(t.i19FinancialStatus(e.status)||t.i19FulfillmentStatus(e.status))+" ")])})),0):t._e(),t.accountOrdersUrl?s("a",{staticClass:"order-info__orders-link d-none d-md-block btn btn-light",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1),s("div",{staticClass:"col-md-7 col-lg-9"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("article",[t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?s("div",{staticClass:"order-info__billet"},[s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),t.transaction.banking_billet.code?[s("p",[t._v(" "+t._s(t.i19ticketCode)+": "),s("br"),s("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),s("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[s("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?s("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[s("i",{staticClass:"i-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?s("div",{staticClass:"order-info__redirect"},[s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19doPaymentMsg)+" ")]),s("a",{staticClass:"btn btn-lg btn-success",attrs:{target:"_blank",href:t.transaction.payment_link}},[s("i",{staticClass:"i-arrow-right mr-1"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e(),t.validThruRemainingTime?s("div",{staticClass:"order-info__valid-thru mb-3 mt-3"},[t._v(" "+t._s(t.i19expirationDate)+" "),s("div",{staticClass:"ml-3 mb-0"},[s("strong",[t._v(t._s(t.validThruRemainingTime))])])]):t._e()]:t._e(),t.isPaid?s("div",{staticClass:"order-info__download mt-3"},[s("a",{staticClass:"btn btn-primary",staticStyle:{width:"100%"},attrs:{href:"https://drive.google.com/drive/folders/18yfYN7G24XoEGq2hBfh4380ryR-cvHLk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download")])]):t._e(),s("div",{staticClass:"order-info__details"},[t._t("payment",(function(){return[s("div",{staticClass:"order-info__payment card"},[s("div",{staticClass:"card-header"},[s("span",{staticClass:"order-info__financial-status",class:"order-info__financial-status--"+t.financialStatus},[s("i",{staticClass:"i-money-check mr-1"}),t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")])]),t._l(t.localOrder.transactions,(function(e){return s("div",{key:"t-"+e._id,staticClass:"card-body"},[s("p",{staticClass:"order-info__payment-value"},[e.payment_method.name?[t._v(" "+t._s(e.payment_method.name)+": ")]:t.localOrder.payment_method_label?[t._v(" "+t._s(t.localOrder.payment_method_label)+": ")]:t._e(),e.installments&&e.installments.value?s("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):s("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")]),t.hasManyTransactions&&e.status?[s("br"),s("span",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19FinancialStatus(e.status.current))+" ")])]:t._e()],2),e.notes?s("p",{staticClass:"order-info__payment-notes alert alert-warning",attrs:{role:"alert"},domProps:{innerHTML:t._s(e.notes)}}):t._e(),e.credit_card?s("p",{staticClass:"order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?s("span",[e.credit_card.company?t._e():s("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?s("div",{staticClass:"order-info__transaction-code"},[s("small",[t._v(t._s(t.i19transactionCode))]),s("br"),s("code",[t._v(t._s(e.intermediator.transaction_code))]),s("br"),s("button",{staticClass:"btn btn-sm btn-light",on:{click:function(){return t.toClipboard(e.intermediator.transaction_code)}}},[s("i",{staticClass:"i-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]):t._e(),e.intermediator.transaction_reference?s("div",{staticClass:"order-info__transaction-reference"},[s("small",[t._v(t._s(t.i19referenceCode))]),s("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)]}),null,{order:t.localOrder,transaction:t.transaction,financialStatus:t.financialStatus}),t._t("shipping",(function(){return[s("div",{staticClass:"order-info__shipping"},[t._l(t.localOrder.shipping_lines,(function(e){return s("div",{key:"s-"+e._id,staticClass:"order-info__shipping-freight card"},[s("div",{staticClass:"card-header"},[t.fulfillmentStatus?s("span",{staticClass:"order-info__fulfillment-status",class:"order-info__fulfillment-status--"+t.fulfillmentStatus},[s("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):[s("i",{staticClass:"i-truck mr-1"}),t._v(" "+t._s(t.i19freight)+" ")]],2),s("div",{staticClass:"card-body"},[e.app?s("span",[t._v(" "+t._s(e.app.label)+" ")]):t._e(),s("shipping-line",{attrs:{"shipping-line":e}}),e.tracking_codes?s("div",{staticClass:"order-info__shipping-tracking"},[s("hr"),s("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.i19trackDelivery)+": ")]),t._l(e.tracking_codes,(function(e,i){return s("samp",{key:"track-"+i},[e.link?s("a",{attrs:{href:""+e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):s("span",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e(),s("div",{staticClass:"order-info__shipping-nfe",attrs:{if:"shippingLine.invoices"}},[s("hr"),t._l(e.invoices,(function(e,i){return e.link||e.access_key?s("samp",{key:"invoice-"+i},[s("a",{attrs:{href:""+(e.link||""+(t.invoiceBaseLink+e.access_key)),target:"_blank"}},[t._v(" "+t._s(t.i19invoice)+" ")])]):t._e()}))],2)],1)])})),t.canShowShippingAddress?s("div",{staticClass:"order-info__shipping-address card"},[s("div",{staticClass:"card-header"},[s("i",{staticClass:"i-map-marked mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),s("address",{staticClass:"card-body mb-0"},[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e(),t.shippingAddress.complement?[t._v(" , "+t._s(t.shippingAddress.complement)+" ")]:t._e(),t.shippingAddress.near_to?[s("br"),t._v(t._s(t.shippingAddress.near_to)+" ")]:t._e(),s("br"),t._l(["borough","city","province_code"],(function(e,i){return t.shippingAddress[e]?s("span",{key:e},[t._v(" "+t._s(t.shippingAddress[e]+(2===i?".":","))+" ")]):t._e()})),s("br"),s("span",[t._v(" "+t._s(t.i19zipCode)+": "),s("samp",[t._v(t._s(t.shippingAddress.zip))])])],2)]):t._e()],2)]}),null,{order:t.localOrder,shippingAddress:t.shippingAddress,fulfillmentStatus:t.fulfillmentStatus}),t._t("notes",(function(){return[t.localOrder.notes?s("div",{staticClass:"order-info__notes card"},[s("div",{staticClass:"card-header"},[s("span",[t._v(" "+t._s(t.i19notes)+" ")])]),s("div",{staticClass:"card-body"},[s("span",[t._v(" "+t._s(t.localOrder.notes)+" ")])])]):t._e()]}),null,{order:t.localOrder})],2),t.isAuthenticated?t._e():s("p",{staticClass:"lead"},[t._v(" "+t._s(t.i19loginForOrderDetailsMsg)+" "),s("br"),s("a",{staticClass:"btn btn-primary mt-2",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"i-user mr-1"}),t._v(" "+t._s(t.i19login)+" ")])])],2)]),t.localOrder.amount?s("div",{staticClass:"col-lg-6 order-info__right"},[s("div",{staticClass:"order-info__summary card"},[s("div",{staticClass:"card-body"},[s("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0]||t.ecomPassport.getCustomer(),shippingAddress:t.shippingAddress}})],1)]),t.isSubscription&&"cancelled"!==t.status?t._t("unsubscribe",(function(){return[s("button",{staticClass:"order-info__unsubscribe btn btn-outline-danger",attrs:{type:"button"},on:{click:t.toggle}},[s("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19unsubscribe)+" ")])]})):[t._t("buy",(function(){return[s("button",{staticClass:"order-info__buy-again btn",class:t.isNew?"btn-outline-secondary":"btn-primary",attrs:{type:"button"},on:{click:t.buyAgain}},[s("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.i19buyAgain)+" ")])]})),t.isUpdating||"open"!==t.status||t.fulfillmentStatus?t._e():s("button",{staticClass:"order-info__toggle btn btn-sm btn-danger",style:t.isNew?"display: none":null,on:{click:t.toggle}},[s("i",{staticClass:"i-exclamation-triangle mr-1"}),t._v(" "+t._s(t.i19cancelOrder)+" ")])]],2):t._e()])])])]):s("div",{key:"loading"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.accountOrdersUrl?s("a",{staticClass:"order-info__orders-link d-md-none btn btn-light",attrs:{href:t.accountOrdersUrl}},[s("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)},a=[]}}]);