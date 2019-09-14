export default function sortUpdatedAt(dataList) {
    console.log(dataList);
    dataList.sort(function (a, b) { return (a.updatedAt < b.updatedAt ? 1 : -1); });
    return dataList;
}
//# sourceMappingURL=sortUpdatedAt.js.map