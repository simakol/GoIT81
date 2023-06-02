export default class LoadMoreBtn {
  constructor({ selector, isHidden = false }) {
    this.button = document.querySelector(selector);
    // if (isHidden) this.hide();
    isHidden && this.hide();
  }

  enable() {
    this.button.disabled = false;
    this.button.textContent = "Load more";
  }
  disable() {
    this.button.disabled = true;
    this.button.textContent = "Loading...";
  }
  show() {
    this.button.classList.remove("hidden");
  }
  hide() {
    this.button.classList.add("hidden");
  }
}

/*

стани кнопки:
1. активна (enable) - можемо натиснути і зробити новий запит (текст Load more)
2. неактивна (disabled) - не можемо натиснути (текст Loading...) стає такою після посилання запиту
3. hidden - кнопки просто немає, цей стан повинен бути у двох випадках: 
  3.1. коли нічого не знайдено
  3.2. коли запит не надіслано
4. visible - просто видима кнопка

*/
