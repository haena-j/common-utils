 const objectEntries = Object.entries as <T>(obj: T) => Array<[keyof T, T[keyof T]]>;

 const objectKeys = Object.keys as <T>(obj: T) => Array<Extract<keyof T, string>>;

 export { objectEntries, objectKeys };