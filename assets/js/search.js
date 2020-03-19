class SearchImg {
  constructor(ele, data) {
    this.ele = ele;
    this.data = data;
    this.render();
  }

  render() {
    this.$resultSearchBox = document.querySelector(".resultImg");
    // 2020-03-19 검색결과를 .result Img에 덮어쓰고 싶었는데..
    // append를 하면 덮어쓰기 보다는 추가가 되었다.
    // szHtml을 만들어서 안에 있는 html을 덮었느는 형식으로 바꿨다.
    // 내가 원하는 모형은 아닌데 ㅠㅠ 이게 맞는지 모르겠다
    let szHtml = "";
    this.data.forEach(ele => {
      const { id, urls } = ele;
      szHtml += `
        <li > 
          <img src="${urls.thumb}" id="${id}" > </img>
        </li>`;
    });
    this.$resultSearchBox.innerHTML = szHtml;
  }
}
