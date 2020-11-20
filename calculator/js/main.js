$(document).ready(function() {
    // price slider
    var slider = $(".slider"),
        sliderFrom = $(".slider .slider-from"),
        sliderTo = $(".slider .slider-to"),
        sliderLine = $(".slider .slider-line .background"),
        inputFrom = $(".from input"),
        inputTo = $(".to input"),
        step = slider.width() / 100;
    sliderFrom.css("left", 0);
    sliderTo.css("right", slider.width() - (90 * (step)));
    sliderLine.css("left", sliderFrom.offset().left - slider.offset().left);
    sliderLine.css("right", (slider.offset().left + slider.width()) - sliderTo.offset().left);
    inputFrom.val(Math.round(sliderFrom.position().left / ((slider.width() - sliderFrom.width()) / 100)));
    inputTo.val(100 - Math.round((slider.width() - sliderTo.position().left - sliderTo.width() - step) / step));
    function lineChange(l, r) {
        sliderLine.css("left", l);
        sliderLine.css("right", r);
    }
    function move(el, ev, eventStart, type) {
        if(type == "mousedown") {
            ev.preventDefault();
        }
        var startX, pX;
        if (type == "touchstart") {
            startX = eventStart.originalEvent.changedTouches[0].pageX;
            pX = ev.originalEvent.changedTouches[0].pageX;
        } else if (type == "mousedown") {
            startX = eventStart.pageX;
            pX = ev.pageX;
        }
        if(((pX - ($(el).width() / 2))) < slider.offset().left || ((pX + ($(el).width() / 2))) > slider.offset().left + slider.width()) {
            return;
        } else {
            if(el.hasClass("slider-from")) {
                if(sliderFrom.offset().left > sliderTo.offset().left) {
                    el.addClass("active");
                    if(pX > startX){
                        return;
                    } else {
                        $(el).css("left", (pX - slider.offset().left) - ($(el).width() / 2));    
                        el.removeClass("active");
                    }
                } else {
                    $(el).css("left", (pX - slider.offset().left) - ($(el).width() / 2));
                }
            } else if(el.hasClass("slider-to")){
                if (sliderTo.offset().left < sliderFrom.offset().left) {
                    el.addClass("active");
                    if (pX < startX) {
                        return;
                    } else {
                        $(el).css("right", (slider.offset().left + slider.width() - (sliderFrom.width() / 2)) - pX);
                        el.removeClass("active");
                    }
                } else {
                    $(el).css("right", (slider.offset().left + slider.width() - (sliderFrom.width() / 2)) - pX);
                }
                $(el).css("right", (slider.offset().left + slider.width() - (sliderFrom.width() / 2)) - pX);
            }
        }
        var l = sliderFrom.offset().left - slider.offset().left;
        var r = (slider.offset().left + slider.width()) - sliderTo.offset().left;
        lineChange(l, r);
        inputFrom.val(Math.round(sliderFrom.position().left / ((slider.width() - sliderFrom.width()) / 100)));
        inputTo.val(100 - (Math.round((slider.width() - sliderTo.position().left) / ((slider.width() - sliderTo.width()) / 100)) - 9));
    }
    function dragInit(elem) {
        $(elem).on("touchstart mousedown", function(e) {
            $(document).on("touchmove mousemove", function (ev) {
                move(elem, ev, e, e.type);
            });
            $(window).on("touchend mouseup", function () {
                $(document).unbind("touchmove mousemove");
            });
        });
    }
    dragInit(sliderFrom);
    dragInit(sliderTo);
    function inputChange(inp, inp2, btn, type) {
        $(inp).focusout(function () {
            var input = $(this);
            var text = input.val().replace(/[^0-9-_\s]/g, "");
            if (/_|\s/.test(text)) {
                text = text.replace(/_|\s/g, "");
            }
            if((+text < 0 || +text >= +$(inp2).val()) && type === "from") {
                if(+text < 0) {
                    text = 1;
                } else {
                    text = +$(inp2).val() - 1;
                    $(btn).addClass("active");
                }
            } else if((+text > 100 ||+text <= $(inp2).val()) && type === "to") {
                if(+text > 100) {
                    text = 99;
                } else {
                    text = +$(inp2).val() + 1;
                    $(btn).addClass("active");
                }
            }
            input.val(text);
            if(type === "from") {
                btn.css("left", text * ((slider.width() - sliderTo.width()) / 100));
            } else if(type === "to") {
                btn.css("right", (100 - text) * ((slider.width() - sliderTo.width()) / 100));
            }
            lineChange(sliderFrom.css("left"), sliderTo.css("right"));
        });
    }
    inputChange(inputFrom, inputTo, sliderFrom, "from");
    inputChange(inputTo, inputFrom, sliderTo, "to");
    // dropdown
    $(".hair-dropdown .dropdown-content").hide(0);
    function addItem(el) {
        $(".hair-dropdown .dropdown-area .placeholder").hide(0);
        if(!$(el).hasClass("chosed")) {
            var newItem = document.createElement('div');
            $(newItem).addClass("a-item");
            $(newItem).attr("data-bee", $(el).data("bee"));
            $(newItem).html('<span class="del">x</span>' + " " + el.html());
            $(".hair-dropdown .dropdown-area").append(newItem);
        }
        $(el).addClass("chosed");
    }
    function removeItem(el) {
        $(el).remove();
        $(".dropdown-content .dropdown-item").removeClass("chosed");
        if($(".dropdown-area .a-item").length < 1){
            $(".hair-dropdown .dropdown-area .placeholder").show(500);
        }
    }
    $(document).on("click", function(e) {
        if($(e.target).hasClass("dropdown-area") || $(e.target).hasClass("placeholder") || $(e.target).hasClass("dropdown-content") || $(e.target).hasClass("a-item")) {
            $(".hair-dropdown .dropdown-content").show(500);
            $(".hair-dropdown .dropdown-area").addClass("active");
        } else if($(e.target).hasClass("dropdown-item")) {
            addItem($(e.target));
        } else if($(e.target).hasClass("del")) {
            removeItem($(e.target).parent());
        } else {
            $(".hair-dropdown .dropdown-area").removeClass("active");
            $(".hair-dropdown .dropdown-content").hide(500);
        }
    });
    $(".reset").on("click", function() {
        if($(".hair-dropdown .dropdown-area .a-item").length > 0) {
            $(".hair-dropdown .dropdown-area .a-item").remove();
            $(".hair-dropdown .dropdown-area .placeholder").show(500);
            $(".hair-dropdown .dropdown-content .dropdown-item").removeClass("chosed");
        }
    });
    // radio reset
    $(".clothes-buttons input").on("click", function() {
        $(".clothes-buttons input").prop('checked', false);
        $(this).prop('checked', true);
    });
    // open menu
    $(".menu .menu-button").on("click", function() {
        $(this).toggleClass("active");
        $(".content-menu").toggleClass("active");
    });
    // change content
    $(".content-menu h2").on("click", function() {
        $(".content-menu h2").removeClass("active");
        $(this).addClass("active");
        $(".menu .menu-button").removeClass("active");
        $(".content-menu").removeClass("active");
        $(".content .content-item").removeClass("active");
        $(".content .content-item[data-item="+$(this).data("tab")+"]").addClass("active");
    });
});