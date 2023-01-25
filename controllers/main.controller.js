import orders from "../models/orders.model.js";
class  Main {
    signInPage(req, res) {
        let navfind = 0
        res.render('main/signin', navfind);
    }
    signIn(req, res) {
        if(req.body.name === "Hojiakbar" && req.body.sure == "Rayimberdiyev") {
            res.redirect('/list')
        }else if(req.body.password == "hojiakbar") {
            res.redirect('/list')
        }else {
            res.redirect('/')
        }
    }
}
export {Main}

class List {
    async listPage(req, res) {
       const data = await orders.find()
       res.render('main/listpage', {data});  //Ok
        
    }
} 
export {List}

class AddOrder {
    addOrderPage(req, res) {
        res.render('main/addorder');
    }
    async addOrder(req, res) {
        const data = req.body;
        await orders.create(data);
        res.redirect('/list');
    }
}
export {AddOrder};

class Search {
    async searchresult(req, res) {
        let search = req.body.datasearch;

        let result = await orders.find({ day:search });
        if (result.length !== 0) {
            res.render("main/searchresult", { title:"Natijalar", dataresult:result});
        } else {
            res.render("main/searchresult", { title:"Natijalar", dataresult:0});
        }
    }
} 
export {Search}

class Edit {
    async editPage(req, res) {
       let id = req.params.id;
       const data = await orders.findById(id);
       res.render('main/edit', {data});  
        
    }
    async edit(req, res) {
        let id = req.params.id;
        let newdata = req.body
        await orders.findByIdAndUpdate(id, newdata);
        res.redirect('/list');  
    }
} 
export {Edit}

class Delete {
    async deleteData(req, res) {
        const id = req.params.id;
        await orders.findByIdAndDelete(id);
        res.redirect('/list');
    }
}
export {Delete}
