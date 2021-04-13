const messages = ["Aylin", "Sebastian", "Estefania", "Ignacio", "Carolina", "Fernanda", "Javiera", "Pablo"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
