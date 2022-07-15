const certificates = [
    { name: "wp", modal: "wpModal" },
    { name: "stepikJS", modal: "stepikJSModal" },
    { name: "stepikLayout", modal: "stepikModal" },
    { name: "udemyJS", modal: "udemyModal" },
    { name: "layoutWayup", modal: "layoutWModal" },
    { name: "udemyVueJs", modal: "udemyVueModal" },
    { name: "nodeJS", modal: "nodeJSModal" },
    { name: "gitUdemy", modal: "gitUdemyModal" },
    { name: "reactNativeUdemy", modal: "reactNativeUdemyModal" },
    { name: "TSUdemy", modal: "TSUdemyModal" },
];

for (let value of certificates) {
    $(`.education #${value.name}`).on("click", function () {
        $(`#${value.modal} iframe`).attr(
            "src",
            $(`#${value.modal} iframe`).data("src")
        );
        $(`#${value.modal}`).show(500);
    });
}

$(".modal .close").on("click", function () {
    $(".modal").hide(500);
});

document.addEventListener("DOMContentLoaded", () => {
    let headings = document.querySelectorAll(".works .worksWrap .headingItems"),
        items = document.querySelectorAll(".works .worksWrap .projects");

    items.forEach((el, i) => {
        let n = el.querySelectorAll(".workItem");
        headings[i].append(`( ${n.length} )`);
    });
});
