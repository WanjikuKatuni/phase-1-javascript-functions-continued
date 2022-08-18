// code your solution here
// razzle();

// function razzle(lawyer="BILLY", TARGET="EM"){
//     console.log(`YOU! ${lawyer} HAVE BEEN RAZZLED AT ${TARGET}`);
// }

// razzle('ann','gikomba');

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

mondayWork();

function wrapAdjective(style='*'){
    return function(adjective='special'){
        return `You are ${style}${adjective}${style}!`
    }
}
wrapAdjective()();