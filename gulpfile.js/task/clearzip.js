const clearZip = () => {
  return $.del("./zip");
};

module.exports = clearZip;
