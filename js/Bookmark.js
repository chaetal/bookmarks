define("example_bookmark/Bookmark", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Bookmark');
smalltalk.packages["Bookmark"].transport = {"type":"amd","amdNamespace":"example_bookmark"};

smalltalk.addClass('Bookmark', smalltalk.Widget, ['url', 'comment', 'author', 'date'], 'Bookmark');
smalltalk.addMethod(
smalltalk.method({
selector: "author",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@author"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"author",{},smalltalk.Bookmark)})},
args: [],
source: "author\x0a\x09^author",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "author:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@author"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"author:",{anObject:anObject},smalltalk.Bookmark)})},
args: ["anObject"],
source: "author: anObject\x0a  author:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "comment",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@comment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"comment",{},smalltalk.Bookmark)})},
args: [],
source: "comment\x0a\x09^comment",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "comment:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@comment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"comment:",{anObject:anObject},smalltalk.Bookmark)})},
args: ["anObject"],
source: "comment: anObject\x0a  comment:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "date",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@date"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"date",{},smalltalk.Bookmark)})},
args: [],
source: "date\x0a\x09^date",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "date:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@date"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"date:",{anObject:anObject},smalltalk.Bookmark)})},
args: ["anObject"],
source: "date: anObject\x0a  date:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "equaUrll:",
category: 'accessing',
fn: function (aUrl){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._url()).__eq(aUrl);
return $1;
}, function($ctx1) {$ctx1.fill(self,"equaUrll:",{aUrl:aUrl},smalltalk.Bookmark)})},
args: ["aUrl"],
source: "equaUrll: aUrl\x0a^self url = aUrl. ",
messageSends: ["=", "url"],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "equal:",
category: 'accessing',
fn: function (aBookmark){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(aBookmark)._url();
$ctx1.sendIdx["url"]=1;
$1=_st($2).__eq(self._url());
return $1;
}, function($ctx1) {$ctx1.fill(self,"equal:",{aBookmark:aBookmark},smalltalk.Bookmark)})},
args: ["aBookmark"],
source: "equal: aBookmark\x0a^(aBookmark url )= self url",
messageSends: ["=", "url"],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Bookmark)})},
args: [],
source: "initialize\x0a\x22надо удалить\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Bookmark)})},
args: [],
source: "new\x0a\x22тоже надо удалить\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@url"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.Bookmark)})},
args: [],
source: "url\x0a\x09^url",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@url"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"url:",{anObject:anObject},smalltalk.Bookmark)})},
args: ["anObject"],
source: "url: anObject\x0a\x09url:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.Bookmark);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.Bookmark.klass.superclass.fn.prototype._new.apply(_st(self), []))._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.Bookmark.klass)})},
args: [],
source: "new\x0a\x0a\x09^super new initialize",
messageSends: ["initialize", "new"],
referencedClasses: []
}),
smalltalk.Bookmark.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithUrl:comment:author:date:",
category: 'not yet classified',
fn: function (urlString,commentString,authorString,aDate){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._url_(urlString);
_st($2)._comment_(commentString);
_st($2)._author_(authorString);
_st($2)._date_(aDate);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithUrl:comment:author:date:",{urlString:urlString,commentString:commentString,authorString:authorString,aDate:aDate},smalltalk.Bookmark.klass)})},
args: ["urlString", "commentString", "authorString", "aDate"],
source: "newWithUrl: urlString comment: commentString author: authorString date: aDate\x0a\x0a^( self new url: urlString; comment: commentString; author: authorString; date: aDate; yourself)",
messageSends: ["url:", "new", "comment:", "author:", "date:", "yourself"],
referencedClasses: []
}),
smalltalk.Bookmark.klass);


smalltalk.addClass('BookmarkList', smalltalk.Widget, ['listener', 'bookmarkList'], 'Bookmark');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'not yet classified',
fn: function (aBookmark){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@bookmarkList"])._add_(aBookmark);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aBookmark:aBookmark},smalltalk.BookmarkList)})},
args: ["aBookmark"],
source: "add: aBookmark\x0abookmarkList add: aBookmark",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "at:",
category: 'not yet classified',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@bookmarkList"])._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anInteger:anInteger},smalltalk.BookmarkList)})},
args: ["anInteger"],
source: "at: anInteger\x0a^bookmarkList at: anInteger",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "bookmarkList",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@bookmarkList"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bookmarkList",{},smalltalk.BookmarkList)})},
args: [],
source: "bookmarkList\x0a^bookmarkList",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@bookmarkList"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.BookmarkList)})},
args: [],
source: "initialize\x0a bookmarkList:= OrderedCollection new.",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "listener",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@listener"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"listener",{},smalltalk.BookmarkList)})},
args: [],
source: "listener\x0a^listener",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "listener:",
category: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listener"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"listener:",{anObject:anObject},smalltalk.BookmarkList)})},
args: ["anObject"],
source: "listener: anObject\x0alistener:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@bookmarkList"])._last())._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextId",{},smalltalk.BookmarkList)})},
args: [],
source: "nextId\x0a\x22удалить\x22\x0a^bookmarkList last id",
messageSends: ["id", "last"],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:",
category: 'not yet classified',
fn: function (aBookmark){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@bookmarkList"])._remove_(aBookmark);
return self}, function($ctx1) {$ctx1.fill(self,"remove:",{aBookmark:aBookmark},smalltalk.BookmarkList)})},
args: ["aBookmark"],
source: "remove: aBookmark\x0abookmarkList remove: aBookmark",
messageSends: ["remove:"],
referencedClasses: []
}),
smalltalk.BookmarkList);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@bookmarkList"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.BookmarkList)})},
args: [],
source: "size\x0a^bookmarkList size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.BookmarkList);


