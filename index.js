function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrapper = "*") {
    return function (flair = "special") {
        return `You are ${wrapper}${flair}${wrapper}!`;
    };
}
