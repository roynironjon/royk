
 // Predefined translations (English to Bengali)
const translations = {
    "status1": "জীবন একটি যাত্রা, এটি কোনও গন্তব্য নয়। প্রতিটি মুহূর্তকে উপভোগ করুন।",
    "status2": "অবশেষে, আমরা কেবল সেই সুযোগগুলোর জন্যই আফসোস করি যা আমরা নিইনি।",
    "status3": "সুখ কোনও প্রস্তুতকৃত কিছু নয়। এটি আপনার নিজস্ব কর্ম থেকে আসে।",
    "status4": "জীবনের সেরা জিনিসগুলি জিনিস নয়; এগুলি মুহূর্ত, মানুষ এবং স্মৃতি।",
    "status5": "জীবন মানে ঝড় কেটে যাওয়ার জন্য অপেক্ষা করা নয়, বৃষ্টিতে নাচতে শেখা।",
    "status6": "সুখ রেডিমেড কিছু নয়। এটা আপনার নিজের কর্ম থেকে আসে."
};

// Function to display Bengali translations dynamically
function displayTranslations() {
    for (let statusId in translations) {
        document.getElementById("bengaliStatus" + statusId.slice(-1)).innerText = translations[statusId];
    }
}

// Call the function to display the translations when the page loads
window.onload = displayTranslations;

function copyStatus(statusId) {
    // Get the status text
    var statusText = document.getElementById(statusId).innerText;
    // Create a temporary text area to copy the text
    var tempTextArea = document.createElement("textarea");
        tempTextArea.value = statusText;
        document.body.appendChild(tempTextArea);

        // Select the text and copy it
        tempTextArea.select();
        document.execCommand("copy");

        // Remove the temporary text area
        document.body.removeChild(tempTextArea);

        // Alert user that the text has been copied
        alert("Status copied: " + statusText);
}

    // Search function
    function searchWords() {
        // Get the input text
        const input = document.getElementById('search-input').value.toLowerCase();
        const statuses = document.querySelectorAll('.status-section');
            
        // Loop through each status section and match with the search input
        statuses.forEach(function(section) {
            const statusText = section.innerText.toLowerCase();

            // Check if input matches any part of the status
            if (statusText.includes(input)) {
                section.style.display = "block"; // Show if matches
            } else {
                section.style.display = "none"; // Hide if no match
            }
        });
    }

    function downloadVideo(videoUrl) {
        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = videoUrl.split('/').pop(); // Get the video file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    function downloadImage(imageUrl) {
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = imageUrl.split('/').pop(); // Get the image file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }