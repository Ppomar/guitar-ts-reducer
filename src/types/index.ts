export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number    
};

export interface CartGuitar extends Guitar {
    quantity: number
};