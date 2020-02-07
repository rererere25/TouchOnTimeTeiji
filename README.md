# TouchOnTimeTeiji
タッチオンタイムから残りの勤務時間を取得して残りの勤務日数で平均どれだけ働けばよいのかわかりますいえい

## ソースの見方
元のソースコード: ToTChecker.js

コンパイル済みのやつ: ToTChecker_Compile

## 使い方

1．ChromeのブックマークでURLボックスにToTChecker_Compileの内容をコピペしてブックマークバーに登録
2．TouchOnTimeの勤怠一覧ページ開いた状態で1で登録したブックマークボタンを押す

### お急ぎの場合

[この超かっこいいリンク](javascript:(function(){let t=document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerText,e=t-document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-normalTable.specific-table > table > tbody > tr:nth-child(1) > td.all_work_time").innerText,i=e/(t/8-document.querySelector("body > div > div.htBlock-mainContents > div > div.htBlock-autoNewLineTable.specific-autoNewLineTable > ul > li:nth-child(1) > div").innerText);alert("今月の残労働基準時間は"+e.toFixed(2)+"時間です。残りの勤務日で平均"+i.toFixed(2)+"時間働けば到達するよ！！残業時間±0で元気に月末を迎えような？？？"})();
)右クリックして"ブックマークに追加"で上記の手段を省略できます。

以上
