webpackJsonp([1],{"02Hw":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),this._v(" "),this._m(0),this._v(" "),this._m(1)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"light-bg py-5",attrs:{id:"contact"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 text-center text-lg-left"},[s("p",{staticClass:"mb-2"},[s("span",{staticClass:"ti-location-pin mr-2"}),t._v(" 708/709 ADEOLA HOPEWELL STREET, VICTORIA ISLAND")]),t._v(" "),s("div",{staticClass:" d-block d-sm-inline-block"},[s("p",{staticClass:"mb-2"},[s("span",{staticClass:"ti-email mr-2"}),t._v(" "),s("a",{staticClass:"mr-4",attrs:{href:"mailto:yescenter@skyebankng.com"}},[s("span",{staticClass:"__cf_email__"},[t._v("yescenter@skyebankng.com")])])])]),t._v(" "),s("div",{staticClass:"d-block d-sm-inline-block"},[s("p",{staticClass:"mb-0"},[s("span",{staticClass:"ti-headphone-alt mr-2"}),t._v(" "),s("a",{attrs:{href:"tel:0700 SKYEBANK"}},[t._v("0700 SKYEBANK")])])])]),t._v(" "),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"social-icons"},[s("a",{attrs:{href:"http://www.facebook.com/skyebanknigeriaplc"}},[s("span",{staticClass:"ti-facebook"})]),t._v(" "),s("a",{attrs:{href:"https://twitter.com/SkyeBankNigeria"}},[s("span",{staticClass:"ti-twitter-alt"})]),t._v(" "),s("a",{attrs:{href:"http://www.youtube.com/user/skyebanknigeriaplc"}},[s("span",{staticClass:"ti-youtube"})]),t._v(" "),s("a",{attrs:{href:"https://plus.google.com/+Skyebankngplc"}},[s("span",{staticClass:"ti-google"})]),t._v(" "),s("a",{attrs:{href:"http://www.linkedin.com/company/skye-bank-plc"}},[s("span",{staticClass:"ti-linkedin"})])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"my-5 text-center"},[s("p",{staticClass:"mb-2"},[s("small",[t._v("COPYRIGHT © 2017. ALL RIGHTS RESERVED. SKYE BANK PLC BY "),s("a",{attrs:{href:"https://switchcaseafrica.org/"}},[t._v("SwitchCaseAfrica")])])]),t._v(" "),s("small",[s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Concerns and Complaints")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Privacy Policy")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Sitemap")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Fraud-Centre")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("ATM Locator")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Media Centre")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Help and Support")]),t._v(" "),s("a",{staticClass:"m-2",staticStyle:{color:"#3B6AA0"},attrs:{href:"#"}},[t._v("Blow A Whistle")])])])}]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("Ui8p")},null,null).exports,r=s("/ocq"),l={name:"Home",data:function(){return{}},methods:{list1:function(){$("#list1 .dropdown-content").toggle(),$("#list2 .dropdown-content").hide(),$("#list3 .dropdown-content").hide(),$("#list4 .dropdown-content").hide(),$("#list5 .dropdown-content").hide()},list2:function(){$("#list2 .dropdown-content").toggle(),$("#list1 .dropdown-content").hide(),$("#list3 .dropdown-content").hide(),$("#list4 .dropdown-content").hide(),$("#list5 .dropdown-content").hide()},list3:function(){$("#list3 .dropdown-content").toggle(),$("#list1 .dropdown-content").hide(),$("#list2 .dropdown-content").hide(),$("#list4 .dropdown-content").hide(),$("#list5 .dropdown-content").hide()},list4:function(){$("#list4 .dropdown-content").toggle(),$("#list1 .dropdown-content").hide(),$("#list2 .dropdown-content").hide(),$("#list3 .dropdown-content").hide(),$("#list5 .dropdown-content").hide()},list5:function(){$("#list5 .dropdown-content").toggle(),$("#list1 .dropdown-content").hide(),$("#list2 .dropdown-content").hide(),$("#list3 .dropdown-content").hide(),$("#list4 .dropdown-content").hide()},disableAllBtns:function(){$("#list5 .dropdown-content").hide(),$("#list1 .dropdown-content").hide(),$("#list2 .dropdown-content").hide(),$("#list3 .dropdown-content").hide(),$("#list4 .dropdown-content").hide()},handle_sub_clicks:function(t){console.log($(".dropdown-submenu a.sublinks")),alert("hy"),$("#"+t).next("ul").toggle()},general_click_handler:function(t){t.stopPropagation(),t.preventDefault()}},created:function(){}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"nav-menu fixed-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("nav",{staticClass:"navbar navbar-dark navbar-expand-lg"},[t._m(0),t._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.disableAllBtns}},[s("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),t._m(1)])])])])]),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"client-logos my-5"},[s("div",{staticClass:"container text-center"},[s("nav",{staticClass:"navbar navbar-dark navbar-expand-lg",staticStyle:{"background-color":"#162252","padding-top":"30px","padding-bottom":"30px"}},[t._m(3),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"sub_navbar"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("div",{staticClass:"dropdown nav-item"},[t._m(4),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("li",{staticClass:"dropdown-submenu",attrs:{id:"current"},on:{click:function(a){t.general_click_handler,t.handle_sub_clicks("current")}}},[t._m(5),t._v(" "),t._m(6)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)])])])])]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-brand",staticStyle:{background:"white",padding:"5px","border-radius":"6px"},attrs:{href:"/"}},[a("img",{staticClass:"img-fluid",attrs:{src:"static/images/logo_.png",width:"120px",alt:"logo"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("About Skye \n                                        "),s("span",{staticClass:"caret"}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("(current)")])]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems active",attrs:{role:"menuitem",href:"#"}},[t._v("Our Bank")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Our History")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Business Operations\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Management and Board\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Awards, Ratings and Recognitions\n                                    ")])])]),t._v(" "),s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("Our Subsidiaries \n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Skye Bank Sierra Leone Limited")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Skye Bank Gambia Limited")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Skye Bank Guinea Limited\n                                    ")])])]),t._v(" "),s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("Sustainability & CSR \n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Sustainable Economic Growth")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Responsible Banking")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Community Investments\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Financial Literacy and Inclusion\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Corporate Social Responsibility\n                                    ")])])]),t._v(" "),s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("Skye Careers \n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Our People, Values and Culture")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("A career with Skye Bank")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Learning and Development\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Opportunities at Skye bank\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     The Skye Family\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Apply Now !\n                                    ")])])]),t._v(" "),s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("Investor Relations\n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Investor/Analyst Presentations")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Financial reports")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Regulatory Publications\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Key Milestones\n                                    ")])])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"btn btn-outline-light my-3 my-sm-0 ml-lg-3",attrs:{href:"#"}},[t._v("Skye-Xperience")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("header",{staticClass:"bg-gradient",attrs:{id:"home"}},[a("div",{staticClass:"container mt-5"},[a("h1",[this._v("SkyeBank a new banking experience")]),this._v(" "),a("p",{staticClass:"tagline"},[this._v("The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go. ")])]),this._v(" "),a("div",{staticClass:"img-holder mt-3"},[a("img",{staticClass:"img-fluid",attrs:{src:"static/images/iphonex.png",alt:"phone"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#sub_navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[this._v("Retail Banking\n                                        "),a("span",{staticClass:"caret"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"sublinks",attrs:{href:"#"}},[this._v("Current Accounts "),a("span",{staticClass:"caret"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"}},[this._v("Skye Current Account")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[this._v("Skye Select")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[this._v("Skye Global Account")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"dropdown-submenu"},[s("a",{staticClass:"sublinks",attrs:{href:"#"}},[t._v("Savings Accounts "),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Save Plus")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Wise Account")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Flex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Ease")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Rainbow Savings Account")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Campus Plus")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Campus Plus Ref n Win Promo")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Dollar Domiciliary")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"dropdown-submenu"},[a("a",{staticClass:"sublinks",attrs:{href:"#"}},[this._v("Retail Loans "),a("span",{staticClass:"caret"})]),this._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("a",{attrs:{href:"#"}},[this._v("Skye Salary Advance")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[this._v("Personal Term Loan")])]),this._v(" "),a("li",[a("a",{attrs:{href:"#"}},[this._v("Skye Auto Lease")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"dropdown-submenu"},[s("a",{staticClass:"sublinks",attrs:{href:"#"}},[t._v("Money Transfer "),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("Western Union")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("African Payment Service")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("MoneyGram")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye FlitCash")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("RIA Money Transfer Service")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[this._v("Priority Fast Track")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[this._v("Debit/Credit Card")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[this._v("Saturday Banking")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[this._v("Online Account Opening")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("a",{attrs:{href:"#"}},[this._v("Not-for-profit Organizations")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("SMEs\n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Loan Products")])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Non Loan Products")])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Intervention Funds")])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Skye Pearl")])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Growing and Nurturing Your Business")])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Easy Access to USD for SME Imports")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("Coporate Banking\n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Corporate Banking Sectors")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Products and Value Proposition")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Project and Structured Finance\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     International Funding\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     International Trade Services\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Aviation and Maritime Business\n                                    ")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dropdown nav-item"},[s("a",{staticClass:"nav-link dropdown nav-item dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",href:"#"}},[t._v("E-Business\n                                        "),s("span",{staticClass:"caret"})]),t._v(" "),s("div",{staticClass:"dropdown-menu"},[s("li",{staticClass:"dropdown-submenu"},[s("a",{staticClass:"sublinks",attrs:{href:"#"}},[t._v("Card Services "),s("span",{staticClass:"caret"})]),t._v(" "),s("ul",{staticClass:"dropdown-menu"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Credit Cards")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Debit Cards")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Skye Prepaid Cards")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Instant Card Issuance")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#"}},[t._v("Kegow Virtual Cards")])])])]),t._v(" "),s("li",[s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("Business Channels")])]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Learning and Development\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Opportunities at Skye bank\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     The Skye Family\n                                    ")]),t._v(" "),s("a",{staticClass:"menuitems",attrs:{role:"menuitem",href:"#"}},[t._v("\n                                     Apply Now !\n                                    ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"btn btn-outline-light my-3 my-sm-0 ml-lg-3",attrs:{href:"#"}},[this._v("Internet Banking")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section light-bg",attrs:{id:"features"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("small",[t._v("HIGHLIGHTS")]),t._v(" "),s("h3",[t._v("What's Special")])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"card features"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("span",{staticClass:"ti-face-smile gradient-fill ti-3x mr-3"}),t._v(" "),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"card-title"},[t._v("Simple")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque ")])])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"card features"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("span",{staticClass:"ti-settings gradient-fill ti-3x mr-3"}),t._v(" "),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"card-title"},[t._v("Customize")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque ")])])])])])]),t._v(" "),s("div",{staticClass:"col-12 col-lg-4"},[s("div",{staticClass:"card features"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"media"},[s("span",{staticClass:"ti-lock gradient-fill ti-3x mr-3"}),t._v(" "),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"card-title"},[t._v("Secure")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque ")])])])])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section light-bg",staticStyle:{"background-color":"#e2e26c"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"static/images/Slider.jpg",alt:"dual phone"}})]),this._v(" "),a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",[a("div",{staticClass:"box-icon",staticStyle:{"background-color":"transparent"}}),this._v(" "),a("h2",[this._v("MasterPass QR!")]),this._v(" "),a("p",{staticClass:"mb-4"},[this._v("Use Skye Bank Masterpass QR from MasterCard the fast, secured and convineient way to pay for goods and services from your smart phone. ")]),this._v(" "),a("a",{staticClass:"btn btn-primary",staticStyle:{height:"50px","line-height":"35px",background:"#1d4063"},attrs:{href:"#"}},[this._v("Sign-up as Merchant")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section light-bg",staticStyle:{"background-color":"#f9f9f0"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"static/images/Slider_002.jpg",alt:"dual phone"}})]),this._v(" "),a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",[a("div",{staticClass:"box-icon"},[a("span",{staticClass:"ti-rocket gradient-fill ti-3x"})]),this._v(" "),a("h2",[this._v("Discover the Skye-Xperience")]),this._v(" "),a("p",{staticClass:"mb-4"},[this._v("SkyeXperience our new digital banking solution designed for a simpler and improved user Xperience. ")]),this._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("Try it")])])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section light-bg",staticStyle:{"background-color":"#e3f2fd"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid",attrs:{src:"static/images/Slider_003.jpg",alt:"dual phone"}})]),this._v(" "),a("div",{staticClass:"col-md-6 d-flex align-items-center"},[a("div",[a("div",{staticClass:"box-icon"},[a("span",{staticClass:"ti-rocket gradient-fill ti-3x"})]),this._v(" "),a("h2",[this._v("EASY ACCESS TO DOLLARS FOR SME IMPORTS")]),this._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("Learn More")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section light-bg"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("small",[t._v("FEATURES")]),t._v(" "),s("h3",[t._v("Do more with our app")])]),t._v(" "),s("ul",{staticClass:"nav nav-tabs nav-justified",attrs:{role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#communication"}},[t._v("Communication")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#schedule"}},[t._v("Scheduling")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#messages"}},[t._v("Messages")])]),t._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#livechat"}},[t._v("Live Chat")])])]),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade show active",attrs:{id:"communication"}},[s("div",{staticClass:"d-flex flex-column flex-lg-row"},[s("img",{staticClass:"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0",attrs:{src:"static/images/graphic.png",alt:"graphic"}}),t._v(" "),s("div",[s("h2",[t._v("Communicate with ease")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("Uniquely underwhelm premium outsourcing with proactive leadership skills. ")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\n                              congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\n                          ")]),t._v(" "),s("p",[t._v(" malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\n                              sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\n                          ")])])])]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{id:"schedule"}},[s("div",{staticClass:"d-flex flex-column flex-lg-row"},[s("div",[s("h2",[t._v("Scheduling when you want")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("Uniquely underwhelm premium outsourcing with proactive leadership skills. ")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\n                              congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\n                          ")]),t._v(" "),s("p",[t._v(" malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\n                              sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\n                          ")])]),t._v(" "),s("img",{staticClass:"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0",attrs:{src:"static/images/graphic.png",alt:"graphic"}})])]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{id:"messages"}},[s("div",{staticClass:"d-flex flex-column flex-lg-row"},[s("img",{staticClass:"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0",attrs:{src:"static/images/graphic.png",alt:"graphic"}}),t._v(" "),s("div",[s("h2",[t._v("Realtime Messaging service")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("Uniquely underwhelm premium outsourcing with proactive leadership skills. ")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\n                              congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\n                          ")]),t._v(" "),s("p",[t._v(" malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\n                              sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\n                          ")])])])]),t._v(" "),s("div",{staticClass:"tab-pane fade",attrs:{id:"livechat"}},[s("div",{staticClass:"d-flex flex-column flex-lg-row"},[s("div",[s("h2",[t._v("Live chat when you needed")]),t._v(" "),s("p",{staticClass:"lead"},[t._v("Uniquely underwhelm premium outsourcing with proactive leadership skills. ")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla\n                              congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,\n                          ")]),t._v(" "),s("p",[t._v(" malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor\n                              sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam.\n                          ")])]),t._v(" "),s("img",{staticClass:"img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0",attrs:{src:"static/images/graphic.png",alt:"graphic"}})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section light-bg"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 d-flex align-items-center"},[s("ul",{staticClass:"list-unstyled ui-steps"},[s("li",{staticClass:"media"},[s("div",{staticClass:"circle-icon mr-4"},[t._v("1")]),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",[t._v("Create an Account")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ")])])]),t._v(" "),s("li",{staticClass:"media my-4"},[s("div",{staticClass:"circle-icon mr-4"},[t._v("2")]),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",[t._v("Share with friends")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem eveniet")])])]),t._v(" "),s("li",{staticClass:"media"},[s("div",{staticClass:"circle-icon mr-4"},[t._v("3")]),t._v(" "),s("div",{staticClass:"media-body"},[s("h5",[t._v("Enjoy your life")]),t._v(" "),s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium obcaecati vel exercitationem ")])])])])]),t._v(" "),s("div",{staticClass:"col-md-4"},[s("img",{staticClass:"img-fluid",attrs:{src:"static/images/iphonex.png",alt:"iphone"}})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("small",[t._v("TESTIMONIALS")]),t._v(" "),s("h3",[t._v("What our Customers Says")])]),t._v(" "),s("div",{staticClass:"testimonials owl-carousel"},[s("div",{staticClass:"testimonials-single"},[s("img",{staticClass:"client-img",attrs:{src:"static/images/client.png",alt:"client"}}),t._v(" "),s("blockquote",{staticClass:"blockquote"},[t._v("Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.")]),t._v(" "),s("h5",{staticClass:"mt-4 mb-2"},[t._v("Crystal Gordon")]),t._v(" "),s("p",{staticClass:"text-primary"},[t._v("United States")])]),t._v(" "),s("div",{staticClass:"testimonials-single"},[s("img",{staticClass:"client-img",attrs:{src:"static/images/client.png",alt:"client"}}),t._v(" "),s("blockquote",{staticClass:"blockquote"},[t._v("Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.")]),t._v(" "),s("h5",{staticClass:"mt-4 mb-2"},[t._v("Crystal Gordon")]),t._v(" "),s("p",{staticClass:"text-primary"},[t._v("United States")])]),t._v(" "),s("div",{staticClass:"testimonials-single"},[s("img",{staticClass:"client-img",attrs:{src:"static/images/client.png",alt:"client"}}),t._v(" "),s("blockquote",{staticClass:"blockquote"},[t._v("Uniquely streamline highly efficient scenarios and 24/7 initiatives. Conveniently embrace multifunctional ideas through proactive customer service. Distinctively conceptualize 2.0 intellectual capital via user-centric partnerships.")]),t._v(" "),s("h5",{staticClass:"mt-4 mb-2"},[t._v("Crystal Gordon")]),t._v(" "),s("p",{staticClass:"text-primary"},[t._v("United States")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"section light-bg",attrs:{id:"gallery"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"section-title"},[a("small",[this._v("GALLERY")]),this._v(" "),a("h3",[this._v("App Screenshots")])]),this._v(" "),a("div",{staticClass:"img-gallery owl-carousel owl-theme"},[a("img",{attrs:{src:"static/images/skyeHome.jpeg",alt:"image",height:"550"}}),this._v(" "),a("img",{attrs:{src:"static/images/screen2.jpg",alt:"image"}}),this._v(" "),a("img",{attrs:{src:"static/images/screen3.jpg",alt:"image"}}),this._v(" "),a("img",{attrs:{src:"static/images/screen1.jpg",alt:"image"}})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section pt-0"},[s("div",{staticClass:"container"},[s("div",{staticClass:"section-title"},[s("small",[t._v("FAQ")]),t._v(" "),s("h3",[t._v("Frequently Asked Questions")])]),t._v(" "),s("div",{staticClass:"row pt-4"},[s("div",{staticClass:"col-md-6"},[s("h4",{staticClass:"mb-3"},[t._v("Can I try before I buy?")]),t._v(" "),s("p",{staticClass:"light-font mb-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. ")]),t._v(" "),s("h4",{staticClass:"mb-3"},[t._v("What payment methods do you accept?")]),t._v(" "),s("p",{staticClass:"light-font mb-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. ")])]),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h4",{staticClass:"mb-3"},[t._v("Can I change my plan later?")]),t._v(" "),s("p",{staticClass:"light-font mb-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. ")]),t._v(" "),s("h4",{staticClass:"mb-3"},[t._v("Do you have a contract?")]),t._v(" "),s("p",{staticClass:"light-font mb-5"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. ")])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section bg-gradient"},[s("div",{staticClass:"container"},[s("div",{staticClass:"call-to-action"},[s("div",{staticClass:"box-icon"},[s("span",{staticClass:"ti-mobile gradient-fill ti-3x"})]),t._v(" "),s("h2",[t._v("Download Anywhere")]),t._v(" "),s("p",{staticClass:"tagline"},[t._v("Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise-wide methods of empowerment. ")]),t._v(" "),s("div",{staticClass:"my-4"},[s("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[s("img",{attrs:{src:"static/images/appleicon.png",alt:"icon"}}),t._v(" App Store")]),t._v(" "),s("a",{staticClass:"btn btn-light",attrs:{href:"#"}},[s("img",{attrs:{src:"static/images/playicon.png",alt:"icon"}}),t._v(" Google play")])]),t._v(" "),s("p",{staticClass:"text-primary"},[s("small",[s("i",[t._v("*Works on iOS 10.0.5+, Android Kitkat and above. ")])])])])])])}]};var o=s("VU/8")(l,c,!1,function(t){s("02Hw")},"data-v-6961e739",null).exports;e.a.use(r.a);var u=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:o}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:u,components:{App:n},template:"<App/>"})},Ui8p:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.b560c519bffcbfdbd529.js.map