Smalltalk current createPackage: 'Bookmark'!
Widget subclass: #Bookmark
	instanceVariableNames: 'url comment author date'
	package: 'Bookmark'!

!Bookmark methodsFor: 'accessing'!

author
	^author
!

author: anObject
  author:= anObject.
!

comment
	^comment
!

comment: anObject
  comment:= anObject.
!

date
	^date
!

date: anObject
  date:= anObject.
!

equaUrll: aUrl
^self url = aUrl.
!

equal: aBookmark
^(aBookmark url )= self url
!

url
	^url
!

url: anObject
	url:= anObject.
! !

!Bookmark methodsFor: 'initialization'!

initialize
"надо удалить"
!

new
"тоже надо удалить"
! !

!Bookmark class methodsFor: 'not yet classified'!

new

	^super new initialize
!

newWithUrl: urlString comment: commentString author: authorString date: aDate

^( self new url: urlString; comment: commentString; author: authorString; date: aDate; yourself)
! !

Widget subclass: #BookmarkList
	instanceVariableNames: 'listener bookmarkList'
	package: 'Bookmark'!

!BookmarkList methodsFor: 'not yet classified'!

add: aBookmark
bookmarkList add: aBookmark
!

at: anInteger
^bookmarkList at: anInteger
!

bookmarkList
^bookmarkList
!

initialize
 bookmarkList:= OrderedCollection new.
!

listener
^listener
!

listener: anObject
listener:= anObject.
!

nextId
"удалить"
^bookmarkList last id
!

remove: aBookmark
bookmarkList remove: aBookmark
!

size
^bookmarkList size
! !

BookmarkList class instanceVariableNames: 'defaultBookmarkList'!

!BookmarkList class methodsFor: 'not yet classified'!

createExample1
|bml|
bml := self new initialize.
bml add: (Bookmark newWithUrl: 'http://url.ru' comment: 'коментарий1' author: 'Петров Иван' date: '21.01,2014' ); add: (Bookmark newWithUrl: 'http://mail.ru' comment: 'коментарий2' author: 'Иванов Петр…' date: '22.01.2014');
 add:(Bookmark newWithUrl: 'http://url2.ru' comment: 'коментарий3' author: 'Крылов Сергей' date: '22.01,2014' ).
 ^ bml
!

defaultBookmarkList 
^ defaultBookmarkList  ifNil: [defaultBookmarkList  := self createExample1].
!

initialize1
"надо удалить"
|collection|
! !

Widget subclass: #BookmarksView
	instanceVariableNames: 'model table activeRecord lastId'
	package: 'Bookmark'!

!BookmarksView methodsFor: 'accessing'!

activeRecord

^ activeRecord
!

lastId

^ lastId
!

lastId: anId

 lastId:=anId
!

model: aBookmarkList
 model:=aBookmarkList
!

newActiveRecord: anActiveRecord

activeRecord:= anActiveRecord.
! !

!BookmarksView methodsFor: 'action'!

addBookmark: anUrl comment: aComment author: anAuthor date: aDate html: html
|aBookmark aTableRecord tableView Id  | 

"tableView:= '#bookmark tr:last' asJQuery."
aBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).
model add: aBookmark.
self addDrawOn: html.
"Id:=self nextId."
"aTableRecord:=TableRecord newWithId: Id object: aBookmark."
"table at:Id put: aTableRecord."
"self halt."
"tableView after:[ self renderBookmarkAdd: aTableRecord on: html]."
!

addBookmarkOld: anUrl comment: aComment author: anAuthor date: aDate html: html
|aBookmark aTableRecord tableView Id  | 

"doc:= '#document' asJQuery."
tableView:= '#bookmark tr:last' asJQuery.
aBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).
model add: aBookmark.
Id:=self nextId.
aTableRecord:=TableRecord newWithId: Id object: aBookmark.
table at:Id put: aTableRecord.
"self halt."
tableView after:[ self renderBookmarkAdd: aTableRecord on: html].
!

addDrawOn: html
|aBookmark aTableRecord tableView Id  | 

"doc:= '#document' asJQuery."
tableView:= '#bookmark tr:last' asJQuery.
"aBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).
model add: aBookmark."
Id:=self nextId.
aTableRecord:=TableRecord newWithId: Id object: (model at: model size).
table at:Id put: aTableRecord.
"self halt."
tableView after:[ self renderBookmarkAdd: aTableRecord on: html].
!

deleteBookmark: anId  html: html
| str| 
"self halt."
table removeKey: anId.
str:=( '#',(anId printString)) asJQuery.
str remove.
!

