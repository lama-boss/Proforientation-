var delay1 = 400;
var arr = 0;
var ddo = 0;
var typeforemail=0;
var typeforDDOemail=0;
var imgsrc;
var x = 700;
var m = 1;
function Add1Div(){
  setTimeout(function () {
  $("div.input1").remove(); 
  $("div.input2").remove();
    $('<div class="input1" title="'+Ttlarr[arr][0]+'" id="q1" onclick="setOpacity2();createNe();"></div>').appendTo('#MainDiv');
    $('<input id="radio1" name="radiob1" type="radio"/>').appendTo('#q1');
    $('<label id="l1" for="radio1">'+MainArray[0][0]+'</label>').appendTo('#q1');
    $('<div class="input2" title="'+Ttlarr[arr][1]+'" id="q2" onclick="setOpacity1();createNe();"></div>').appendTo('#MainDiv');
    $('<input id="radio2" name="radiob2" type="radio"/>').appendTo('#q2');
    $('<label id="l2" for="radio2">'+MainArray[0][1]+'</label>').appendTo('#q2');
    $("#q1").fadeTo(10, 0);
    $("#q2").fadeTo(10, 0);
    $("#q1").fadeTo(450, 1);
    $("#q2").fadeTo(450, 1);
  }, delay1);
   }

   function setOpacity1() {
    $("#q1").fadeTo(370, 0);
    setTimeout(function () { 
      $("div.input1").remove(); 
      $("div.input2").remove();
    }, delay1);
    }


function SendEmailforddo(){
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Реалистический тип', TypeArray[0]],
    ['Социальный тип', TypeArray[1]],
    ['Интеллектуальный тип', TypeArray[2]],
    ['Предпринимательский тип', TypeArray[3]],
    ['Офисный тип', TypeArray[4]],
    ['Артистический тип', TypeArray[5]]
    ]);
    
    var options = {'width':500,
             'height':500,
             "backgroundColor": "#202020",
              legend: 'none', 
              colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e','#e43e3f']
            };
  
          var chart_div = document.getElementById('chart_div');
          var chart = new google.visualization.PieChart(chart_div);

          google.visualization.events.addListener(chart, 'ready', function () {
            chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
          });
          chart.draw(data, options);
          setTimeout(function () {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "aekarev@mail.com",
            Password : "3368bd36-44be-487b-b99d-490a9f822d88",
            To : document.getElementById('uemail').value,
            From : "spporesult@gmail.com",
            Subject : "Ваши результаты в тесте по профориентации",
            Body: '<html> <head><linkhref="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet"/></head> <body> <div style="background-color:#202020;border-radius:8px;font-size:25px;color:#e7e3e2;font-family: "Open Sans", sans-serif;;padding-bottom: 100px;padding: 10px"> <div style="color:#e7e3e2;background-color:#6a68eb;padding-top:5px;display:block;margin:10px auto;padding-left:30px;border-radius:8px;width:25%">'+DDOParr[typeforDDOemail][0]+'</div> <div style="padding: 4px;font-size:25px;color:#e7e3e2;background-color:#6a68eb;display:block;margin:5px auto;padding-left:30px;border-radius:8px;width:25%">'+DDOParr[typeforDDOemail][1]+'</div> <div style="color:#e7e3e2;margin:auto;width:90%;padding-top:100px"> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*DDOTarr[0]+'px;background-color:#685dfa;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+DDOTarr[0]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Человек-природа</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*DDOTarr[1]+'px;background-color:#bf50e8;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+DDOTarr[1]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Человек-техника</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*DDOTarr[2]+'px;background-color:#ff5b3c;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+DDOTarr[2]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Человек-человек</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*DDOTarr[3]+'px;background-color:#e8da1a;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+DDOTarr[3]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Человек-знаковая система</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*DDOTarr[4]+'px;background-color:#50db3e;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+DDOTarr[4]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Человек- художественный образ</p> </div> </div> <img src="'+chart.getImageURI()+'"> </div> </body></html>'
          }).then(
          message => setTimeout(function(){alert(message+"  Если письма нет во входящих, то проверьте спам")},500) 
          );
          setTimeout(function () {
            $('<div class="Schart" id="chart_div"></div>').appendTo('#MainGchart');
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            
            function drawChart() {
            
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
              ['Реалистический тип', TypeArray[0]],
              ['Социальный тип', TypeArray[1]],
              ['Интеллектуальный тип', TypeArray[2]],
              ['Предпринимательский тип', TypeArray[3]],
              ['Офисный тип', TypeArray[4]],
              ['Артистический тип', TypeArray[5]]
              ]);
              
              var options = {'width':500,
                       'height':500,
                       "backgroundColor": "#202020",
                        legend: 'none', 
                        colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e','#e43e3f']
                      };
            
                    var chart_div = document.getElementById('chart_div');
                    var chart = new google.visualization.PieChart(chart_div);
          
                    chart.draw(data, options);
            }
             setTimeout(function () {
                 $("#chart_div").fadeTo(0, 0);
                 $("#chart_div").fadeTo(650, 1);
                 $('html, body').animate({
                 scrollTop: $("#chart_div").offset().top
                 }, 850);
             }, 1);
          }, 1);
        }, 1);
}
}

function SendEmail(){
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
  ['Реалистический тип', TypeArray[0]],
  ['Социальный тип', TypeArray[1]],
  ['Интеллектуальный тип', TypeArray[2]],
  ['Предпринимательский тип', TypeArray[3]],
  ['Офисный тип', TypeArray[4]],
  ['Артистический тип', TypeArray[5]]
  ]);
  
  var options = {'width':500,
           'height':500,
           "backgroundColor": "#202020",
            legend: 'none', 
            colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e','#e43e3f']
          };
  
          var chart_div = document.getElementById('chart_div');
          var chart = new google.visualization.PieChart(chart_div);

          google.visualization.events.addListener(chart, 'ready', function () {
            chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
          });
          chart.draw(data, options);
          setTimeout(function () {
          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "aekarev@mail.com",
            Password : "3368bd36-44be-487b-b99d-490a9f822d88",
            To : document.getElementById('uemail').value,
            From : "spporesult@gmail.com",
            Subject : "Ваши результаты в тесте по профориентации",
            Body: '<html> <head><linkhref="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet"/></head><body><div style="background-color:#202020;border-radius:8px;font-size:25px;color:#e7e3e2;font-family: "Open Sans", sans-serif;;padding-bottom: 100px;padding: 10px"> <div style="color:#e7e3e2;background-color:#6a68eb;padding-top:5px;display:block;margin:10px auto;padding-left:30px;border-radius:8px;width:25%">'+ProfArray[typeforemail][0]+'</div> <div style="padding: 4px;font-size:25px;color:#e7e3e2;background-color:#6a68eb;display:block;margin:5px auto;padding-left:30px;border-radius:8px;width:25%">'+ProfArray[typeforemail][1]+'</div> <div style="color:#e7e3e2;margin:auto;width:90%;padding-top:100px"> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[0]+'px;background-color:#685dfa;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[0]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Реалистический тип</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[1]+'px;background-color:#bf50e8;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[1]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Социальный тип</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[2]+'px;background-color:#ff5b3c;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[2]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Интеллектуальный тип</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[3]+'px;background-color:#e8da1a;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[3]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Предпринимательский</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[4]+'px;background-color:#50db3e;display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[4]+'</p> <p style="color:#e7e3e2;margin:auto;font-size:17px">Офисный тип</p> </div> <div style="width:220px;height:30px;margin-left:15px;display:inline-flex;border-radius:8px;padding-top:'+50*TypeArray[5]+'px;background-color:rgb(228,62,62);display:inline-block"> <p style="background-color:#202020;border-radius:50%;width:30px;height:30px;text-align:center;font-size:20px;border:1px #e7e3e2 solid">'+TypeArray[5]+'</p> <p style="color:#e7e3e2;font-size:17px">Артистический тип</p> </div> </div> <img src="'+chart.getImageURI()+'"> </div> </body></html>'
          }).then(
                  message => setTimeout(function(){alert(message+"  Если письма нет во входящих, то проверьте спам")},500) 
          );
          setTimeout(function () {
            $('<div class="Schart" id="chart_div"></div>').appendTo('#MainGchart');
            google.charts.load("current", {packages:["corechart"]});
            google.charts.setOnLoadCallback(drawChart);
            
            function drawChart() {
            
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
            ['Реалистический тип', TypeArray[0]],
            ['Социальный тип', TypeArray[1]],
            ['Интеллектуальный тип', TypeArray[2]],
            ['Предпринимательский тип', TypeArray[3]],
            ['Офисный тип', TypeArray[4]],
            ['Артистический тип', TypeArray[5]]
            ]);
            
            var options = {'width':500,
                     'height':500,
                     "backgroundColor": "#202020",
                      legend: 'none', 
                      colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e','#e43e3f']
                    };
            
                    var chart_div = document.getElementById('chart_div');
                    var chart = new google.visualization.PieChart(chart_div);
          
                    chart.draw(data, options);
            }
             setTimeout(function () {
                 $("#chart_div").fadeTo(0, 0);
                 $("#chart_div").fadeTo(650, 1);
                 $('html, body').animate({
                 scrollTop: $("#chart_div").offset().top
                 }, 850);
             }, 1);
          }, 1);
        }, 1);
}

}

