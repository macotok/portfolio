interface data {
  createdAt: string,
  id: number,
  image: {
    name: string,
    path: string,
  },
  image_name: string,
  image_path: string,
  tags: string[],
  text: string,
  title: string,
  updatedAt: string,
  url: string,
}

export default function sortUpdatedAt(dataList: data[]): data[] {
  dataList.sort((a, b) => (
    a.updatedAt < b.updatedAt ? 1 : -1
  ));
  return dataList;
}