findBookmark: anUrl comment: aComment author: anAuthor date: aDate html: html
|url aBookmark a TableRecord tableView Id  | 
url:= '#url' as JQuery.
window alert: 'dfgdf'.


"doc:= '#document' asJQuery."
"tableView:= '#bookmark tr:last' asJQuery.
aBookmark:= (Bookmark newWithUrl: anUrl comment: aComment author: anAuthor date: aDate ).
model add: aBookmark.
Id:=self nextId.
table at:Id put: ( TableRecord newWithId: Id object: aBookmark).
tableView after:[ self renderBookmark: aBookmark id: (Id) on: html]."
!

removeFromModel: anId
|aBookmark| 
"self halt."
aBookmark:=( table at:anId) object.
model remove: aBookmark.
! !

!BookmarksView methodsFor: 'initialization'!

begin
| button |
button := '#init' asJQuery.
button click: [BookmarksView tryExample].
!

initialize
	super initialize.
	"model:=BookmarkList createExample1."
	"table:=OrderedCollection new."
	table:=Dictionary new.
	activeRecord:=0.
	lastId :=0.
! !

!BookmarksView methodsFor: 'rendering'!

changeActiveRecord: anoldRecord  newRecord: anewRecord number: aNumber

(self activeRecord~= 0)
ifTrue:[anoldRecord css: 'background-color' set: 'white'.self newActiveRecord: aNumber. anewRecord css: 'background-color' set: 'lightblue'] 
ifFalse:[self newActiveRecord:aNumber.anewRecord css: 'background-color' set: 'lightblue'].
"window alert: (self activeRecord) asString."
"activetr css: 'background-color' set: 'white'.self newActiveRecord: aNumber. tr css: 'background-color' set: 'lightblue'] ifFalse: [self newActiveRecord:0.tr css: 'background-color' set: 'white']"
!

nextId
self lastId:( lastId+1).
^lastId.
!

removeElemById: anId  html: html

|doc elem| 
"self halt."
doc:=document asJQuery.
elem:= ('#.',anId) asJQuery.
elem remove.
!

removeElementByClass: aClass  html: html

|doc element| 
"self halt."
doc:=document asJQuery.
element:= ('.',aClass) asJQuery.
element remove.
!

removeElementById: anId  html: html

|doc elem| 
"self halt."
doc:=document asJQuery.
elem:= ('#',anId) asJQuery.
elem remove.
!

removeTable: aClass  html: html

|doc tbl| 
"self halt."
doc:=document asJQuery.
tbl:= ('.',aClass) asJQuery.
tbl remove.
!

renderBodyOn: html
|collection id | 
collection:= model bookmarkList.
html tbody
class: 'scrollContent';
with: [ collection do: [:each |self renderBookmark: each id: (self nextId) on: html]].
!

renderBookmark1: aBookmark on: html
"нужна для добавления - потому что тут добавлено asJQuery"

^(html tr with: [ html td with: aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]) asJQuery.
!

renderBookmark: aBookmark id: aNumber on: html
|aTableRecord|
(self activeRecord~= aNumber)
ifTrue:[table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark).
	        html tr id: aNumber; with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]]
ifFalse:[html tr id: aNumber; style: 'background-color:lightblue';with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]].
!

renderBookmarkAdd: aBookmark id: aNumber on: html
|aTableRecord|
"table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark)."
^(html tr id: aNumber; with: [ html td with:aBookmark url. html td with: aBookmark comment. html td with: aBookmark author. html td with: aBookmark date]; onClick:[  self selection: aNumber]) asJQuery
!

renderBookmarkAdd: aTableRecord on: html

"table at: aNumber put:  (TableRecord newWithId: aNumber object: aBookmark)."
^(html tr id: aTableRecord id; with: [ html td with:aTableRecord object url. html td with:aTableRecord object comment. html td with: aTableRecord object author. html td with: aTableRecord object date]; onClick:[  self selection: aTableRecord id]) asJQuery
!

renderEditor: aTableRecord On: html

