let CtrHold = () => {
    let templat = document.getElementById("disp-non").innerHTML;
    let holder = document.getElementById("section-product");
    ProductHandler.getData().forEach((product, index) => {
        let carentTempl = templat;
        carentTempl = carentTempl.replace('___id___', product.id);
        carentTempl = carentTempl.replace('___image___', product.image);
        carentTempl = carentTempl.replace('___title___', product.title);
        carentTempl = carentTempl.replace('___price___', product.price);
        carentTempl = carentTempl.replace('___catguore___', product.catguore);
        holder.innerHTML = carentTempl + holder.innerHTML;
    });
}