var quotes = require('../models/quotes');
// List of all quotess
exports.quotes_list = function(req, res) {
res.send('NOT IMPLEMENTED: quotes list');
};
// for a specific quotes.
exports.quotes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: quotes detail: ' + req.params.id);
};
// Handle quotes create on POST.
exports.quotes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: quotes create POST');
};
// Handle quotes delete form on DELETE.
exports.quotes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: quotes delete DELETE ' + req.params.id);
};
// Handle quotes update form on PUT.
exports.quotes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: quotes update PUT' + req.params.id);
};

// List of all quotess
exports.quotes_list = async function(req, res) {
    try{
    thequotes = await quotes.find();
    res.send(thequotes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.quotes_view_all_Page = async function(req, res) {
    try{
    thequotes = await quotes.find();
    res.render('quotes', { title: 'quotes Search Results', results: thequotes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle quotes create on POST.
exports.quotes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new quotes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"quotes_type":"goat", "cost":12, "size":"large"}
    document.quotes_type = req.body.quotes_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific quotes.
exports.quotes_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await quotes.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
exports.quotes_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await quotes.findById( req.params.id)
    // Do updates of properties
    if(req.body.quotes_type)
    toUpdate.quotes_type = req.body.quotes_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };