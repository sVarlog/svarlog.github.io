const certificates = [
    { name: 'stepikJS', modal: 'stepikJSModal' },
    { name: 'stepikLayout', modal: 'stepikModal' },
    { name: 'udemyJS', modal: 'udemyModal' },
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

certificates.forEach((value) => {
    document.querySelector(`.education #${value.name}`).addEventListener('click', function () {
        const iframe = document.querySelector(`#${value.modal} iframe`);
        iframe.src = iframe.getAttribute('data-src');
        document.getElementById(value.modal).style.display = 'block';
    });
});

document.querySelectorAll('.modal .close').forEach((closeButton) => {
    closeButton.addEventListener('click', function () {
        document.querySelectorAll('.modal').forEach((modal) => {
            modal.style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const workHeadings = document.querySelectorAll('.works .worksWrap .headingItems');
    const workItems = document.querySelectorAll('.works .worksWrap .projects');

    workItems.forEach((el, i) => {
        const nodeCollection = el.querySelectorAll('.workItem');
        workHeadings[i].append(`( ${nodeCollection.length} )`);
    });

    const certHeading = document.querySelector('.education .certCount');
    const certificateItems = document.querySelectorAll('.education .educationItem');

    certHeading.innerHTML = `(${certificateItems.length}) :`;
});
