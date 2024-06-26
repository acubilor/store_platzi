export interface MProduct {
  id: number,
  title: string,
  price: number,
  images: string[],
  creationAt: string,
  description: string,
  cantidad:number
    category: {
        creationAt: string,
        id: number,
        image: string,
        name: string,
        updatedAt: string
    }
}
