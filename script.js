// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .


const url = "https://dog.ceo/api/breeds/list/all";
// fetch(url)
// .then(function(response){
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
// });

const dropdown = document.getElementById("breedList");
const imgGrid = document.getElementById("imgGrid");

async function loadData() {
    try{
        // fetch the data 
        const response = await fetch(url);
        const data = await response.json();
        // create the dropdown 
        createDropdown(data.message);
    } catch (error) {
        console.log(error);
    }
}

function createDropdown(input) {
    const list = Object.keys(input);
    list.unshift("Select a dog's breed");
    list.forEach(function (breedname) {
        // console.log(breedname);
        const option = document.createElement("option");
        option.innerHTML = breedname.charAt(0).toUpperCase() + breedname.slice(1);
        dropdown.appendChild(option);
    });
}

async function showBreedImgs(breedname) {
    if (breedname !== "Select a dog's breed"){
        imgGrid.innerHTML ="";
        const breedurl = `https://dog.ceo/api/breed/${breedname = breedname.charAt(0).toLowerCase() + breedname.slice(1)
    }/images`;
        const response = await fetch(breedurl);
        const data = await response.json();
        console.log(data.message);
        createGrid(data.message);
    }

    else if (breedname == "Select a dog's breed"){
        imgGrid.innerHTML ="<h1><br>Select a dog's breed<br>to see the available images</h1>";
        const breedurl = `https://dog.ceo/api/breed/${breedname}/images`;
        const response = await fetch(breedurl);
        const data = await response.json();
        console.log(data.message);
        createGrid(data.message);
    }
}

function createGrid(imgList) {
    imgList.forEach(function (img) {
        
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgGrid.appendChild(imgElement);
        
    });
}

loadData();


// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .
