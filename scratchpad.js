function numbers() {
    return Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8]);
}

function x10(number) {
    return Rx.Observable.just(number * 10);
}
