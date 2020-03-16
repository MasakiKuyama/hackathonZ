'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendEterUserEvent', function (data) {
        socket.broadcast.emit('receiveEnterUserEvent', data);
    });
};
