const List = require('./../Models/List');

exports.fetch = (req, res) => {
    // console.log("hello world",res)
    try {
        console.log("hhhhhahaha")
        List.find({}).populate('location').exec((err, lists) => {
            console.log(lists);
            if(err) {
                res.send(err);
            }
            res.status(200).send(lists)
        })
    } catch (error) {
        console.log(error);
    }
}