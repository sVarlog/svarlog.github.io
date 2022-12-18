const certificates = [
    { name: 'wp', modal: 'wpModal' },
    { name: 'stepikJS', modal: 'stepikJSModal' },
    { name: 'stepikLayout', modal: 'stepikModal' },
    { name: 'udemyJS', modal: 'udemyModal' },
    { name: 'layoutWayup', modal: 'layoutWModal' },
    { name: 'udemyVueJs', modal: 'udemyVueModal' },
    { name: 'nodeJS', modal: 'nodeJSModal' },
    { name: 'gitUdemy', modal: 'gitUdemyModal' },
    { name: 'reactNativeUdemy', modal: 'reactNativeUdemyModal' },
    { name: 'TSUdemy', modal: 'TSUdemyModal' },
    { name: 'GRQL_udemy', modal: 'GRQL_udemy_modal' },
    { name: 'EFSET', modal: 'EFSET_modal' },
    { name: 'electron_react_udemy', modal: 'electron_react_udemy_modal' },
    { name: 'tests_udemy', modal: 'tests_udemy_modal' },
];

for (let value of certificates) {
    $(`.education #${value.name}`).on('click', function () {
        $(`#${value.modal} iframe`).attr('src', $(`#${value.modal} iframe`).data('src'));
        $(`#${value.modal}`).show(500);
    });
}

$('.modal .close').on('click', function () {
    $('.modal').hide(500);
});

document.addEventListener('DOMContentLoaded', () => {
    const workHeadings = document.querySelectorAll('.works .worksWrap .headingItems');
    const workItems = document.querySelectorAll('.works .worksWrap .projects');

    workItems.forEach((el, i) => {
        let nodeCollection = el.querySelectorAll('.workItem');
        workHeadings[i].append(`( ${nodeCollection.length} )`);
    });

    const certHeading = document.querySelector('.education .certCount');
    const certificates = document.querySelectorAll('.education .educationItem');

    certHeading.innerHTML = `(${certificates.length}) :`;
});
