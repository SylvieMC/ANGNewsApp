export class Article {
  constructor(
    public source?: {name: string },
    public articles?: any,
    public urlToImage?: {name:string},
    public title?: {name:string},
    public description?: {name: string},
    public url?: {name: string}
  ) { }
}
