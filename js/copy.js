function copyContent() {
    // Get the element with id 'ca'
    const element = document.getElementById('ca');

    // Create a temporary textarea element
    const tempInput = document.createElement('textarea');
    // Set the content to copy as the text content of the div
    tempInput.value = element.textContent;
    // Append to the body
    document.body.appendChild(tempInput);
    // Select the content
    tempInput.select();
    // Copy the content
    document.execCommand('copy');
    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    // Optional: Alert to show success
    //alert('Content copied to clipboard: ' + element.textContent);
    alert('CA copied to clipboard: ' + element.textContent);
}