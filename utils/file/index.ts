// Extract the extension from a file name.
const getExtension = (filename: string): string => {
  const index = filename.lastIndexOf('.');
  return index < 1 ? '' : filename.substring(index + 1).toLowerCase();
};

export default {
  getExtension,
};
