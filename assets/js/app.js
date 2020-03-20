class app {
  constructor(ele) {
    this.app = ele;
    this.data;

    this.render();
    this.bindEventDefault();
  }

  setState() {}

  bindEventDefault() {
    const $input = document.querySelector(".search");
    $input.addEventListener("keyup", async e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        new SearchImg(this.app, (this.data = await getUserData($input.value)));
        $input.value = "";
      }
    });
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = ` 
      <input class ="search" placeholder ="사진을 검색하시오"/>
    `;

    const resultImg = document.createElement("ul");
    resultImg.classList.add("resultImg");

    // 2020-03-20 모달을 간단하게 구현해보았다.
    // https://www.w3schools.com/howto/howto_css_modals.asp
    // 간단한 모달이지만 위의 페이지를 꼼꼼하게 참조해서 구현해보자.
    // 반드시 이해하고 구현하기.
    const modal = document.createElement("div");
    modal.classList.add("on");
    modal.innerHTML = ` 
      <div class="modal"> 
        <div class="modal-content">
          <span class="close">&times;</span>
          <p> discription </p>
        <div/>
      <div/>
    `;

    this.app.append(div);
    this.app.append(resultImg);
    this.app.append(modal);
  }
}
