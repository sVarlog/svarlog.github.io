$(document).ready((function () {

    $('.btn-steps').on('click',function (){
        $('.loan__steps-list .active').addClass('check')
        $($(this).data('href')+'ul').addClass('active')
        $('.loan__form .step').removeClass('active')
        $($(this).data('href')).addClass('active')
        $('#progressBar').removeClass('active')
        if($($(this).data('href')).hasClass('step5')){
            initAnimNumber()
        }
    });
    $('.btn-stepsBlack').on('click',function (){
        $('.loan__steps-list li').each(function (index,item){
            console.log(item)
            if(!$(item).hasClass('check') && $(item).hasClass('active')){
                $(item).removeClass('active')
            }
        })
        $($(this).data('href')+'ul').removeClass('check')
        $('.loan__form .step').removeClass('active')
        $($(this).data('href')).addClass('active')
    });
    $('.radioDual').on('click',function (){
        if($(this).val() == 1){
            $('.actual-info').addClass('active')
        }else{
            $('.actual-info').removeClass('active')
        }
    });
    $('#purpose').styler();

    $(function(){
        if($('div').hasClass('loan__steps')){
            $("#date").mask("99/99/9999");
            $("#phoneX").mask("+7 (999) 99-99-99");
            $("#bank-card-number").mask("9999    9999    9999    9999",{
                completed:function(){
                    $("#bank-card-number").removeClass('error')
                    if(!$('input').hasClass('error')){
                        $('#btnCart').attr('disable',false)
                    }
                }
            });
            $("#bank-card-expire-date").mask("99/99",{
                completed:function(){
                    $("#bank-card-expire-date").removeClass('error')
                    if(!$('input').hasClass('error')){
                        $('#btnCart').attr('disable',false)
                    }
                }
            });
            $("#small-cvv").mask("9 9 9",{
                completed:function(){
                    $("#small-cvv").removeClass('error')
                    if(!$('input').hasClass('error')){
                        $('#btnCart').attr('disable',false)
                    }
                }
            });
            $("#big-cvv").mask("9 9 9",{
                completed:function(){
                    $("#big-cvv").removeClass('error')
                    if(!$('input').hasClass('error')){
                        $('#btnCart').attr('disable',false)
                    }
                }
            });
        }
    });

    $("#bank-card-number").on('input',function (){
        console.log($(this).val())
        if($(this).val()==''){
            $(this).addClass('error')
        }
    })
    $('.loan__form .form__group input').on('input',function (){
        if($(this).val()==''){
            $(this).addClass('error')
        }else{
            $(this).removeClass('error')
        }
    })
    $('#btnStep1').on('click',function (){
        let error =false
        if($("#phoneX").val()==''){
            error = true
            $("#phoneX").addClass('error')
        }else{
            $("#phoneX").removeClass('error')
        }
        if($("#checkbox").is(':checked')){
            $("#checkbox").removeClass('error')
        }else{
            error = true
            $("#checkbox").addClass('error')
        }
        if(!error){
            $('.loan__steps-list .active').addClass('check')
            $($(this).data('href')+'ul').addClass('active')
            $('.loan__form .step').removeClass('active')
            $($(this).data('href')).addClass('active')
            $('#progressBar').removeClass('active')
            if($($(this).data('href')).hasClass('step5')){
                initAnimNumber()
            }
        }
    });
    $('#btnStep2').on('click',function (){
        let error =false
        if($("#lastname").val()==''){
            error = true
            $("#lastname").addClass('error')
        }else{
            $("#lastname").removeClass('error')
        }
        if($("#firstname").val()==''){
            error = true
            $("#firstname").addClass('error')
        }else{
            $("#firstname").removeClass('error')
        }
        if($("#date").val()==''){
            error = true
            $("#date").addClass('error')
        }else{
            $("#date").removeClass('error')
        }
        if($("#summDolg").val()==''){
            error = true
            $("#summDolg").addClass('error')
        }else{
            $("#summDolg").removeClass('error')
        }
        if(!error){
            $('.loan__steps-list .active').addClass('check')
            $($(this).data('href')+'ul').addClass('active')
            $('.loan__form .step').removeClass('active')
            $($(this).data('href')).addClass('active')
            $('#progressBar').removeClass('active')
            if($($(this).data('href')).hasClass('step5')){
                initAnimNumber()
            }
        }
    });
    $('#btnStep3').on('click',function (){
        let error =false
        if($("#series").val()==''){
            error = true
            $("#series").addClass('error')
        }else{
            $("#series").removeClass('error')
        }
        if($("#room").val()==''){
            error = true
            $("#room").addClass('error')
        }else{
            $("#room").removeClass('error')
        }
        if($("#placeBirth").val()==''){
            error = true
            $("#placeBirth").addClass('error')
        }else{
            $("#placeBirth").removeClass('error')
        }
        if($("#summDolg").val()==''){
            error = true
            $("#summDolg").addClass('error')
        }else{
            $("#summDolg").removeClass('error')
        }
        if(!error){
            $('.loan__steps-list .active').addClass('check')
            $($(this).data('href')+'ul').addClass('active')
            $('.loan__form .step').removeClass('active')
            $($(this).data('href')).addClass('active')
            $('#progressBar').removeClass('active')
            if($($(this).data('href')).hasClass('step5')){
                initAnimNumber()
            }
        }
    });
    $('#btnStep4').on('click',function (){
        let error =false
        if($("#region1").val()==''){
            error = true
            $("#region1").addClass('error')
        }else{
            $("#region1").removeClass('error')
        }
        if($("#city1").val()==''){
            error = true
            $("#city1").addClass('error')
        }else{
            $("#city1").removeClass('error')
        }
        if($("#street1").val()==''){
            error = true
            $("#street1").addClass('error')
        }else{
            $("#street1").removeClass('error')
        }
        if($("#house1").val()==''){
            error = true
            $("#house1").addClass('error')
        }else{
            $("#house1").removeClass('error')
        }
        if($("input[name=dual]:checked").val()==1){

            if($("#region2").val()==''){
                error = true
                $("#region2").addClass('error')
            }else{
                $("#region2").removeClass('error')
            }
            if($("#city2").val()==''){
                error = true
                $("#city2").addClass('error')
            }else{
                $("#city2").removeClass('error')
            }
            if($("#street2").val()==''){
                error = true
                $("#street2").addClass('error')
            }else{
                $("#street2").removeClass('error')
            }
            if($("#house2").val()==''){
                error = true
                $("#house2").addClass('error')
            }else{
                $("#house2").removeClass('error')
            }
        }else{
            $("#region2").removeClass('error')
            $("#city2").removeClass('error')
            $("#street2").removeClass('error')
            $("#house2").removeClass('error')
        }
        if(!error){
            $('.loan__steps-list .active').addClass('check')
            $($(this).data('href')+'ul').addClass('active')
            $('.loan__form .step').removeClass('active')
            $($(this).data('href')).addClass('active')
            $('#progressBar').removeClass('active')
            if($($(this).data('href')).hasClass('step5')){
                initAnimNumber()
            }
        }
    });
    $('#btnStep5').on('click',function (){
        $('.loan__steps-list .active').addClass('check')
        $($(this).data('href')+'ul').addClass('active')
        $('.loan__form .step').removeClass('active')
        $($(this).data('href')).addClass('active')
        $('#progressBar').removeClass('active')
        if($($(this).data('href')).hasClass('step5')){
            initAnimNumber()
        }
    });
    $('#progressBarBtn').on('click',function (){
        console.log($(this).attr('disable'))
        if($(this).attr('disable')!='disable'){
            $('.loan__steps-list .active').addClass('check')
            $($(this).data('href')+'ul').addClass('active')
            $('.loan__form .step').removeClass('active')
            $($(this).data('href')).addClass('active')
            $('#progressBar').removeClass('active')
            if($($(this).data('href')).hasClass('step5')){
                initAnimNumber()
            }
        }
    });

    $('#btnCart').on('click',function (){
        let error =false
        if($("#bank-card-number").val()==''){
            error = true
            $("#bank-card-number").addClass('error')
        }
        if($("#bank-card-expire-date").val()==''){
            error = true
            $("#bank-card-expire-date").addClass('error')
        }
        if(window.innerWidth<=767){
            if($("#small-cvv").val()==''){
                error = true
                $("#small-cvv").addClass('error')
            }
        }else{
            if($("#big-cvv").val()==''){
                error = true
                $("#big-cvv").addClass('error')
            }
        }
        if(error){
            $(this).attr('disable','disable')
        }else{
            document.location.href = 'offers.html'
        }
    });
    function initAnimNumber(){
        $('.user-data__text .numb span').spincrement({
            thousandSeparator: "",
            duration: 9000
        });
        $('#progressBar').addClass('active')

        setTimeout(function (){
            $('#progressBarBtn').attr('disable',false)
        },9000)

    }
    // initAnimNumber()


    var count = 60*20;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count = count - 1;
        if (count == -1) {
            clearInterval(counter);
            return;
        }

        var seconds = count % 60;
        var minutes = Math.floor(count / 60);
        minutes %= 60;
        if(seconds<10){
            document.getElementById("doc_time").innerHTML = minutes + ":" + "0"+ seconds;
        }else{
            document.getElementById("doc_time").innerHTML = minutes + ":" + seconds;
        }
        document.getElementById("doc_timeMin").innerHTML = minutes;
    }

    const E = Date.now();
    superT = new Date(E + 9e5).toLocaleTimeString().slice(0, -3), superT, setInterval((function () {
       document.getElementById("doc_time1").innerHTML = superT;
       document.getElementById("doc_time2").innerHTML = superT
    }), 500)
    $(window).outerWidth(), $(window).outerHeight();
    var t, e, s, i, a = window.navigator.userAgent, l = (a.indexOf("MSIE "), {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return l.Android() || l.BlackBerry() || l.iOS() || l.Opera() || l.Windows()
        }
    });

    function n() {
        return (a = navigator.userAgent).indexOf("MSIE ") > -1 || a.indexOf("Trident/") > -1
    }

    function o(t) {
        var e = 0, s = t.parents("form");
        if ("email" == t.attr("name") || t.hasClass("email")) {
            if (t.val() != t.attr("data-value")) {
                var i = t.val().replace(" ", "");
                t.val(i)
            }
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.val()) && t.val() != t.attr("data-value") ? c(t) : (e++, r(t))
        } else "" == t.val() || t.val() == t.attr("data-value") ? (e++, r(t)) : c(t);
        return "checkbox" == t.attr("type") && (1 == t.prop("checked") ? t.removeClass("err").parent().removeClass("err") : (e++, t.addClass("err").parent().addClass("err"))), t.hasClass("name") && (/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val()) || (e++, r(t))), t.hasClass("pass-2") && (s.find(".pass-1").val() != s.find(".pass-2").val() ? r(t) : c(t)), e
    }

    function r(t) {
        if (t.addClass("err"), t.parent().addClass("err"), t.parent().find(".form__error").remove(), t.hasClass("email")) {
            var e = "";
            null != (e = ("" == t.val() || (t.val(), t.attr("data-value")), t.data("error"))) && t.parent().append('<div class="form__error">' + e + "</div>")
        } else null != t.data("error") && 0 == t.parent().find(".form__error").length && t.parent().append('<div class="form__error">' + t.data("error") + "</div>");
        t.parents(".select-block").length > 0 && (t.parents(".select-block").parent().addClass("err"), t.parents(".select-block").find(".select").addClass("err"))
    }

    function c(t) {
        t.removeClass("err"), t.parent().removeClass("err"), t.parent().find(".form__error").remove(), t.parents(".select-block").length > 0 && (t.parents(".select-block").parent().removeClass("err"), t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))
    }

    function d(t) {
        "" == t.val() && (t.inputmask("remove"), t.hasClass("l") || t.val(t.attr("data-value")), t.removeClass("focus"), t.parent().removeClass("focus"))
    }

    function h() {
        $.each($('.select[data-type="search"]'), (function (t, e) {
            var s = $(this).parent(), i = $(this).parent().find("select");
            1 == $(this).find(".select-options__value:visible").length ? ($(this).addClass("focus"), $(this).parents(".select-block").find("select").val($(".select-options__value:visible").data("value")), $(this).find(".select-title__value").val($(".select-options__value:visible").html()), $(this).find(".select-title__value").attr("data-value", $(".select-options__value:visible").html())) : "" == i.val() && ($(this).removeClass("focus"), s.find("input.select-title__value").val(i.find('option[selected="selected"]').html()), s.find("input.select-title__value").attr("data-value", i.find('option[selected="selected"]').html()))
        }))
    }

    function u(t) {
        var e = $(window).outerWidth(), s = $(window).outerHeight(), i = 80;
        e < 768 && (i = 50), t > 0 ? $("header").addClass("scroll") : $("header").removeClass("scroll"), t > s ? $("#up").fadeIn(300) : $("#up").fadeOut(300), $.each($(".sector"), (function (e, a) {
            var l = $(this).outerHeight(), n = $(this).offset().top;
            if (t >= n && t <= n + l - s && ($(".sector.scroll").removeClass("scroll"), $(this).addClass("scroll")), $(this).hasClass("scroll") && (t >= n && t <= n + l - s ? $(this).hasClass("normalscroll") ? $("body").addClass("scroll") : $("body").removeClass("scroll") : $(this).hasClass("normalscroll") && $("body").removeClass("scroll")), t > n - s / 1.5 && t < n + l ? ($(".dotts").length > 0 && function (t, e) {
                1 == e && $.each($(".sector"), (function (t, e) {
                    $(".dotts-list").append("<li></li>")
                }));
                $(".dotts-list li").removeClass("active").eq(t).addClass("active")
            }(e, 0), $(this).addClass("active")) : $(this).removeClass("active"), t > n - s && t < n + l) {
                if ($(this).addClass("view"), $(this).hasClass("padding")) {
                    var o = i / 100 * (100 - (n - t) / s * 100);
                    o >= i && (o = i), $(this).css({paddingTop: o})
                }
            } else $(this).removeClass("view")
        }))
    }

    function p(t, e) {
        $(window).outerWidth();
        let s = $(window).outerHeight(), i = $("header").outerHeight();

        function a(t) {
            t.css({position: "relative", top: 0, bottom: "auto", left: 0})
        }

        $.each($(".__fix-block"), (function (t, e) {
            let l = $(this), n = l.find(".__fix-item");
            n.outerHeight() < s - (i + 30) ? (scr > l.offset().top - (i + 15) ? n.css({
                position: "fixed",
                bottom: "auto",
                top: 15 + i,
                width: l.outerWidth(),
                left: l.offset().left
            }) : a(n), scr > l.outerHeight() + l.offset().top - (n.outerHeight() + (i + 15)) && (l.css({position: "relative"}), n.css({
                position: "absolute",
                top: "auto",
                bottom: 0,
                left: 0
            }))) : a(n)
        }))
    }
    
    if($('.review .customSlider .slider') && $(document).width() < 577) {
        $(".customSlider .slider").slick({
          dots: true,
          prevArrow: $(".review .customSlider .prev"),
          nextArrow: $(".review .customSlider .next"),
          appendDots: $(".review .customSlider .dots"),
        });
    }

    if (n() && $("body").addClass("ie"), l.any() && $("body").addClass("touch"), function () {
        if ($("select").length > 0 && !$("select").hasClass('custom')) {
            function t() {
                $.each($("select"), (function (t, e) {
                    var s = t;
                    $(this).hide(), 0 == $(this).parent(".select-block").length ? $(this).wrap("<div class='select-block " + $(this).attr("class") + "-select-block'></div>") : $(this).parent(".select-block").find(".select").remove();
                    var i, a, n = "", o = "", r = $(this).parent(".select-block"),
                        c = "<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
                    "multiple" == $(this).attr("multiple") && (n = "multiple", o = "check"), $.each($(this).find("option"), (function (t, e) {
                        if ("" != $(this).attr("class") && null != $(this).attr("class")) {
                            $(this).attr("class")
                        }
                        "" != $(this).attr("value") ? c = "" != $(this).attr("data-icon") && null != $(this).attr("data-icon") ? c + "<div data-value='" + $(this).attr("value") + "' class='select-options__value_" + s + " select-options__value value_" + $(this).val() + "  " + o + "'><div><img src=" + $(this).attr("data-icon") + ' alt=""></div><div>' + $(this).html() + "</div></div>" : c + "<div data-value='" + $(this).attr("value") + "' class='select-options__value_" + s + " select-options__value value_" + $(this).val() + "  " + o + "'>" + $(this).html() + "</div>" : "on" == $(this).parent().attr("data-label") && 0 == r.find(".select__label").length && r.prepend('<div class="select__label">' + $(this).html() + "</div>")
                    })), c += "</div></div></div>", "search" == $(this).attr("data-type") ? (r.append("<div data-type='search' class='select_" + s + " select " + $(this).attr("class") + "__select " + n + "'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><input data-value='" + $(this).find('option[selected="selected"]').html() + "' class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "' /></div>" + c + "</div>"), $(".select_" + s).find("input.select-title__value").jcOnPageFilter({
                        parentSectionClass: "select-options_" + s,
                        parentLookupClass: "select-options__value_" + s,
                        childBlockClass: "select-options__value_" + s
                    })) : "true" == $(this).attr("data-icon") ? r.append("<div class='select_" + s + " select " + $(this).attr("class") + "__select icon " + n + "'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'><div><img src=" + $(this).find('option[selected="selected"]').attr("data-icon") + ' alt=""></div><div>' + $(this).find('option[selected="selected"]').html() + "</div></div></div>" + c + "</div>") : r.append("<div class='select_" + s + " select " + $(this).attr("class") + "__select " + n + "'><div class='select-title'><div class='select-title__arrow ion-ios-arrow-down'></div><div class='select-title__value value_" + $(this).find('option[selected="selected"]').val() + "'>" + $(this).find('option[selected="selected"]').html() + "</div></div>" + c + "</div>"), "" != $(this).find('option[selected="selected"]').val() && r.find(".select").addClass("focus"), 1 == r.find(".select-options__value").length && r.find(".select").addClass("one"), "on" == $(this).attr("data-req") && $(this).addClass("req"), $(".select_" + s + " .select-options-scroll").niceScroll(".select-options-list", (i = 100, a = 50, l.any() && (i = 10, a = 1), {
                        cursorcolor: "#9B4E7C",
                        cursorwidth: "12px",
                        background: "",
                        autohidemode: !1,
                        bouncescroll: !1,
                        cursorborderradius: "10px",
                        scrollspeed: i,
                        mousescrollstep: a,
                        directionlockdeadzone: 0,
                        cursorborder: "0px solid #fff"
                    }))
                }))
            }

            t(), $("body").on("keyup", "input.select-title__value", (function () {
                $(".select").not($(this).parents(".select")).removeClass("active").find(".select-options").slideUp(50), $(this).parents(".select").addClass("active"), $(this).parents(".select").find(".select-options").slideDown(50, (function () {
                    $(this).find(".select-options-scroll").getNiceScroll().resize()
                })), $(this).parents(".select-block").find("select").val("")
            })), $("body").on("click", ".select", (function () {
                if (!$(this).hasClass("disabled") && !$(this).hasClass("one")) {
                    $(".select").not(this).removeClass("active").find(".select-options").slideUp(50), $(this).toggleClass("active"), $(this).find(".select-options").slideToggle(50, (function () {
                        $(this).find(".select-options-scroll").getNiceScroll().resize()
                    })), "search" == $(this).attr("data-type") && ($(this).hasClass("active") || h(), $(this).find(".select-options__value").show());
                    var t = $.trim($(this).find(".select-title__value").attr("class").replace("select-title__value", ""));
                    $(this).find(".select-options__value").show().removeClass("hide").removeClass("last"), "" != t && $(this).find(".select-options__value." + t).hide().addClass("hide"), $(this).find(".select-options__value").last().hasClass("hide") && $(this).find(".select-options__value").last().prev().addClass("last")
                }
            })), $("body").on("click", ".select-options__value", (function () {
                if ($(this).parents(".select").hasClass("multiple")) return $(this).hasClass("active") ? ($(this).parents(".select").find(".select-title__value span").length > 0 ? $(this).parents(".select").find(".select-title__value").append('<span data-value="' + $(this).data("value") + '">, ' + $(this).html() + "</span>") : ($(this).parents(".select").find(".select-title__value").data("label", $(this).parents(".select").find(".select-title__value").html()), $(this).parents(".select").find(".select-title__value").html('<span data-value="' + $(this).data("value") + '">' + $(this).html() + "</span>")), $(this).parents(".select-block").find("select").find("option").eq($(this).index() + 1).prop("selected", !0), $(this).parents(".select").addClass("focus")) : ($(this).parents(".select").find(".select-title__value").find('span[data-value="' + $(this).data("value") + '"]').remove(), 0 == $(this).parents(".select").find(".select-title__value span").length && ($(this).parents(".select").find(".select-title__value").html($(this).parents(".select").find(".select-title__value").data("label")), $(this).parents(".select").removeClass("focus")), $(this).parents(".select-block").find("select").find("option").eq($(this).index() + 1).prop("selected", !1)), !1;
                "search" == $(this).parents(".select").attr("data-type") ? ($(this).parents(".select").find(".select-title__value").val($(this).html()), $(this).parents(".select").find(".select-title__value").attr("data-value", $(this).html())) : ($(this).parents(".select").find(".select-title__value").attr("class", "select-title__value value_" + $(this).data("value")), $(this).parents(".select").find(".select-title__value").html($(this).html())), $(this).parents(".select-block").find("select").find("option").removeAttr("selected"), "" != $.trim($(this).data("value")) ? ($(this).parents(".select-block").find("select").val($(this).data("value")), $(this).parents(".select-block").find("select").find('option[value="' + $(this).data("value") + '"]').attr("selected", "selected")) : ($(this).parents(".select-block").find("select").val($(this).html()), $(this).parents(".select-block").find("select").find('option[value="' + $(this).html() + '"]').attr("selected", "selected")), "" != $(this).parents(".select-block").find("select").val() ? $(this).parents(".select-block").find(".select").addClass("focus") : ($(this).parents(".select-block").find(".select").removeClass("focus"), $(this).parents(".select-block").find(".select").removeClass("err"), $(this).parents(".select-block").parent().removeClass("err"), $(this).parents(".select-block").removeClass("err").find(".form__error").remove()), "" != !$(this).parents(".select").data("tags") && 0 == $(this).parents(".form-tags").find('.form-tags__item[data-value="' + $(this).data("value") + '"]').length && $(this).parents(".form-tags").find(".form-tags-items").append('<a data-value="' + $(this).data("value") + '" href="" class="form-tags__item">' + $(this).html() + '<span class="fa fa-times"></span></a>'), $(this).parents(".select-block").find("select").change(), "on" == $(this).parents(".select-block").find("select").data("update") && t()
            })), $(document).on("click touchstart", (function (t) {
                $(t.target).is(".select *") || $(t.target).is(".select") || ($(".select").removeClass("active"), $(".select-options").slideUp(50, (function () {
                })), h())
            })), $(document).on("keydown", (function (t) {
                27 == t.which && ($(".select").removeClass("active"), $(".select-options").slideUp(50, (function () {
                })), h())
            }))
        }

        function e(t, e) {
            t.find(".rating__activeline").css({width: e + "%"})
        }

        $("input,textarea").focus((function () {
            $(this).val() == $(this).attr("data-value") && ($(this).addClass("focus"), $(this).parent().addClass("focus"), "pass" == $(this).attr("data-type") && $(this).attr("type", "password"), $(this).val("")), c($(this))
        })), $("input[data-value], textarea[data-value]").each((function () {
            "" != this.value && this.value != $(this).attr("data-value") || ($(this).hasClass("l") && 0 == $(this).parent().find(".form__label").length ? $(this).parent().append('<div class="form__label">' + $(this).attr("data-value") + "</div>") : this.value = $(this).attr("data-value")), this.value != $(this).attr("data-value") && "" != this.value && ($(this).addClass("focus"), $(this).parent().addClass("focus"), $(this).hasClass("l") && 0 == $(this).parent().find(".form__label").length && $(this).parent().append('<div class="form__label">' + $(this).attr("data-value") + "</div>")), $(this).click((function () {
                this.value == $(this).attr("data-value") && ("pass" == $(this).attr("data-type") && $(this).attr("type", "password"), this.value = "")
            })), $(this).blur((function () {
                "" == this.value && ($(this).hasClass("l") || (this.value = $(this).attr("data-value")), $(this).removeClass("focus"), $(this).parent().removeClass("focus"), "pass" == $(this).attr("data-type") && $(this).attr("type", "text")), $(this).hasClass("vn") && o($(this))
            }))
        })), $(".form-input__viewpass").click((function (t) {
            $(this).hasClass("active") ? $(this).parent().find("input").attr("type", "password") : $(this).parent().find("input").attr("type", "text"), $(this).toggleClass("active")
        })), $.each($("input.phone"), (function (t, e) {
            $(this).attr("type", "tel"), $(this).focus((function () {
                $(this).inputmask("+7(999) 999 9999", {
                    clearIncomplete: !0,
                    clearMaskOnLostFocus: !0,
                    onincomplete: function () {
                        d($(this))
                    }
                }), $(this).addClass("focus"), $(this).parent().addClass("focus"), $(this).parent().removeClass("err"), $(this).removeClass("err")
            }))
        })), $("input.phone").focusout((function (t) {
            d($(this))
        })), $.each($("input.num"), (function (t, e) {
            $(this).focus((function () {
                $(this).inputmask("9{1,1000}", {
                    clearIncomplete: !0,
                    placeholder: "",
                    clearMaskOnLostFocus: !0,
                    onincomplete: function () {
                        d($(this))
                    }
                }), $(this).addClass("focus"), $(this).parent().addClass("focus"), $(this).parent().removeClass("err"), $(this).removeClass("err")
            }))
        })), $("input.num").focusout((function (t) {
            d($(this))
        })), $.each($(".check"), (function (t, e) {
            1 == $(this).find("input").prop("checked") && $(this).addClass("active")
        })), $("body").off("click", ".check", (function (t) {
        })), $("body").on("click", ".check", (function (t) {
            $(this).hasClass("disable") || ($(t.target).is("a") || ($(this).toggleClass("active"), $(this).hasClass("active") ? $(this).find("input").prop("checked", !0) : $(this).find("input").prop("checked", !1)))
        })), $.each($(".option.active"), (function (t, e) {
            $(this).find("input").prop("checked", !0)
        })), $(".option").click((function (t) {
            $(this).hasClass("disable") || ($(t.target).is("a") || ($(this).hasClass("active") && $(this).hasClass("order") && $(this).toggleClass("orderactive"), $(this).parents(".options").find(".option").removeClass("active"), $(this).toggleClass("active"), $(this).children("input").prop("checked", !0)))
        })), $(".rating.edit .star").hover((function () {
            var t = $(this).parents(".rating");
            t.find(".rating__activeline").css({width: "0%"});
            var s = ($(this).index() + 1) / t.find(".star").length * 100;
            e(t, s)
        }), (function () {
            var t = $(this).parents(".rating");
            t.find(".star").removeClass("active");
            var s = t.find("input").val() / t.find(".star").length * 100;
            e(t, s)
        })), $(".rating.edit .star").click((function (t) {
            var s = $(this).parents(".rating"), i = $(this).index() + 1;
            s.find("input").val(i);
            var a = i / s.find(".star").length * 100;
            e(s, a)
        })), $.each($(".rating"), (function (t, s) {
            var i = $(this).find("input").val() / $(this).parent().find(".star").length * 100;
            e($(this), i)
        })), $(".quantity__btn").click((function (t) {
            var e = parseInt($(this).parent().find(".quantity__input").val());
            return $(this).hasClass("dwn") ? (e -= 1) < 1 && (e = 1) : e += 1, $(this).parent().find(".quantity__input").val(e), !1
        })), $("#range").length > 0 && ($("#range").slider({
            range: !0,
            min: 0,
            max: 5e3,
            values: [0, 5e3],
            slide: function (t, e) {
                $("#rangefrom").val(e.values[0]), $("#rangeto").val(e.values[1]), $(this).find(".ui-slider-handle").eq(0).html("<span>" + e.values[0] + "</span>"), $(this).find(".ui-slider-handle").eq(1).html("<span>" + e.values[1] + "</span>")
            },
            change: function (t, e) {
                e.values[0] != $("#range").slider("option", "min") || e.values[1] != $("#range").slider("option", "max") ? $("#range").addClass("act") : $("#range").removeClass("act")
            }
        }), $("#rangefrom").val($("#range").slider("values", 0)), $("#rangeto").val($("#range").slider("values", 1)), $("#range").find(".ui-slider-handle").eq(0).html("<span>" + $("#range").slider("option", "min") + "</span>"), $("#range").find(".ui-slider-handle").eq(1).html("<span>" + $("#range").slider("option", "max") + "</span>"), $("#rangefrom").bind("change", (function () {
            1 * $(this).val() > 1 * $("#range").slider("option", "max") && $(this).val($("#range").slider("option", "max")), 1 * $(this).val() < 1 * $("#range").slider("option", "min") && $(this).val($("#range").slider("option", "min")), $("#range").slider("values", 0, $(this).val())
        })), $("#rangeto").bind("change", (function () {
            1 * $(this).val() > 1 * $("#range").slider("option", "max") && $(this).val($("#range").slider("option", "max")), 1 * $(this).val() < 1 * $("#range").slider("option", "min") && $(this).val($("#range").slider("option", "min")), $("#range").slider("values", 1, $(this).val())
        })), $("#range").find(".ui-slider-handle").eq(0).addClass("left"), $("#range").find(".ui-slider-handle").eq(1).addClass("right")), $(".form-addfile__input").change((function (t) {
            if ("" != $(this).val()) {
                var e = $(this);
                e.parents(".form-addfile").find("ul.form-addfile-list").html(""), $.each(t.target.files, (function (s, i) {
                    0 == e.parents(".form-addfile").find('ul.form-addfile-list>li:contains("' + t.target.files[s].name + '")').length && e.parents(".form-addfile").find("ul.form-addfile-list").append("<li>" + t.target.files[s].name + "</li>")
                }))
            }
        }))
    }(), $("form button[type=submit]").click((function () {
        var t = 0, e = $(this).parents("form"), s = e.data("ms");
        return $.each(e.find(".req"), (function (e, s) {
            t += o($(this))
        })), 0 == t && (function (t) {
            t.find(".form__generalerror").hide().html("")
        }(e), null != s && "" != s ? (function (t) {
            $(".popup").hide(), _("message." + t, "")
        }(s), !1) : void 0)
    })), function () {
        let t = [], e = document.querySelectorAll("[data-da]"), s = [], i = [];
        if (e.length > 0) {
            let r = 0;
            for (let i = 0; i < e.length; i++) {
                const a = e[i], o = a.getAttribute("data-da");
                if ("" != o) {
                    const e = o.split(","), i = e[1] ? e[1].trim() : "last", c = e[2] ? e[2].trim() : "767",
                        d = "min" === e[3] ? e[3].trim() : "max", h = document.querySelector("." + e[0].trim());
                    e.length > 0 && h && (a.setAttribute("data-da-index", r), t[r] = {
                        parent: a.parentNode,
                        index: (l = a, n = void 0, n = Array.prototype.slice.call(l.parentNode.children), n.indexOf(l))
                    }, s[r] = {
                        element: a,
                        destination: document.querySelector("." + e[0].trim()),
                        place: i,
                        breakpoint: c,
                        type: d
                    }, r++)
                }
            }
            (a = s).sort((function (t, e) {
                return t.breakpoint > e.breakpoint ? -1 : 1
            })), a.sort((function (t, e) {
                return t.place > e.place ? 1 : -1
            }));
            for (let t = 0; t < s.length; t++) {
                const e = s[t], a = e.breakpoint, l = e.type;
                i.push(window.matchMedia("(" + l + "-width: " + a + "px)")), i[t].addListener(o)
            }
        }
        var a, l, n;

        function o(t) {
            for (let t = 0; t < s.length; t++) {
                const e = s[t], a = e.element, l = e.destination, n = e.place, o = "_dynamic_adapt_" + e.breakpoint;
                if (i[t].matches) {
                    if (!a.classList.contains(o)) {
                        let t = c(l)[n];
                        "first" === n ? t = c(l)[0] : "last" === n && (t = c(l)[c(l).length]), l.insertBefore(a, l.children[t]), a.classList.add(o)
                    }
                } else a.classList.contains(o) && (r(a), a.classList.remove(o))
            }
        }

        function r(e) {
            const s = e.getAttribute("data-da-index"), i = t[s], a = i.parent, l = i.index, n = c(a, !0)[l];
            a.insertBefore(e, a.children[n])
        }

        function c(t, e) {
            const s = t.children, i = [];
            for (let t = 0; t < s.length; t++) {
                const a = s[t];
                (e || null == a.getAttribute("data-da")) && i.push(t)
            }
            return i
        }

        o()
    }(), u($(this).scrollTop()), $(window).scroll((function (t) {
        var e = $(this).scrollTop();
        u(e), $(".__fix-block").length > 0 && p(e)
    })), $("body").on("click", ".dotts-list li", (function (t) {
        var e = $(this).index() + 1;
        $("body,html").animate({scrollTop: $(".sector-" + e).offset().top + 0}, 800, (function () {
        }))
    })),
    $(".review__row").length > 0 && $(document).width() >= 577 && $(".review__row").slick({
        autoplay: !0,
        dots: !0,
        arrows: !1,
        accessibility: !1,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplaySpeed: 3e3,
        appendDots: $(".review__dots"),
        centerMode: !0,
        infinite: !0,
        asNavFor: ".review__row1",
        responsive: [{breakpoint: 800, settings: {slidesToShow: 2}}, {breakpoint: 650, settings: {slidesToShow: 1}}]
    }),
    $(".review__row1").length > 0 && $(document).width() >= 577 && $(".review__row1").slick({
        arrows: !1,
        fade: !0,
        asNavFor: ".review__row"
    }),
    t = jQuery, e = function (t) {
        return t.split("").reverse().join("")
    }, s = {
        numberStep: function (e, s) {
            var i = Math.floor(e);
            t(s.elem).text(i)
        }
    }, i = function (t) {
        var e = t.elem;
        e.nodeType && e.parentNode && ((e = e._animateNumberSetter) || (e = s.numberStep), e(t.now, t))
    }, t.Tween && t.Tween.propHooks ? t.Tween.propHooks.number = {set: i} : t.fx.step.number = i, t.animateNumber = {
        numberStepFactories: {
            append: function (e) {
                return function (s, i) {
                    var a = Math.floor(s);
                    t(i.elem).prop("number", s).text(a + e)
                }
            }, separator: function (s, i, a) {
                return s = s || " ", i = i || 3, a = a || "", function (l, n) {
                    var o = 0 > l, r = Math.floor((o ? -1 : 1) * l).toString(), c = t(n.elem);
                    if (r.length > i) {
                        for (var d, h, u, p = r, $ = i, v = p.split("").reverse(), f = (r = [], 0), m = Math.ceil(p.length / $); f < m; f++) {
                            for (d = "", u = 0; u < $ && (h = f * $ + u) !== p.length; u++) d += v[h];
                            r.push(d)
                        }
                        p = r.length - 1, $ = e(r[p]), r[p] = e(parseInt($, 10).toString()), r = r.join(s), r = e(r)
                    }
                    c.prop("number", l).text((o ? "-" : "") + r + a)
                }
            }
        }
    }, t.fn.animateNumber = function () {
        for (var e = arguments[0], i = t.extend({}, s, e), a = t(this), l = [i], n = 1, o = arguments.length; n < o; n++) l.push(arguments[n]);
        if (e.numberStep) {
            var r = this.each((function () {
                this._animateNumberSetter = e.numberStep
            })), c = i.complete;
            i.complete = function () {
                r.each((function () {
                    delete this._animateNumberSetter
                })), c && c.apply(this, arguments)
            }
        }
        return a.animate.apply(a, l)
    }, (l = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        }, BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        }, iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        }, Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        }, Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        }, any: function () {
            return l.Android() || l.BlackBerry() || l.iOS() || l.Opera() || l.Windows()
        }
    }).any(), location.hash) {
        var v = location.hash.replace("#", "");
        $(".popup-" + v).length > 0 ? _(v) : $("div." + v).length > 0 && $("body,html").animate({scrollTop: $("div." + v).offset().top}, 500, (function () {
        }))
    }
    $(".wrapper").addClass("loaded");
    if (l.iOS()) ;
    let f = document.querySelector(".icon-menu"), m = document.querySelector("body"),
        g = document.querySelector(".menu__body");

    function _(t, e) {
        $(".popup").removeClass("active").hide(), $(".menu__body").hasClass("active"), l.any() ? setTimeout((function () {
            $("body").addClass("lock")
        }), 300) : ($("body").css({paddingRight: $(window).outerWidth() - $(".wrapper").outerWidth()}).addClass("lock"), $(".pdb").css({paddingRight: $(window).outerWidth() - $(".wrapper").outerWidth()})), history.pushState("", "", "#" + t), "" != e && null != e && $(".popup-" + t + " .popup-video__value").html('<iframe src="https://www.youtube.com/embed/' + e + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'), $(".popup-" + t).fadeIn(300).delay(300).addClass("active"), $(".popup-" + t).find(".slick-slider").length > 0 && $(".popup-" + t).find(".slick-slider").slick("setPosition")
    }

    function b() {
        $(".popup").removeClass("active").fadeOut(300), $(".menu__body").hasClass("active") || (l.any() ? $("body").removeClass("lock") : (setTimeout((function () {
            $("body").css({paddingRight: 0}), $(".pdb").css({paddingRight: 0})
        }), 200), setTimeout((function () {
            $("body").removeClass("lock")
        }), 200))), $(".popup-video__value").html(""), history.pushState("", "", window.location.href.split("#")[0])
    }

    var C, w, k;
    f && f.addEventListener("click", (function () {
        f.classList.toggle("active"), m.classList.toggle("lock"), g.classList.toggle("active")
    })), $(".gallery").length > 0 && baguetteBox.run(".gallery", {}), $(".pl").click((function (t) {
        return _($(this).attr("href").replace("#", ""), $(this).data("vid")), !1
    })), $(".popup-close,.popup__close").click((function (t) {
        return b(), !1
    })), $(".popup").click((function (t) {
        if (!$(t.target).is(".popup>.popup-table>.cell *") || $(t.target).is(".popup-close") || $(t.target).is(".popup__close")) return b(), !1
    })), $(document).on("keydown", (function (t) {
        27 == t.which && b()
    })), $(".goto").click((function () {
        var t = $(this).attr("href").replace("#", "");
        return $("body,html").animate({scrollTop: $("." + t).offset().top + 0}, 500, (function () {
        })), $(".menu__body").hasClass("active") && ($(".menu__body,.icon-menu").removeClass("active"), $("body").removeClass("lock")), !1
    })), function () {
        if (n()) {
            let e = document.querySelectorAll(".ibg");
            for (var t = 0; t < e.length; t++) e[t].querySelector("img") && null != e[t].querySelector("img").getAttribute("src") && (e[t].style.backgroundImage = "url(" + e[t].querySelector("img").getAttribute("src") + ")")
        }
    }(), $(document).on("click touchstart", (function (t) {
        $(t.target).is(".select *") || $(".select").removeClass("active")
    })), $(window).scroll((function () {
        $(window).width();
        $(window).scrollTop() > 50 ? $("#up").fadeIn(300) : $("#up").fadeOut(300)
    })), $("#up").click((function (t) {
        $("body,html").animate({scrollTop: 0}, 300)
    })), $("body").on("click", ".tab__navitem", (function (t) {
        var e = $(this).index();
        if ($(this).hasClass("parent")) e = $(this).parent().index();
        $(this).hasClass("active") || ($(this).closest(".tabs").find(".tab__navitem").removeClass("active"), $(this).addClass("active"), $(this).closest(".tabs").find(".tab__item").removeClass("active").eq(e).addClass("active"), $(this).closest(".tabs").find(".slick-slider").length > 0 && $(this).closest(".tabs").find(".slick-slider").slick("setPosition"))
    })), $.each($(".spoller.active"), (function (t, e) {
        $(this).next().show()
    })), $("body").on("click", ".spoller", (function (t) {
        return $(this).hasClass("mob") && !l.any() || ($(this).parents(".one").length > 0 && ($(this).parents(".one").find(".spoller").not($(this)).removeClass("active").next().slideUp(300), $(this).parents(".one").find(".spoller").not($(this)).parent().removeClass("active")), $(this).hasClass("closeall") && !$(this).hasClass("active") && $.each($(this).closest(".spollers").find(".spoller"), (function (t, e) {
            $(this).removeClass("active"), $(this).next().slideUp(300)
        })), $(this).toggleClass("active").next().slideToggle(300, (function (t, e) {
            $(this).parent().find(".slick-slider").length > 0 && $(this).parent().find(".slick-slider").slick("setPosition")
        }))), !1
    })), -1 != navigator.appVersion.indexOf("Mac") || $(".scroll-body").length > 0 && $(".scroll-body").niceScroll(".scroll-list", (C = 100, w = 50, k = !1, l.any() && (C = 10, w = 1, k = !0), {
        cursorcolor: "#fff",
        cursorwidth: "4px",
        background: "",
        autohidemode: !0,
        cursoropacitymax: .4,
        bouncescroll: k,
        cursorborderradius: "0px",
        scrollspeed: C,
        mousescrollstep: w,
        directionlockdeadzone: 0,
        cursorborder: "0px solid #fff"
    })), $(".t,.tip").length > 0 && $(".t,.tip").webuiPopover({
        placement: "top",
        trigger: "hover",
        backdrop: !1,
        animation: "fade",
        dismissible: !0,
        padding: !1,
        onShow: function (t) {
        },
        onHide: function (t) {
        }
    }).on("show.webui.popover hide.webui.popover", (function (t) {
        $(this).toggleClass("active")
    }));

    var y = document.getElementById("slider"), x = document.getElementById("value"),
        S = document.getElementById("val1");
    x.innerHTML = y.value, S.innerHTML = y.value, y.oninput = function () {
        x.innerHTML = this.value, S.innerHTML = this.value
    };
    var T = document.getElementById("slider1"), A = document.getElementById("value1"),
        q = document.getElementById("val2");
    A.innerHTML = T.value, q.innerHTML = y.value, T.oninput = function () {
        A.innerHTML = this.value, q.innerHTML = this.value
    };
    var M = $("#slider"), B = $(".application__bar .application__fill");

    function L() {
        B.css("width", M.val() / 1e3 + "%")
    }

    M.on("input", L), L();
    var H = $("#slider1"), O = $(".application__bar1 .application__fill1");

    function I() {
        O.css("width", H.val() / 1e3 + "%")
    }

    H.on("input", I), I();
    var N = 0;
    $(window).scroll((function () {
        var t = $("#counter").offset().top - window.innerHeight;
        0 == N && $(window).scrollTop() > t && ($(".counter-value").each((function () {
            var t = $(this), e = t.attr("data-count");
            $({countNum: t.text()}).animate({countNum: e}, {
                duration: 2e3, easing: "swing", step: function () {
                    t.text(Math.floor(this.countNum))
                }, complete: function () {
                    t.text(this.countNum)
                }
            })
        })), N = 1)
    }));
}));
