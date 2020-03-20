class SearchImg {
  constructor(ele, data) {
    this.ele = ele;
    this.data = data;
    this.render();
    this.bindEventDefault();
  }

  bindEventDefault() {
    // 2020-03-20 모든 img에 클릭시 modal이 나오게 구현하고 싶었는데..
    // 그러기 위해서는 생성자에서 생성한 this.data에 접근해야하는데
    // this가 이벤트가 발생한 지점을 가리키다 보니 this.data값이 없다고 한다.
    // 어떻게 다시 바꿀지 생각해보자.
    const imgs = document.querySelectorAll("img");
    imgs.forEach(ele => {
      ele.addEventListener("click", function() {
        const filterData = this.data.results;
        console.log(filterData);
      });
    });
  }

  render() {
    this.$resultSearchBox = document.querySelector(".resultImg");
    // 2020-03-19 검색결과를 .result Img에 덮어쓰고 싶었는데..
    // append를 하면 덮어쓰기 보다는 추가가 되었다.
    // szHtml을 만들어서 안에 있는 html을 덮었느는 형식으로 바꿨다.
    // 내가 원하는 모형은 아닌데 ㅠㅠ 이게 맞는지 모르겠다
    let szHtml = "";
    this.data.results.forEach(ele => {
      const { id, urls } = ele;
      szHtml += `
        <li >
          <img src="${urls.thumb}" id="${id}" class="img" > </img>
        </li>`;
    });
    this.$resultSearchBox.innerHTML = szHtml;
  }
}
