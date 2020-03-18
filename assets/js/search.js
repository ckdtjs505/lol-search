class SearchImg {
  constructor(ele, data) {
    this.ele = ele;
    this.data = data;
    this.buildUI();
  }

  buildUI() {
    // input 생성
    const resultSearchBox = document.createElement("div");

    this.data.forEach(ele => {
      const { id, alt_description, urls } = ele;
      const img = document.createElement("div");
      img.innerHTML = `
          <div id="${id}"> 
              <img src="${urls.thumb}"> <img/>
          <div/>
      `;
      resultSearchBox.append(img);
    });
    this.ele.append(resultSearchBox);
  }
}
