const range = (from = 0, to) =>{
    let result = []
    for(let index = from; index < to + 1; index++){
        result.push(undefined)
    }
    return result;
}

export default range;