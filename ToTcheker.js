javascript:(function() {
  let totalHours = document
    .querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td:nth-child(2)")
    .innerText;
  let currentHours = document
    .querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td.all_work_time")
    .innerText;

  let allWorkDays = totalHours / 8;
  let currentWorkDays = document
    .querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-autoNewLineTable.specific-autoNewLineTable > ul > li:nth-child(1) > div")
    .innerText;

  let remainingDays = allWorkDays - currentWorkDays;
  let remainingHours = totalHours - currentHours;
  let averageWorkHours = remainingHours / remainingDays;

  if (remainingHours > 1e-4) {
    alert('今月の残労働基準時間は'
          + remainingHours.toFixed(2)
          + '時間です。残りの勤務日で平均'
          + averageWorkHours.toFixed(2)
          + '時間働けば到達するよ！！残業時間±0で元気に月末を迎えような？？？');
  }
  else {
    alert('今月の労働基準時間を達成したよ！！やったね！！！');
  }
})()
