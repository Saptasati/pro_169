AFRAME.registerComponent("markerhandler", {
    init: async function() {
        this.el.addEventListener("markerFound", ()=> {
            this.handleMarkerFound();
            console.log("marker is found");

        });
        this.el.addEventListener("markerLost", ()=> {
            this.handleMarkerLost();
            console.log("marker is lost")
        });
    },
    handleMarkerFound: function() {
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";
        var orderButton = document.getElementById("order-button");
        var orderSummaryButton = document.getElementById("order-summary-button");
        orderButton.addEventListener("click", function() {
            swal({
                icon:"https://img.icons8.com/?size=80&id=gaPaLIcj658F&format=png",
                title: "Thank You for your order",
                text: "Your order will be delivered soon"
            });
        });
        orderSummaryButton.addEventListener("click", function() {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "work in progress"
            });

        });
        
    },
    handleMarkerLost: function() {
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none"
    }
})