function DDO(){
  $("#q1").fadeTo(450, 0); 
  $("#q2").fadeTo(450, 0); 
  $("#MainDiv").fadeTo(450, 0); 
  $("#ChartDiv").fadeTo(450, 0); 
  $("#chart_div").fadeTo(450, 0); 
  $("#ButtDiv").fadeTo(350, 0); 
  $("#Qcounter").fadeTo(450, 0); 
  $("#forqwerty").fadeTo(450, 0);
  $("#emailDiv").fadeTo(450, 0);
  setTimeout(function(){
    $("div.QuestionsDiv").remove(); 
    $("div.chart_div").remove(); 
    $("div.allt").remove(); 
    $("div#ButtDiv").remove();
    $("div.Schart").remove(); 
    $("div#qwerty").remove(); 
    $("div#Qcounter").remove();
    $("div#ChartDiv").remove();
    $("div.emailDiv").remove();
    $('<div class="QuestionsDiv" id="MainDiv"></div>').appendTo('.bla');
    $('<div class="input1" style="opacity:1" id="q1" onclick="setOpacity2();DDOstart()"></div>').appendTo('#MainDiv');
    $('<input id="radio1" name="radiob1" type="radio"/>').appendTo('#q1');
    $('<label id="l1" for="radio1">Предположим, что после соответствующего обучения Вы сможете выполнить любую работу. <p> Но если бы Вам пришлось выбирать только из двух возможностей, что бы Вы предпочли?</p><p>В этом тесте всего 20 вопросов, нажмите для начала.</p><p></p></label>').appendTo('#q1');
    $("#MainDiv").fadeTo(1, 0); 
    $("#MainDiv").fadeTo(450, 1);
  },450)
  
}

function DDOstart(){
  setTimeout(function(){
    $("div.QuestionsDiv").remove(); 
    $('<div class="QuestionsDiv" id="MainDiv"></div>').appendTo('.bla');
    $('<div class="input1" style="opacity:1" id="q1" onclick="setOpacity2();createDDO();"></div>').appendTo('#MainDiv');
    $('<input id="radio1" name="radiob1" type="radio"/>').appendTo('#q1');
    $('<label id="l1" for="radio1">'+DDOArray[0][0]+'</label>').appendTo('#q1');
    $('<div class="input2" style="opacity:1" id="q2" onclick="setOpacity1();createDDO();"></div>').appendTo('#MainDiv');
    $('<input id="radio2" name="radiob2" type="radio"/>').appendTo('#q2');
    $('<label id="l2" for="radio2">'+DDOArray[0][1]+'</label>').appendTo('#q2');
    $("#MainDiv").fadeTo(1, 0); 
    $("#MainDiv").fadeTo(450, 1);
  },460)
}

