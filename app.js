// ── APP CONTROLLER ──
let currentPage = 'flashcards';
let examInitialized = false;
let quizInitialized = false;

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  document.getElementById('page-' + name).classList.add('active');
  document.querySelector('[data-page="' + name + '"]').classList.add('active');

  currentPage = name;

  if (name === 'exam' && !examInitialized) {
    examInitialized = true;
    initExam();
  }
  if (name === 'quiz' && !quizInitialized) {
    quizInitialized = true;
    initQuiz();
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initFlashcards();
});
