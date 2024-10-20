let CtrHold = () => {
    let templat = document.getElementById("disp-non-tmpl").innerHTML;
    let holder = document.getElementById("section-bascet");
    let dataList = BascetDb.lod();
    if (dataList == null) {
        return;
    }
    holder.innerHTML = "";
    dataList.forEach((bascet, index) => {

        if (bascet != null) {
            let carentTempl = templat;
            carentTempl = carentTempl.replace(/___id___/g, bascet.id);
            carentTempl = carentTempl.replace('___Image___', bascet.image);
            carentTempl = carentTempl.replace('___Title___', bascet.title);
            carentTempl = carentTempl.replace('___Price___', "$" + bascet.price);
            carentTempl = carentTempl.replace('___Catgure___', bascet.catguore);
            carentTempl = carentTempl.replace('___Number___', bascet.qut);
            holder.innerHTML += carentTempl;

        }

    });
}   

up = (id) => {
    let result = BascetDb.up(id);
    if (result > 0) {
        document.getElementById("Number_" + id).innerText = "Number : " + result;
    }
}

dwn = (id) => {
    debugger;
    let result = BascetDb.dwn(id);
    if (result > 0) {
        document.getElementById("Number_" + id).innerText = "Number : " + result;
    } else {
        document.getElementById("div-bascet-itm_" + id).remove();
    }
}