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