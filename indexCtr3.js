let CtrHold = () => {
    let id = getParameterByName("id");
    let product = ProductHandler.getDataById(id);
    document.getElementById("image-pro").src = product.image;
    document.getElementById("pro").innerText = product.title;
    document.getElementById("price").innerText = "$" + product.price;
    document.getElementById("catguore").innerText = product.catguore;
    document.getElementById("discreptino").innerText = product.discreptino;
}

let Addtobascet = () => {
    let id = getParameterByName("id");
    let product = ProductHandler.getDataById(id);
    BascetDb.Addtobascet(product);
    alert("محصول مورد نظر به سبد خیرد شما اضافه شد!");
}