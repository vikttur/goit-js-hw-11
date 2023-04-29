export default class LoadMoreBtn {
  constructor({ selector, isHiden = true }) {
    this.btn = this.getButton('.load-more');
    isHiden && this.hide();
  }
  getButton(selector) {
    return document.querySelector(selector);
  }
  disable() {
    this.btn.disabled = true;
    this.btn.textContent = 'Loading . . .';
  }
  enable() {
    this.btn.disabled = false;
    this.btn.textContent = 'Load more';
  }
  hide() {
		this.btn.classList.add('hidden');
		// console.log('added class hide bunnon');
  }
  show() {
    this.btn.classList.remove('hidden');
    // console.log('removed class hide bunnon');
  }
  empty() {
    this.btn.disabled = true;
		this.btn.textContent = 'Nothing to show';
		// console.log('nothing to show');
  }
}
