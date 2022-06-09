import formatDuaration from "format-duration";

export const formatTime = (timeInSeconds = 0) => {
  return formatDuaration(timeInSeconds * 1000);
};

export const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
