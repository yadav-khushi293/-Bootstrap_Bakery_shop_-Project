const api = "https://practice-gida.onrender.com/Photo";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    let container = document.getElementById("data");

    data.forEach((item) => {
      container.innerHTML += `
    
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      
      <div class="card border-0 shadow-sm rounded-3 overflow-hidden position-relative h-100">

        <!-- Image -->
        <div class="position-relative">

        <img src="${item.img}" class="card-img-top">
        
        <div class="card-body">
          <h6 class="fw-bold mb-1">${item.title}</h6>

          <p class="fw-bold mb-1">₹ ${item.price}</p>

          <small class="text-muted">
            ⭐ ${item.rating || 4.9} (${item.reviews || 100} Reviews)
          </small>
        </div>

      </div>

    </div>

    `;
    });
  });
