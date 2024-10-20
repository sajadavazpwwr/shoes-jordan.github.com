class BascetDb {
    static Addtobascet(data) {
        let dataList = this.lod();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let bascetitme = new BascetModels(
            data.id,
            data.image,
            data.title,
            data.price,
            data.catguore,
            1);
        let loddata = dataList.find((value) => value != null && value.id == bascetitme.id);
        if (loddata != undefined && loddata != null) {
            loddata.qut++;
        } else {
            dataList.push(bascetitme);
        }
        setCookie("bascet", JSON.stringify(dataList), 30);
    }

    static lod() {
        let str = getCookie("bascet");
        if (str == "")
            return null;
        let dataList = JSON.parse(str);
        let result = [];
        dataList.forEach(element => {
            if (element != null) {
                result.push(element);
            }
        });
        return result;
    }

    static up(id) {
        let dataList = this.lod();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let loddata = dataList.find((value) => value != null && value.id == id);
        if (loddata != undefined && loddata != null) {
            loddata.qut++;
            setCookie("bascet", JSON.stringify(dataList), 30);
            return loddata.qut;
        }
        return 0;
    }

    static dwn(id) {
        let dataList = this.lod();
        if (dataList == undefined || dataList == null) {
            dataList = new Array();
        }
        let loddata = dataList.find((value) => value != null && value.id == id);
        if (loddata != undefined && loddata != null) {
            loddata.qut--;
            if (loddata.qut <= 0) {
                let index = dataList.findIndex((value) => value != null && value.id == id);
                delete dataList[index];
            }
            setCookie("bascet", JSON.stringify(dataList), 30);
            return loddata.qut;
            
        }
        return 0;
    }
}