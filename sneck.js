let obj = [
{
    prod_image: "pics/sneckers/1.jpg",
    prod_name: "Nike Dunk Brown",
    prod_desc: "Classic brown tones with white swoosh.",
    prod_price: "10$"
},
{
    prod_image: "pics/sneckers/2.jpg",
    prod_name: "Air Jordan White High",
    prod_desc: "Clean white look with black details.",
    prod_price: "15$"
},
{
    prod_image: "pics/sneckers/3.jpg",
    prod_name: "Nike Dunk Black",
    prod_desc: "All-black sneakers with sporty style.",
    prod_price: "20$"
},
{
    prod_image: "pics/sneckers/4.jpg",
    prod_name: "Air Jordan Low Black/White",
    prod_desc: "Timeless black and white low-top.",
    prod_price: "25$"
},
{
    prod_image: "pics/sneckers/5.jpg",
    prod_name: "Nike Dunk White Grey",
    prod_desc: "Neutral white with subtle grey touch.",
    prod_price: "10$"
},
{
    prod_image: "pics/sneckers/6.jpg",
    prod_name: "Air Jordan Low Shadow",
    prod_desc: "Cool grey-black combo for daily wear.",
    prod_price: "25$"
},
{
    prod_image: "pics/sneckers/7.jpg",
    prod_name: "Nike Dunk Royal Blue",
    prod_desc: "Bold blue sneakers for a fresh vibe.",
    prod_price: "10$"
},
{
    prod_image: "pics/sneckers/8.jpg",
    prod_name: "Nike Dunk Navy White",
    prod_desc: "Classic navy and white low-cut design.",
    prod_price: "20$"
},
{
    prod_image: "pics/sneckers/9.jpg",
    prod_name: "Nike Dunk Red Sipper",
    prod_desc: "Fiery red sneakers with sporty flair.",
    prod_price: "30$"
}
];

var a=document.getElementById("cardsnecker");
for(var i=0;i<obj.length;i++){
    
a.innerHTML+=`
<div class="col col col-lg-4 col-mb-4 col-sm-6 d-flex justify-content-center ">
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

