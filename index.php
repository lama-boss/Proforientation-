<!DOCTYPE html>
<html lang="ru">
  <head>
    <link rel="SHORTCUT ICON" href="favicon.ico" type="image/x-icon">
    <title>Тест по профориентации</title>
    <meta charset="utf-8" />
    <link href="StyleSheet1.css" type="text/css" rel="stylesheet" />
    <script src="Script1.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet"/>
  </head>
  <header>
      <center><p style="opacity:0.65">Тест основан на методиках <a style="color:#FF8800" href="https://en.wikipedia.org/wiki/John_L._Holland" target="_blank">Джона Холланда</a> и <a style="color:#FF8800" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%BC%D0%BE%D0%B2,_%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%B8%D1%87_(%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3)" target="_blank">Евгения Климова</a>   /    Разработчики - <a  style="color:#477eed" href="https://vk.com/lama_boss" target="_blank">Экарев Александр</a> и <a style="color:#477eed" href="https://vk.com/id248544293" target="_blank">Кирилл Саакян</a> / Пожелания - spporesult@gmail.com</p></center>
    <div class="head">
      <p id="headTest">Тест по профориентации</p>
    </div>
  </header>
<body> 
    <div class="bla">
      <div class="QuestionsDiv" id="MainDiv">
          <div class="input1" id="q1" style="opacity:1" onclick="Add1Div()">
              <input id="radio1" name="radiob1" type="radio"/>
              <label id="l1" for="radio1">Здравствуйте, это тест по профориентации. Чтобы узнать ваш психотип, в каждом из 30 вопросов достаточно выбрать понравившуюся профессию из двух. Главное - отвечать честно. Только так можно получить точный результатю. Если профессия вам не знакома - подержите на ней курсор.</p><p>Кликните здесь чтобы начать тест.</p></label>
            </div>
      </div>
      <center><div id="Qcounter"></div></center>
    </div>
   <div id="ForChart"></div>
    <center><div id="ButtDiv">
    </div></center> 
    <div id="MainGchart">
    <div class="Schart" id="chart_div"></div>
    </div>
    <div id="forqwerty" style="margin-bottom:20px">
      <div id="qwerty"></div>
    </div>
  </body>
</html>
