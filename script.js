const element = document.querySelector('.text');
const sentences = [
  { text: "الخطوة الأولى: اختر لعبتك", rtl: true, },
  { text: "Step One: Choose Your Game", rtl: false  }
];

let i = 0; 
let j = 0; // رقم الحرف
let deleting = false;

function type() {
  const current = sentences[i];
  element.style.direction = current.rtl ? "rtl" : "ltr";
  element.textContent = current.text.substring(0, j);

  if (!deleting) {
    if (j < current.text.length) j++;
    else deleting = true;
  } else {
    if (j > 0) j--;
    else {
      deleting = false;
      i = (i + 1) % sentences.length; 
    }
  }

  setTimeout(type, deleting ? 90 : 150); // سرعة الكتابة والمسح
}

type();