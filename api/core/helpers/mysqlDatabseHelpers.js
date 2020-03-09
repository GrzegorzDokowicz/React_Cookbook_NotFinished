export const toStringForQuery = string => `"${string}"`;
export const queryString = string => `\`${string}\``;
export const fieldsObjectToQueryFields = data => data.map(element => queryString(element));
