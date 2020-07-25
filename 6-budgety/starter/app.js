//BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }
    }

})();

//UI CONTROLLER
var uIController = (function(){

    //This Object stores all names of the DOM elements to be reused by all functions.
    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
    }

    //Public part of the main controller function
    return {
        //Gets expense inputs from the user
        getInputValues: function(){
            return {
                inputType: document.querySelector(DOMStrings.inputType).value,
                inputDesc: document.querySelector(DOMStrings.inputDesc).value,
                inputValue: document.querySelector(DOMStrings.inputValue).value
            }
        },

        //Returns DOMStrings object to all functions that call this function.
        getDOMStrings: function(){
            return DOMStrings;
        }
    }
})();

//APP CONTROLLER
var appController = (function(budgetCtrl,uiCtrl){

    //This function stores and executes all event listners
    var setupEventListeners = function(){
        
        //Get DOM Element names from Object
        var DOM = uiCtrl.getDOMStrings();

        //Setup event listners
        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){
    /* To Do: */
    //1: Get input from the user
    var inputData = uiCtrl.getInputValues();
    console.log(inputData);
    
    //2: Add item to the budget controller

    //3: Add the item to the UI

    //4: Calculate the budget

    //5: Display the budget in the UI
    };

    return{
        //A public function to execute all functions
        init: function(){
            console.log("Application has started");
            setupEventListeners();
        }
    }

})(budgetController,uIController);

appController.init();