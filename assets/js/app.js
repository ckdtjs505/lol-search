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
    // input 생성
    const div = document.createElement("div");
    div.innerHTML = ` 
      <input class ="search" placeholder ="사진을 검색하시오"/>
    `;

    const resultImg = document.createElement("div");
    resultImg.classList.add("resultImg");

    this.app.append(div);
    this.app.append(resultImg);
  }
}
