import "./styles.css";

/** alertでJSが動くか確認 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const addText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(addText);
};

//　未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");

  // class名をつける
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  // 入力された文字をliのテキストにする
  li.innerText = text;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // クリックされたときのイベント
  completeButton.addEventListener("click", () => {});
  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 完了ボタンがクリックされたときのイベント
  completeButton.addEventListener("click", () => {
    //　押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcompleteLst(deleteButton.parentNode);
    const addTarget = completeButton.parentNode;
    // TODO内容テキスト取得
    const text = addTarget.firstElementChild.innerText;

    //　div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //addEventLisnnerは関数の呼び出し
    backButton.addEventListener("click", () => {
      //　押された戻すボタンの親タグ（div）を完了リストから削除
      //　戻す要素を取得
      const deleteTarget = backButton.parentNode;

      //　完了リストから削除
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 戻すテキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // 削除ボタンがクリックされたときのイベント
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteLst(deleteButton.parentNode);
  });

  // 未完了リストから指定の要素を削除
  const deleteFromImcompleteLst = (target) => {
    //　ボタンが押されたとき親要素のdivタグを削除
    document.getElementById("imcomplete-list").removeChild(target);
  };
  // divタグの子要素にliタグを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(div);
};

/** idを取得してクリックイベントが起きた時にonClickAdd関数を呼び出す*/
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
