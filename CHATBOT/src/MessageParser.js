class MessageParser {
  constructor(actionProvider, updateNotebook) {
    this.actionProvider = actionProvider;
    this.updateNotebook = updateNotebook;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }
    
    if (lowerCaseMessage.includes("update")) {
      this.updateNotebook("THIS IS THE TEXT");
    }
  }
}

export default MessageParser;
