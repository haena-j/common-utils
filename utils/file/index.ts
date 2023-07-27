const getFileIcon = (file: File) => {
  const { type } = file;
  const icon = type.split('/')[0];
  return icon;
};
