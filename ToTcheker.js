javascript:(function() {
  var elementTotalTime = document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td:nth-child(2)");
  var totalTime = elementTotalTime.innerText;
  var elementPresantTime = document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td.all_work_time")
  var presantTime = elementPresantTime.innerText;

  var allWorkDays = totalTime / 8
  var elementcountWorkDays = document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-autoNewLineTable.specific-autoNewLineTable > ul > li:nth-child(1) > div");
  var countWorkDays = elementcountWorkDays.innerText;

  var reminingDays = allWorkDays - countWorkDays;
  var reminingTime = totalTime - presantTime;
  var averageWorkTimes = reminingTime / reminingDays;

  alert("今月の残労働基準時間は"+reminingTime.toFixed(2)+"時間です。残りの勤務日で平均"+averageWorkTimes.toFixed(2)+"時間働けば到達するよ！！残業時間±0で元気に月末を迎えような？？？");

})()
