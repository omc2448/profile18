function isEven(userNum){
    if (userNum % 2 == 0){
        return `${userNum} is Even`
    }
    else{
        return `${userNum} is Odd`
    }
}

module.exports = {
    isEven
}




