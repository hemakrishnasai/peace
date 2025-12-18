const tags = [
"Empowerment",
"Healing",
"Guidance",
"Awareness",
"Meditation"
];

let index = 0;
const tagText = document.getElementById("tagText");

setInterval(() => {
index = (index + 1) % tags.length;
tagText.classList.remove("fade");
void tagText.offsetWidth;
tagText.classList.add("fade");
tagText.textContent = tags[index];
}, 2500);