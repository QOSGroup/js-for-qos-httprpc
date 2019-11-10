"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tx {
    constructor(controller) {
        this.rpc = controller;
    }
    async sendTx() {
        const res = await this.rpc.request.post('/bank/accounts/qosacc12z5jn6c3qu3j2zy80ydwjm8pjwu3h8tqk3cwya/transfers', {
            'base': {
                'from': 'qosacc1kcj2ktlvqgdrznprtf5ypgkewm2dh5sc3enx5l'
            },
            'qos': '1000'
        });
        return res;
    }
}
exports.default = Tx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9UeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sRUFBRTtJQUVOLFlBQVksVUFBa0I7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUNNLEtBQUssQ0FBQyxNQUFNO1FBQ2pCLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdFQUF3RSxFQUM5RztZQUNFLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsK0NBQStDO2FBQ3hEO1lBQ0QsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUE7UUFDSixPQUFPLEdBQUcsQ0FBQTtJQUNaLENBQUM7Q0FDRjtBQUVELGtCQUFlLEVBQUUsQ0FBQSJ9