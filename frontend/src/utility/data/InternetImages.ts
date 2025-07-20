const INTERNET_IMAGE_URLS = {
    1: 'https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp',

}

const DUMMY_ASSETS: _asset[] =[ 
    {id: 1, cathegory:'Electronics', desc: 'Laptop Computer', code: 'Asset_4398457A', url:INTERNET_IMAGE_URLS[1], quanity:21},
    {id: 2, cathegory:'Electronics', desc: 'Monitor', code: 'Asset_4398457B', url:INTERNET_IMAGE_URLS[1], quanity:40 },
    {id: 3, cathegory:'Electronics', desc: 'Headphones', code: 'Asset_4398457C', url:INTERNET_IMAGE_URLS[1], quanity:40 },
    {id: 4, cathegory:'Forniture', desc: 'Desk', code: 'Asset_4398457D', url:INTERNET_IMAGE_URLS[1], quanity:12 },
    {id: 5, cathegory:'Electronics', desc: 'Tablet', code: 'Asset_4398457E', url:INTERNET_IMAGE_URLS[1], quanity:30 },
    {id: 6, cathegory:'Electronics', desc: 'CPU', code: 'Asset_4398457F', url:INTERNET_IMAGE_URLS[1], quanity:40 },
    {id: 7, cathegory:'Electronics', desc: 'Modem', code: 'Asset_4398457G', url:INTERNET_IMAGE_URLS[1], quanity:4 },
    {id: 8, cathegory:'Forniture', desc: 'Chair', code: 'Asset_4398457I', url:INTERNET_IMAGE_URLS[1], quanity:12 },
]

type _asset = {
    id: number;
    cathegory: string;
    desc: string;
    code: string;
    quanity: number;
    url: string;
}

export {DUMMY_ASSETS, INTERNET_IMAGE_URLS};