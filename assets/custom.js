// コレクションページのカートアイコンのonclick属性から呼び出し
function _collectionCartIcon(item) {
  console.log("商品がクリックされました:", item);
  // 最も近い商品コンテナを見つける
  const productItem = item.closest('product-item');
  if (productItem) {
    // 商品コンテナ内の実際のカートボタンを探して自動クリック
    const realCartButton = productItem.querySelector('.js-product-button-add-to-cart');
    if (realCartButton) {
      realCartButton.click();
    }
  }
}

// コレクションページ文字数制限の指定
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const titleElements = document.querySelectorAll(".js-product-title");

    const maxBytes = 38; // 最大バイト数をここで設定

    titleElements.forEach((titleElement) => {
      const originalText = titleElement.textContent.trim(); // 元のタイトルを取得し、空白をトリム
      if (originalText) { // タイトルが空でないことを確認
        const truncatedText = truncateString(originalText, maxBytes);
        titleElement.textContent = truncatedText; // 短縮したタイトルを設定
      }
    });
  }, 100); // 100ミリ秒遅延
});

// バイト数を計算する関数
function getByteLength(str) {
  let byteLength = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    byteLength += charCode > 255 ? 2 : 1;
  }
  return byteLength;
}

// 文字数制限を適用する関数
function truncateString(str, maxBytes) {
  let byteLength = 0;
  let truncatedStr = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const charBytes = charCode > 255 ? 2 : 1;

    if (byteLength + charBytes > maxBytes) {
      truncatedStr += "…";
      break;
    }

    truncatedStr += str[i];
    byteLength += charBytes;
  }

  return truncatedStr;
}