smalltalk.BookmarkList.klass.iVarNames = ['defaultBookmarkList'];
smalltalk.addMethod(
smalltalk.method({
selector: "createExample1",
category: 'not yet classified',
fn: function (){
var self=this;
var bml;
function $Bookmark(){return smalltalk.Bookmark||(typeof Bookmark=="undefined"?nil:Bookmark)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
bml=_st(self._new())._initialize();
$1=bml;
$2=$1;
$3=_st($Bookmark())._newWithUrl_comment_author_date_("http://url.ru","коментарий1","Петров Иван","21.01,2014");
$ctx1.sendIdx["newWithUrl:comment:author:date:"]=1;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$4=$1;
$5=_st($Bookmark())._newWithUrl_comment_author_date_("http://mail.ru","коментарий2","Иванов Петр…","22.01.2014");
$ctx1.sendIdx["newWithUrl:comment:author:date:"]=2;
_st($4)._add_($5);
$ctx1.sendIdx["add:"]=2;
$6=_st($1)._add_(_st($Bookmark())._newWithUrl_comment_author_date_("http://url2.ru","коментарий3","Крылов Сергей","22.01,2014"));
$7=bml;
return $7;
}, function($ctx1) {$ctx1.fill(self,"createExample1",{bml:bml},smalltalk.BookmarkList.klass)})},
args: [],
source: "createExample1\x0a|bml|\x0abml := self new initialize.\x0abml add: (Bookmark newWithUrl: 'http://url.ru' comment: 'коментарий1' author: 'Петров Иван' date: '21.01,2014' ); add: (Bookmark newWithUrl: 'http://mail.ru' comment: 'коментарий2' author: 'Иванов Петр…' date: '22.01.2014');\x0a add:(Bookmark newWithUrl: 'http://url2.ru' comment: 'коментарий3' author: 'Крылов Сергей' date: '22.01,2014' ).\x0a ^ bml",
messageSends: ["initialize", "new", "add:", "newWithUrl:comment:author:date:"],
referencedClasses: ["Bookmark"]
}),
smalltalk.BookmarkList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultBookmarkList",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@defaultBookmarkList"];
if(($receiver = $2) == nil || $receiver == null){
self["@defaultBookmarkList"]=self._createExample1();
$1=self["@defaultBookmarkList"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultBookmarkList",{},smalltalk.BookmarkList.klass)})},
args: [],
source: "defaultBookmarkList \x0a^ defaultBookmarkList  ifNil: [defaultBookmarkList  := self createExample1].",
messageSends: ["ifNil:", "createExample1"],
referencedClasses: []
}),
smalltalk.BookmarkList.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize1",
category: 'not yet classified',
fn: function (){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize1",{collection:collection},smalltalk.BookmarkList.klass)})},
args: [],
source: "initialize1\x0a\x22надо удалить\x22\x0a|collection|",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarkList.klass);


