webpackJsonp([1],{"2uYT":function(e,t){},"8d8P":function(e,t){},Am6X:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i=s("NYxO");a.default.use(i.a);var l=new i.a.Store({scoreData:{score:0,subject:"文科",position:0}}),o=s("zL8q"),n=s.n(o),r=(s("tvR6"),s("/ocq")),c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():t("router-view")],1)},staticRenderFns:[]},u=s("VU/8")({name:"mainLogin",data:function(){return{msg:""}},methods:{},mounted:function(){}},c,!1,null,null,null).exports,d={name:"mainLogin",data:function(){return{ruleForm:{name:"",password:""},rules:{name:[{required:!0,message:"请输入账号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"change"},{validator:function(e,t,s){!1===/^[0-9a-zA-Z]*$/g.test(t)||t.length<6||t.length>18?s(new Error("请输入6-18位数字或字母的组合")):s()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this,s=this;this.$refs[e].validate(function(e){if(!e)return t.$message("账号/密码错误"),!1;t.$message("登入填报成功"),sessionStorage.token=!0,setTimeout(function(){s.$router.push("/recordEntry")})})},resetForm:function(e){},goNext:function(){}},mounted:function(){console.log(this.$router)}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mainLogin"},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"账号",prop:"name"}},[s("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登入填报")])],1)],1)],1)},staticRenderFns:[]};var f=s("VU/8")(d,m,!1,function(e){s("Am6X")},"data-v-ed70cf64",null).exports,p={name:"recodeEntry",data:function(){return{ruleForm:{score:0,subject:"文科",position:0},rules:{score:[{required:!0,message:"请输入分数",trigger:"change"},{validator:function(e,t,s){!1===/^[0-9]*$/g.test(t)||t.length>8?s(new Error("请输入正确的分数")):s()},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){t.$store.scoreData=t.ruleForm,t.$router.push("/batchFill")})},resetForm:function(e){},goNext:function(){}},mounted:function(){console.log(this.$router)}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recodeEntry"},[s("el-steps",{staticStyle:{"margin-top":"20px"},attrs:{active:1,"finish-status":"success",simple:""}},[s("el-step",{attrs:{title:"步骤 1"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 2"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 3"}})],1),e._v(" "),s("div",{staticClass:"mainLogin"},[e._m(0),e._v(" "),s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"高考成绩",prop:"score"}},[s("el-input",{model:{value:e.ruleForm.score,callback:function(t){e.$set(e.ruleForm,"score",t)},expression:"ruleForm.score"}})],1),e._v(" "),s("el-form-item",{staticClass:"radio-group",attrs:{label:"您的科目"}},[s("el-radio-group",{model:{value:e.ruleForm.subject,callback:function(t){e.$set(e.ruleForm,"subject",t)},expression:"ruleForm.subject"}},[s("el-radio",{attrs:{label:"文科"}}),e._v(" "),s("el-radio",{attrs:{label:"理科"}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"您的位次"}},[s("el-input",{model:{value:e.ruleForm.position,callback:function(t){e.$set(e.ruleForm,"position",t)},expression:"ruleForm.position"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("下一步")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"recordTitle"},[t("span",{staticClass:"flag"},[this._v(" 1 ")]),this._v("输入您的真实高考成绩 ")])}]};var h=s("VU/8")(p,v,!1,function(e){s("mgnY")},"data-v-8bd8d060",null).exports,b=s("bOdI"),_=s.n(b),g=_()({name:"batchFill",data:function(){return{scoreData:{},batchData:[{text:"前往批填报学院",btnText:"提前批",introduce:"",subject:"",fraction:0},{text:"普通类第一批本科学院",btnText:"重点填报",introduce:"2017年控制线",subject:"文科",fraction:543},{text:"普通类第二批本科学院",btnText:"重点填报",introduce:"2017年控制线",subject:"文科",fraction:478},{text:"普通类专科一批学院",btnText:"重点填报",introduce:"2017年控制线",subject:"文科",fraction:448},{text:"普通类专科二批学院",btnText:"重点填报",introduce:"2017年控制线",subject:"文科",fraction:200}]}},methods:{},beforeRouteLeave:function(e,t,s){e.meta.keepAlive=!0,s()},mounted:function(){console.log(this.$store.scoreData),this.$store.scoreData?this.scoreData=this.$store.scoreData:this.$router.push("/recordEntry")}},"methods",{selectDeclare:function(e){var t=this,s=this;0==e?this.$alert("武警，军校，公安，司法，免费师范生，小语种，港校等特色院校及专业可以选择提前批！","提前批",{confirmButtonText:"立即填报",callback:function(e){sessionStorage.token=!0,setTimeout(function(){s.$router.push("/AcademySelect")},1500)}}):this.$alert("仅限于购买圆梦卡用户使用","标题名称",_()({confirmButtonText:"免费试用",cancelButtonText:"没有圆梦卡,购买",callback:function(e){t.$message({type:"info",message:"暂未开放"})}},"callback",function(e){sessionStorage.token=!0,setTimeout(function(){s.$router.push("/AcademySelect")},1500)}))}}),j={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"batchFill"},[s("el-steps",{staticStyle:{"margin-top":"20px"},attrs:{active:2,"finish-status":"success",simple:""}},[s("el-step",{attrs:{title:"步骤 1"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 2"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 3"}})],1),e._v(" "),s("el-container",[s("el-header",[s("el-row",[s("el-col",{attrs:{span:4}},[s("h3",[e._v("您的真实高考成绩")])]),e._v(" "),s("el-col",{attrs:{span:16}},[s("ul",{staticClass:"scoreUl"},[s("li",[s("label",[e._v("科目:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.subject))])]),e._v(" "),s("li",[s("label",[e._v("总分:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.score))])]),e._v(" "),s("li",[s("label",[e._v("位次:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.position))])])])])],1)],1),e._v(" "),s("el-main",[s("ul",{staticClass:"batchUl"},e._l(e.batchData,function(t,a){return s("li",[s("div",{staticClass:"left-li"},[s("div",[s("h2",[e._v(e._s(t.text))]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.fraction,expression:"item.fraction"}],staticClass:"introduce"},[e._v("\n                                "+e._s(t.introduce)+"\n                                "),s("span",[e._v("\n                                    "+e._s(t.subject)+"【"+e._s(t.fraction)+"】\n                                ")])])])]),e._v(" "),s("div",{staticClass:"right-li"},[s("el-button",{on:{click:function(t){e.selectDeclare(a)}}},[e._v(e._s(t.btnText))])],1)])}))])],1)],1)},staticRenderFns:[]};var D=s("VU/8")(g,j,!1,function(e){s("2uYT")},null,null).exports,x={name:"academySelect",data:function(){return{scoreData:{},radio:"1",selectList:[{title:"A志愿",campus:"",data:[],subject:{ject1:"",ject2:"",ject3:"",ject4:"",ject5:"",ject6:""}},{title:"B志愿",campus:"",data:[],subject:{ject1:"",ject2:"",ject3:"",ject4:"",ject5:"",ject6:""}},{title:"C志愿",campus:"",data:[],subject:{ject1:"",ject2:"",ject3:"",ject4:"",ject5:"",ject6:""}},{title:"D志愿",campus:"",data:[],subject:{ject1:"",ject2:"",ject3:"",ject4:"",ject5:"",ject6:""}},{title:"E志愿",campus:"",data:[],subject:{ject1:"",ject2:"",ject3:"",ject4:"",ject5:"",ject6:""}}],selectTitle:"",campus:"",artsData:[],scienceData:[],dialogVisible:!1,subjectData:[],subject:!0,subjectItem:[],subjectIndxe:""}},methods:{handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},getListData:function(){var e=this;this.axios({method:"get",url:"/static/list.json",dataType:"json",crossDomain:!0,cache:!1}).then(function(t){if(console.log("请求成功",t),"200"==t.status){var s=t.data;e.artsData=s.arts,e.scienceData=s.science}})},changeSubject:function(e,t){this.subject=!1,this.subjectIndxe="ject"+t,this.subjectData=[],this.dialogVisible=!0,this.subjectItem=e,this.subjectData=e.data},saveSubject:function(e,t,s){this.subjectItem.subject[this.subjectIndxe]=t[e].name,this.dialogVisible=!1},choiceSubject:function(e){if(this.subject=!0,this.selectTitle=e.title,this.campus=e.campus,this.subjectData=[],this.dialogVisible=!0,"理科"==this.scoreData.subject)for(var t in this.artsData)this.artsData[t].score<=this.scoreData.score&&this.subjectData.push(this.artsData[t]);else for(var s in this.scienceData)this.scienceData[s].score<=this.scoreData.score&&this.subjectData.push(this.scienceData[s]);for(var a in this.subjectData)for(var i in this.subjectData[a].disabled=!1,this.selectList)if(this.subjectData[a].name==this.selectList[i].campus){this.subjectData[a].disabled=!0;break}},changeDialog:function(e,t){for(var s in this.selectList)if(this.selectTitle==this.selectList[s].title){this.selectList[s].campus=t[e].name,this.selectList[s].data=t[e].specialities;break}this.dialogVisible=!1}},beforeRouteLeave:function(e,t,s){e.meta.keepAlive=!0,s()},mounted:function(){this.getListData(),this.$store.scoreData&&(this.scoreData=this.$store.scoreData)}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"batchFill"},[s("el-steps",{staticStyle:{"margin-top":"20px"},attrs:{active:3,"finish-status":"success",simple:""}},[s("el-step",{attrs:{title:"步骤 1"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 2"}}),e._v(" "),s("el-step",{attrs:{title:"步骤 3"}})],1),e._v(" "),s("el-container",[s("el-header",[s("el-row",[s("el-col",{attrs:{span:4}},[s("h3",[e._v("您的真实高考成绩")])]),e._v(" "),s("el-col",{attrs:{span:16}},[s("ul",{staticClass:"scoreUl"},[s("li",[s("label",[e._v("科目:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.subject))])]),e._v(" "),s("li",[s("label",[e._v("总分:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.score))])]),e._v(" "),s("li",[s("label",[e._v("位次:")]),e._v(" "),s("div",{staticClass:"scoreLiDiv"},[e._v(e._s(e.scoreData.position))])])])])],1)],1),e._v(" "),s("el-main",[s("div",{staticClass:"selectHead"},[s("ul",{staticClass:"autoHeight"},[s("li"),e._v(" "),s("li",[e._v("\n            学校\n            "),s("span",[s("i",{staticClass:"el-icon-question"}),e._v(" 志愿知识\n            ")])]),e._v(" "),s("li",[e._v("\n            专业\n            "),s("span",[s("i",{staticClass:"el-icon-question"}),e._v(" 志愿知识\n            ")])])])]),e._v(" "),s("div",{staticClass:"selectBody"},[s("div",{staticClass:"selectItem"},e._l(e.selectList,function(t,a){return s("ul",{staticClass:"autoHeight"},[s("li",[s("p",{staticClass:"vertical"},[e._v(e._s(t.title))])]),e._v(" "),s("li",[s("div",{staticClass:"selectNot2Body"},[s("div",{staticClass:"Not2Body"},[s("div",{staticClass:"Not2BodyBtn"},[s("el-input",{attrs:{type:"text",placeholder:"请选择学院",readonly:""},model:{value:t.campus,callback:function(s){e.$set(t,"campus",s)},expression:"item.campus"}}),e._v(" "),s("el-button",{on:{click:function(s){e.choiceSubject(t)}}},[e._v("选择"+e._s(t.title))])],1)]),e._v(" "),s("div",{staticClass:"Not2Bottom"},[s("div",{staticClass:"Not2BottomLeft"},[e._v("是否从专业调配")]),e._v(" "),s("div",{staticClass:"Not2BottomRight"},[s("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("是")]),e._v(" "),s("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("否")])],1)])])]),e._v(" "),s("li",{staticClass:"itemLi"},e._l(6,function(a,i){return s("div",{staticClass:"lastDiv"},[s("span",{staticClass:"lastNum"},[e._v(e._s(i+1))]),e._v(" "),s("el-input",{attrs:{type:"text",readonly:"readonly",placeholder:"请选择专业"+(i+1)},model:{value:t.subject["ject"+(i+1)],callback:function(s){e.$set(t.subject,"ject"+(i+1),s)},expression:"item.subject['ject'+(key+1)]"}}),e._v(" "),s("el-button",{on:{click:function(s){e.changeSubject(t,i+1)}}},[e._v("选择")])],1)}))])}))])])],1),e._v(" "),s("el-dialog",{staticClass:"dialogClass",attrs:{title:"以下学校适合作为志愿填报，请手动选择：",visible:e.dialogVisible,width:"80%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("el-table",{directives:[{name:"show",rawName:"v-show",value:e.subject,expression:"subject"}],staticStyle:{width:"100%"},attrs:{data:e.subjectData,"min-height":"250","max-height":"640"}},[s("el-table-column",{attrs:{fixed:"",prop:"name",label:"学校名称","min-width":"25%",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"major",label:"科目","min-width":"25%",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"score",label:"分数线","min-width":"25%",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"25%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small",disabled:t.row.disabled},nativeOn:{click:function(s){s.preventDefault(),e.changeDialog(t.$index,e.subjectData)}}},[e._v("选择院校")])]}}])})],1),e._v(" "),s("el-table",{directives:[{name:"show",rawName:"v-show",value:!e.subject,expression:"!subject"}],staticStyle:{width:"100%"},attrs:{data:e.subjectData,"min-height":"250","max-height":"640"}},[s("el-table-column",{attrs:{fixed:"",prop:"name",label:"专业名称","min-width":"60%",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作","min-width":"40%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(s){s.preventDefault(),e.saveSubject(t.$index,e.subjectData,t.row.id)}}},[e._v("选择专业")])]}}])})],1)],1)],1)},staticRenderFns:[]};var $=s("VU/8")(x,C,!1,function(e){s("pq7s")},null,null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var F=s("VU/8")({name:"layList",data:function(){return{}},methods:{},beforeRouteLeave:function(e,t,s){e.meta.keepAlive=!0,s()},mounted:function(){this.$store.scoreData&&(this.scoreData=this.$store.scoreData)}},y,!1,function(e){s("8d8P")},"data-v-1dcda47a",null).exports;a.default.use(r.a);var k=new r.a({routes:[{path:"/",name:"Index",component:u,meta:{keepAlive:!1,title:"登录志愿填报"},children:[{path:"/login",name:"MainLogin",component:f,meta:{keepAlive:!1,title:"登录志愿填报"}},{path:"/recordEntry",name:"recordEntry",component:h,meta:{keepAlive:!0,title:"录入成绩"}},{path:"/batchFill",name:"batchFill",component:D,meta:{keepAlive:!0,title:"选择批次填报"}},{path:"/AcademySelect",name:"AcademySelect",component:$,meta:{keepAlive:!0,title:"选择院校专业"}}]},{path:"/LayList",name:"LayList",component:F,meta:{keepAlive:!0,title:"选择院校专业弹窗"}}]}),w=s("mtWM"),L=s.n(w),S=s("mw3O"),T=s.n(S),A={name:"App",data:function(){return{}},mounted:function(){sessionStorage.token||this.$router.push("/login")}},B={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var I=s("VU/8")(A,B,!1,function(e){s("hhQe")},null,null).exports;a.default.use(o.Pagination),a.default.use(o.Dialog),a.default.use(o.Autocomplete),a.default.use(o.Dropdown),a.default.use(o.DropdownMenu),a.default.use(o.DropdownItem),a.default.use(o.Menu),a.default.use(o.Submenu),a.default.use(o.MenuItem),a.default.use(o.MenuItemGroup),a.default.use(o.Input),a.default.use(o.InputNumber),a.default.use(o.Radio),a.default.use(o.RadioGroup),a.default.use(o.RadioButton),a.default.use(o.Checkbox),a.default.use(o.CheckboxButton),a.default.use(o.CheckboxGroup),a.default.use(o.Switch),a.default.use(o.Select),a.default.use(o.Option),a.default.use(o.OptionGroup),a.default.use(o.Button),a.default.use(o.ButtonGroup),a.default.use(o.Table),a.default.use(o.TableColumn),a.default.use(o.DatePicker),a.default.use(o.TimeSelect),a.default.use(o.TimePicker),a.default.use(o.Popover),a.default.use(o.Tooltip),a.default.use(o.Breadcrumb),a.default.use(o.BreadcrumbItem),a.default.use(o.Form),a.default.use(o.FormItem),a.default.use(o.Tabs),a.default.use(o.TabPane),a.default.use(o.Tag),a.default.use(o.Tree),a.default.use(o.Alert),a.default.use(o.Slider),a.default.use(o.Icon),a.default.use(o.Row),a.default.use(o.Col),a.default.use(o.Upload),a.default.use(o.Progress),a.default.use(o.Badge),a.default.use(o.Card),a.default.use(o.Rate),a.default.use(o.Steps),a.default.use(o.Step),a.default.use(o.Carousel),a.default.use(o.CarouselItem),a.default.use(o.Collapse),a.default.use(o.CollapseItem),a.default.use(o.Cascader),a.default.use(o.ColorPicker),a.default.use(o.Transfer),a.default.use(o.Container),a.default.use(o.Header),a.default.use(o.Aside),a.default.use(o.Main),a.default.use(o.Footer),a.default.prototype.axios=L.a,a.default.prototype.qs=T.a,a.default.use(o.Loading.directive),a.default.prototype.$loading=o.Loading.service,a.default.prototype.$msgbox=o.MessageBox,a.default.prototype.$alert=o.MessageBox.alert,a.default.prototype.$confirm=o.MessageBox.confirm,a.default.prototype.$prompt=o.MessageBox.prompt,a.default.prototype.$notify=o.Notification,a.default.prototype.$message=o.Message,a.default.use(n.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:k,store:l,components:{App:I},template:"<App/>"}),k.beforeEach(function(e,t,s){e.meta.title&&(document.title=e.meta.title),s()})},hhQe:function(e,t){},mgnY:function(e,t){},pq7s:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.eea6b5f072d0205ea88d.js.map