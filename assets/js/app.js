class app {
  constructor(ele) {
    this.app = ele;
    this.data;

    this.buildUI();
    this.bindEventDefault();
  }

  buildUI() {
    // input 생성
    this.$input = document.createElement("input");
    this.$input.classList.add("search");
    this.$input.setAttribute("placeholder", "사진을 검색하세요");
    this.app.append(this.$input);
  }

  bindEventDefault() {
    this.$input.addEventListener("keyup", async e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        // api 호출
        let data = await getUserData(this.$input.value);
        this.$input.value = "";
      }
    });
  }
}
