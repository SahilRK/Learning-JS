//BUDGET CONTROLLER
var budgetController = (function(){


})();

//UI CONTROLLER
var uIController = (function(){

    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }

    return {
        getInputValues: function(){
            return {
                inputType: document.querySelector(DOMStrings.inputType).value,
                inputDesc: document.querySelector(DOMStrings.inputDesc).value,
                inputValue: document.querySelector(DOMStrings.inputValue).value
            }
        },
        getDOMStrings: function(){
            return DOMStrings;
        }
    }
})();

//APP CONTROLLER
var appController = (function(budgetCtrl,uiCtrl){

    var DOM = uiCtrl.getDOMStrings();

    var ctrlAddItem = function(){
    /* To Do: */
    //1: Get input from the user
    var inputData = uiCtrl.getInputValues();
    console.log(inputData);
    
    //2: Add item to the budget controller

    //3: Add the item to the UI

    //4: Calculate the budget

    //5: Display the budget in the UI
    }

    document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });


})(budgetController,uIController);