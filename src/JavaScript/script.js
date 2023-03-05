const pages = document.querySelectorAll(".page")

pages.forEach(page => {
    page.addEventListener("click", function() {

        if(page.classList.contains ("select")){
            return;
        };

        pageSelect(page)
        informationPageSelection(page)
    });
});

function pageSelect(page) {
    const pageSelection = document.querySelector(".page.select");
        pageSelection.classList.remove ("select");

        page.classList.add ("select");
}

function informationPageSelection(page) {
    const informationSelection = document.querySelector(".information.selection");
        informationSelection.classList.remove ("selection");

    const idElementOfInformationPage = `information-${page.id}`;

    const infomationAreSelection = document.getElementById(idElementOfInformationPage);

    infomationAreSelection.classList.add("selection");
}