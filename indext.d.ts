declare module 'ppt2text' {
    const PPT: {
        readFile(filePath: string, opts: any): any;
        to_text(w: any): any;
    };

    export default PPT;
}
