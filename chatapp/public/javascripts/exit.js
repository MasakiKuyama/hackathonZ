'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitUserEvent', userName + 'さんが退室しました');
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitUserEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
