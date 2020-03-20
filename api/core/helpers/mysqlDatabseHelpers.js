export const toStringForQuery = string => `"${string}"`;
export const queryString = string => `\`${string}\``;
export const fieldsObjectToQueryFields = data => data.map(element => queryString(element));
export const getInsertValue = values => `(${values.join(', ')})`;
export const objectKeysToFields = object => fieldsObjectToQueryFields(Object.keys(object)).join(", ");