| dt url comment author date tbl| 
dt :=( Date now) asLocaleString.
"self halt."
html div
     id: 'BookmarkEditor';
	 with:[
		 html h2:'закладка'.
	html label
		with: 'Ссылка'.
	html input
        id: 'newurl'; 	
	    class:  'url';
		value: aTableRecord object url.
		html br.
		html label
		with: 'Комментарий'.
	html input
	    id: 'newcomment';
	    class: 'comment';
		value: aTableRecord object comment.	
		html br.
	html label
		with: 'Автор'.
	html input
	    id: 'newauthor';
	    class: 'author';
		value: aTableRecord object author.
		html br.
	html label
		with: 'Дата'.
	html input
	    id: 'newdate';
	    class: 'date';
		value: aTableRecord object date.		

        url:= '#newurl' asJQuery.
		comment:= '#newcomment' asJQuery.
		author:= '#newauthor' asJQuery.
		date:= '#newdate' asJQuery.
		html br.
	html button
		with: 'Сохранить';
		onClick: [ aTableRecord object url: (url val)asString. aTableRecord object comment: (comment val)asString.  aTableRecord object author: (author val)asString. aTableRecord object date: (date val)asString.self removeElementById: 'BookmarkEditor'html:html.self renderTableOn: html.].
		
html button
  with: 'Отменить';
  onClick: [ self removeElementById: 'BookmarkEditor'html:html.self renderTableOn: html.].

        "self halt.   			"
		"window alert: (url val) asString."
		].
!

renderHeadOn: html
html thead 
   class: 'fixedHeader';
   with: [html tr with: [html th with: 'url'.html th with: 'comment'. html th with: 'Author'. html th with: 'Date']].
!

renderOn: html

| dt url comment author date| 
dt :=( Date now) asLocaleString.
"self halt."
html div 
   id:'divNew';
   with:[
	html label
		with: 'Ссылка'.
	html input
        id: 'url'; 	
	    class:  'url';
		value: ('').
		html label
		with: 'Комментарий'.
	html input
	    id: 'comment';
	    class: 'comment';
		value: ('').	
	html label
		with: 'Автор'.
	html input
	    id: 'author';
	    class: 'author';
		value: ('').
	html label
		with: 'Дата'.
	html input
	    id: 'date';
	    class: 'date';
		value: (dt).		

        url:= '#url' asJQuery.
		comment:= '#comment' asJQuery.
		author:= '#author' asJQuery.
		date:= '#date' asJQuery.
	html button
		with: 'Добавить';
		onClick: [ self addBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ].
        "self halt.   			"
		html button
		with: 'Найти';
	onClick: [ self findBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ]].

		html button
		with: 'Удалить';
		onClick: [(self activeRecord~= 0)ifTrue:[self removeFromModel:(self activeRecord) .  self deleteBookmark: (self activeRecord) html: html] ifFalse:[window alert: 'Не выбрана запись']].
		
				html button
		with: 'Редактировать закладку';
		onClick: [(self activeRecord~= 0)ifTrue:[self removeElementByClass:  'scroll-table'  html: html.self lastId:0. self renderEditor:( table at:(self activeRecord)) On:html] ifFalse:[window alert: 'Не выбрана запись']].
	html button
		with: 'Добавить';
		onClick: [ self addBookmark:(url val) asString comment: ( comment val) asString author: (author val) asString date: ( date val) asString html: html ].
	 self renderTableOn: html.
!

renderTableOn: html
html div
		class: 'scroll-table';
			with: 
				[(html table)
				    id: 'bookmark';
					class: 'scrollable';
					with: 
							[self renderHeadOn: html.
							self renderBodyOn: html]].
!

selection: aNumber
|tr activetr test|
tr:= ('#',aNumber printString) asJQuery.
test:=self activeRecord.

activetr:=('#',(self activeRecord)printString ) asJQuery.
"self halt."
""
aNumber ~= activeRecord
       ifTrue:[  self changeActiveRecord: activetr newRecord: tr number: aNumber] ifFalse: [self newActiveRecord:0. tr css: 'background-color' set: 'white']
! !

!BookmarksView class methodsFor: 'example'!

newOn: aBookmarkList
|instance|
  instance := self new.
  instance model: aBookmarkList.
  aBookmarkList listener: self.
  ^ instance
!

tryExample
	"In order to play with the Counter, just select the
	doit below and press the Do it button. Then take a
	look in the HTML document above the IDE."

	"BookmarksView tryExample"
		(self newOn: BookmarkList defaultBookmarkList )appendToJQuery: 'body' asJQuery
	"	self new appendToJQuery: 'body' asJQuery"
! !

Widget subclass: #TableRecord
	instanceVariableNames: 'id object'
	package: 'Bookmark'!

!TableRecord methodsFor: 'accessing'!

id
^id.
!

id: aNumber
id:= aNumber.
!

object
^object.
!

object: anObject
object:= anObject.
! !

!TableRecord class methodsFor: 'not yet classified'!

new
	^super new initialize
!

newWithId: aNumber object: anObject

^( self new id:aNumber;object: anObject; yourself)
! !

Widget subclass: #Test
	instanceVariableNames: 'count header'
	package: 'Bookmark'!

