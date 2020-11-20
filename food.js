class Food{
    constructor(){

    }
    getFoodStock(){
        var foodStockRef=database.Ref("foods")
        foodStockRef.on("value",(data)=>{
            foodStock=data.val()
        })
    }
    updateFoodStock(foods){
        database.Ref("/").update({
            foodStock:foods
        })
    }
    display(){
      var  Button=createButton("feed the dog")
       var Button2=createButton("add food")
        Button.position(400,50)
        Button2.position(500,50)
    }
}