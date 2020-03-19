class SearchImg {
  constructor(ele, data) {
    this.ele = ele;
    this.data = data;
    this.render();
  }

  // react set state 함수 분석
  render() {
    // input 생성
    this.$resultSearchBox = document.querySelector(".resultImg");
    let szHtml = "";
    this.data.forEach(ele => {
      const { id, urls } = ele;
      szHtml += `
        <div id="${id}"> 
          <img src="${urls.thumb}"> <img/>
        <div/>`;
    });

    this.$resultSearchBox.innerHTML = szHtml;
  }
}
