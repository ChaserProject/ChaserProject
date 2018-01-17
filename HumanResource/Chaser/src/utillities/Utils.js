
const formatDate = (date) => {
    let day = date.getDate();
    // var monthIndex = date.getMonth();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    // return day + ' ' + monthNames[monthIndex] + ' ' + year;
    return day + '-' + month + '-' + year;
};

const formatDateAndTime = (date) => {
    const strDate = formatDate(date);
    const strTime = formatTimeHHmm(date);
    return strTime + '  ' + strDate;
};

const formatDateYYMMDD = (date) => {
    let day = date.getDate();
    // var monthIndex = date.getMonth();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    // return day + ' ' + monthNames[monthIndex] + ' ' + year;
    return year + '-' + month + '-' + day;
};

const convertDateToCompare = (d) => {
    const date = new Date(formatDateYYMMDD(d));
    return date;
};

const splitStr = (str, option) => str.split(option);

const joinToStr = (strArr, option) => strArr.join(option);

const formatTimeHHmm = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes;
    return strTime;
}

module.exports = {
    formatDate,
    formatDateYYMMDD,
    convertDateToCompare,
    splitStr,
    joinToStr,
    formatTimeHHmm,
    formatDateAndTime
};
