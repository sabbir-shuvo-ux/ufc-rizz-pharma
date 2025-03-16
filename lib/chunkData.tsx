export const chunkData = (data: ProductDataType[], size: number) => {
  const chunks: ProductDataType[][] = [];
  for (let i = 0; i < data.length; i += size) {
    chunks.push(data.slice(i, i + size));
  }
  return chunks;
};
