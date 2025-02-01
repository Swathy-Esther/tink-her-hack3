// Function to log selected emotion
function logEmotion() {
    const emotion = document.getElementById('emotion').value;
    alert(`You selected: ${emotion}`);
}

// Function to analyze sentiment of the text input
function analyzeSentiment() {
    const userInput = document.getElementById('textInput').value;
    const analysis = getSentimentAnalysis(userInput);
    
    const analysisDiv = document.getElementById('emotionAnalysis');
    analysisDiv.innerHTML = `<strong>Sentiment Analysis Result:</strong><br>${analysis}`;

    // Provide stress tips based on sentiment
    const stressTipsDiv = document.getElementById('stressTips');
    stressTipsDiv.innerHTML = `<strong>Stress Tips:</strong><br>${getStressTips(analysis)}`;

    // Provide AI chatbot response
    const aiChatbotDiv = document.getElementById('aiChatbot');
    aiChatbotDiv.innerHTML = `<strong>AI Chatbot:</strong><br>${getAIResponse(userInput)}`;

    // Provide YouTube video link based on sentiment
    const videoLinkDiv = document.getElementById('videoLink');
    videoLinkDiv.innerHTML = `<strong>Recommended Video:</strong><br><a href="${getVideoLink(analysis)}" target="_blank">Watch here</a>`;
}

// Dummy function to simulate sentiment analysis (can be replaced with a real API or algorithm)
function getSentimentAnalysis(input) {
    if (input.includes('sad') || input.includes('angry') || input.includes('stressed')) {
        return 'Negative sentiment detected';
    } else if (input.includes('happy') || input.includes('calm')) {
        return 'Positive sentiment detected';
    } else {
        return 'Neutral sentiment detected';
    }
}

// Dummy function to give stress reduction tips based on sentiment
function getStressTips(sentiment) {
    if (sentiment === 'Negative sentiment detected') {
        return 'Try deep breathing, take a walk, or talk to someone.';
    } else if (sentiment === 'Positive sentiment detected') {
        return 'Keep up the great mood! Continue engaging in activities that make you feel happy.';
    } else {
        return 'Take time to relax and focus on positive thoughts.';
    }
}

// Dummy function to simulate AI chatbot responses
function getAIResponse(input) {
    if (input.includes('help')) {
        return 'It seems like you might need some assistance. How can I help you today?';
    } else if (input.includes('sad')) {
        return 'I am sorry to hear you are feeling sad. Want to talk more about it?';
    } else {
        return 'I am here to listen and assist you.';
    }
}

// Function to get YouTube video link based on sentiment
function getVideoLink(sentiment) {
    const videoLinks = {
        'Negative sentiment detected': 'https://www.youtube.com/watch?v=dnBAU8Co6PA', // Relaxing Music Healing Stress, Anxiety and Depressive States
        'Positive sentiment detected': 'https://www.youtube.com/watch?v=lFcSrYw-ARY', // Beautiful Relaxing Music for Stress Relief
        'Neutral sentiment detected': 'https://www.youtube.com/watch?v=MIr3RsUWrdo' // 20-Minute Guided Meditation for Reducing Anxiety and Stress
    };
    return videoLinks[sentiment] || videoLinks['Neutral sentiment detected'];
}
