const arrayRemoveDuplicates = array => {
    return array.filter((element, index) => index === array.indexOf(element));
};

export default arrayRemoveDuplicates;