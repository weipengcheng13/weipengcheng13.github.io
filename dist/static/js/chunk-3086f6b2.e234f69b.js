(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3086f6b2"],{"91dd":function(t,e,o){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,o,n){e=e||"&",o=o||"=";var l={};if("string"!==typeof t||0===t.length)return l;var s=/\+/g;t=t.split(e);var i=1e3;n&&"number"===typeof n.maxKeys&&(i=n.maxKeys);var c=t.length;i>0&&c>i&&(c=i);for(var u=0;u<c;++u){var p,d,f,m,v=t[u].replace(s,"%20"),b=v.indexOf(o);b>=0?(p=v.substr(0,b),d=v.substr(b+1)):(p=v,d=""),f=decodeURIComponent(p),m=decodeURIComponent(d),r(l,f)?a(l[f])?l[f].push(m):l[f]=[l[f],m]:l[f]=m}return l};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},b383:function(t,e,o){"use strict";e.decode=e.parse=o("91dd"),e.encode=e.stringify=o("e099")},dbf8:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-button",{attrs:{type:"success",size:"small"},on:{click:t.toAddHandler}},[t._v("添加")]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"small"}},[t._v("批量删除")]),t._v(" "),o("el-table",{attrs:{data:t.products}},[o("el-table-column",{attrs:{prop:"id",label:"编号"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"产品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"价格"}}),t._v(" "),o("el-table-column",{attrs:{prop:"description",label:"描述"}}),t._v(" "),o("el-table-column",{attrs:{prop:"categoryId",label:"所属分类"}}),t._v(" "),o("el-table-column",{attrs:{width:"650px",prop:"photo",label:"照片"}}),t._v(" "),o("el-table-column",{attrs:{prop:"id",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{attrs:{href:""},on:{click:function(o){return o.preventDefault(),t.toDeleteHandle(e.row.id)}}},[t._v("删除")]),t._v(" "),o("a",{attrs:{href:""},on:{click:function(o){return o.preventDefault(),t.toUpdateHandle(e.row)}}},[t._v("修改")])]}}])})],1),t._v(" "),o("el-dialog",{attrs:{title:"录入产品信息",visible:t.visible,width:"60%"},on:{"update:visible":function(e){t.visible=e}}},[o("el-form",{attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"产品名称"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"价格"}},[o("el-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"所属栏目"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.categoryId,callback:function(e){t.$set(t.form,"categoryId",e)},expression:"form.categoryId"}},t._l(t.options,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"介绍"}},[o("el-input",{attrs:{type:"textarea",placeholder:"请输入内容",row:"5"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"图片"}},[o("el-upload",{staticClass:"upload-demo",attrs:{action:"http://134.175.154.93:6677/file/upload","file-list":t.fileList,"on-success":t.uploadSuccessHandler,"list-type":"picture"}},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"small"},on:{click:t.closeModalHandler}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.submitHandler}},[t._v("确 定")])],1)],1)],1)},a=[],n=o("b775"),l=o("b383"),s=o.n(l),i={methods:{uploadSuccessHandler:function(t){var e="http://134.175.154.93:8888/group1/"+t.data.id;console.log(t),this.form.photo=e},loadData:function(){var t=this,e="http://123.57.92.11:6677/product/findAll";n["a"].get(e).then((function(e){t.products=e.data}))},loadCategoty:function(){var t=this,e="http://123.57.92.11:6677/category/findAll";n["a"].get(e).then((function(e){t.options=e.data,t.closeModalHandler()}))},submitHandler:function(){var t=this,e="http://123.57.92.11:6677/product/saveOrUpdate";Object(n["a"])({url:e,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:s.a.stringify(this.form)}).then((function(e){t.closeModalHandler(),t.loadData(),t.$message({type:"success",message:e.message})}))},toDeleteHandle:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="http://123.57.92.11:6677/product/deleteById?id="+t;n["a"].get(o).then((function(t){e.loadData(),e.$message({type:"success",message:t.message})}))}))},toUpdateHandle:function(t){this.filelist=[],this.form=t,this.visible=!0},closeModalHandler:function(){this.visible=!1},toAddHandler:function(){this.fileList=[],this.form={},this.visible=!0,this.loadData()}},data:function(){return{visible:!1,products:[],options:[],fileList:[],form:{}}},created:function(){this.loadData(),this.loadCategoty()}},c=i,u=o("2877"),p=Object(u["a"])(c,r,a,!1,null,"c933e1c4",null);e["default"]=p.exports},e099:function(t,e,o){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,o,s){return e=e||"&",o=o||"=",null===t&&(t=void 0),"object"===typeof t?n(l(t),(function(l){var s=encodeURIComponent(r(l))+o;return a(t[l])?n(t[l],(function(t){return s+encodeURIComponent(r(t))})).join(e):s+encodeURIComponent(r(t[l]))})).join(e):s?encodeURIComponent(r(s))+o+encodeURIComponent(r(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function n(t,e){if(t.map)return t.map(e);for(var o=[],r=0;r<t.length;r++)o.push(e(t[r],r));return o}var l=Object.keys||function(t){var e=[];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.push(o);return e}}}]);