function createDDO(){
  $("div#ChartDiv").remove();
var but1 = document.getElementById("radio1");
var but2 = document.getElementById("radio2");
if(but1.checked||but2.checked){
  if(but1.checked){
  document.getElementById("radio1").className = DDOArray[ddo][2];
  var classbut1 = ($("#radio1").attr('class'));
  if (classbut1==1) { 
    DDOTarr[0]++;
  }
  else if (classbut1==2) { 
    DDOTarr[1]++;
  }
  else if (classbut1==3) { 
    DDOTarr[2]++;
  }
  else if (classbut1==4) { 
    DDOTarr[3]++;
  }
  else if (classbut1==5) { 
    DDOTarr[4]++;
  }
}
else if(but2.checked){
  document.getElementById("radio2").className = DDOArray[ddo][3];
  var classbut2 = ($("#radio2").attr('class'));
  if (classbut2==1) { 
    DDOTarr[0]++;
  }
  else if (classbut2==2) { 
    DDOTarr[1]++;
  }
  else if (classbut2==3) { 
    DDOTarr[2]++;
  }
  else if (classbut2==4) { 
    DDOTarr[3]++;
  }
  else if (classbut2==5) { 
    DDOTarr[4]++;
  }
}
}

if(ddo==19){

  setTimeout(function(){

    $("div.QuestionsDiv").remove();
    $("div#Qcounter").remove();
    $("#forqwerty").fadeTo(450, 1);


    $('<div class="QuestionsDiv" id="MainDiv"></div>').appendTo('.bla');
    $('<div class="type">Ваш результат во втором тесте:</div>').appendTo('#MainDiv');
      if((DDOTarr[0] == Math.max.apply(null, DDOTarr))){
        typeforDDOemail = 0;
        $('<div class="type">'+DDOParr[0][0]+'</div>').appendTo('#MainDiv');
        $('<div class="type">'+DDOParr[0][1]+'</div>').appendTo('#MainDiv');
      }
      else if((DDOTarr[1] == Math.max.apply(null, DDOTarr))){
        typeforDDOemail = 1;
        $('<div class="type">'+DDOParr[1][0]+'</div>').appendTo('#MainDiv');
        $('<div class="type">'+DDOParr[1][1]+'</div>').appendTo('#MainDiv');
      }
      else if((DDOTarr[2] == Math.max.apply(null, DDOTarr))){
        typeforDDOemail = 2;
        $('<div class="type">'+DDOParr[2][0]+'</div>').appendTo('#MainDiv');
        $('<div class="type">'+DDOParr[2][1]+'</div>').appendTo('#MainDiv');
      }
      else if((DDOTarr[3] == Math.max.apply(null, DDOTarr))){
        typeforDDOemail = 3;
        $('<div class="type">'+DDOParr[3][0]+'</div>').appendTo('#MainDiv');
        $('<div class="type">'+DDOParr[3][1]+'</div>').appendTo('#MainDiv');
      }
      else if((DDOTarr[4] == Math.max.apply(null, DDOTarr))){
        typeforDDOemail = 4;
        $('<div class="type">'+DDOParr[4][0]+'</div>').appendTo('#MainDiv');
        $('<div class="type">'+DDOParr[4][1]+'</div>').appendTo('#MainDiv');
      }
      $('<div style="opacity:0" class="type">ВАШ РЕЗУЛЬТАТ В ТЕСТЕ ДДО:</div>').appendTo('#MainDiv');
      $('<div class="type">Ваш результат в первом тесте:</div>').appendTo('#MainDiv');
      $('<div class="type">'+ProfArray[typeforemail][0]+'</div>').appendTo('#MainDiv');
      $('<div class="type">'+ProfArray[typeforemail][1]+'</div>').appendTo('#MainDiv');
    $("#MainDiv").fadeTo(0, 0); 
    $("#MainDiv").fadeTo(400, 1);

}, delay1);

$("div#qwertyq").empty()
    $('<div class="Schart" id="chart_div"></div>').appendTo('#MainGchart');
    $('<div id="qwertyq"></div>').appendTo('#forqwerty');
    $('<div id="emailDiv" onmouseenter="Menter()" onmouseleave="Mleave()" style="margin-top:30px"></div>').appendTo('#qwertyq');
    $('<p><label for="email" id="labelemail">@</label>').appendTo('#emailDiv');
    $('<p id="forhover"><input type="email" name="email" id="uemail"  oninput="myFunction()" placeholder="Ваш email">').appendTo('#emailDiv');
    $('<input name="emailbutton" class="emailbutton" type="button" onclick="SendEmailforddo()" value="Отправить ответ на ваш email"></input>').appendTo('#emailDiv');
    $('<div class="allt" id="ChartDiv"></div>').appendTo('#ForChart');
    $('<div class="t 0" id="t1" onclick="Nature()" data-title="Нажми на меня"><p class="n">'+DDOTarr[0]+'</p><p class="p">Человек-Природа</p></div>').appendTo('#ChartDiv');
    $('<div class="t 1" id="t2" onclick="Tech()" data-title="Нажми на меня"><p class="n">'+DDOTarr[1]+'</p><p class="p">Человек-Техника</p></div>').appendTo('#ChartDiv');
    $('<div class="t 2" id="t3" onclick="Human()" data-title="Нажми на меня"><p class="n">'+DDOTarr[2]+'</p><p class="p">Человек-Человек</p></div>').appendTo('#ChartDiv');
    $('<div class="t 3" id="t4" onclick="Sighnsys()" data-title="Нажми на меня"><p class="n">'+DDOTarr[3]+'</p><p class="p">Человек-знаковая система</p></div>').appendTo('#ChartDiv');
    $('<div class="t 4" id="t5" onclick="Artimg()" data-title="Нажми на меня"><p class="n">'+DDOTarr[4]+'</p><p class="p">Человек- Худ. образ</p></div>').appendTo('#ChartDiv');
    $('#t1').css('padding-top',50*DDOTarr[0]+'px');
    $('#t2').css('padding-top',50*DDOTarr[1]+'px');
    $('#t3').css('padding-top',50*DDOTarr[2]+'px');
    $('#t4').css('padding-top',50*DDOTarr[3]+'px');
    $('#t5').css('padding-top',50*DDOTarr[4]+'px');
  
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
        
        function drawChart() {
        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
    
        data.addRows([
          ['Человек-природа', DDOTarr[0]],
          ['Человек-техника', DDOTarr[1]],
          ['Человек-человек', DDOTarr[2]],
          ['Человек-знаковая система', DDOTarr[3]],
          ['Человек-художественный образ', DDOTarr[4]]
          ]);
    
        var options = {'width':500,
                 'height':500,
                 "backgroundColor": "#202020",
                  legend: 'none', 
                  colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e']
                };
        
                var chart_div = document.getElementById('chart_div');
                var chart = new google.visualization.PieChart(chart_div);
      
                chart.draw(data, options);
        }
}
  $(".left").fadeTo(450,0);
  setTimeout(function () {

    if (ddo > 19){
      $.getJSON('https://api.ipinfodb.com/v3/ip-city/?key=5542ff7c400a3de62981357070f7eb158a10409246f496fe7efa5a6da9aa7055&format=json&callback=?', function(data) {
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "aekarev@mail.com",
        Password : "3368bd36-44be-487b-b99d-490a9f822d88",
        To : "prorintresult@gmail.com",
        From : "spporesult@gmail.com",
        Subject : "Ваши результаты в тесте по профориентации",
        Body: 'РЕЗУЛЬТАТ ТЕСТА КЛИМОВА:'+JSON.stringify(data, null, 2)+'<p>Человек-природа - '+DDOTarr[0]+'</p><p>Человек-техника - '+DDOTarr[1]+'</p><p>Человек-человек - '+DDOTarr[2]+'</p><p>Человек-знаковая система - '+DDOTarr[3]+'</p><p>Человек-художественный образ - '+DDOTarr[4]+'</p>'
      })
     });
    }

    ddo+=1/2;
    $("p.left").remove();
    $("div#Qcounter").remove();
    $('<div class="input1" id="q1" onclick="setOpacity2();createDDO();"></div>').appendTo('#MainDiv');
     $('<input id="radio1" name="radiob1" type="radio"/>').appendTo('#q1');
     $('<label id="l1" for="radio1">'+DDOArray[ddo][0]+'</label>').appendTo('#q1');
     $('<div class="input2" id="q2" onclick="setOpacity1();createDDO();"></div>').appendTo('#MainDiv');
     $('<input id="radio2" name="radiob2" type="radio"/>').appendTo('#q2');
     $('<label id="l2" for="radio2">'+DDOArray[ddo][1]+'</label>').appendTo('#q2');
     $('<center><div id="Qcounter"></div></center>').appendTo('.bla');
     $('<p class="left" style="opacity:0">'+(ddo+1)+'</p>').appendTo('#Qcounter');
     $(".left").fadeTo(450,1);
     $("#q1").fadeTo(400, 1); 
     $("#q2").fadeTo(400, 1);

  }, delay1);

}

