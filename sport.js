let obj = [
{
    prod_image: "pics/sport-men/1.jpg",
    prod_name: "Grey Jogger",
    prod_desc: "Lightweight running shoe with cushioned sole.",
    prod_price: "25$"
},
{
    prod_image: "pics/sport-men/2.jpg",
    prod_name: "White Runner",
    prod_desc: "Classic white jogger for daily use.",
    prod_price: "10$"
},
{
    prod_image: "pics/sport-men/3.jpg",
    prod_name: "Sport White",
    prod_desc: "Stylish sports jogger with side stripes.",
    prod_price: "15$"
},
{
    prod_image: "pics/sport-men/4.jpg",
    prod_name: "Black Gold",
    prod_desc: "Premium sneaker with golden design.",
    prod_price: "10$"
},
{
    prod_image: "pics/sport-men/5.jpg",
    prod_name: "Blue Runner",
    prod_desc: "Breathable jogger in navy blue color.",
    prod_price: "20$"
},
{
    prod_image: "pics/sport-men/6.jpg",
    prod_name: "White Trainer",
    prod_desc: "Flexible white trainer for workouts.",
    prod_price: "10$"
},
{
    prod_image: "pics/sport-men/7.jpg",
    prod_name: "Casual White",
    prod_desc: "Comfortable casual white sneaker.",
    prod_price: "15$"
},
{
    prod_image: "pics/sport-men/8.jpg",
    prod_name: "Black Sneaker",
    prod_desc: "Sporty black shoe with strong grip.",
    prod_price: "20$"
},
{
    prod_image: "pics/sport-men/9.jpg",
    prod_name: "Neon Jogger",
    prod_desc: "Black jogger with neon green sole.",
    prod_price: "10$"
}
];

var a = document.getElementById("cardsport");
for (var i = 0; i < obj.length; i++) {
    a.innerHTML += `
    <div class="col col-lg-4 col-mb-4 col-sm-6 d-flex justify-content-center ">
        <div class="card" style="width: 18rem;">
            <img src="${obj[i].prod_image}" class="card-img-top" id="imgcard" alt="...">
            <div class="card-body">
                <h5 class="card-title">${obj[i].prod_name}</h5>
                <p class="card-text">${obj[i].prod_desc}</p>
                <p class="card-text">${obj[i].prod_price}</p>
                <a href="order.html?image=${encodeURIComponent(obj[i].prod_image)}&name=${encodeURIComponent(obj[i].prod_name)}&price=${encodeURIComponent(obj[i].prod_price)}" class="btn btn-dark">Order Now</a>
            </div>
        </div>
    </div>
    `;
}
