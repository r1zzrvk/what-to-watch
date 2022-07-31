type IItemList<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode
}

export function ItemList<T>({items, renderItem}: IItemList<T>) {
  return (
    <>
      {items.map(renderItem)}
    </>
  );
}
