// Data for status, videos, and images (with subcategories)
const data = {
    "motivational": [
        { "text": "Life is a journey, embrace every moment.", "bengali": "জীবন একটি যাত্রা, প্রতিটি মুহূর্তকে গ্রহণ করুন।", "id": "status1" },
        { "text": "Difficult roads often lead to beautiful destinations.", "bengali": "কঠিন রাস্তা প্রায়ই সুন্দর গন্তব্যে নিয়ে যায়।", "id": "status2" }
    ],
    "love": [
        { "text": "Love is the most beautiful feeling in the world.", "bengali": "ভালোবাসা পৃথিবীর সবচেয়ে সুন্দর অনুভূতি।", "id": "status3" },
        { "text": "You complete me in every way.", "bengali": "তুমি আমাকে প্রতিটি দিক থেকে পূর্ণ করে।", "id": "status4" }
    ],
    "funny": [
        { "text": "I’m on a seafood diet. I see food and I eat it.", "bengali": "আমি একটি সীফুড ডায়েট করছি। আমি খাবার দেখি এবং আমি এটি খাই।", "id": "status5" },
        { "text": "My bed is a magical place where I suddenly remember everything I forgot to do.", "bengali": "আমার বিছানা একটি জাদুকরী স্থান যেখানে আমি হঠাৎ সবকিছু মনে করি যা আমি করতে ভুলে গিয়েছিলাম।", "id": "status6" }
    ],
    "inspirational": [
        { "src": "video1.mp4", "id": "video1", "name": "Inspiration Video" },
        { "src": "video2.mp4", "id": "video2", "name": "Success Video" }
    ],
    "educational": [
        { "src": "video3.mp4", "id": "video3", "name": "Learning HTML" },
        { "src": "video4.mp4", "id": "video4", "name": "JavaScript Tutorial" }
    ],
    "nature": [
        { "src": "image1.jpg", "id": "image1", "name": "Beautiful Sunset" },
        { "src": "image2.jpg", "id": "image2", "name": "Mountain View" }
    ],
    "city": [
        { "src": "image3.jpg", "id": "image3", "name": "City Lights" },
        { "src": "image4.jpg", "id": "image4", "name": "Skyline at Night" }
    ]
};

// Function to display content dynamically based on selected category
function showCategory(category) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // Clear previous content

    // For status (text)
    if (category === 'motivational' || category === 'love' || category === 'funny') {
        data[category].forEach(item => {
            const div = document.createElement('div');
            div.className = "item";
            div.innerHTML = `
                <p>${item.text}</p>
                <p><i>${item.bengali}</i></p>
                <button onclick="copyStatus('${item.text}', '${item.bengali}')">Copy Text</button>
            `;
            contentDiv.appendChild(div);
        });
    }

    // For videos
    else if (category === 'inspirational' || category === 'educational') {
        data[category].forEach(item => {
            const div = document.createElement('div');
            div.className = "item";
            div.innerHTML = `
                <video width="320" height="240" controls>
                    <source src="${item.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <br>
                <button onclick="downloadFile('${item.src}', '${item.name}')">Download Video</button>
            `;
            contentDiv.appendChild(div);
        });
    }

    // For images
    else if (category === 'nature' || category === 'city') {
        data[category].forEach(item => {
            const div = document.createElement('div');
            div.className = "item";
            div.innerHTML = `
                <img src="${item.src}" alt="${item.name}" width="320" height="240">
                <br>
                <button onclick="downloadFile('${item.src}', '${item.name}')">Download Image</button>
            `;
            contentDiv.appendChild(div);
        });
    }
}

// Function to show/hide subcategories
function showSubCategories(mainCategory) {
    const subCategoryList = document.getElementById(`${mainCategory}-subcategories`);
    subCategoryList.style.display = subCategoryList.style.display === 'none' ? 'block' : 'none';
}

// Function to copy status text (for statuses)
function copyStatus(englishText, bengaliText) {
    const statusText = `${englishText}\n${bengaliText}`;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = statusText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Status copied!");
}

// Function to download files (videos or images)
function downloadFile(fileSrc, fileName) {
    const element = document.createElement('a');
    element.href = fileSrc;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
