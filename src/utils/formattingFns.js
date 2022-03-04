export const formatTime = (hr, min, sec) => {
    return `${formatStrTime(hr)}:${formatStrTime(min)}:${formatStrTime(sec)}`;
}

const formatStrTime = str => {
    if (str.length == 1 && parseInt(str) < 10) return `0${str}`;
    return str;
}