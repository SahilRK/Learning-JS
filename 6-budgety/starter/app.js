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

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(curr){
            sum += curr.value;
        });

        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return{
        addItem: function(type,desc,val){
            //Initialize variables
            var newItem,ID;

            //Create ID for newItem
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else{
                ID = 0;
            }

            //Create new item based on income or expense
            if(type === 'exp'){
                newItem = new Expense(ID,desc,val);
            }else if(type === 'inc'){
                newItem = new Income(ID,desc,val);
            }

            //Push Item to the the datastructure
            data.allItems[type].push(newItem);

            //return the new item
            return newItem;
        },
        calculateBudget: function(){

            //calculate total incomes and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate budget = incomes - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the percentge of income that is spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc)*100);
            }else{
                data.percentage = -1;
            }

        },
        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function(){
            console.log(data);
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
        addBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        totIncLabel: ".budget__income--value",
        totExpLabel: ".budget__expenses--value",
        totBudget: ".budget__value",
        incPerc: ".budget__expenses--percentage"
    }

    //Public part of the main controller function
    return {
        //Gets expense inputs from the user
        getInputValues: function(){
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                desc: document.querySelector(DOMStrings.inputDesc).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function(listItemObj, type){
            //Initialize loc variables
            var htmlItemStr,newHtmlItemStr,domElement;

            //Create an HTML string with placeholders
            if(type === 'inc'){
                domElement = DOMStrings.incomeContainer;

                htmlItemStr = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            else if( type === 'exp'){
                domElement = DOMStrings.expensesContainer;

                htmlItemStr = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }            
            //Replace the placeholders with actual data
            newHtmlItemStr = htmlItemStr.replace('%id%', listItemObj.id);
            newHtmlItemStr = newHtmlItemStr.replace('%description%', listItemObj.description);
            newHtmlItemStr = newHtmlItemStr.replace('%value%', listItemObj.value);

            //Insert the HTML into the DOM
            document.querySelector(domElement).insertAdjacentHTML('beforeend',newHtmlItemStr);

        },

        clearInputFields: function(){
            var inpFields,inpFieldsArr;

            //Get all the fields to be cleared using querySelectorAll. This returns a list
            inpFields = document.querySelectorAll(DOMStrings.inputDesc+ ", "+DOMStrings.inputValue);

            //Since inpFields is a list, we have to call the array method slice on it from the prototype since slice cannot be called on a list
            inpFieldsArr = Array.prototype.slice.call(inpFields);

            //Loop through the inpFieldsArr and clear the values
            inpFieldsArr.forEach(function(curr, index, arr){
                curr.value = "";
            });

            //focus back to the description input field
            inpFieldsArr[0].focus();

        },

        //Display budget in UI
        displayBudget: function(obj){
            document.querySelector(DOMStrings.totBudget).textContent = obj.budget;
            document.querySelector(DOMStrings.totIncLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.totExpLabel).textContent = obj.totalExp;
            document.querySelector(DOMStrings.incPerc).textContent = obj.percentage;
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

    var updateBudget = function(){

        //1: Calculate the budget
        budgetCtrl.calculateBudget();

        //2: Return the budget
        var budget = budgetCtrl.getBudget();

        //3: Display the budget in the UI
        uiCtrl.displayBudget(budget);
    }

    var ctrlAddItem = function(){
    //declare variables
    var inputData,newItem;

    /* To Do: */
    //1: Get input from the user
    inputData = uiCtrl.getInputValues();
    
    if(inputData.desc !== "" && !isNaN(inputData.value) && inputData.value > 0){

        //2: Add item to the budget controller
        newItem = budgetCtrl.addItem(inputData.type,inputData.desc,inputData.value);
        //3: Add the item to the UI
        uiCtrl.addListItem(newItem,inputData.type);

        //4: Clear all the input fields after adding the item
        uiCtrl.clearInputFields();
        
        //5: Update the budget
        updateBudget();

    }

    };

    return{
        //A public function to execute all functions
        init: function(){
            //console.log("Application has started");
            setupEventListeners();
        }
    }

})(budgetController,uIController);

appController.init();