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
export default Tx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS9UeC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLEVBQUU7SUFFTixZQUFZLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFDTSxLQUFLLENBQUMsTUFBTTtRQUNqQixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3RUFBd0UsRUFDOUc7WUFDRSxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLCtDQUErQzthQUN4RDtZQUNELEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQyxDQUFBO1FBQ0osT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0NBQ0Y7QUFFRCxlQUFlLEVBQUUsQ0FBQSJ9