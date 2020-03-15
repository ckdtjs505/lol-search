class app {
  constructor(ele) {
    this.app = ele;

    this.buildUI();
    this.bindEventDefault();
  }

  buildUI() {
    // input 생성
    this.$input = document.createElement("input");
    this.$input.classList.add("search");
    this.$input.setAttribute("placeholder", "롤 닉네임 입력");
    this.app.append(this.$input);
  }

  bindEventDefault() {
    this.$input.addEventListener("keyup", e => {
      e.preventDefault();
      if (e.keyCode === 13) {
        console.log(this.$input.value);
        this.$input.value = "";
        // api 호출
      }
    });
  }
}
