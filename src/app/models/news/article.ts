export class Article {
  constructor(
    public source?: {name: string },
    public articles?: any,
    public title?: {name:string},
    public description?: {name: string}
  ) { }
}
