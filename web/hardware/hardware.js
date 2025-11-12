function clickPollButton(i) {
    var sliders = getSliders(8);
    var values = [2, 7, 3, 12, 14, 12, 5, 2]
    values[i] += 1;

    var maxValue = findMax(values);
    for (var j = 0; j < sliders.length; j++) {
        const targetWidth = Math.round((values[j] / maxValue) * 100).toString() + "%";
        sliders[j].style.width = targetWidth;
        sliders[j].style.backgroundColor = "black";
    }

    sliders[i].style.backgroundColor = "green";
}

function getSliders(n) {
    var sliders = [];
    for (var i = 0; i < n; i++) {
        sliders.push(document.getElementById("result-slider-" + i))
    }

    return sliders;
}

function findMax(collection) {
    var max = -Infinity;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] > max) {
            max = collection[i];
        }
    }

    return max;
}