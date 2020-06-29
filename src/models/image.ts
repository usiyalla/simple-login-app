export class Image {
    public readonly id: number;
    public title: string;
    public url: string;

    constructor(_title, _url) {
        this.title = _title;
        this.url = _url;
        this.id = Math.random();
    }
}