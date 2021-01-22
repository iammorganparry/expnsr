import { ExpenseItem } from "."


export class ImageParser {
    items: ExpenseItem[] | null
    priceRegxp: RegExp
    constructor(public text: string) {
        this.items = null
        this.priceRegxp = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/
    }

    /**
     * parseItems
     */
    public parseItems() {
        const strArr = this.text.split('\n')
        this.items = strArr.reduce((acc, curr) => {
            
            const item = curr.split(this.priceRegxp)[0]
            const sanitized = this.sanitize(item)
            const match = curr.match(this.priceRegxp)
            const price = match ? match[0] : ''
            // console.log(item)
            // console.log(price)
            if(!!price) {
                return [
                    ...acc,
                    { item: sanitized, price}
                ]
            } else {
                return acc
            }
        } , [] as ExpenseItem[])
        return this.items
    }

    private sanitize(text: string) {
        return text.replace(' ', '').replace('$', '')
    }

}