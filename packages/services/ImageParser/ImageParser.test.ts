import { ImageParser } from "./ImageParser";

const text = `RECEIPT
Terminalit 02208 M32AM
1xT-Shirt $25.50
TOTAL AMOUNT $363.99
Approvalst 192107
wouxnsnnnn THANK YOU! xxxsnxxnnn
www.shutterstock.com - 768909406`

const expectedOutcome = [
        {
            item:'1xT-Shirt',
            price: '25.50',
        },
        {
            item:'TOTALAMOUNT',
            price: '363.99',
        },
    ]
    
describe('ImagePaser', () => {
    
    it('should parse a chunk of text and return and item array', () => {
        const service = new ImageParser(text)
        expect(service.parseItems()).toEqual(expectedOutcome)
    });
});