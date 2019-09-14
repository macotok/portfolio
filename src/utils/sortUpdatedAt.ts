export default function sortUpdatedAt(dataList) {
  console.log(dataList)
  dataList.sort((a, b) => (
    a.updatedAt < b.updatedAt ? 1 : -1
  ));
  return dataList;
}
