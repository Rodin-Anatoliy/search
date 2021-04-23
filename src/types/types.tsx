export interface IUser {
    id: number;
    name: string;
    username: string;
    email?: string;
    phone?: string;
    website?: string;
    adress?: IAddress;
    company?: ICompany;
    photo?: IPhoto;
}

export interface IPhoto {
    id: number;
    thumbnailUrl: string;
    albumId?: number;
    title?: string;
    url?: string;
}

interface IAddress {
    street: string;
    city: string;
    zipcode: string;
    suite: string;
    geo: IGeo;
}

interface IGeo {
    lat: string;
    lng: string;
}

interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}