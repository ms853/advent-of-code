import { readFileSync } from 'fs';

const readerTxt = (fileInput: string) => {};
    

// const readerTxt = (fileInput: string) => {
//     return readFileSync(fileInput, 'utf8')
//     .split('\r\n')
//     .map(l => l.trim())
//     .filter(l => l.length > 0);
// };

export const HelperUtils = {
    readerTxt,
}