export default function read(stringToRead) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = stringToRead;
      return (() => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < data.length; i += 1) {
          bufferView[i] = data.charCodeAt(i);
        }
        resolve(bufferView);
      })();
    }, 1000);
  });
}
