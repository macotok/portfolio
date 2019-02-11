export default function sortUpdatedAt(dataList) {
  dataList.sort((a, b) => (
    (a.updatedAt < b.updatedAt ? 1 : -1)
  ));
  return dataList;
}
