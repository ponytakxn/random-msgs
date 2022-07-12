const messages = [
    "oscar",
    "meredith",
    "kevin",
    "phyllis",
    "michael",
    "jim"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};

module.exports = { randomMsg };