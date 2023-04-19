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
    // {"quotes_type":"goat", "text":12, "year":"large"}
    document.quotes_type = req.body.quotes_type;
    document.text = req.body.text;
    document.year = req.body.year;
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
    if(req.body.text) toUpdate.text = req.body.text;
    if(req.body.year) toUpdate.year = req.body.year;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// Handle quotes delete on DELETE.
exports.quotes_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await quotes.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.quotes_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await quotes.findById( req.query.id)
    res.render('quotesdetail',
    { title: 'quotes Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a quotes.
// No body, no in path parameter, no query.
// Does not need to be async
exports.quotes_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('quotescreate', { title: 'quotes Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a quotes.
// query provides the id
exports.quotes_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await quotes.findById(req.query.id)
    res.render('quotesupdate', { title: 'quotes Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.quotes_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await quotes.findById(req.query.id)
    res.render('quotesdelete', { title: 'quotes Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };