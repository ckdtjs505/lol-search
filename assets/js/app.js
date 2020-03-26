class app {
  constructor(ele) {
    this.app = ele;
    this.data;
    this.page = 0;
    this.searchValue;

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
    this.app.append(this.modal);
  }

  async searchEngine() {
    // 2020-03-26[목]
    // 이전의 코드는 SearchImg를 생성하는 생성자 안에서 this.data를 선언하여 다읽을 때 까지 대기한다.
    // 로더를 먼저 생성한다. 데이터를 다 읽으면, 그 이후 로더를 삭제한다.
    // 그리고 데이터를 그려주는 형식으로 구현했다. 아주 맘에 든다. ㅎㅎ
    this.searchResult.append(this.loader);
    this.data = await getUserData(++this.page, this.searchValue);
    this.loader.remove();
    new SearchImg(this.app, this.modal, this.data);
  }

  // 2020-03-21 모달구현하다가 코드기 너무 별로여서 수정
  // render함수는 화면에 html을 그려준다.
  // 오늘 원래 진행하기로 한 modal 구현, input 구현은 하지 못했다.

  buildUI() {
    this.createSearchInput();
    this.createSerachResult();
    this.createModal();
    this.loader = document.createElement("div");
    this.loader.classList.add("loader");
  }

  bindEventDefault() {
    // 2020-03-25[수] 무한 스크롤 구현
    // https://velopert.com/1890
    // 기존 SearchImg는 데이터를 다시 그리는 형식이므로 제대로 동작 하지 않음
    window.onscroll = e => {
      if (
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.offsetHeight
      ) {
        this.searchEngine();
      }
    };

    const $input = document.querySelector(".search");
    $input.addEventListener("keyup", async e => {
      this.searchValue = $input.value;
      e.preventDefault();
      if (e.keyCode === 13) {
        // 2020-03-23 [월]
        // 데이터 로딩중 만들기 css laoder를 구현
        // https://www.w3schools.com/howto/howto_css_loader.asp

        // 새롭게 검색하는 경우에는 화면을 지운다.
        this.searchResult.innerHTML = "";

        this.searchEngine();

        $input.value = "";
      }
    });
  }
}
