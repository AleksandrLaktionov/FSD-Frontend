import {
    Checkbox_List, 
    Form_checkbox1, 
    Form_checkbox2, 
    Form_checkbox3, 
    Form_checkbox4, 
    Form_checkbox5, 
    Form_checkbox6
} from './../pug/UIkit/Checkbox'

const Add = (a,b) => a+b

export default Add

$(document).ready(function(){
    ($('.Form10').click(function(){
        $(this).html([
            Checkbox_List, 
            Form_checkbox1, 
            Form_checkbox2, 
            Form_checkbox3, 
            Form_checkbox4, 
            Form_checkbox5, 
            Form_checkbox6])
    }));
})