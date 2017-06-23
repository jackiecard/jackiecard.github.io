var addEventListenerToDescriptionDivs = function(divs){
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mousedown", function(e) {
            toggleComment(e.target.querySelector("blockquote"))
        }, false)
        divs[i].addEventListener("mouseout", function(e) {
            toggleComment(e.target.querySelector("blockquote"), true)
        }, false)
    }
}

var toggleComment = function(targetElem, remove){
    if(targetElem){
        return remove ? targetElem.classList.remove("show") : targetElem.classList.add("show")
    }
}

var addEventListenerToContactForm = function () {
    var form = document.getElementById("contact-form")
    form.addEventListener("submit", function(e){
        e.preventDefault();
        location.href = form.getAttribute("action") + "?" + serialize(form)
    })
}

 var serialize = function (form) {
    var field, s = []
    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length
        for (i=0; i<len; i++) {
            field = form.elements[i]
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    for (j=form.elements[i].options.length-1; j>=0; j--) {
                        if(field.options[j].selected)
                            s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value)
                    }
                } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value)
                }
            }
        }
    }
    return s.join('&').replace(/%20/g, '+')
}

addEventListenerToDescriptionDivs(document.getElementsByClassName("description"))
addEventListenerToContactForm()