function Nature(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+DDOParr[0][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+DDOParr[0][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}
function Tech(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+DDOParr[1][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+DDOParr[1][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
} 
function Human(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+DDOParr[2][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+DDOParr[2][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
} 
function Sighnsys(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+DDOParr[3][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+DDOParr[3][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}
function Artimg(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+DDOParr[4][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+DDOParr[4][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}

function createNe(){
var but1 = document.getElementById("radio1");
var but2 = document.getElementById("radio2");
if(but1.checked||but2.checked){
  $("#Qcounter").fadeTo(450, 0); 
  if(but1.checked){
  document.getElementById("radio1").className = MainArray[arr][2];
  var classbut1 = ($("#radio1").attr('class'));
  if (classbut1==1) { 
    TypeArray[0]++;
  }
  else if(classbut1==3){ 
    TypeArray[2]++; 
  }
  else if(classbut1==5){ 
    TypeArray[4]++;
  }
}
else if(but2.checked){
  document.getElementById("radio2").className = MainArray[arr][3];
  var classbut2 = ($("#radio2").attr('class'));
  if (classbut2==2) { 
    TypeArray[1]++;
  }
  else if(classbut2==4){ 
    TypeArray[3]++; 
  }
  else if(classbut2==6){ 
    TypeArray[5]++;
  }
}

if(arr==29){
  setTimeout(function () {
  if((TypeArray[0] == Math.max.apply(null, TypeArray))){
    typeforemail = 0;
    $('<div class="type">'+ProfArray[0][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[0][1]+'</div>').appendTo('#MainDiv');
  }
  else if((TypeArray[1] == Math.max.apply(null, TypeArray))){
    typeforemail = 1;
    $('<div class="type">'+ProfArray[1][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[1][1]+'</div>').appendTo('#MainDiv');
  }
  else if((TypeArray[2] == Math.max.apply(null, TypeArray))){
    typeforemail = 2;
    $('<div class="type">'+ProfArray[2][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[2][1]+'</div>').appendTo('#MainDiv');
  }
  else if((TypeArray[3] == Math.max.apply(null, TypeArray))){
    typeforemail = 3;
    $('<div class="type">'+ProfArray[3][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[3][1]+'</div>').appendTo('#MainDiv');
  }
  else if((TypeArray[4] == Math.max.apply(null, TypeArray))){
    typeforemail = 4; 
    $('<div class="type">'+ProfArray[4][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[4][1]+'</div>').appendTo('#MainDiv');
  }
  else if((TypeArray[5] == Math.max.apply(null, TypeArray))){
    typeforemail = 5;  
    $('<div class="type">'+ProfArray[5][0]+'</div>').appendTo('#MainDiv');
    $('<div class="type">'+ProfArray[5][1]+'</div>').appendTo('#MainDiv');
  }
  $('<div id="emailDiv" onmouseenter="Menter()" onmouseleave="Mleave()" ></div>').appendTo('#qwerty');
  $('<p><label for="email" id="labelemail">@</label>').appendTo('#emailDiv');
  $('<p id="forhover"><input type="email" name="email" id="uemail"  oninput="myFunction()" placeholder="Ваш email">').appendTo('#emailDiv');
  $('<input name="emailbutton" class="emailbutton" type="button" onclick="SendEmail()" value="Отправить ответ на ваш email"></input>').appendTo('#emailDiv');
  $('<div class="allt" id="ChartDiv"></div>').appendTo('#ForChart');
  $('<button class="buttonfddo" onclick="DDO()">Хотите уточнить результат?</button>').appendTo('#ButtDiv');
    $('<div class="t 0" id="t1" onclick="AddDivReal()" data-title="Нажми на меня"><p class="n">'+TypeArray[0]+'</p><p class="p">Реалистический тип</p></div>').appendTo('#ChartDiv');
    $('<div class="t 1" id="t2" onclick="AddDivSocial()" data-title="Нажми на меня"><p class="n">'+TypeArray[1]+'</p><p class="p">Социальный тип</p></div>').appendTo('#ChartDiv');
    $('<div class="t 2" id="t3" onclick="AddDivIntel()" data-title="Нажми на меня"><p class="n">'+TypeArray[2]+'</p><p class="p">Интеллектуальный тип</p></div>').appendTo('#ChartDiv');
    $('<div class="t 3" id="t4" onclick="AddDivEnretpr()" data-title="Нажми на меня"><p class="n">'+TypeArray[3]+'</p><p class="p">Предпринимательский тип</p></div>').appendTo('#ChartDiv');
    $('<div class="t 4" id="t5" onclick="AddDivOffice()" data-title="Нажми на меня"><p class="n">'+TypeArray[4]+'</p><p class="p">Офисный тип</p></div>').appendTo('#ChartDiv');
    $('<div class="t 5" id="t6" onclick="AddDivArtist()" data-title="Нажми на меня"><p class="n">'+TypeArray[5]+'</p><p class="p">Артистический тип</p></div>').appendTo('#ChartDiv');
    $('#t1').css('padding-top',50*TypeArray[0]+'px');
    $('#t2').css('padding-top',50*TypeArray[1]+'px');
    $('#t3').css('padding-top',50*TypeArray[2]+'px');
    $('#t4').css('padding-top',50*TypeArray[3]+'px');
    $('#t5').css('padding-top',50*TypeArray[4]+'px');
    $('#t6').css('padding-top',50*TypeArray[5]+'px');
    $("#MainDiv").fadeTo(1, 0); 
    $("#MainDiv").fadeTo(450, 1); 
    $("#ChartDiv").fadeTo(1, 0); 
    $("#ChartDiv").fadeTo(450, 1); 
    $('html, body').animate({
      scrollTop: $(".Schart").offset().top
  }, 2000);
  setTimeout(function(){
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Реалистический тип', TypeArray[0]],
    ['Социальный тип', TypeArray[1]],
    ['Интеллектуальный тип', TypeArray[2]],
    ['Предпринимательский тип', TypeArray[3]],
    ['Офисный тип', TypeArray[4]],
    ['Артистический тип', TypeArray[5]]
    ]);
    
    var options = {'width':500,
             'height':500,
             "backgroundColor": "#202020",
              legend: 'none', 
              colors: ['#695dfa', '#bf4fe8', '#ff5b3d', '#e8da1c', '#4edb3e','#e43e3f']
            };
    
            var chart_div = document.getElementById('chart_div');
            var chart = new google.visualization.PieChart(chart_div);
  
            chart.draw(data, options);
    }
    setTimeout(function(){
      $('html, body').animate({
        scrollTop: $(".type").offset().top
    },700);
    },1000)
  },500)
  blink(); 
  function blink(){
    $('#qwerty')
    .fadeOut(x)
    .fadeIn(x);
      setTimeout(blink,1500);
  }

  $('#forhover').hover(
    function(){
      x = x*1000000000;
    },
    function(){
    });


    

  }, delay1+20);

  $.getJSON('https://api.ipinfodb.com/v3/ip-city/?key=5542ff7c400a3de62981357070f7eb158a10409246f496fe7efa5a6da9aa7055&format=json&callback=?', function(data) {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "aekarev@mail.com",
      Password : "3368bd36-44be-487b-b99d-490a9f822d88",
      To : "prorintresult@gmail.com",
      From : "spporesult@gmail.com",
      Subject : "Ваши результаты в тесте по профориентации",
      Body: 'РЕЗУЛЬТАТ ТЕСТА ХОЛЛАНДА:'+JSON.stringify(data, null, 2)+'<p>Реалистический тип - '+TypeArray[0]+'</p><p>Социальный тип - '+TypeArray[1]+'</p><p>Интеллектуальный тип - '+TypeArray[2]+'</p><p>Предпринимательский тип - '+TypeArray[3]+'</p><p>Офисный тип - '+TypeArray[4]+'</p><p>Артистический тип - '+TypeArray[5]+'</p>'
    })
  });

}}

setTimeout(function () {
  arr +=1/2;
  $("p.left").remove(); 
  $("div#Qcounter").remove();
  $('<div class="input1" title="'+Ttlarr[arr][0]+'" id="q1" onclick="setOpacity2();createNe();"></div>').appendTo('#MainDiv');
   $('<input id="radio1" name="radiob1" type="radio"/>').appendTo('#q1');
   $('<label id="l1" for="radio1">'+MainArray[arr][0]+'</label>').appendTo('#q1');
   $('<div class="input2" title="'+Ttlarr[arr][1]+'" id="q2" onclick="setOpacity1();createNe();"></div>').appendTo('#MainDiv');
   $('<input id="radio2" name="radiob2" type="radio"/>').appendTo('#q2');
   $('<label id="l2" for="radio2">'+MainArray[arr][1]+'</label>').appendTo('#q2');
   $('<center><div id="Qcounter"></div></center>').appendTo('#MainDiv');
   $('<p class="left">'+(arr+1)+'</p>').appendTo('#Qcounter');
   $("#Qcounter").fadeTo(1, 0); 
   $("#Qcounter").fadeTo(450, 1); 
   $("#q1").fadeTo(400, 1); 
   $("#q2").fadeTo(400, 1);
}, delay1);
}
function AddDivReal(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[0][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[0][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}
function AddDivSocial(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[1][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[1][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
} 
function AddDivIntel(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[2][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[2][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
} 
function AddDivEnretpr(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[3][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[3][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}
function AddDivOffice(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[4][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[4][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}
function AddDivArtist(){
       $('html, body').animate({
        scrollTop: $(".type").offset().top
    }, 700);
  $("div.type").fadeTo(450, 0);
  setTimeout(function () { 
  $("div.type").remove(); 
}, delay1);
  setTimeout(function () { 
$('<div class="type">'+ProfArray[5][0]+'</div>').appendTo('#MainDiv');
$('<div class="type">'+ProfArray[5][1]+'</div>').appendTo('#MainDiv');
$("div.type").fadeTo(0, 0);
$("div.type").fadeTo(450, 1);
}, delay1);
}


function setOpacity2() {
  $("#q2").fadeTo(370, 0);
  setTimeout(function () { 
    $("div.input1").remove(); 
    $("div.input2").remove();
  }, delay1);
  }

  function Mleave(){
    $("#uemail").css("width", "56px");
  }
  function Menter(){
    $("#uemail").css("width", "250px");
  }

var PforArray = [];
ProfArray = [
  ['Реалистический тип',"Психологические характеристики, особенности личности, способности: Активность, агрессивность, деловитость, настойчивость, рациональность, практическое мышление, хорошие двигательные навыки, пространственное воображение, технические способности.<p>Ориентация, направленность, предпочтения: Конкретный результат, настоящее, вещи, предметы и их практическое использование, занятия, требующие физического развития, ловкости, отсутствие ориентации на общение.</p><p>Профессиональная среда: Техника, сельское хозяйство, военное дело. Решение конкретных задач, требующих подвижности, двигательных умений, физической силы. Социальные навыки нужны в минимальной мере и связаны с приемом-передачей ограниченной информации.</p><p>Примеры профессий: Механик, электрик, инженер, фермер, зоотехник, геолог, гравер, агроном, садовод, автослесарь, шофер, пилот, полицейский, охранник (телохранитель), сварщик, стоматолог.</p><p>Типичные увлечения: Реставрация старых механизмов. Ремонт, конструирование, сборка различных устройств. Строительные и восстановительные работы. Фермерство, обустройство дачи, загородного дома. Огородничество, садоводство, охота, рыболовство, туризм, физически опасные виды спорта.</p>"],
  ['Социальный тип',"Психологические характеристики, особенности личности, способности: Умение общаться, гуманность, способность к сопереживанию, активность, зависимость от окружающих и общественного мнения, приспособление, решение проблем с опорой на эмоции и чувства, преобладание языковых способностей.<p>Ориентация, направленность, предпочтения: Люди, общение, установление контактов с окружающими, стремление учить, воспитывать, избегание интеллектуальных проблем.</p><p>Профессиональная среда: Образование, здравоохранение, социальное обеспечение, обслуживание, спорт. Ситуации и проблемы, связанные с умением разбираться в поведении людей, требующие постоянного личного общения, умения убеждать.</p><p>Примеры профессий: Врач, педагог, психолог, экскурсовод, журналист, менеджер по продажам, ди-джей, телеведущий</p><p>Типичные увлечения: Организация развлечения других. Посещение общественных мероприятий, собраний. Добровольное выполнение благотворительной и социальной работы.</p>"],
  ['Интеллектуальный тип',"Психологические характеристики, особенности личности, способности: Аналитический ум, независимость и оригинальность суждений, гармоничное развитие языковых и математических способностей, критичность, любознательность, склонность к фантазии, интенсивная внутренняя жизнь, низкая физическая активность.<p>Ориентация, направленность, предпочтения: Идеи, теоретические ценности, умственный труд, решение интеллектуальных творческих задач, требующих абстрактного мышления, отсутствие ориентации на общение в деятельности, информационный характер общения.</p><p>Профессиональная среда: Наука. Решение задач, требующих абстрактного мышления и творческих способностей. Межличностные отношения играют незначительную роль, хотя необходимо уметь передавать и воспринимать сложные идеи.</p><p>Примеры профессий: Физик, астроном, лингвист, программист, микробиолог, архитектор, экономист (аудитор, аналитик), фармацевт, искусствовед, историк, этнограф, археолог.</p><p>Типичные увлечения: Работа (исследовательский тип часто полностью поглощен своей работой). Сложные виды деятельности (яхтенный спорт, подводное плавание, альпинизм) Компьютеры, программирование, чтение (художественная литература, научные статьи).</p>"],
  ['Предпринимательский тип',"Личностные характеристики, способности: Энергия, импульсивность, энтузиазм, предприимчивость, агрессивность, готовность к риску, оптимизм, уверенность в себе, преобладание языковых способностей, хорошие организаторские качества.<p>Ориентация, направленность, предпочтения: Лидерство, признание, руководство, власть, личный статус, избегание занятий, требующих усидчивости, большого труда, двигательных навыков и концентрации внимания, интерес к экономике и политике.</p><p>Профессиональная среда: Решение неясных задач, общение с представителями различных типов в разнообразных ситуациях, требующее умения разбираться в мотивах поведения других людей и красноречия.</p><p>Примеры профессий: Бизнесмен, маркетолог, менеджер, директор, заведующий, журналист, репортер, дипломат, юрист, политик, менеджер по продажам, биржевой брокер.</p><p>Типичные увлечения: Членство в клубах, организациях, партиях. Посещение собраний, конференций. Спортивные состязания в качестве зрителя или участника. Престижный отдых, развлечения. Организация вечеринок, увеселений. Политическая деятельность.</p>"], 
  ['Офисный тип',"Личностные характеристики, способности: Способности к переработке числовой информации, стереотипный подход к проблемам, консервативный характер, подчиняемость, зависимость, следование обычаям, конформность, исполнительность, преобладание математических способностей.<p>Ориентация, направленность, предпочтения: Порядок, четко расписанная деятельность, работа по инструкции, заданным алгоритмам, избегание неопределенных ситуаций, социальной активности и физического напряжения, принятие позиции руководства.</p><p>Профессиональная среда: Экономика, связь, расчеты, бухгалтерия, делопроизводство, требующие способностей к обработке рутинной информации и числовых данных.</p><p>Примеры профессий: бухгалтер, финансист, экономист, канцелярский служащий, библиотекарь, контролер, химик-технолог, чертежник, корректор, логист, товаровед.</p><p>Типичные увлечения: Коллекционирование марок, монет. Настройка моделей. Проекты улучшения жилища. Участие в гражданских и общественных организациях. Игры с ясными и четкими правилами.</p>"],
  ['Артистический тип',"Психологические характеристики, особенности личности, способности: Воображение и интуиция, эмоционально сложный взгляд на жизнь, независимость, гибкость и оригинальность мышления, хорошие двигательные способности и восприятие.<p>Ориентация, направленность, предпочтения: Эмоции и чувства, самовыражение, творческие занятия, избегание деятельности, требующей физической силы, регламентированного рабочего времени, следования правилам и традициям.</p><p>Профессиональная среда: Изобразительное искусство, музыка, литература. Решение проблем, требующих художественного вкуса и воображения.</p><p>Примеры профессий: Музыкант, художник, визажист, фотограф, актер, режиссер, дизайнер.</p><p>Типичные увлечения: Фотография. Рисование. Живопись. Посещение танцевальных и музыкальных концертов, театров, музеев. Сочинение поэм, рассказов. Художественное коллекционирование. Игра на музыкальных инструментах. Занятие танцами, пением.</p>"]
];
var TypeArray = []; 
TypeArray = [0,0,0,0,0,0];
var MainArray = []; 
MainArray = [
  ['Автомеханик','Медицинский работник',1,2],
  ['Специалист по защите информации','Логистик',3,4],
  ['Оператор связи','Кинооператор',5,6],
  ['Водитель','Продавец',1,2],
  ['Инженер-конструктор','Менеджер по продажам',3,4],
  ['Диспетчер','Дизайнер компьютерных программ',5,6],
  ['Ветеринар','Эколог',1,2],
  ['Биолог-исследователь','Фермер',3,4],
  ['Лаборант','Дрессировщик',5,6],
  ['Агроном','Санитарный врач',1,2],
  ['Селекционер','Заведующий продуктовым магазином',3,4],
  ['Микробиолог','Ландшафтный дизайнер',5,6],
  ['Массажист','Воспитатель',1,2],
  ['Преподаватель','Предприниматель',3,4],
  ['Администратор','Режиссер театра и кино',5,6],
  ['Официант','Врач',1,2],
  ['Психолог','Торговый агент',3,4],
  ['Страховой агент','Хореограф',5,6],
  ['Ювелир-гравер','Журналист',1,2],
  ['Искусствовед','Продюсер',3,4],
  ['Редактор','Музыкант',5,6],
  ['Дизайнер интерьера','Экскурсовод',1,2],
  ['Композитор','Арт-директор',3,4],
  ['Музейный работник','Актер театра и кино',5,6],
  ['Верстальщик','Гид-переводчик',1,2],
  ['Лингвист','Антикризисный управляющий',3,4],
  ['Корректор','Художественный редактор',5,6],
  ['Наборщик текстов','Юрисконсульт',1,2],
  ['Программист','Брокер',3,4],
  ['Бухгалтер','Литературный переводчик',5,6]
];
var DDOArray=[];
DDOArray = [
  ['Ухаживать за животными','Обслуживать машины, приборы <p>(следить, регулировать)</p>',1,2],
  ['Помогать больным людям','Составлять таблицы, схемы, программы вычислительных машин',3,4],
  ['Следить за качеством книжных иллюстраций, <p>плакатов, журналов</p>','Следить за состоянием, развитием растений',5,1],
  ['Обрабатывать материалы <p>(дерево, ткань, металл, пластмассу и т.п.)</p>','Доводить товары до потребителя, <p>рекламировать их, продавать</p>',2,3],
  ['Обсуждать научно-популярные книги, статьи','Обсуждать художественные книги <p>(или пьесы, концерты)</p>',4,5],
  ['Содержать и выращивать животных','Быть тренеров, коучем молодежи <p>в сфере спорта, труда и учебы</p>',1,3],
  ['Копировать рисунки, изображения <p>(или настраивать музыкальные инструменты)</p>','Управлять каким-либо грузовым <p>(подъёмным или транспортным) средством</p><p> – подъёмным краном, трактором, тепловозом и др.</p>',5,2],
  ['Сообщать, разъяснять людям нужные им <p>сведения (в справочном бюро, на экскурсии и т.д.)</p>','Художественно оформлять витрины, выставки <p>(или участвовать в подготовке пьес, концертов)</p>',3,5],
  ['Ремонтировать вещи, изделия <p>(одежду, технику), жилище</p>','Искать и исправлять ошибки <p> в текстах, таблицах, рисунках</p>',2,4],
  ['Лечить животных','Выполнять расчёты, вычисления',1,4],
  ['Выводить новые сорта растений','Конструировать, проектировать новые виды <p>промышленных изделий (машины, одежду, дома, </p>продукты питания и т.п.)',1,2],
  ['Разбирать споры, ссоры между людьми, <p>убеждать, разъяснять, поощрять, наказывать</p>','Разбираться в чертежах <p>(проверять, уточнять, приводить в порядок)</p>',3,4],
  ['Принимать участие в работе кружков <p>художественной самодеятельности</p>','Наблюдать, изучать жизнь микроорганизмов',5,1],
  ['Обслуживать, налаживать медицинские <p>приборы, аппараты</p>','Оказывать людям медицинскую <p>помощь при ранениях, ушибах, ожогах и т.д.</p>',2,3],
  ['Составлять точные описания, <p>отчёты о наблюдаемых явлениях, </p><p>событиях, измеряемых объектах и др.</p>','Художественно описывать, изображать события<p> (наблюдаемые или представляемые)</p>',4,5],
  ['Делать лабораторные анализы в больнице','Принимать, осматривать больных,<p> беседовать с ними, назначать лечение</p>',1,3],
  ['Красить или расписывать стены <p>в помещении, поверхность изделий</p>','Осуществлять монтаж или <p>сборку машин, приборов</p>',5,2],
  ['Организовывать культпоходы сверстников <p> или младших ребятв театры, музеи, экскурсии, туристические походы и т.п.</p>','Играть на сцене, принимать участие в концертах',3,5],
  ['Изготовлять по чертежам детали, изделия <p>(машины, одежду), строить здания</p>','Заниматься черчением, копировать <p> чертежи, карты</p>',2,4],
  ['Вести борьбу с болезнями растений, с <p>вредителями леса, сада</p>','Работать оператором ПК, копирайтером',1,4]
];
var DDOTarr=[]; 
DDOTarr = 
[0,0,0,0,0];
var DDOParr=[];
DDOParr =
[
  ['Человек-Природа','<p>- изучение, исследования, анализ состояния и условий жизни растений и животных (микробиолог, гидробиолог, агрохимик),</p> <p>- уход за растениями и животными (лесовод, овощевод, птицевод, зоотехник, садовод),</p><p> - профилактика заболеваний растений и животных, борьба с их вредителями и возбудителями болезней (агроном по защите растений, ветеринар)</p><p>Нужно быть готовым к работе в трудных погодных условиях. Особенность деятельности в том, что все результаты выявляются по прошествии довольно длительного времени. Необходимо обладать своеобразным оперативным мышлением, необходимым для решения конкретных задач при значительной изменчивости целей и условий работы</p>'],
  ['Человек-Техника','<p>- создание, монтаж, сборка технических устройств (монтажник конструкций инженер-конструктор)</p><p>- эксплуатация технических средств (крановщик, токарь, швея-мотористка),</p><p>- ремонт технических устройств (слесарь-ремонтник,электромонтер по ремонту электрооборудования)</p><p>Необходимы развитые представления о технических системах, техническое мышление Работникам типа"человек-техника" необходимо владеть комплексом двигательных навыков, сенсомоторной координацией</p>'],
  ['Человек-Человек','<p>- медицинское обслуживание (врач, медсестра, санитарка);</p><p> - воспитание и обучение (воспитатель, учитель, преподаватель, спортивный тренер),</p><p>- бытовое обслуживание (продавец, проводник, официант, стюардесса,</p><p> - информационное обслуживание (библиотекарь, экскурсовод),</p> - защита общества и государства (юрист, следователь)</p><p>Выбирая одну из этих профессий, нужно быть готовым почти все свое рабочее время общаться с людьми и при этом сохранять выдержку, спокойствие, доброжелательность. Умение общаться, устанавливать контакты с людьми, чуткость к состояниям других людей</p>'],
  ['Человек-Знаковая система','<p>- тексты на родном и иностранных языках (корректор, машинистка, делопроизводитель, технический редактор);</p><p> - цифры, формулы, таблицы (программист, оператор ЭВМ, экономист, кассир;</p><p> - чертежи, карты, схемы (чертежник, закройщик, штурман);</p><p> - звуковые сигналы (радист, стенографист, телефонист).</p><p>Обладать усидчивостью, терпением, устойчивым вниманием, умением видеть то, что стоит за условными знаками. Важна способность к длительному сосредоточению внимания, быстрота и точность движений, склонность к работе в одиночку (без частых контактов с людьми)</p>'],
  ['Человек-Художественный образ','<p>- создание, проектирование, моделирование художественных произведений (художник, скульптор, журналист, модельер,писатель, хореограф, композитор);</p><p>- воспроизведение, изготовление различных изделий по эскизу,образцу в единственном экземпляре (ювелир,актер,гравер, реставратор, столяр-краснодеревщик, цветовод-декоратор);</p><p>- воспроизведение, копирование, размножение художественных произведений в массовом производстве (живописец по росписи фарфора, шлифовщик по камню).</p><p>Развитый художественный вкус, художественные способности, понимание художественных эффектов, образное мышление, яркое воображение, склонность к творчеству, гибкость чувств, повышенная чувствительность при оценке произведений искусства.</p>']
];
var Ttlarr=[];
Ttlarr = [
["Занимается техническим обслуживанием и ремонтом автотранспортных средств, контролирует техническое состояние автомобилей с помощью диагностического оборудования и приборов, управляет транспортом.","Изучает человеческий организм, предупреждает болезни, ставит диагноз, назначает лечение, принимает решение о трудоспособности человека. В больнице врач осматривает больных, назначает и проводит обследование и лечение, организуют консилиумы."],
["Занимается разработкой, адаптацией и установкой программного обеспечения по защите информации в компьютерной сети.","Отслеживает перевозки (авто, авиа, море), планирует закупки, контролирует склады, производит таможенную подготовку, оформляет таможенную документацию, ведет переговоры с транспортными компаниями и готовит контракты."],
["Ведет прием, обработку, отправку и выдачу корреспонденции, прием и выдачу денег по переводам, прием и обработку заказов на междугородние телефонные разговоры; ведет учет и хранение денег и других ценностей; контролирует поступление переводов; выдает почтальонам корреспонденцию и контролирует ее доставку.","Снимает фильм, добиваясь с помощью операторских средств выразительности (света, цвета, композиции, точки съемки, движения камеры) точного воплощения замысла режиссера и сценариста; принимает участие в определении мест съемок, утверждении эскизов декораций и костюмов, выборе актеров на роли."],
["Управляет транспортом, обеспечивает правильную эксплуатацию автомобиля, выдерживает режим обкатки новой машины, заботится о своевременной смене масла, затягивает ослабевшие резьбовые соединения, по приборам систематически проверяет давление масла в системе смазки двигателя и топлива в баке, температуру охлаждающей жидкости.","Получает товар, расставляет продукцию на прилавке и в зале магазина, принимает чеки, отпускает товар, отслеживает наличие продаваемых товаров, отвечает на вопросы покупателей."],
["Руководит выполнением проектно-конструкторских работ, участвует в конструировании изделий; разрабатывает проектную и рабочую документацию, выполняет технические расчеты по проектам; составляет схемы и экономическое обоснование; участвует в монтаже, наладке, испытаниях и сдаче в опытных образцов.","Проводит анализ покупательной способности населения в регионе, рекламирует товар, используя знание психологии продаж; несет материальную ответственность за полученный товар, ведет материальную и финансовую отчетность."],
["Регулирует ход производственного процесса и координирует взаимодействие всех его звеньев с помощью средств связи, сигнализации, контроля и управления, обеспечивает выполнение графиков.","Занимается разработкой программных средств для пользователей; комбинируя цвет, звук, текст, создает полное ощущение реальности изучаемой ситуации, поведения обучаемого в этой ситуации в соответствии с требованиями заказчика, участвует в рекламных проектах."],
["Оказывает врачебную и профилактическую помощь животным, следит за санитарным состоянием мест проживания животных; проводит осмотр животных и экспертизу мяса и молока, организует и проводит дезинфекцию ферм и помещений для хранения и переработки продукции.","Исследует источники загрязнения окружающей среды, разрабатывает методы контроля, производит оценку воздействия вредных выбросов на атмосферу, почву, водные объекты; организует и планирует мероприятия по рациональному природопользованию."],
["Изучает жизнь животных, растений, микроорганизмов, выявляет закономерности развития живых организмов; ставит опыты и проводит лабораторные исследования, на основании разрабатываются новые методы профилактики и лечения заболеваний, выводят новые породы животных и сорта растений.","Занимается предпринимательской деятельностью, связанной с производством и сбытом сельскохозяйственной продукции; закупает корма, оборудование; производит ремонт сельхозтехники; планирует и организует проведение сельхозработ; работает с документами, которые гарантируют правовой статус его индивидуального хозяйства, ведет бухгалтерский учет."],
["Делает лабораторные анализы, проводит испытания, измерения, другие виды работ в научно-исследовательских, технологических учреждениях и на предприятиях при проведении исследований и разработок; участвует в сборе и обработке информации, проводит наблюдения, обрабатывает и оформляет их результаты; следит за исправностью лабораторного оборудования, осуществляет его простую регулировку и наладку.","Длительное время приручает животное, и только потом приступает к дрессировке, умело обыгрывая повадки животного; ставит оригинальные номера для выступлений на арене, консультирует сотрудников цирка, которые по роду своей работы также сталкиваются с данными животными: следит за кормлением животных, их внешним видом, условиями их содержания."],
["Работает в сельском и лесном хозяйстве; изучает особенности растений и почвенно-климатические условия; организует выполнение мероприятий по мелиорации (улучшению) земель, получению высоких и устойчивых урожаев, рациональному использованию сельскохозяйственных и лесных угодий, рабочей силы, техники; готовит посадочный материал; внедряет технологии по борьбе с вредителями и болезнями растений.","Осуществляет санитарный надзор за продуктами питания с целью предотвращения пищевых отравлений, инфекционных заболеваний; проводит экспертизу продуктов, следит за правильностью хранения продуктов в кладовых, холодильниках и хранилищах, контролирует выполнение основных санитарных требований при проектировании, строительстве и эксплуатации предприятий пищевой промышленности; контролирует работу продовольственных магазинов, рынков, кафе и ресторанов."],
["Создает и улучшает сорта растений и породы животных, применяя научные методы отбора и гибридизации; выступает в роли «конструктора» живых организмов, совершенствуя живой организм и добиваясь большей продуктивности; знает особенности пород животных или видов растений, условия содержания, устойчивость к неблагоприятным факторам и т. д.","Директор обязан решать все вопросы хозяйственного, административного и финансового плана, связанные с деятельностью учреждения. Также он должен организовывать и координировать работу магазина, способствовать сокращению затрат и повышению качества сервиса."],
["Разрабатывает и ведет технологический процесс производства медикаментов, витаминов, бактерийных и вирусных препаратов; контролирует хранение исходных штаммов и эталонов микроорганизмов, проверяет свойства микробных культур; разрабатывает методику лабораторных анализов, испытаний и исследований питательной среды; участвует в научно-исследовательской работе по разработке, освоению и внедрению в производство новых препаратов.","Создает проекты садов и парков, воплощая в них свое понимание и ощущение красоты природы; отмечает на плане перепады рельефа, водоемы, зеленые насаждения, дорожки, террасы, архитектурные объекты, фиксируя все элементы будущего ансамбля, включая породы деревьев и состав трав на газонах."],
["Делает лечебный, спортивный или косметический массаж с соблюдением всех санитарно-гигиенических норм; контролирует состояние здоровья своего пациента, дает рекомендации по профилактике заболеваний опорно-двигательного аппарата.","Обеспечивает полноценное развитие детей в дошкольном учреждении; отвечает за соблюдение режима (еда, сон, закаливание, прогулка); в игровой форме развивает у детей речь, мышление, память, внимание, формирует навыки взаимодействия с другими детьми."],
["Преподавание общеобразовательных предметов в школе, спецпредметов – в учреждениях начального профессионального, среднего специального и высшего образования.","Анализирует рынок товаров и услуг; изучает ситуацию на рынке товаров и услуг, спроса и предложения; выбирает направление предпринимательской деятельности и просчитывает ее эффективность; организует свой бизнес и управляет, принимая решения и отвечая за их последствия; оформляет необходимую документацию."],
["Организует эффективную работу сотрудников; контролирует сохранность материальных ценностей, оформление помещений и состояние рекламы; в случае необходимости консультирует посетителей, предотвращает и разрешает конфликтные ситуации, принимает меры к ликвидации недостатков в работе организации.","Выбирает материал для будущей картины или спектакля, подбирает творческую группу, проводит все подготовительные работы как творческого, так и экономического характера, руководит самим постановочным процессом, озвучиванием и окончательным монтажом киноленты."],
["Готовит зал ресторана к приему посетителей – отбирает посуду, приборы, столовое белье, сервирует столы, создает чувство комфорта и защищенности; встречает посетителей, предлагает меню, выполняет заказ, контролируя правильность исполнения заказа и внешний вид блюд.","Изучает человеческий организм, предупреждает болезни, ставит диагноз, назначает лечение, принимает решение о трудоспособности человека. В больнице врачи ежедневно обходят палаты, осматривают больных, назначают и проводят обследование и лечение, организуют консультации и консилиумы."],
["В соответствии со специализацией (социальная, возрастная, клиническая, психология труда, семейных отношений и т. д.) помогает человеку в решении психологических проблем; определяет особенностей характера и мышления, используя в работе индивидуальные и групповые формы работы; технологии и ресурсы своей личности.","Продает товары одного или несколько предприятий по договору, действуя на рынках с высокой конкуренцией."],
["Занимается страхованием людей, жилья, транспорта от несчастных случаев (от несчастного случая, пожара, наводнения, потери имущества и т.д.); оформляет соответствующие документы и объясняет клиенту его права и обязанности.","Занимается постановкой танцевальных номеров в театре, кино, развлекательных программах; передает свои знания и опыт исполнителям; готовит танцоров к выступлениям, передавая им свой творческий замысел."],
["Изготавливает и гравирует изделия из драгоценных и цветных металлов с вставками из янтаря, драгоценных и полудрагоценных камней по эскизам и моделям, создает уникальные ювелирные изделия.","Пишет статьи для газет и журналов, тексты для теле- и радиопередач; создает на основе фактического материала (интервью, репортаж с места события) небольшое, но законченное литературное произведение, благодаря которому люди будут воспринимать это событие или героя интервью так, как его воспринимает сам журналист."],
["Работает в музеях, учебных и научно-исследовательских учреждениях, издательствах, изучает и систематизирует произведения искусства, дает заключение о необходимости реставрации произведения, участвует в реставрационной работе, устанавливает авторство и подлинность произведения искусства.","Финансирует проект в области искусства, науки, культуры, спорта на своих условиях."],
["Редактирует различные виды литературы; рассматривает рукописи и рецензии на них; делает заключение о возможности издания рукописи; проверяет выполнение авторами замечаний рецензента, комплектность представленного материала, правильность цитат и фактических данных; совместно с автором и техническим редактором определяет место иллюстративного материала; проверяет сигнальные экземпляры.","Исполняет музыкальное произведение, написанное композитором – песню, музыкальную композицию, стремясь донести до слушателя замысел композитора; владеет навыками исполнения музыкальных произведений с использованием различных приемов игры и импровизации."],
["Разрабатывает художественно-конструкторские проекты интерьеров в соответствии с требованиями технической эстетики.","Работает в музеях, на выставках, в туристических фирмах; рассказывает экскурсантам об истории создания картин, памятников архитектуры, жизни и творчестве великих людей, знаменательных событиях истории человечества; самостоятельно готовит планы и тексты своих выступлений, другие методические материалы."],
["Создает музыку, которая звучит потом с экрана и сцены, в театре и опере, заставляя людей грустить и радоваться; выражает языком музыки свои мысли и чувства, вызывая сопереживание слушателей.","Организует процесс производства фильма или спектакля, проведения концерта или гастролей; отвечает за подготовку к съемке или выступлению, готовность исполнителей и персонала, создает условия для их эффективной работы; контролирует сохранность материальных ценностей; предотвращает и разрешает конфликтные ситуации."],
["Работает в музеях; обеспечивает правильное хранение и демонстрацию предметов искусства; в пределах своей компетенции консультирует посетителей; ведет техническую документацию.","Воплощает замысел сценариста и режиссера, с помощью выразительных средств воссоздавая характер персонажа; занимается пением, танцами, ритмикой, осваивает другие элементы актерской техники, передающие характер и эмоциональное состояние своего героя."],
["Располагает набранный текст для печати газетных полос или книжных страниц в соответствии с определенными требованиями (стандартами) с помощью компьютерных программ верстки, которые автоматически выдерживают заданные параметры.","Сопровождает группу туристов, занимается вопросами размещения в гостинице, обеспечения транспортом; знакомит туристов с программой пребывания в стране, выступая в роли посредника между туристами и страной пребывания."],
["Составляет словари, справочники и учебники языка, занимается сравнительным языкознанием, разрабатывает научно-техническую и специальную терминологию, совершенствует орфографию, ведет научные исследования в области фонетики, морфологии, синтаксиса, обучает языку.","Анализирует работу организации, делает экспертную оценку стоимости основных фондов и недвижимости промышленных и торговых предприятий, банков, страховых компаний; консультирует по вопросам реорганизации и ликвидации предприятий; проводит антикризисные мероприятия."],
["Вычитывает отредактированные тексты с целью устранения орфографических и пунктуационных ошибок, нарушений технических правил набора, недостатков смыслового и стилистического характера; проверяет правильность написания и унификации терминов, символов, единиц измерения, единообразие обозначений в иллюстрациях и тексте, правильность оформления таблиц, сносок, ссылок, формул, справочного аппарата, полноту библиографического описания.","Осуществляет художественное редактирование и иллюстрирование изданий; дает указания по художественному оформлению изданий и контролирует их полиграфическое выполнение; обеспечивает оформление изданий, определяет технологические особенности изготовления иллюстрации, проверяет качество изображения оригиналов, иллюстраций и соответствие их авторскому подлиннику."],
["Перепечатывает большие объемы текста","Работает в банках, биржах, кредитных организациях, инвестиционных фондах; дает консультации по юридическим вопросам, вопросам управления портфелем ценных бумаг, финансового менеджмента, оценки финансовых рисков, оценки и отбора инвестиционных проектов, организации банковского и страхового дела; осуществляет представительство в суде, арбитраже и других государственных организациях."],
["Разрабатывает технологии решения задач по обработке информации средствами вычислительной техники; определяет объем и структуру информации, схемы ее ввода и обработки, выбирает язык программирования; выясняет возможность использования готовых программных продуктов; разрабатывает инструкции по работе с программами, оформляет необходимую техническую документацию.","Торгует акциями на бирже от имени своего клиента (очень высокорисковая профессия)"],
["Ведет различные виды бухгалтерского учета (учет основных средств, материальных ценностей, расчеты с поставщиками и заказчиками, начисление заработной платы, налогов и т. д.); принимает и контролирует первичную документацию по соответствующим видам учета и подготавливает ее к счетной обработке.","Переводит художественные произведения с языка оригинала, стараясь передать неповторимый стиль автора."]
];