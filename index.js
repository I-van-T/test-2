function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(maxLength) + "...";
  }
  /// Change code above this line
  return result;
}