smalltalk.addClass('BookmarksView', smalltalk.Widget, ['model', 'table', 'activeRecord', 'lastId'], 'Bookmark');
smalltalk.addMethod(
smalltalk.method({
selector: "activeRecord",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@activeRecord"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"activeRecord",{},smalltalk.BookmarksView)})},
args: [],
source: "activeRecord\x0a\x0a^ activeRecord",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "addBookmark:comment:author:date:html:",
category: 'action',
fn: function (anUrl,aComment,anAuthor,aDate,html){
var self=this;
var aBookmark,aTableRecord,tableView,Id;
function $Bookmark(){return smalltalk.Bookmark||(typeof Bookmark=="undefined"?nil:Bookmark)}
return smalltalk.withContext(function($ctx1) { 
aBookmark=_st($Bookmark())._newWithUrl_comment_author_date_(anUrl,aComment,anAuthor,aDate);
_st(self["@model"])._add_(aBookmark);
self._addDrawOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"addBookmark:comment:author:date:html:",{anUrl:anUrl,aComment:aComment,anAuthor:anAuthor,aDate:aDate,html:html,aBookmark:aBookmark,aTableRecord:aTableRecord,tableView:tableView,Id:Id},smalltalk.BookmarksView)})},
args: ["anUrl", "aComment", "anAuthor", "aDate", "html"],
source: "addBookmark: anUrl comment: aComment author: anAuthor date: aDate html: html\x0a|aBookmark aTableRecord tableView Id  | \x0a\x0a\x22tableView:= '#bookmark tr:last' asJQuery.\x22\x0aaBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).\x0amodel add: aBookmark.\x0aself addDrawOn: html.\x0a\x22Id:=self nextId.\x22\x0a\x22aTableRecord:=TableRecord newWithId: Id object: aBookmark.\x22\x0a\x22table at:Id put: aTableRecord.\x22\x0a\x22self halt.\x22\x0a\x22tableView after:[ self renderBookmarkAdd: aTableRecord on: html].\x22",
messageSends: ["newWithUrl:comment:author:date:", "add:", "addDrawOn:"],
referencedClasses: ["Bookmark"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "addBookmarkOld:comment:author:date:html:",
category: 'action',
fn: function (anUrl,aComment,anAuthor,aDate,html){
var self=this;
var aBookmark,aTableRecord,tableView,Id;
function $Bookmark(){return smalltalk.Bookmark||(typeof Bookmark=="undefined"?nil:Bookmark)}
function $TableRecord(){return smalltalk.TableRecord||(typeof TableRecord=="undefined"?nil:TableRecord)}
return smalltalk.withContext(function($ctx1) { 
tableView="#bookmark tr:last"._asJQuery();
aBookmark=_st($Bookmark())._newWithUrl_comment_author_date_(anUrl,aComment,anAuthor,aDate);
_st(self["@model"])._add_(aBookmark);
Id=self._nextId();
aTableRecord=_st($TableRecord())._newWithId_object_(Id,aBookmark);
_st(self["@table"])._at_put_(Id,aTableRecord);
_st(tableView)._after_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderBookmarkAdd_on_(aTableRecord,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addBookmarkOld:comment:author:date:html:",{anUrl:anUrl,aComment:aComment,anAuthor:anAuthor,aDate:aDate,html:html,aBookmark:aBookmark,aTableRecord:aTableRecord,tableView:tableView,Id:Id},smalltalk.BookmarksView)})},
args: ["anUrl", "aComment", "anAuthor", "aDate", "html"],
source: "addBookmarkOld: anUrl comment: aComment author: anAuthor date: aDate html: html\x0a|aBookmark aTableRecord tableView Id  | \x0a\x0a\x22doc:= '#document' asJQuery.\x22\x0atableView:= '#bookmark tr:last' asJQuery.\x0aaBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).\x0amodel add: aBookmark.\x0aId:=self nextId.\x0aaTableRecord:=TableRecord newWithId: Id object: aBookmark.\x0atable at:Id put: aTableRecord.\x0a\x22self halt.\x22\x0atableView after:[ self renderBookmarkAdd: aTableRecord on: html].",
messageSends: ["asJQuery", "newWithUrl:comment:author:date:", "add:", "nextId", "newWithId:object:", "at:put:", "after:", "renderBookmarkAdd:on:"],
referencedClasses: ["Bookmark", "TableRecord"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "addDrawOn:",
category: 'action',
fn: function (html){
var self=this;
var aBookmark,aTableRecord,tableView,Id;
function $TableRecord(){return smalltalk.TableRecord||(typeof TableRecord=="undefined"?nil:TableRecord)}
return smalltalk.withContext(function($ctx1) { 
tableView="#bookmark tr:last"._asJQuery();
Id=self._nextId();
aTableRecord=_st($TableRecord())._newWithId_object_(Id,_st(self["@model"])._at_(_st(self["@model"])._size()));
_st(self["@table"])._at_put_(Id,aTableRecord);
_st(tableView)._after_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderBookmarkAdd_on_(aTableRecord,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addDrawOn:",{html:html,aBookmark:aBookmark,aTableRecord:aTableRecord,tableView:tableView,Id:Id},smalltalk.BookmarksView)})},
args: ["html"],
source: "addDrawOn: html\x0a|aBookmark aTableRecord tableView Id  | \x0a\x0a\x22doc:= '#document' asJQuery.\x22\x0atableView:= '#bookmark tr:last' asJQuery.\x0a\x22aBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).\x0amodel add: aBookmark.\x22\x0aId:=self nextId.\x0aaTableRecord:=TableRecord newWithId: Id object: (model at: model size).\x0atable at:Id put: aTableRecord.\x0a\x22self halt.\x22\x0atableView after:[ self renderBookmarkAdd: aTableRecord on: html].",
messageSends: ["asJQuery", "nextId", "newWithId:object:", "at:", "size", "at:put:", "after:", "renderBookmarkAdd:on:"],
referencedClasses: ["TableRecord"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'initialization',
fn: function (){
var self=this;
var button;
function $BookmarksView(){return smalltalk.BookmarksView||(typeof BookmarksView=="undefined"?nil:BookmarksView)}
return smalltalk.withContext(function($ctx1) { 
button="#init"._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($BookmarksView())._tryExample();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{button:button},smalltalk.BookmarksView)})},
args: [],
source: "begin\x0a| button |\x0abutton := '#init' asJQuery.\x0abutton click: [BookmarksView tryExample].",
messageSends: ["asJQuery", "click:", "tryExample"],
referencedClasses: ["BookmarksView"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "changeActiveRecord:newRecord:number:",
category: 'rendering',
fn: function (anoldRecord,anewRecord,aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._activeRecord()).__tild_eq((0));
if(smalltalk.assert($1)){
_st(anoldRecord)._css_set_("background-color","white");
$ctx1.sendIdx["css:set:"]=1;
self._newActiveRecord_(aNumber);
$ctx1.sendIdx["newActiveRecord:"]=1;
_st(anewRecord)._css_set_("background-color","lightblue");
$ctx1.sendIdx["css:set:"]=2;
} else {
self._newActiveRecord_(aNumber);
_st(anewRecord)._css_set_("background-color","lightblue");
};
return self}, function($ctx1) {$ctx1.fill(self,"changeActiveRecord:newRecord:number:",{anoldRecord:anoldRecord,anewRecord:anewRecord,aNumber:aNumber},smalltalk.BookmarksView)})},
args: ["anoldRecord", "anewRecord", "aNumber"],
source: "changeActiveRecord: anoldRecord  newRecord: anewRecord number: aNumber\x0a\x0a(self activeRecord~= 0)\x0aifTrue:[anoldRecord css: 'background-color' set: 'white'.self newActiveRecord: aNumber. anewRecord css: 'background-color' set: 'lightblue'] \x0aifFalse:[self newActiveRecord:aNumber.anewRecord css: 'background-color' set: 'lightblue'].\x0a\x22window alert: (self activeRecord) asString.\x22\x0a\x22activetr css: 'background-color' set: 'white'.self newActiveRecord: aNumber. tr css: 'background-color' set: 'lightblue'] ifFalse: [self newActiveRecord:0.tr css: 'background-color' set: 'white']\x22",
messageSends: ["ifTrue:ifFalse:", "~=", "activeRecord", "css:set:", "newActiveRecord:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteBookmark:html:",
category: 'action',
fn: function (anId,html){
var self=this;
var str;
return smalltalk.withContext(function($ctx1) { 
_st(self["@table"])._removeKey_(anId);
str=_st("#".__comma(_st(anId)._printString()))._asJQuery();
_st(str)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"deleteBookmark:html:",{anId:anId,html:html,str:str},smalltalk.BookmarksView)})},
args: ["anId", "html"],
source: "deleteBookmark: anId  html: html\x0a| str| \x0a\x22self halt.\x22\x0atable removeKey: anId.\x0astr:=( '#',(anId printString)) asJQuery.\x0astr remove.",
messageSends: ["removeKey:", "asJQuery", ",", "printString", "remove"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "findBookmark:comment:author:date:html:",
category: 'action',
fn: function (anUrl,aComment,anAuthor,aDate,html){
var self=this;
var url,aBookmark,a,TableRecord,tableView,Id;
return smalltalk.withContext(function($ctx1) { 
url=_st("#url"._as())._JQuery();
_st(window)._alert_("dfgdf");
return self}, function($ctx1) {$ctx1.fill(self,"findBookmark:comment:author:date:html:",{anUrl:anUrl,aComment:aComment,anAuthor:anAuthor,aDate:aDate,html:html,url:url,aBookmark:aBookmark,a:a,TableRecord:TableRecord,tableView:tableView,Id:Id},smalltalk.BookmarksView)})},
args: ["anUrl", "aComment", "anAuthor", "aDate", "html"],
source: "findBookmark: anUrl comment: aComment author: anAuthor date: aDate html: html\x0a|url aBookmark a TableRecord tableView Id  | \x0aurl:= '#url' as JQuery.\x0awindow alert: 'dfgdf'.\x0a\x0a\x0a\x22doc:= '#document' asJQuery.\x22\x0a\x22tableView:= '#bookmark tr:last' asJQuery.\x0aaBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).\x0amodel add: aBookmark.\x0aId:=self nextId.\x0atable at:Id put: ( TableRecord newWithId: Id object: aBookmark).\x0atableView after:[ self renderBookmark: aBookmark id: (Id) on: html].\x22",
messageSends: ["JQuery", "as", "alert:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.BookmarksView.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@table"]=_st($Dictionary())._new();
self["@activeRecord"]=(0);
self["@lastId"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.BookmarksView)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x22model:=BookmarkList createExample1.\x22\x0a\x09\x22table:=OrderedCollection new.\x22\x0a\x09table:=Dictionary new.\x0a\x09activeRecord:=0.\x0a\x09lastId :=0.\x0a\x09\x09\x0a\x09",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "lastId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lastId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastId",{},smalltalk.BookmarksView)})},
args: [],
source: "lastId\x0a\x0a^ lastId",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "lastId:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lastId"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"lastId:",{anId:anId},smalltalk.BookmarksView)})},
args: ["anId"],
source: "lastId: anId\x0a\x0a lastId:=anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (aBookmarkList){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aBookmarkList;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aBookmarkList:aBookmarkList},smalltalk.BookmarksView)})},
args: ["aBookmarkList"],
source: "model: aBookmarkList\x0a model:=aBookmarkList",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "newActiveRecord:",
category: 'accessing',
fn: function (anActiveRecord){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@activeRecord"]=anActiveRecord;
return self}, function($ctx1) {$ctx1.fill(self,"newActiveRecord:",{anActiveRecord:anActiveRecord},smalltalk.BookmarksView)})},
args: ["anActiveRecord"],
source: "newActiveRecord: anActiveRecord\x0a\x0aactiveRecord:= anActiveRecord.",
messageSends: [],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "nextId",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._lastId_(_st(self["@lastId"]).__plus((1)));
$1=self["@lastId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextId",{},smalltalk.BookmarksView)})},
args: [],
source: "nextId\x0aself lastId:( lastId+1).\x0a^lastId.",
messageSends: ["lastId:", "+"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElemById:html:",
category: 'rendering',
fn: function (anId,html){
var self=this;
var doc,elem;
return smalltalk.withContext(function($ctx1) { 
doc=_st(document)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
elem=_st("#.".__comma(anId))._asJQuery();
_st(elem)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeElemById:html:",{anId:anId,html:html,doc:doc,elem:elem},smalltalk.BookmarksView)})},
args: ["anId", "html"],
source: "removeElemById: anId  html: html\x0a\x0a|doc elem| \x0a\x22self halt.\x22\x0adoc:=document asJQuery.\x0aelem:= ('#.',anId) asJQuery.\x0aelem remove.",
messageSends: ["asJQuery", ",", "remove"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElementByClass:html:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
var doc,element;
return smalltalk.withContext(function($ctx1) { 
doc=_st(document)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
element=_st(".".__comma(aClass))._asJQuery();
_st(element)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeElementByClass:html:",{aClass:aClass,html:html,doc:doc,element:element},smalltalk.BookmarksView)})},
args: ["aClass", "html"],
source: "removeElementByClass: aClass  html: html\x0a\x0a|doc element| \x0a\x22self halt.\x22\x0adoc:=document asJQuery.\x0aelement:= ('.',aClass) asJQuery.\x0aelement remove.",
messageSends: ["asJQuery", ",", "remove"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElementById:html:",
category: 'rendering',
fn: function (anId,html){
var self=this;
var doc,elem;
return smalltalk.withContext(function($ctx1) { 
doc=_st(document)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
elem=_st("#".__comma(anId))._asJQuery();
_st(elem)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeElementById:html:",{anId:anId,html:html,doc:doc,elem:elem},smalltalk.BookmarksView)})},
args: ["anId", "html"],
source: "removeElementById: anId  html: html\x0a\x0a|doc elem| \x0a\x22self halt.\x22\x0adoc:=document asJQuery.\x0aelem:= ('#',anId) asJQuery.\x0aelem remove.",
messageSends: ["asJQuery", ",", "remove"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromModel:",
category: 'action',
fn: function (anId){
var self=this;
var aBookmark;
return smalltalk.withContext(function($ctx1) { 
aBookmark=_st(_st(self["@table"])._at_(anId))._object();
_st(self["@model"])._remove_(aBookmark);
return self}, function($ctx1) {$ctx1.fill(self,"removeFromModel:",{anId:anId,aBookmark:aBookmark},smalltalk.BookmarksView)})},
args: ["anId"],
source: "removeFromModel: anId\x0a|aBookmark| \x0a\x22self halt.\x22\x0aaBookmark:=( table at:anId) object.\x0amodel remove: aBookmark.",
messageSends: ["object", "at:", "remove:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeTable:html:",
category: 'rendering',
fn: function (aClass,html){
var self=this;
var doc,tbl;
return smalltalk.withContext(function($ctx1) { 
doc=_st(document)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
tbl=_st(".".__comma(aClass))._asJQuery();
_st(tbl)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeTable:html:",{aClass:aClass,html:html,doc:doc,tbl:tbl},smalltalk.BookmarksView)})},
args: ["aClass", "html"],
source: "removeTable: aClass  html: html\x0a\x0a|doc tbl| \x0a\x22self halt.\x22\x0adoc:=document asJQuery.\x0atbl:= ('.',aClass) asJQuery.\x0atbl remove.",
messageSends: ["asJQuery", ",", "remove"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html){
var self=this;
var collection,id;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
collection=_st(self["@model"])._bookmarkList();
$1=_st(html)._tbody();
_st($1)._class_("scrollContent");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(collection)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return self._renderBookmark_id_on_(each,self._nextId(),html);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html,collection:collection,id:id},smalltalk.BookmarksView)})},
args: ["html"],
source: "renderBodyOn: html\x0a|collection id | \x0acollection:= model bookmarkList.\x0ahtml tbody\x0aclass: 'scrollContent';\x0awith: [ collection do: [:each |self renderBookmark: each id: (self nextId) on: html]].",
messageSends: ["bookmarkList", "class:", "tbody", "with:", "do:", "renderBookmark:id:on:", "nextId"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookmark1:on:",
category: 'rendering',
fn: function (aBookmark,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$5,$2,$1;
$2=_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($3)._with_(_st(aBookmark)._url());
$ctx2.sendIdx["with:"]=2;
$4=_st(html)._td();
$ctx2.sendIdx["td"]=2;
_st($4)._with_(_st(aBookmark)._comment());
$ctx2.sendIdx["with:"]=3;
$5=_st(html)._td();
$ctx2.sendIdx["td"]=3;
_st($5)._with_(_st(aBookmark)._author());
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._td())._with_(_st(aBookmark)._date());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$1=_st($2)._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderBookmark1:on:",{aBookmark:aBookmark,html:html},smalltalk.BookmarksView)})},
args: ["aBookmark", "html"],
source: "renderBookmark1: aBookmark on: html\x0a\x22нужна для добавления - потому что тут добавлено asJQuery\x22\x0a\x0a^(html tr with: [ html td with: aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]) asJQuery.",
messageSends: ["asJQuery", "with:", "tr", "td", "url", "comment", "author", "date"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookmark:id:on:",
category: 'rendering',
fn: function (aBookmark,aNumber,html){
var self=this;
var aTableRecord;
function $TableRecord(){return smalltalk.TableRecord||(typeof TableRecord=="undefined"?nil:TableRecord)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16;
$1=_st(self._activeRecord()).__tild_eq(aNumber);
if(smalltalk.assert($1)){
_st(self["@table"])._at_put_(aNumber,_st($TableRecord())._newWithId_object_(aNumber,aBookmark));
$2=_st(html)._tr();
$ctx1.sendIdx["tr"]=1;
_st($2)._id_(aNumber);
$ctx1.sendIdx["id:"]=1;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._td();
$ctx2.sendIdx["td"]=1;
$4=_st(aBookmark)._url();
$ctx2.sendIdx["url"]=1;
_st($3)._with_($4);
$ctx2.sendIdx["with:"]=2;
$5=_st(html)._td();
$ctx2.sendIdx["td"]=2;
$6=_st(aBookmark)._comment();
$ctx2.sendIdx["comment"]=1;
_st($5)._with_($6);
$ctx2.sendIdx["with:"]=3;
$7=_st(html)._td();
$ctx2.sendIdx["td"]=3;
$8=_st(aBookmark)._author();
$ctx2.sendIdx["author"]=1;
_st($7)._with_($8);
$ctx2.sendIdx["with:"]=4;
$9=_st(html)._td();
$ctx2.sendIdx["td"]=4;
$10=_st(aBookmark)._date();
$ctx2.sendIdx["date"]=1;
return _st($9)._with_($10);
$ctx2.sendIdx["with:"]=5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
$11=_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selection_(aNumber);
$ctx2.sendIdx["selection:"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onClick:"]=1;
$11;
} else {
$12=_st(html)._tr();
_st($12)._id_(aNumber);
_st($12)._style_("background-color:lightblue");
_st($12)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$13=_st(html)._td();
$ctx2.sendIdx["td"]=5;
_st($13)._with_(_st(aBookmark)._url());
$ctx2.sendIdx["with:"]=7;
$14=_st(html)._td();
$ctx2.sendIdx["td"]=6;
_st($14)._with_(_st(aBookmark)._comment());
$ctx2.sendIdx["with:"]=8;
$15=_st(html)._td();
$ctx2.sendIdx["td"]=7;
_st($15)._with_(_st(aBookmark)._author());
$ctx2.sendIdx["with:"]=9;
return _st(_st(html)._td())._with_(_st(aBookmark)._date());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["with:"]=6;
$16=_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selection_(aNumber);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$16;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderBookmark:id:on:",{aBookmark:aBookmark,aNumber:aNumber,html:html,aTableRecord:aTableRecord},smalltalk.BookmarksView)})},
args: ["aBookmark", "aNumber", "html"],
source: "renderBookmark: aBookmark id: aNumber on: html\x0a|aTableRecord|\x0a(self activeRecord~= aNumber)\x0aifTrue:[table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark).\x0a\x09        html tr id: aNumber; with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]]\x0aifFalse:[html tr id: aNumber; style: 'background-color:lightblue';with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]].",
messageSends: ["ifTrue:ifFalse:", "~=", "activeRecord", "at:put:", "newWithId:object:", "id:", "tr", "with:", "td", "url", "comment", "author", "date", "onClick:", "selection:", "style:"],
referencedClasses: ["TableRecord"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookmarkAdd:id:on:",
category: 'rendering',
fn: function (aBookmark,aNumber,html){
var self=this;
var aTableRecord;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$5,$6,$7,$2,$1;
$3=_st(html)._tr();
_st($3)._id_(aNumber);
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._td();
$ctx2.sendIdx["td"]=1;
_st($4)._with_(_st(aBookmark)._url());
$ctx2.sendIdx["with:"]=2;
$5=_st(html)._td();
$ctx2.sendIdx["td"]=2;
_st($5)._with_(_st(aBookmark)._comment());
$ctx2.sendIdx["with:"]=3;
$6=_st(html)._td();
$ctx2.sendIdx["td"]=3;
_st($6)._with_(_st(aBookmark)._author());
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._td())._with_(_st(aBookmark)._date());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$7=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selection_(aNumber);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$2=$7;
$1=_st($2)._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderBookmarkAdd:id:on:",{aBookmark:aBookmark,aNumber:aNumber,html:html,aTableRecord:aTableRecord},smalltalk.BookmarksView)})},
args: ["aBookmark", "aNumber", "html"],
source: "renderBookmarkAdd: aBookmark id: aNumber on: html\x0a|aTableRecord|\x0a\x22table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark).\x22\x0a^(html tr id: aNumber; with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]) asJQuery",
messageSends: ["asJQuery", "id:", "tr", "with:", "td", "url", "comment", "author", "date", "onClick:", "selection:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBookmarkAdd:on:",
category: 'rendering',
fn: function (aTableRecord,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$5,$6,$8,$7,$9,$11,$10,$12,$14,$13,$15,$2,$1;
$3=_st(html)._tr();
$4=$3;
$5=_st(aTableRecord)._id();
$ctx1.sendIdx["id"]=1;
_st($4)._id_($5);
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._td();
$ctx2.sendIdx["td"]=1;
$8=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=1;
$7=_st($8)._url();
_st($6)._with_($7);
$ctx2.sendIdx["with:"]=2;
$9=_st(html)._td();
$ctx2.sendIdx["td"]=2;
$11=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=2;
$10=_st($11)._comment();
_st($9)._with_($10);
$ctx2.sendIdx["with:"]=3;
$12=_st(html)._td();
$ctx2.sendIdx["td"]=3;
$14=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=3;
$13=_st($14)._author();
_st($12)._with_($13);
$ctx2.sendIdx["with:"]=4;
return _st(_st(html)._td())._with_(_st(_st(aTableRecord)._object())._date());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$15=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._selection_(_st(aTableRecord)._id());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$2=$15;
$1=_st($2)._asJQuery();
return $1;
}, function($ctx1) {$ctx1.fill(self,"renderBookmarkAdd:on:",{aTableRecord:aTableRecord,html:html},smalltalk.BookmarksView)})},
args: ["aTableRecord", "html"],
source: "renderBookmarkAdd: aTableRecord on: html\x0a\x0a\x22table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark).\x22\x0a^(html tr id: aTableRecord id; with: [ html td with:aTableRecord object url. html td with:aTableRecord object comment. html td with: aTableRecord object author. html td with: aTableRecord object date]; onClick:[  self selection: aTableRecord id]) asJQuery",
messageSends: ["asJQuery", "id:", "tr", "id", "with:", "td", "url", "object", "comment", "author", "date", "onClick:", "selection:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderEditor:On:",
category: 'rendering',
fn: function (aTableRecord,html){
var self=this;
var dt,url,comment,author,date,tbl;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$6,$8,$7,$5,$9,$10,$12,$14,$13,$11,$15,$16,$18,$20,$19,$17,$21,$23,$25,$24,$22,$26,$28,$30,$29,$31,$33,$32,$34,$36,$35,$27,$37,$38,$2;
dt=_st(_st($Date())._now())._asLocaleString();
$1=_st(html)._div();
_st($1)._id_("BookmarkEditor");
$ctx1.sendIdx["id:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h2_("закладка");
$3=_st(html)._label();
$ctx2.sendIdx["label"]=1;
_st($3)._with_("Ссылка");
$ctx2.sendIdx["with:"]=2;
$4=_st(html)._input();
$ctx2.sendIdx["input"]=1;
_st($4)._id_("newurl");
$ctx2.sendIdx["id:"]=2;
_st($4)._class_("url");
$ctx2.sendIdx["class:"]=1;
$6=$4;
$8=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=1;
$7=_st($8)._url();
$5=_st($6)._value_($7);
$ctx2.sendIdx["value:"]=1;
$5;
_st(html)._br();
$ctx2.sendIdx["br"]=1;
$9=_st(html)._label();
$ctx2.sendIdx["label"]=2;
_st($9)._with_("Комментарий");
$ctx2.sendIdx["with:"]=3;
$10=_st(html)._input();
$ctx2.sendIdx["input"]=2;
_st($10)._id_("newcomment");
$ctx2.sendIdx["id:"]=3;
_st($10)._class_("comment");
$ctx2.sendIdx["class:"]=2;
$12=$10;
$14=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=2;
$13=_st($14)._comment();
$11=_st($12)._value_($13);
$ctx2.sendIdx["value:"]=2;
$11;
_st(html)._br();
$ctx2.sendIdx["br"]=2;
$15=_st(html)._label();
$ctx2.sendIdx["label"]=3;
_st($15)._with_("Автор");
$ctx2.sendIdx["with:"]=4;
$16=_st(html)._input();
$ctx2.sendIdx["input"]=3;
_st($16)._id_("newauthor");
$ctx2.sendIdx["id:"]=4;
_st($16)._class_("author");
$ctx2.sendIdx["class:"]=3;
$18=$16;
$20=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=3;
$19=_st($20)._author();
$17=_st($18)._value_($19);
$ctx2.sendIdx["value:"]=3;
$17;
_st(html)._br();
$ctx2.sendIdx["br"]=3;
_st(_st(html)._label())._with_("Дата");
$ctx2.sendIdx["with:"]=5;
$21=_st(html)._input();
_st($21)._id_("newdate");
_st($21)._class_("date");
$23=$21;
$25=_st(aTableRecord)._object();
$ctx2.sendIdx["object"]=4;
$24=_st($25)._date();
$22=_st($23)._value_($24);
$22;
url="#newurl"._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
url;
comment="#newcomment"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
comment;
author="#newauthor"._asJQuery();
$ctx2.sendIdx["asJQuery"]=3;
author;
date="#newdate"._asJQuery();
date;
_st(html)._br();
$26=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($26)._with_("Сохранить");
$ctx2.sendIdx["with:"]=6;
$27=_st($26)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
$28=_st(aTableRecord)._object();
$ctx3.sendIdx["object"]=5;
$30=_st(url)._val();
$ctx3.sendIdx["val"]=1;
$29=_st($30)._asString();
$ctx3.sendIdx["asString"]=1;
_st($28)._url_($29);
$31=_st(aTableRecord)._object();
$ctx3.sendIdx["object"]=6;
$33=_st(comment)._val();
$ctx3.sendIdx["val"]=2;
$32=_st($33)._asString();
$ctx3.sendIdx["asString"]=2;
_st($31)._comment_($32);
$34=_st(aTableRecord)._object();
$ctx3.sendIdx["object"]=7;
$36=_st(author)._val();
$ctx3.sendIdx["val"]=3;
$35=_st($36)._asString();
$ctx3.sendIdx["asString"]=3;
_st($34)._author_($35);
_st(_st(aTableRecord)._object())._date_(_st(_st(date)._val())._asString());
self._removeElementById_html_("BookmarkEditor",html);
$ctx3.sendIdx["removeElementById:html:"]=1;
return self._renderTableOn_(html);
$ctx3.sendIdx["renderTableOn:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$27;
$37=_st(html)._button();
_st($37)._with_("Отменить");
$38=_st($37)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
self._removeElementById_html_("BookmarkEditor",html);
return self._renderTableOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $38;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderEditor:On:",{aTableRecord:aTableRecord,html:html,dt:dt,url:url,comment:comment,author:author,date:date,tbl:tbl},smalltalk.BookmarksView)})},
args: ["aTableRecord", "html"],
source: "renderEditor: aTableRecord On: html\x0a\x0a| dt url comment author date tbl| \x0adt :=( Date now) asLocaleString.\x0a\x22self halt.\x22\x0ahtml div\x0a     id: 'BookmarkEditor';\x0a\x09 with:[\x0a\x09\x09 html h2:'закладка'.\x0a\x09html label\x0a\x09\x09with: 'Ссылка'.\x0a\x09html input\x0a        id: 'newurl'; \x09\x0a\x09    class:  'url';\x0a\x09\x09value: aTableRecord object url.\x0a\x09\x09html br.\x0a\x09\x09html label\x0a\x09\x09with: 'Комментарий'.\x0a\x09html input\x0a\x09    id: 'newcomment';\x0a\x09    class: 'comment';\x0a\x09\x09value: aTableRecord object comment.\x09\x0a\x09\x09html br.\x0a\x09html label\x0a\x09\x09with: 'Автор'.\x0a\x09html input\x0a\x09    id: 'newauthor';\x0a\x09    class: 'author';\x0a\x09\x09value: aTableRecord object author.\x0a\x09\x09html br.\x0a\x09html label\x0a\x09\x09with: 'Дата'.\x0a\x09html input\x0a\x09    id: 'newdate';\x0a\x09    class: 'date';\x0a\x09\x09value: aTableRecord object date.\x09\x09\x0a\x0a        url:= '#newurl' asJQuery.\x0a\x09\x09comment:= '#newcomment' asJQuery.\x0a\x09\x09author:= '#newauthor' asJQuery.\x0a\x09\x09date:= '#newdate' asJQuery.\x0a\x09\x09html br.\x0a\x09html button\x0a\x09\x09with: 'Сохранить';\x0a\x09\x09onClick: [ aTableRecord object url: (url val)asString. aTableRecord object comment: (comment val)asString.  aTableRecord object author: (author val)asString. aTableRecord object date: (date val)asString.self removeElementById: 'BookmarkEditor'html:html.self renderTableOn: html.].\x0a\x09\x09\x0ahtml button\x0a  with: 'Отменить';\x0a  onClick: [ self removeElementById: 'BookmarkEditor'html:html.self renderTableOn: html.].\x0a\x0a        \x22self halt.   \x09\x09\x09\x22\x0a\x09\x09\x22window alert: (url val) asString.\x22\x0a\x09\x09].",
messageSends: ["asLocaleString", "now", "id:", "div", "with:", "h2:", "label", "input", "class:", "value:", "url", "object", "br", "comment", "author", "date", "asJQuery", "button", "onClick:", "url:", "asString", "val", "comment:", "author:", "date:", "removeElementById:html:", "renderTableOn:"],
referencedClasses: ["Date"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$2;
$1=_st(html)._thead();
_st($1)._class_("fixedHeader");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._th();
$ctx3.sendIdx["th"]=1;
_st($3)._with_("url");
$ctx3.sendIdx["with:"]=3;
$4=_st(html)._th();
$ctx3.sendIdx["th"]=2;
_st($4)._with_("comment");
$ctx3.sendIdx["with:"]=4;
$5=_st(html)._th();
$ctx3.sendIdx["th"]=3;
_st($5)._with_("Author");
$ctx3.sendIdx["with:"]=5;
return _st(_st(html)._th())._with_("Date");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadOn:",{html:html},smalltalk.BookmarksView)})},
args: ["html"],
source: "renderHeadOn: html\x0ahtml thead \x0a   class: 'fixedHeader';\x0a   with: [html tr with: [html th with: 'url'.html th with: 'comment'. html th with: 'Author'. html th with: 'Date']].",
messageSends: ["class:", "thead", "with:", "tr", "th"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var dt,url,comment,author,date;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$17,$16,$19,$18,$21,$20,$23,$22,$15,$24,$27,$26,$29,$28,$31,$30,$33,$32,$25,$2,$34,$37,$36,$38,$39,$35,$40,$43,$42,$41,$44,$47,$46,$49,$48,$51,$50,$45;
dt=_st(_st($Date())._now())._asLocaleString();
$1=_st(html)._div();
_st($1)._id_("divNew");
$ctx1.sendIdx["id:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._label();
$ctx2.sendIdx["label"]=1;
_st($3)._with_("Ссылка");
$ctx2.sendIdx["with:"]=2;
$4=_st(html)._input();
$ctx2.sendIdx["input"]=1;
_st($4)._id_("url");
$ctx2.sendIdx["id:"]=2;
_st($4)._class_("url");
$ctx2.sendIdx["class:"]=1;
$5=_st($4)._value_("");
$ctx2.sendIdx["value:"]=1;
$5;
$6=_st(html)._label();
$ctx2.sendIdx["label"]=2;
_st($6)._with_("Комментарий");
$ctx2.sendIdx["with:"]=3;
$7=_st(html)._input();
$ctx2.sendIdx["input"]=2;
_st($7)._id_("comment");
$ctx2.sendIdx["id:"]=3;
_st($7)._class_("comment");
$ctx2.sendIdx["class:"]=2;
$8=_st($7)._value_("");
$ctx2.sendIdx["value:"]=2;
$8;
$9=_st(html)._label();
$ctx2.sendIdx["label"]=3;
_st($9)._with_("Автор");
$ctx2.sendIdx["with:"]=4;
$10=_st(html)._input();
$ctx2.sendIdx["input"]=3;
_st($10)._id_("author");
$ctx2.sendIdx["id:"]=4;
_st($10)._class_("author");
$ctx2.sendIdx["class:"]=3;
$11=_st($10)._value_("");
$ctx2.sendIdx["value:"]=3;
$11;
_st(_st(html)._label())._with_("Дата");
$ctx2.sendIdx["with:"]=5;
$12=_st(html)._input();
_st($12)._id_("date");
_st($12)._class_("date");
$13=_st($12)._value_(dt);
$13;
url="#url"._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
url;
comment="#comment"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
comment;
author="#author"._asJQuery();
$ctx2.sendIdx["asJQuery"]=3;
author;
date="#date"._asJQuery();
date;
$14=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($14)._with_("Добавить");
$ctx2.sendIdx["with:"]=6;
$15=_st($14)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
$17=_st(url)._val();
$ctx3.sendIdx["val"]=1;
$16=_st($17)._asString();
$ctx3.sendIdx["asString"]=1;
$19=_st(comment)._val();
$ctx3.sendIdx["val"]=2;
$18=_st($19)._asString();
$ctx3.sendIdx["asString"]=2;
$21=_st(author)._val();
$ctx3.sendIdx["val"]=3;
$20=_st($21)._asString();
$ctx3.sendIdx["asString"]=3;
$23=_st(date)._val();
$ctx3.sendIdx["val"]=4;
$22=_st($23)._asString();
$ctx3.sendIdx["asString"]=4;
return self._addBookmark_comment_author_date_html_($16,$18,$20,$22,html);
$ctx3.sendIdx["addBookmark:comment:author:date:html:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$15;
$24=_st(html)._button();
$ctx2.sendIdx["button"]=2;
_st($24)._with_("Найти");
$ctx2.sendIdx["with:"]=7;
$25=_st($24)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
$27=_st(url)._val();
$ctx3.sendIdx["val"]=5;
$26=_st($27)._asString();
$ctx3.sendIdx["asString"]=5;
$29=_st(comment)._val();
$ctx3.sendIdx["val"]=6;
$28=_st($29)._asString();
$ctx3.sendIdx["asString"]=6;
$31=_st(author)._val();
$ctx3.sendIdx["val"]=7;
$30=_st($31)._asString();
$ctx3.sendIdx["asString"]=7;
$33=_st(date)._val();
$ctx3.sendIdx["val"]=8;
$32=_st($33)._asString();
$ctx3.sendIdx["asString"]=8;
return self._findBookmark_comment_author_date_html_($26,$28,$30,$32,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=2;
return $25;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$34=_st(html)._button();
$ctx1.sendIdx["button"]=3;
_st($34)._with_("Удалить");
$ctx1.sendIdx["with:"]=8;
$35=_st($34)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$37=self._activeRecord();
$ctx2.sendIdx["activeRecord"]=1;
$36=_st($37).__tild_eq((0));
$ctx2.sendIdx["~="]=1;
if(smalltalk.assert($36)){
$38=self._activeRecord();
$ctx2.sendIdx["activeRecord"]=2;
self._removeFromModel_($38);
$39=self._activeRecord();
$ctx2.sendIdx["activeRecord"]=3;
return self._deleteBookmark_html_($39,html);
} else {
return _st(window)._alert_("Не выбрана запись");
$ctx2.sendIdx["alert:"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["onClick:"]=3;
$40=_st(html)._button();
$ctx1.sendIdx["button"]=4;
_st($40)._with_("Редактировать закладку");
$ctx1.sendIdx["with:"]=9;
$41=_st($40)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$43=self._activeRecord();
$ctx2.sendIdx["activeRecord"]=4;
$42=_st($43).__tild_eq((0));
if(smalltalk.assert($42)){
self._removeElementByClass_html_("scroll-table",html);
self._lastId_((0));
return self._renderEditor_On_(_st(self["@table"])._at_(self._activeRecord()),html);
} else {
return _st(window)._alert_("Не выбрана запись");
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
$ctx1.sendIdx["onClick:"]=4;
$44=_st(html)._button();
_st($44)._with_("Добавить");
$45=_st($44)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$47=_st(url)._val();
$ctx2.sendIdx["val"]=9;
$46=_st($47)._asString();
$ctx2.sendIdx["asString"]=9;
$49=_st(comment)._val();
$ctx2.sendIdx["val"]=10;
$48=_st($49)._asString();
$ctx2.sendIdx["asString"]=10;
$51=_st(author)._val();
$ctx2.sendIdx["val"]=11;
$50=_st($51)._asString();
$ctx2.sendIdx["asString"]=11;
return self._addBookmark_comment_author_date_html_($46,$48,$50,_st(_st(date)._val())._asString(),html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)})}));
self._renderTableOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,dt:dt,url:url,comment:comment,author:author,date:date},smalltalk.BookmarksView)})},
args: ["html"],
source: "renderOn: html\x0a\x0a| dt url comment author date| \x0adt :=( Date now) asLocaleString.\x0a\x22self halt.\x22\x0ahtml div \x0a   id:'divNew';\x0a   with:[\x0a\x09html label\x0a\x09\x09with: 'Ссылка'.\x0a\x09html input\x0a        id: 'url'; \x09\x0a\x09    class:  'url';\x0a\x09\x09value: ('').\x0a\x09\x09html label\x0a\x09\x09with: 'Комментарий'.\x0a\x09html input\x0a\x09    id: 'comment';\x0a\x09    class: 'comment';\x0a\x09\x09value: ('').\x09\x0a\x09html label\x0a\x09\x09with: 'Автор'.\x0a\x09html input\x0a\x09    id: 'author';\x0a\x09    class: 'author';\x0a\x09\x09value: ('').\x0a\x09html label\x0a\x09\x09with: 'Дата'.\x0a\x09html input\x0a\x09    id: 'date';\x0a\x09    class: 'date';\x0a\x09\x09value: (dt).\x09\x09\x0a\x0a        url:= '#url' asJQuery.\x0a\x09\x09comment:= '#comment' asJQuery.\x0a\x09\x09author:= '#author' asJQuery.\x0a\x09\x09date:= '#date' asJQuery.\x0a\x09html button\x0a\x09\x09with: 'Добавить';\x0a\x09\x09onClick: [ self addBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ].\x0a        \x22self halt.   \x09\x09\x09\x22\x0a\x09\x09html button\x0a\x09\x09with: 'Найти';\x0a\x09onClick: [ self findBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ]].\x0a\x0a\x09\x09html button\x0a\x09\x09with: 'Удалить';\x0a\x09\x09onClick: [(self activeRecord~= 0)ifTrue:[self removeFromModel:(self activeRecord) .  self deleteBookmark: (self activeRecord) html: html] ifFalse:[window alert: 'Не выбрана запись']].\x0a\x09\x09\x0a\x09\x09\x09\x09html button\x0a\x09\x09with: 'Редактировать закладку';\x0a\x09\x09onClick: [(self activeRecord~= 0)ifTrue:[self removeElementByClass:  'scroll-table'  html: html.self lastId:0. self renderEditor:( table at:(self activeRecord)) On:html] ifFalse:[window alert: 'Не выбрана запись']].\x0a\x09html button\x0a\x09\x09with: 'Добавить';\x0a\x09\x09onClick: [ self addBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ].\x0a\x09 self renderTableOn: html.",
messageSends: ["asLocaleString", "now", "id:", "div", "with:", "label", "input", "class:", "value:", "asJQuery", "button", "onClick:", "addBookmark:comment:author:date:html:", "asString", "val", "findBookmark:comment:author:date:html:", "ifTrue:ifFalse:", "~=", "activeRecord", "removeFromModel:", "deleteBookmark:html:", "alert:", "removeElementByClass:html:", "lastId:", "renderEditor:On:", "at:", "renderTableOn:"],
referencedClasses: ["Date"]
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("scroll-table");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._table();
_st($3)._id_("bookmark");
_st($3)._class_("scrollable");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderHeadOn_(html);
return self._renderBodyOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html},smalltalk.BookmarksView)})},
args: ["html"],
source: "renderTableOn: html\x0ahtml div\x0a\x09\x09class: 'scroll-table';\x0a\x09\x09\x09with: \x0a\x09\x09\x09\x09[(html table)\x0a\x09\x09\x09\x09    id: 'bookmark';\x0a\x09\x09\x09\x09\x09class: 'scrollable';\x0a\x09\x09\x09\x09\x09with: \x0a\x09\x09\x09\x09\x09\x09\x09[self renderHeadOn: html.\x0a\x09\x09\x09\x09\x09\x09\x09self renderBodyOn: html]].",
messageSends: ["class:", "div", "with:", "id:", "table", "renderHeadOn:", "renderBodyOn:"],
referencedClasses: []
}),
smalltalk.BookmarksView);

smalltalk.addMethod(
smalltalk.method({
selector: "selection:",
category: 'rendering',
fn: function (aNumber){
var self=this;
var tr,activetr,test;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3;
$2=_st(aNumber)._printString();
$ctx1.sendIdx["printString"]=1;
$1="#".__comma($2);
$ctx1.sendIdx[","]=1;
tr=_st($1)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
test=self._activeRecord();
$ctx1.sendIdx["activeRecord"]=1;
activetr=_st("#".__comma(_st(self._activeRecord())._printString()))._asJQuery();
$3=_st(aNumber).__tild_eq(self["@activeRecord"]);
if(smalltalk.assert($3)){
self._changeActiveRecord_newRecord_number_(activetr,tr,aNumber);
} else {
self._newActiveRecord_((0));
_st(tr)._css_set_("background-color","white");
};
return self}, function($ctx1) {$ctx1.fill(self,"selection:",{aNumber:aNumber,tr:tr,activetr:activetr,test:test},smalltalk.BookmarksView)})},
args: ["aNumber"],
source: "selection: aNumber\x0a|tr activetr test|\x0atr:= ('#',aNumber printString) asJQuery.\x0atest:=self activeRecord.\x0a\x0aactivetr:=('#',(self activeRecord)printString ) asJQuery.\x0a\x22self halt.\x22\x0a\x22\x22\x0aaNumber ~= activeRecord\x0a       ifTrue:[  self changeActiveRecord: activetr newRecord: tr number: aNumber] ifFalse: [self newActiveRecord:0. tr css: 'background-color' set: 'white']",
messageSends: ["asJQuery", ",", "printString", "activeRecord", "ifTrue:ifFalse:", "~=", "changeActiveRecord:newRecord:number:", "newActiveRecord:", "css:set:"],
referencedClasses: []
}),
smalltalk.BookmarksView);


smalltalk.addMethod(
smalltalk.method({
selector: "newOn:",
category: 'example',
fn: function (aBookmarkList){
var self=this;
var instance;
return smalltalk.withContext(function($ctx1) { 
var $1;
instance=self._new();
_st(instance)._model_(aBookmarkList);
_st(aBookmarkList)._listener_(self);
$1=instance;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOn:",{aBookmarkList:aBookmarkList,instance:instance},smalltalk.BookmarksView.klass)})},
args: ["aBookmarkList"],
source: "newOn: aBookmarkList\x0a|instance|\x0a  instance := self new.\x0a  instance model: aBookmarkList.\x0a  aBookmarkList listener: self.\x0a  ^ instance",
messageSends: ["new", "model:", "listener:"],
referencedClasses: []
}),
smalltalk.BookmarksView.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
category: 'example',
fn: function (){
var self=this;
function $BookmarkList(){return smalltalk.BookmarkList||(typeof BookmarkList=="undefined"?nil:BookmarkList)}
return smalltalk.withContext(function($ctx1) { 
_st(self._newOn_(_st($BookmarkList())._defaultBookmarkList()))._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{},smalltalk.BookmarksView.klass)})},
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22BookmarksView tryExample\x22\x0a\x09\x09(self newOn: BookmarkList defaultBookmarkList )appendToJQuery: 'body' asJQuery\x0a\x09\x22\x09self new appendToJQuery: 'body' asJQuery\x22",
messageSends: ["appendToJQuery:", "newOn:", "defaultBookmarkList", "asJQuery"],
referencedClasses: ["BookmarkList"]
}),
smalltalk.BookmarksView.klass);


smalltalk.addClass('TableRecord', smalltalk.Widget, ['id', 'object'], 'Bookmark');
smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.TableRecord)})},
args: [],
source: "id\x0a^id.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TableRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@id"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{aNumber:aNumber},smalltalk.TableRecord)})},
args: ["aNumber"],
source: "id: aNumber\x0aid:= aNumber.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TableRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@object"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"object",{},smalltalk.TableRecord)})},
args: [],
source: "object\x0a^object.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TableRecord);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},smalltalk.TableRecord)})},
args: ["anObject"],
source: "object: anObject\x0aobject:= anObject.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TableRecord);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TableRecord.klass.superclass.fn.prototype._new.apply(_st(self), []))._initialize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TableRecord.klass)})},
args: [],
source: "new\x0a\x09^super new initialize",
messageSends: ["initialize", "new"],
referencedClasses: []
}),
smalltalk.TableRecord.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWithId:object:",
category: 'not yet classified',
fn: function (aNumber,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._id_(aNumber);
_st($2)._object_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithId:object:",{aNumber:aNumber,anObject:anObject},smalltalk.TableRecord.klass)})},
args: ["aNumber", "anObject"],
source: "newWithId: aNumber object: anObject\x0a\x0a^( self new id:aNumber;object: anObject; yourself)",
messageSends: ["id:", "new", "object:", "yourself"],
referencedClasses: []
}),
smalltalk.TableRecord.klass);


smalltalk.addClass('Test', smalltalk.Widget, ['count', 'header'], 'Bookmark');

});
