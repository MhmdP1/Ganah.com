// رسائل تتناوب في القسم الخاص
const messages = [
    "أهديكِ بعدد مرات ظهور القمر.",
    "كل عبارات التهنئة بعيد ميلادكِ.",
    "يا أغلى البشر."
];
let index = 0;

// تغيير الرسالة كل 2 ثوانٍ
function changeMessage() {
  const messageElement = document.querySelector(".special-message p");
  messageElement.style.opacity = 0; // إخفاء الرسالة الحالية
  setTimeout(() => {
    messageElement.textContent = messages[index];
    messageElement.style.opacity = 1; // إظهار الرسالة الجديدة
    index = (index + 1) % messages.length;
  }, 100); // تأخير لمدة 100 مللي ثانية أثناء الانتقال
}

setInterval(changeMessage, 2000); // تغيير الرسالة كل 2 ثوانٍ

// ميزة ظهور القلوب عند النقر
document.addEventListener("click", (e) => {
  // تحديد زر اختبار الحب
  const loveTestButton = document.querySelector("#loveTestButton");

  // تحقق مما إذا كانت النقرة داخل المساحة المخصصة لزر اختبار الحب
  if (loveTestButton) {
    const rect = loveTestButton.getBoundingClientRect();
    if (e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom) {
      // إذا كانت النقرة داخل الزر، لا نفعل شيئًا
      return;
    }
  }

  // تحقق مما إذا كانت النقرة داخل الـ footer (إذا كانت موجودة)
  const footer = document.querySelector("footer");
  const footerRect = footer ? footer.getBoundingClientRect() : null;

  if (footerRect && e.pageX >= footerRect.left && e.pageX <= footerRect.right && e.pageY >= footerRect.top && e.pageY <= footerRect.bottom) {
    // إذا كانت النقرة داخل الـ footer، لا نفعل شيئًا
    return;
  }

  // إذا لم تكن النقرة داخل الـ footer أو زر اختبار الحب، ننشئ تأثير القلب في المكان الذي تم النقر عليه
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = "❤️❤️";
  heart.style.position = "absolute"; // اجعل القلب عائم
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000); // إزالة القلب بعد ثانيتين
});