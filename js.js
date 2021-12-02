let fieldData;

let updateRefreshRate;

let el_rank_img, el_rank_value, el_rank_percentile;
let rank_img, rank_value, rank_percentile;

function refreshData() {
    //console.log("refreshing token...");
    var http = new XMLHttpRequest();
    var url = 'https://public-api.tracker.gg/v2/apex/standard/profile/' + fieldData.platform + "/" + fieldData.userId;
    http.open('GET', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('TRN-Api-Key', fieldData.trnApiKey);

    http.onreadystatechange = function () { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            let res = JSON.parse(http.responseText);
            //console.log("res", res);
            let new_rank_value = res.data.segments[0].stats.rankScore.value;
            //console.log("rank_img", rank_img);
            //console.log("rank_value", rank_value);
            if (new_rank_value != rank_value) {
                rank_value = new_rank_value;
                rank_img = res.data.segments[0].stats.rankScore.metadata.iconUrl;
                //rank_rankName = res.data.segments[0].stats.rankScore.metadata.rankName;
                rank_percentile = res.data.segments[0].stats.rankScore.percentile;
                updateDisplay();
            }
        }
    }
    http.send();
}

function updateDisplay() {
    el_rank_img.src = rank_img + "?t=" + rank_value;
    el_rank_value.innerText = rank_value;
    el_rank_percentile.innerText = rank_percentile + "%";
}

function main() {
    el_rank_img = document.getElementById("rank-img");
    el_rank_value = document.getElementById("rank-value");
    el_rank_percentile = document.getElementById("rank-percentile");
    setTimeout(refreshData, updateRefreshRate * 1000);
}

/* Button clicked */
window.addEventListener('onEventReceived', function (obj) {
    const data = obj.detail.event;
    if (data.listener === 'widget-button') {
        if (data.field === 'testButton') {
            main();
        }
    }
});

/* Loading from streamelements.com */
window.addEventListener('onWidgetLoad', function (obj) {
    fieldData = obj.detail.fieldData;
    if (fieldData.testMode || !fieldData.userId.length > 0 || !fieldData.platform.length > 0 || !fieldData.trnApiKey.length > 0) {
        return;
    }
    if (fieldData.updateRefreshRate < 2) {
        updateRefreshRate = 2;
    }
    main();
});