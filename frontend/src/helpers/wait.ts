const wait = function (duration = 2000) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}


export {
    wait
}