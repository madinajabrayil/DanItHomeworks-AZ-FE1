function showList() {
    //  const tabsHeader = document.querySelector('.tabs');
    const tabsHeaderItems = document.querySelectorAll('.tabs-title');
    const tabsItems = document.querySelectorAll('.tabs-content--item');

    for (let i = 0; i < tabsHeaderItems.length; i++) {
        tabsHeaderItems[i].dataset.index = i;
        tabsItems[i].dataset.key = i;

        tabsHeaderItems[i].addEventListener('click', function () {
            tabsHeaderItems.forEach(function (e) {
                e.classList.remove('active');
            });

            tabsItems.forEach(function (e) {
                e.classList.remove('active');
            });

            tabsItems[i].classList.add('active');
            tabsHeaderItems[i].classList.add("active"); //ve active ele


        });

    }
}


document.addEventListener("DOMContentLoaded", showList);