const dailyTips = [
    {
        title: "Take a screen break",
        text: "Look away from your screen and stretch for a minute between study sessions."
    },
    {
        title: "Make time to move",
        text: "A short walk or a gentle stretch can be a refreshing pause in your day."
    },
    {
        title: "Pause and breathe",
        text: "Take a few slow breaths and let your shoulders relax before your next task."
    },
    {
        title: "Keep water nearby",
        text: "Having a glass of water within reach can help you remember to take a drink."
    },
    {
        title: "Wind down before bed",
        text: "Try a calming routine, like reading or putting devices aside, when it is time to rest."
    }
];

const tipTitle = document.getElementById("tip-of-day-title");
const tipText = document.getElementById("daily-tip");
const nextTipButton = document.getElementById("next-tip");
let currentTipIndex = 0;

nextTipButton.addEventListener("click", function () {
    currentTipIndex = (currentTipIndex + 1) % dailyTips.length;
    tipTitle.textContent = dailyTips[currentTipIndex].title;
    tipText.textContent = dailyTips[currentTipIndex].text;
});

const habitCheckboxes = document.querySelectorAll("[data-habit]");
const progressBar = document.getElementById("checklist-progress");
const progressLabel = document.getElementById("progress-label");

function updateChecklistProgress() {
    const completed = document.querySelectorAll("[data-habit]:checked").length;
    const total = habitCheckboxes.length;

    progressBar.max = total;
    progressBar.value = completed;
    progressBar.textContent = completed + " of " + total;
    progressLabel.textContent = completed + " of " + total + " complete";
}

habitCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateChecklistProgress);
});

const waterCount = document.getElementById("water-count");
const waterUnit = document.getElementById("water-unit");
const waterPlusButton = document.getElementById("water-plus");
const waterMinusButton = document.getElementById("water-minus");
let glassesOfWater = 0;

function updateWaterCount() {
    waterCount.textContent = glassesOfWater;
    waterUnit.textContent = glassesOfWater === 1 ? "glass" : "glasses";
    waterMinusButton.disabled = glassesOfWater === 0;
}

waterPlusButton.addEventListener("click", function () {
    glassesOfWater += 1;
    updateWaterCount();
});

waterMinusButton.addEventListener("click", function () {
    if (glassesOfWater > 0) {
        glassesOfWater -= 1;
        updateWaterCount();
    }
});

updateChecklistProgress();
updateWaterCount();
