export interface IPosts {
    title: string,
    text: string,
    tags: string,
    author: string,
    img: string,
    img_2x: string,
    date: string,
    views: string
}

export interface IChange {
    hide: object,
    setHide: (hide: object) => void,
    scroll: string
}