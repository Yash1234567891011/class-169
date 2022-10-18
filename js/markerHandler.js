AFRAME.registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })   
    },
    handleMarkerFound:function(){
        var buttondiv=document.getElementById("button-div")
        buttondiv.style.display="flex"
        var ratingbutton=document.getElementById("rating-button")
        var orderbutton=document.getElementById("order-button")
        ratingbutton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate Dish",
                text:"Work in progress"
            })
        })
        orderbutton.addEventListener("click",function(){
            swal({
                icon:"https://imgur.com/4NZ6uLY.jpg",
                title:"Thanks for order",
                text:"Your order served soon..."
            })
        })
    },
    handleMarkerLost:function(){
        var buttondiv=document.getElementById("button-div")
        buttondiv.style.display="none"
    }
})