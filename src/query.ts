import Builder from './Builder';
export const query =  (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let builder = new Builder(req.query.q);
    res.end(JSON.stringify(builder.getJson()));
}
