class app {
  constructor(ele) {
    this.app = ele;
    this.data;

    this.modal;
    this.searchInput;
    this.searchResult;

    this.buildUI();
    this.bindEventDefault();
  }

  createSearchInput() {
    this.searchInput = document.createElement("div");
    this.searchInput.innerHTML = ` 
      <input class ="search" placeholder ="사진을 검색하시오"/>
    `;
    this.app.append(this.searchInput);
  }

  createSerachResult() {
    this.searchResult = document.createElement("ul");
    this.searchResult.classList.add("resultImg");
    this.app.append(this.searchResult);
  }

  createModal() {
    // 2020-03-20 모달을 간단하게 구현해보았다.
    // https://www.w3schools.com/howto/howto_css_modals.asp
    // 간단한 모달이지만 위의 페이지를 꼼꼼하게 참조해서 구현해보자.
    // 반드시 이해하고 구현하기.
    this.modal = document.createElement("div");
    this.modal.id = "myModal";
    this.modal.classList.add("modal");
    this.modal.innerHTML = ` 
        <div class="modal-content">
          <span class="close">&times;</span>
          <p> discription </p>
        <div/>
    `;
    this.app.append(this.modal);
  }

  // 2020-03-21 모달구현하다가 코드기 너무 별로여서 수정
  // render함수는 화면에 html을 그려준다.
  // 오늘 원래 진행하기로 한 modal 구현, input 구현은 하지 못했다.

  buildUI() {
    this.createSearchInput();
    this.createSerachResult();
    this.createModal();
  }

  bindEventDefault() {
    const $input = document.querySelector(".search");
    $input.addEventListener("keyup", async e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        new SearchImg(
          this.app,
          this.modal,
          (this.data = await getUserData($input.value))
        );
        $input.value = "";
      }
    });
  }
}
