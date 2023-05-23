export interface GalleryItem{
    id: number,
    src: string,
    alt: string
}

export interface Additions {
    id: number,
    bookCount: number,
    userCount: number,
    title: string,
    gallery: GalleryItem[]
}
