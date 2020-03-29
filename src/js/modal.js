export default class Modal {
  constructor(ele, modal, data) {
    this.ele = ele;
    this.modal = modal;
    this.data = data;

    this.buildUI();
    this.bindEventDefault();
  }
  // 2020-03-22 [일]
  // modal을 클릭하면 modal을 활성화
  // modal의 dom을 생성한다.
  // 이벤트를 바인딩 하여 modal을 동작하게 한다.

  buildUI() {
    this.modal.classList.add("on");
    const { alt_description, urls } = this.data;
    this.modal.innerHTML = ` 
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${urls.thumb}"> </img> 
            <p> ${alt_description} </p>
        <div/>
    `;
  }

  bindEventDefault() {
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      this.modal.classList.remove("on");
    });

    window.onclick = event => {
      if (event.target == this.modal) {
        this.modal.classList.remove("on");
      }
    };

    window.onkeyup = event => {
      if (event.keyCode === 27) {
        this.modal.classList.remove("on");
      }
    };
  }
}
