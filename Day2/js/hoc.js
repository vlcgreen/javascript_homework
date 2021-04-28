
//grab an element that exists
var container = document.querySelector(".container-fluid")

var nav = document.createElement("nav")
nav.setAttribute('class', "navbar navbar-expand-lg bg-blue")
// var hocAnchor = document.createElement("a")
// var homeAnchor = document.createElement('a')
// var catAnchor = document.createElement('a')

// hocAnchor.innerText = "HighOnCoding"
// hocAnchor.setAttribute('class', 'nav-link active')

// homeAnchor.innerText = "Home"
// homeAnchor.setAttribute('class', 'nav-link active')

// catAnchor.innerText = "Categories"
// homeAnchor.setAttribute('class', 'nav-link active')


function createAnchor(url, text, css){

    var anchor = document.createElement('a')
    anchor.setAttribute('class', css)
    anchor.setAttribute('href', url)
    anchor.textContent = text;

    return anchor
}

var homeAnchor = createAnchor("#", "Home", "nav-link active")
var catAnchor = createAnchor("#", "Categories", "nav-link active")
var hocAnchor = createAnchor('#', "High On Coding", "navbar-brand")

nav.append(hocAnchor);
nav.append(homeAnchor);
nav.append(catAnchor);

container.append(nav);

// navbar complete 

var gutContainer = document.createElement("div")
gutContainer.setAttribute("class", " container gx-5")
container.append(gutContainer);

function createDiv(css, text){

    var div = document.createElement('div')
    div.setAttribute('class', css)
    div.setAttribute('text', text)
    div.textContent = text;

    return div
}

var row1 = createDiv("row h200 bg-lgray mt-3");

var r1div1 = createDiv("col h2", "Curse of the Current Reviews");
var r1div2 = createDiv("", "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.");

row1.append(r1div1);
row1.append(r1div2);

var row2 = createDiv("row h200");

var r2div1 = createDiv("row h4 text-primary", "Hello WatchKit");
var r2div2 = createDiv("row", "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.");
var r2div3 = createDiv("row bg-warning text-white");
    var r2d3c1 = createDiv("col-2", "12 comments");
    var r2d3c2 = createDiv("col-2", "124 likes");
    r2div3.append(r2d3c1);
    r2div3.append(r2d3c2);

row2.append(r2div1);
row2.append(r2div2);
row2.append(r2div3);

var row3 = createDiv("row h200");

var r3div1 = createDiv("row h4 text-primary", "Introduction to Swift");
var r3div2 = createDiv("row", "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.");
var r3div3 = createDiv("row bg-warning text-white");
    var r3d3c1 = createDiv("col-2", "15 comments");
    var r3d3c2 = createDiv("col-2", "45 likes");
    r3div3.append(r3d3c1);
    r3div3.append(r3d3c2);

row3.append(r3div1);
row3.append(r3div2);
row3.append(r3div3);

gutContainer.append(row1);
gutContainer.append(row2);
gutContainer.append(row3);

container.append(gutContainer);

//creating DIVs for row 1:


