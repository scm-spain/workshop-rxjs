
function suggestions(text) {
    return Rx.Observable.from([
        'Ruby',
        'Python',
        'JavaScript',
        'Java',
        'COBOL',
        'Scala',
        'Kotlin',
        'ActionScript',
        'JavaGay',
        'Gaython'
    ]).filter(function (language) {
        return language.toLowerCase().indexOf(text.toLowerCase()) !== -1;
    }).take(5);
}
