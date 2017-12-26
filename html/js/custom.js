/* global $ */

$(document).ready(function() {
    var textCountLimit = 38;
    $('#all_fonts').keyup(function() {
        // 텍스트영역의 길이를 체크
        var textLength = $(this).val().length;

        // 입력된 텍스트 길이를 #textCount 에 업데이트 해줌
        $('#textCount').text(textLength);

        // 제한된 길이보다 입력된 길이가 큰 경우 제한 길이만큼만 자르고 텍스트영역에 넣음
        if (textLength > textCountLimit) {
            $(this).val($(this).val().substr(0, textCountLimit));
        }
    });
    $('textarea[name=editor]').keyup(function() {
        // 텍스트영역의 길이를 체크
        var textLength = $(this).val().length;

        // 입력된 텍스트 길이를 #textCount 에 업데이트 해줌
        $('#textCount').text(textLength);

        // 제한된 길이보다 입력된 길이가 큰 경우 제한 길이만큼만 자르고 텍스트영역에 넣음
        if (textLength > textCountLimit) {
            $(this).val($(this).val().substr(0, textCountLimit));
        }
    });
    
    $('.filled-in').click(function(){
        var labelName = $(this).siblings();
        $(labelName).toggleClass('c-gray');
    });
    
    $('.filter-btn').click(function(){
        $('.filter-btn').css('display','none');
        $('.preloader-middle').css('display','block');
        setTimeout(function() { 
            $('.filter-btn').css('display','inline-block');
            $('.preloader-middle').css('display','none');
            }, 2000);
    });
    
    $('.search-btn').click(function(){
        // $('.search-area').slideToggle();
    });
    
    $('.scrollup').click(function () {
        $("html, body").animate({
           scrollTop: 0
        }, 600);
    });
    
    // $('#search-btn').click(function(){
    //     var search_text= $(".search-txt").val();
    //     $.ajax({
    //       method: "GET",
    //       url: "/search_bar",
    //       data: { search_text: search_text },
    //       success:function(data){
    //         // $("#section").empty();
    //         //  $.each( data.select_result, function( key, f ) {
    //         // //   alert(data.company[key]);
    //         //     alert(f.font_style);
    //         //     var a= "<div class='col xl3 s6 m4'><div class='box' style=";
    //         //     var b = "><div class='font-box'><a href='/font_page' class='font-name'>"+ f.fontName + "</a><br><span class='font-br normal'>"+data.company[key]+"</span><span class='checked'><svg class='_t8 _5a block' height='23' width='26' viewBox='0 0 16 16' aria-label='' role='img'><title></title><path d='M6.112 14.5L.487 8.526a1.845 1.845 0 0 1 0-2.498c.65-.69 1.703-.69 2.352 0l3.273 3.475 7.049-7.485c.65-.69 1.702-.69 2.352 0 .65.69.65 1.807 0 2.497L6.112 14.5z'></path></svg></span></div><div class='text-box'><textarea lang='ko' name='editor' id='editor' class='custom-txt' placeholder='"+f.ph_content+"'></textarea></div></div></div>";
    //         //   $("#section").append(a+f.font_style+b);
    //         //  });
    //       },
    //       error:function(request,status,error){
    //          alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
    //       }
           
    //     })
    // });
    
    $("#search-btn").click(function(){
        var search_text= $(".search-txt").val();
        var checkboxValues = [0];
        $("input[name='category']:checked").each(function(i) {
            checkboxValues.push($(this).val());
        });
        
        //alert(checkboxValues)
        $.ajax({
          method: "GET",
          url: "/search_check",
          data: { checkboxValue : checkboxValues, search_text: search_text },
        //   dataType: 'script',
          success:function(data){
            //alert("hello");
            // alert(checkboxValues);
          },
          error:function(request,status,error){
             alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          }
           
        })

    });
    
    var reapeat;

    $("#all_fonts").focus(function() {
        reapeat=setInterval(function(){
            var modiAll =$("#all_fonts").val();
            $(".custom-txt").val(modiAll);
        },100);
        
        
    });
    $("#all_fonts").focusout(function(){
        clearInterval(reapeat);
    });
    
});

    
 
