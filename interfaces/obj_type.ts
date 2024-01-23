export interface Data {
    link: string,
    head: string,
    image: string,
    about: string,
    alt: string,
    label: string | string[]
}

export interface Layout{
    subheading: string,
    id: string,
    dataSource: Data[]
}