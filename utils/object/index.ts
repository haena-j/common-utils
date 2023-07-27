type Identifier = string | number;
type GenericObject<T = any> = { [K in Identifier]: T };

// Check if the object has a specific property.
const hasOwnProperty = (obj: GenericObject, property: Identifier) : boolean => {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

// Check if two values are equal, deep checking if they are objects.
const deepEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (!b.hasOwnProperty(key)) {
      console.log('here');
      return false;
    }
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};

// Merge two arrays of objects, ensuring there are no duplicates.
const mergeUniqueObjects = (baseObjects: GenericObject[], newObjects: GenericObject[]): GenericObject[] => {
  const mergedObjects = [...baseObjects];
  newObjects.forEach(item => {
    if(!baseObjects.some(baseObject => deepEqual(baseObject, item))) {
      mergedObjects.push(item);
    }
  });
  return mergedObjects;
}

export default { hasOwnProperty, deepEqual, mergeUniqueObjects };
