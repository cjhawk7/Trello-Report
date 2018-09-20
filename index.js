'use strict'


const urlString = `https://www.gcumedia.com/sample-data/api/reporting/activeMemberCount-licensedMemberCount-inactiveMemberCount-deletedBoardCount-activeBoardCount-archivedBoardCount`
const urlStringActivity = `https://www.gcumedia.com/sample-data/api/reporting/actionCounts`

const today = Date.parse('today').toString('yyyy-MM-dd');
const yesterday = Date.parse('today - 1 days').toString('yyyy-MM-dd');
const sevenDays = Date.parse('today - 7 days').toString('yyyy-MM-dd');
const thirtyDays = Date.parse('today - 1 months').toString('yyyy-MM-dd');
const sixMonths = Date.parse('today - 6 months').toString('yyyy-MM-dd');
let queryTargetFrom;
let queryTargetTo;



function getTimeCalendar(callback) {

    const settings = {
        url: urlString + "/start/" + queryTargetFrom + "/end/" + queryTargetTo,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getActivityCalendar(callback) {
    const settings = {
        url: urlStringActivity + "/start/" + queryTargetFrom + "/end/" + queryTargetTo,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getAllTime(callback) {
    const settings = {
        url: urlString,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function activityAllTime(callback) {
    const settings = {
        url: urlStringActivity,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function activityYesterday(callback) {
    const settings = {
        url: urlStringActivity + "/start/" + yesterday + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getYesterday(callback) {
    const settings = {
        url: urlString + "/start/" + yesterday + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getSevenDays(callback) {
    const settings = {
        url: urlString + "/start/" + sevenDays + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function activitySevenDays(callback) {
    const settings = {
        url: urlStringActivity + "/start/" + sevenDays + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getThirtyDays(callback) {
    const settings = {
        url: urlString + "/start/" + thirtyDays + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function activityThirtyDays(callback) {
    const settings = {
        url: urlStringActivity + "/start/" + thirtyDays + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function getSixMonths(callback) {
    const settings = {
        url: urlString + "/start/" + sixMonths + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function activitySixMonths(callback) {
    const settings = {
        url: urlStringActivity + "/start/" + sixMonths + "/end/" + today,
        dataType: "json",
        type: "GET",
        success: callback,
        contentType: "application/json"
    };

    $.ajax(settings);
}

function displayTimeCalendar(data) {
    console.log('calendar working');
    $('.container p').append();
    $('.containerlarge p').append();
    $('.m ').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
}

function displayActivityCalendar(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function displayAllTime(data) {
    $('.container p').append('All Time');
    $('.containerlarge p').append('All Time');
    $('.m ').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
    $("button").attr('disabled', false);
}

function displayActivityAllTime(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function displayYesterday(data) {
    $('.container p').append('Since Yesterday');
    $('.containerlarge p').append('Since Yesterday');
    $('.m').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
    $("button").attr('disabled', false);
}

function displayActivityYesterday(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function displaySevenDays(data) {
    $('.container p').append(sevenDays + ' to Current');
    $('.containerlarge p').append(sevenDays + ' to Current');
    $('.m').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
    $("button").attr('disabled', false);
}

function displayActivitySevenDays(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function displayThirtyDays(data) {
    $('.container p').append(thirtyDays + ' to Current');
    $('.containerlarge p').append(thirtyDays + ' to Current');
    $('.m').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
    $("button").attr('disabled', false);
}

function displayActivityThirtyDays(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function displaySixMonths(data) {
    $('.container p').append(sixMonths + ' to Current');
    $('.containerlarge p').append(sixMonths + ' to Current');
    $('.m').append(data.activeMemberCount);
    $('.lu').append(data.licensedMemberCount);
    $('.iu').append(data.inactiveMemberCount);
    $('.db').append(data.deletedBoardCount);
    $('.ab').append(data.activeBoardCount);
    $('.arb').append(data.archivedBoardCount);
    $("button").attr('disabled', false);
}

function displayActivitySixMonths(data) {
    $('.activity').append('Comments ' + '<div class="column">' + data.actionCounts.commentCard + '</div>' + '<br></br>')
        .append('Cards Created ' + '<div class="column">' + data.actionCounts.createCard + '</div>' + '<br></br>')
        .append('Cards Moved ' + '<div class="column">' + data.actionCounts.moveCardFromBoard + data.actionCounts.moveCardToBoard + '</div>' + '<br></br>')
        .append('Cards Duplicated ' + '<div class="column">' + data.actionCounts.copyCard + '</div>' + '<br></br>')
        .append('Cards Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Cards Deleted ' + '<div class="column">' + data.actionCounts.deleteCard + '</div>' + '<br></br>')
        .append('Lists Created ' + '<div class="column">' + data.actionCounts.createList + '</div>' + '<br></br>')
        .append('Lists Moved ' + '<div class="column">' + data.actionCounts.moveListFromBoard + data.actionCounts.moveListToBoard + '</div>' + '<br></br>')
        .append('Lists Duplicated ' + '<div class="column">' + data.actionCounts.copyBoard + '</div>' + '<br></br>')
        .append('Lists Archieved ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
        .append('Lists Deleted ' + '<div class="column">' + data.actionCounts.removeChecklistFromCard + '</div>' + '<br></br>')
        .append('Unique Labels ' + '<div class="column">' + 'no info' + '</div>' + '<br></br>')
}

function clickHandlers() {

    $("button").on("click", function () {
        $("button").attr('disabled', true);
    });

    $(document).ready(function () {
        $('.alltime').trigger('click');
    });

    $("input").on("click", function () {
        queryTargetFrom = $("#from").val();

    });

    $("input").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        queryTargetTo = $("#to").val();
        getTimeCalendar(displayTimeCalendar)
        getActivityCalendar(displayActivityCalendar)
    });

    $(".alltime").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        getAllTime(displayAllTime);
        activityAllTime(displayActivityAllTime);
    });

    $(".yesterday").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        getYesterday(displayYesterday);
        activityYesterday(displayActivityYesterday);
    });

    $(".sevendays").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        getSevenDays(displaySevenDays);
        activitySevenDays(displayActivitySevenDays)
    });

    $(".thirtydays").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        getThirtyDays(displayThirtyDays);
        activityThirtyDays(displayActivityThirtyDays)
    });

    $(".sixmonths").on("click", function () {
        $('.num').text('');
        $('.activity').text('');
        $('.container p').text('');
        $('.containerlarge p').text('');
        getSixMonths(displaySixMonths);
        activitySixMonths(displayActivitySixMonths)
    });

    $(".clearfilter").on("click", function () {
        $('.num').text('');
        $('.container p').text('');
        $('.activity').text('');
        $('.containerlarge p').text('');
    });

}


$(function () {
    clickHandlers();
});



