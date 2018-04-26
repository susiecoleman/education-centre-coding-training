var page = document.documentElement;
console.log(page);
var body = document.body
console.log(body);
var children = body.children
console.log(children)
var numberOfChildren = children.length
console.log(numberOfChildren);
var list = body.firstElementChild.children
console.log(list);

for(var i = 0; i < list.length; i++){
    var item = list[i];
    item.setAttribute("style", "color:#f00;")
}

var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute("style", "color:#f0f;")
}

var title = document.getElementById("title");
title.setAttribute("style", "font-family:monospace");
title.innerHTML = "Hello";
