class ProductHandler {
    static dataList = new Array();

    static addData(product) {
        this.dataList.push(product);
    }
    static setData(list) {
        for (let data of list) {
            this.dataList.push(data);
        }
    }
    static getData() {
        return this.dataList;
    }
    static getDataById(id) {
        return this.dataList.find((value) => value.id == id);
    }

    static grtRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static creatData() {
        let list = new Array();
        for (let i = 1; i <= 18; i++) {
            let product1 = new Product(i, "src/image/" + i + ".jpg", "Air Jordan " + i + " Low",+ this.grtRandom(80, 300), "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, consectetur laudantium?Aperiam tempora, quae minus ut tempore optio quo consequuntur tenetur! Dignissimos corruptiaccusamus quisquam maxime, suscipit laborum reprehenderit similique ratione aliquid eaquealiquam, architecto deserunt, cumque hic? Veritatis, eligendi ad quia quisquam adipisci culpareiciendis voluptate doloremque ea odit", "Men's Shoes");
            list.push(product1);
        }
        return list;
    }
}