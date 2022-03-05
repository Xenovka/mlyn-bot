module.exports = (type) => {
  switch (type) {
    case "GUILD_TEXT":
      return "Text";
    case "GUILD_VOICE":
      return "Voice";
    case "GUILD_CATEGORY":
      return "Category";
    case "GUILD_NEWS":
      return "News";
    case "GUILD_STORE":
      return "Store";
    case "GUILD_PUBLIC_THREAD":
      return "Public Thread";
    case "GUILD_PRIVATE_THREAD":
      return "Private Thread";
    case "GUILD_NEWS_THREAD":
      return "News Thread";
    case "GUILD_STAGE_VOICE":
      return "Stage";
    case "UNKNOWN":
      return "Unknown";
  }
};
