document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});

// Chatbot functionality
const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display user message
    displayMessage(userMessage, 'user');
    userInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        displayMessage(botResponse, 'bot');
    }, 1000);
});

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Simple predefined responses
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a program, but thanks for asking!",
        "what can you do?": "I can help you with various tasks and answer your questions.",
        "bye": "Goodbye! Have a great day!",
        "help": "Sure! What do you need help with?",
        "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "what is your name?": "I am Help Bot AI, your virtual assistant.",
        "what is ai?": "AI stands for Artificial Intelligence, which enables machines to perform tasks that typically require human intelligence.",
        "who created you?": "I was created by Emeric Cunil.",
        "what is the capital of France?": "The capital of France is Paris.",
        "who is the president of the USA?": "As of my last update, the president is Joe Biden.",
        "what is 2 + 2?": "2 + 2 equals 4.",
        "what is the square root of 16?": "The square root of 16 is 4.",
        "solve 5 * 6": "5 * 6 equals " + (5 * 6) + ".",
        "what is the formula for the area of a circle?": "The formula for the area of a circle is A = πr², where r is the radius.",
        "what is the Pythagorean theorem?": "The Pythagorean theorem states that in a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.",
        "types of questions": "Here are some types of questions you might encounter:\n\n1. **Purpose-Based**: Factual, Analytical, Critical Thinking, Creative, Reflective.\n2. **Format-Based**: Multiple Choice, True/False, Open-Ended, Fill-in-the-Blank, Matching, Short Answer, Essay.\n3. **Engagement-Based**: Discussion, Survey, Interview, Socratic.\n4. **Topic-Specific Examples**: Social Studies, Religious Study."
    };

    // Check if the user message is a math question
    if (userMessage.toLowerCase().includes("solve") || userMessage.toLowerCase().includes("calculate")) {
        const expression = userMessage.replace(/solve|calculate/i, '').trim();
        try {
            const result = eval(expression);
            return `The result of ${expression} is ${result}.`;
        } catch (error) {
            return "I'm sorry, I couldn't calculate that. Please check your expression.";
        }
    }

    // Return a response or a default message
    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that. Can you please rephrase?";
}