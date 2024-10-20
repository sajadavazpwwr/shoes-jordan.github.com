class ProductDb{
    static save(dataList){
        localStorage.setItem("data",JSON.stringify(dataList));
    }

    static lod(){
       let str =localStorage.getItem("data");
       return JSON.parse(str);
    }
}