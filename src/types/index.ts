export interface System {
    id: string;
    name: string;
    codename: string;
    language: string;
    type: string;
    sitemap_locations: string[];
    last_modified: Date;
}

export interface Element {
    type: string;
    name: string;
    value: string;
}

export interface PhotoValue {
    name: string;
    type: string;
    size: number;
    description: string;
    url: string;
}

export interface Photo {
    type: string;
    name: string;
    value: PhotoValue[];
}

export interface CafeElements {
    street: Element;
    city: Element;
    country: Element;
    state: Element;
    zip_code: Element;
    phone: Element;
    email: Element;
    photo: Photo;
}

export interface Cafe {
    system: System;
    elements: CafeElements;
}

export interface ContentResponse {
    items: Cafe[];
    pagination: {
        skip: number;
        limit: number;
        count: number;
        next_page: string;
    };
}
