/*this code is ass*/
$(()=>{
    let subjectGood=false;
    let dayGood=false;
    let fromTimeGood=false;
    $("#subject").on("input", function(){
        let subject = $(this).val();
        if(subject.trim().length > 0){
            subjectGood=true;
        }
        else{
            subjectGood=false;
        }
        TryEnableSubmit();
    })
    $("#day").on("change", function(){
        let day=$(this).find(":selected").val();
        if(day=="-"){
            dayGood=false;
        }
        else{
            dayGood=true;
        }
        EnableSubmit();
    })
    $("#fromTime").on("input", function(){
        try{
            let fromTime = Number($(this).val());
            if(fromTime>=0 && fromTime<24){
                fromTimeGood=true;
            }
            else{
                fromTimeGood=false;
            }
        }
        catch{
            fromTimeGood=false;
        }
        TryEnableSubmit();
    })
    $("#lengthTime").on("input", function(){
        try{
            let lengthTime = Number($(this).val());
            if(fromTime>=0 && fromTime<169){
                fromTimeGood=true;
            }
            else{
                fromTimeGood=false;
            }
        }
        catch{
            fromTimeGood=false;
        }
        TryEnableSubmit();
    })
})

function TryEnableSubmit(){
    if(subjectGood && dayGood){
        $("#submitBtn").prop("disabled", false);
    }
    else{
        $("#submitBtn").prop("disabled", true);
    }
}