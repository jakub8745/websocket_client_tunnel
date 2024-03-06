// Update the WebSocket URL to your Cloudflare Tunnel URL
// Note: Use wss:// for secure WebSocket connections
const ws = new WebSocket('wss://onepitcherforall.bluepointart.uk');

ws.onmessage = function(event) {
    const message = JSON.parse(event.data);
    const messagesElement = document.getElementById('messages');
    // Display the received message
    messagesElement.innerText += `Random Value: ${message.value}\n`;
};

ws.onerror = function(event) {
    console.error('WebSocket error:', event);
};

ws.onopen = function(event) {
    console.log('Connected to server.');
};

ws.onclose = function(event) {
    console.log('Disconnected from server.');
};
