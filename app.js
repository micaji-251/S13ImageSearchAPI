searchIcon = document.getElementById('searchIcon');
inputBox = document.querySelector('.searchInput');
mainImages = document.getElementById('mainImages');

let resultImages = [];
let accuImgList = "";

loadListeners();

function loadListeners(){
    searchIcon.addEventListener('click', imageQueary);

}

async function imageQueary(){

    let url=`https://api.unsplash.com/search/photos?page=1&query=${inputBox.value}&client_id=12L-pDjK5RRxh43baKGq-q7n1dgO0Ir8SuKH3Jp0sxQ`;
    try{
    const request = await fetch(url);
    const response = await request.json();
    resultImages = response.results;
    accumulateImages(resultImages);


    } catch(error){
        console.log(error);

    }

}

function accumulateImages(resultImages){
    
    mainImages.textContent ="";
    accuImgList = "";

    resultImages.forEach(image => {
        imageItem = image.urls.regular;
        altImage = image.alt_description;

        accuImgList += `
            <div class="mainImgContainer">
            <div class="black none"></div>
            <button class="save none">Guardar</button>
            <img
            class="bg-image"
            src="${imageItem}"
            alt="${altImage}"
            />
            </div>
        `
    });

    printImages(accuImgList);
    clearInputBox();
}

function printImages(accuImgList){
    mainImages.innerHTML = accuImgList;
}

function clearInputBox(){
    inputBox.value="";

}