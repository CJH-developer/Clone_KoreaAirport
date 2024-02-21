

    var a = document.querySelector(".above__selLang");
    a.onclick = function() {
        window.open("/HTML/popup/selectLanguage.html", "언어선택", "width=800px, height=800px, left=500, top=120 , location=no;");
    }


    var b = document.querySelector(".header__right__reserve");
    var c = document.querySelector(".header__menu__container");
    
    var d = document.querySelector(".header__right__airport");
    var e = document.querySelector(".header__menu__container2");

    var f = document.querySelector(".header__right__innerPort");
    var g = document.querySelector(".header__menu__container3");
    
    var h = document.querySelector(".header__right__skypass");
    var i = document.querySelector(".header__menu__container4");

    b.onmouseenter = function(){
        b.classList.add('hover');
        c.classList.add('active');
        e.classList.remove('active');
        g.classList.remove('active');
        i.classList.remove('active');
    }

    b.onmouseleave = function(){
        b.classList.remove('hover');
    }

    c.onmouseleave = function(){
        c.classList.remove('active');
    }

    d.onmouseenter = function(){
        d.classList.add('hover');
        e.classList.add('active');
        c.classList.remove('active');
        g.classList.remove('active');
        i.classList.remove('active');
    }

    d.onmouseleave = function(){
        d.classList.remove('hover');
    }

    e.onmouseleave = function(){
        e.classList.remove('active');
    }

    f.onmouseenter = function(){
        f.classList.add('hover');
        g.classList.add('active');
        c.classList.remove('active');
        e.classList.remove('active');
        i.classList.remove('active');
    }

    f.onmouseleave = function(){
        f.classList.remove('hover');
    }

    g.onmouseleave = function(){
        g.classList.remove('active');
    }

    h.onmouseenter = function(){
        h.classList.add('hover');
        i.classList.add('active');
        c.classList.remove('active');
        e.classList.remove('active');
        g.classList.remove('active');
    }

    h.onmouseleave = function(){
        h.classList.remove('hover');
    }

    i.onmouseleave = function(){
        i.classList.remove('active');
    }

