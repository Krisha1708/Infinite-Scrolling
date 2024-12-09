const gallery = document.getElementById("gallery");

let page = 1;
let flag = false;

const getData = async (URL) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
    const data = await response.json();
    displayData(data);
}
getData();

// Display Data on DOM
const displayData = (data) => {
    data.forEach((ele) => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        image.src = ele.url;

        const title = document.createElement("h3");
        title.textContent = ele.title;

        card.append(image, title);
        gallery.append(card);
    })
    flag = true;
};

window.addEventListener("scroll", function () {
    let clientHeigth = document.documentElement.clientHeight
    let scrollHeigth = document.documentElement.scrollHeight
    let scrollTOp = document.documentElement.scrollTop

    console.dir(document)

    console.log(clientHeigth, scrollHeigth, scrollTOp);

    if (Math.ceil(scrollHeigth - clientHeigth) <= Math.ceil(scrollTOp)) {
        console.log('reach the bottom fetch the data')
        page++

        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
        flag = false;
    }
})