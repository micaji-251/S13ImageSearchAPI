# BUSCADOR DE IMAGENES CONEXION A UN API

- Uso de JS
- Vanilla JS/CSS/HTML
- Async Function/ Fetch

## API A CONSUMIR
## IMAGENES


async function imageQueary(){

    let url=`https://api.unsplash.com/search/photos?page=1&query=${inputBox.value}&client_id=key`;
    try{
    const request = await fetch(url);
    const response = await request.json();
    resultImages = response.results;
    accumulateImages(resultImages);


    } catch(error){
        console.log(error);

    }

}

### FUNCTIONS TO ACCUMULATE IMAGES

function accumulateImages(resultImages){
    
    mainImages.textContent ="";
    let accuImgList = "";

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

}

### FUNCTION TO PRINT IMAGES

function printImages(accuImgList){
    mainImages.innerHTML = accuImgList;
}