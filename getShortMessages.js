function getShortMessages(messages) {
    var lessThen50 = messages.filter(function (elem) {
        return elem.message.length < 50;
    });

    return lessThen50.map(function (elem) {
        return elem.message;
    });

}

module.exports = getShortMessages
