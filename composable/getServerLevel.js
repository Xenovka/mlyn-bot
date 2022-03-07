module.exports = (boost) => {
  if (boost < 2) {
    return "Level 0";
  } else if (boost >= 14) {
    return "Level 3";
  } else if (boost >= 7) {
    return "Level 2";
  } else if (boost >= 2) {
    return "Level 1";
  }
};
