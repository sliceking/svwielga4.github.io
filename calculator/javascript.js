function NUMBER(element){
    var self = this;
    this.key = element[0]['innerHTML'];
    this.element = element;
    this.press = function(){
        var text_area = $('#text_area'); //sets variable text_area to #text_area
        if ($('#operator').text() && calc.second_number_flag){ //if there is text in the operator area, and the second_number_flag is true, clear the display area before putting new numbers in
            text_area.empty();
            calc.second_number_flag = false;
        }
        var text_area_text = text_area.text(); //sets variable to text inside of #text_area
        // var button_text = $(button).text(); //sets new_text variable to the button number
        if(calc.decimal_flag && self.key == '.'){ //if a decimal has already been pressed, ignore the second decimal press
            return;
        }
        else if(self.key == '.'){ //if this is the first decimal press, switch the decimal flag to true
            calc.decimal_flag = true;
        }
        if (typeof calc.input_sequence[0] == 'number' && !calc.input_sequence[1]){ //after a calculation, the displayed number is overwritten if number keys are pressed
            calc.input_sequence[0] = button_text;
            text_area.text(self.key);
            return;
        }
        var new_text = text_area_text + self.key; //creates new text variable of text_area_text + button_text
        text_area.text(new_text); //sets text_area to new_text
        calc.input_sequence[calc.input_position] = new_text; //sets input sequence at input_position to new_text
        console.log(calc.input_sequence);
    };
    $(this.element).click(function(){
        self.press();
    })
}
function OPERATOR(element){
    var self = this;
    this.key = element[0]['innerHTML'];
    this.element = element;
    this.press = function(){
        if(calc.input_sequence[calc.input_position] === ""){ //if an operator is pushed before any numbers, it disregards the operator
            return;
        }
        calc.decimal_flag = false; //resets the decimal flag to the original position
        // var button_text = $(button).text(); //variable for the operator's text
        var operator_display = $('#operator'); //jquery target for the operator display
        operator_display.text(self.key); //displays the operation text
        if(!isNaN(Number(calc.input_sequence[calc.input_position]))){
            calc.input_position++; //increments the input position
            calc.input_sequence[calc.input_position] = self.key; //adds the operator to the input sequence
            calc.input_position++; //increments the input position again for future numbers
            console.log(calc.input_sequence);
        } else {
            //input_position++; //increments the input position
            calc.input_sequence[calc.input_position -1] = self.key; //adds the operator to the input sequence
            //input_position++; //increments the input position again for future numbers
            console.log(calc.input_sequence);
        }
    };
    $(this.element).click(function(){
        self.press();
    })
}

function CALCULATOR(){
    var self = this;
    this.input_sequence = [''];
    this.input_position = 0;
    this.second_number_flag = true;
    this.decimal_flag = false;
    this.previous_operation = [];
    this.append_calculator = function(){
        var calc_body = $('#calc_body');
        var text_area = $('<h1>',{
            id:'text_area'
        });
        var button_1 = $('<button>',{
            text:'1',
            class:'number'
        });
        var button_2 = $('<button>',{
            text:'2',
            class:'number'
        });
        var button_3 = $('<button>',{
            text:'3',
            class:'number'
        });
        var button_4 = $('<button>',{
            text:'4',
            class:'number'
        });
        var button_5 = $('<button>',{
            text:'5',
            class:'number'
        });
        var button_6 = $('<button>',{
            text:'6',
            class:'number'
        });
        var button_7 = $('<button>',{
            text:'7',
            class:'number'
        });
        var button_8 = $('<button>',{
            text:'8',
            class:'number'
        });
        var button_9 = $('<button>',{
            text:'9',
            class:'number'
        });
        var button_0 = $('<button>',{
            text:'0',
            class:'number'
        });
        var button_add = $('<button>',{
            text:'+',
            class:'operator'
        });
        var button_multiply = $('<button>',{
            text:'*',
            class:'operator'
        });
        var button_divide = $('<button>',{
            text:'/',
            class:'operator'
        });
        var button_subtract = $('<button>',{
            text:'-',
            class:'operator'
        });
        var button_decimal = $('<button>',{
            text:'.',
            class:'number'
        });
        var button_equals = $('<button>',{
            text:'=',
            class:'equals'
        });
        var calc_array = [text_area, button_7, button_8, button_9, button_divide, button_4, button_5, button_6, button_multiply, button_1, button_2, button_3, button_subtract, button_0, button_decimal, button_equals, button_add];
        for (var i = 0; i < calc_array.length; i++){
            calc_body.append(calc_array[i]); //appends buttons in the calc_array to the calc_body
            if(calc_array[i].hasClass('number')){
                var number = new NUMBER(calc_array[i]);
            } else if(calc_array[i].hasClass('operator')){
                var operator = new OPERATOR(calc_array[i]);
            }
            if(i % 4 == 0){
                calc_body.append('<br>'); //adds a line break every 4th button
            }
        }
    };
    this.do_math = function(){
        self.second_number_flag = true; //reset the second_number_flag back to its original position
        var text_area = $('#text_area');
        var operator_area = $('#operator');
        var number1; //creates number 1 variable
        if(self.previous_operation && self.input_position == 0){ //if there is a previous operation and input_position is 0, continue with operation repeat
            number1 = Number(self.input_sequence[0]); //assign value to number1
            self.input_sequence[1] = self.previous_operation[1]; //assign value from previous operation to the new operation
            self.input_sequence[2] = self.previous_operation[2];
        }
        else if(self.input_position == 0){ //if the input position is equal to 0, return out of the function
            return;
        }
        text_area.empty(); //empties the text area
        operator_area.empty(); //empties the operator area
        number1 = Number(self.input_sequence[0]);
        if (self.input_sequence[2] == undefined){ //if only partial operands are available, set the second operand to be the same as the first
            self.input_sequence[2] = number1;
            var number2 = number1;
        }else{
            var number2 = Number(self.input_sequence[2]);
        }

        var operator = self.input_sequence[1];
        var answer = null;
        switch (operator){
            case '/':
                answer = number1 / number2;
                break;
            case '+':
                answer = number1 + number2;
                break;
            case "*":
                answer = number1 * number2;
                break;
            case '-':
                answer = number1 - number2;
                break;
            default:
                answer = 'error';
                break;
        }
        var string_answer = answer.toString();
        if (answer == 'Infinity'){
            answer = 'error'
        }else if (string_answer.length > 9){
            answer = answer.toPrecision(8);
        }
        self.previous_operation = self.input_sequence;
        self.input_sequence = [answer];
        self.input_position = 0;
        console.log(self.input_sequence);
        return answer;
    };
    this.reset = function(){
        self.input_sequence = [''];
        self.input_position = 0;
        self.second_number_flag = true;
        self.decimal_flag = false;
        self.previous_operation = [];
        var text_area = $('#text_area');
        text_area.empty();
        var operator_area = $('#operator');
        operator_area.empty();
    }
}

$(document).ready(function(){
    calc.append_calculator();
    $('.equals').click(function(){ //when the equals button is pressed, run do_math()
        $('#text_area').text(calc.do_math());
    });
    $('.clear').click(function(){ //when the clear button is pressed, run reset_calculator()
        calc.reset();
    })
});

var calc = new CALCULATOR();