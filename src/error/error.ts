class Error {
    static missingBrances() {
        return {
            "error": "There is one missing ] or [ or } or {"
        }
    }
}
export default Error;
