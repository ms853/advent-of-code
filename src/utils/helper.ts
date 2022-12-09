import fs from 'fs/promises';

const readerTxt = async (fileInput: string) => {
    return fs.readFile(fileInput, 'utf8')
    .then((data) => data)
    .catch((error) => console.log('Unable to read file due to: ', error));
};

export const HelperUtils = {
    readerTxt,
}