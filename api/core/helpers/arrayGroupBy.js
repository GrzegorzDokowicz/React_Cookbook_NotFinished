import arrayRemoveDuplicates from "./arrayRemoveDuplicates";

const arrayGroupBy = (array, groupElement) => {
    const groupElementValues = array.map(element => element[groupElement]);
    const getGroupElements = id => array.filter(element => element[groupElement] === id);

    return arrayRemoveDuplicates(groupElementValues).map(getGroupElements);
};

export default arrayGroupBy;