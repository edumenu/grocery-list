const Grocery = require('../models/Grocery');

// @desc Get all grocery lists
// @route GET /api/v1/groceries
// @access Public
exports.getGroceries = async (req, res, next) => {
    try {
        var grocery = ''
        if (req.query.createdAt) {
            var query = { createdAt: req.query.createdAt.replace(/T/, ' ').substr(0, 10) };
            grocery = await Grocery.find(query);
        } else {
            grocery = await Grocery.find();
        }

        return res.status(200).json({
            success: true,
            count: grocery.length,
            data: grocery
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "The server has encountered a situation it doesn't know how to handle"
        })
    }
}

// @desc Add a grocery list
// @route POST /api/v1/groceries
// @access Public
exports.addGroceries = async (req, res, next) => {
    try {
        oldGroceryItems()
        const grocery_list = await Grocery.find()
        console.log(grocery_list.length)
        if (grocery_list.length >= 30) return res.status(400).json({ message: "You cannot add any more grocery items"})

        const { item, amount, createdAt } = req.body;
        const grocery = await Grocery.create(req.body);

        return res.status(201).json({
            success: true,
            data: grocery
        });
    } catch (err) {
        if (err.name == "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message)
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "The server has encountered a situation it doesn't know how to handle"
            });
        }
    }
}

// @desc Delete a grocery list
// @route DELETE /api/v1/groceries
// @access Public
exports.deleteGroceries = async (req, res, next) => {
    try {
        const grocery = await Grocery.findById(req.params.id);

        if (!grocery) {
            return res.status(404).json({
                success: false,
                error: 'Grocery item not found'
            });
        }
        await grocery.remove();
        return res.status(200).json({
            success: true,
            data: "Grocery item was deleted successfully!"
        });

    } catch (err) {
        return res.status(500).json({
            success: true,
            data: "The server has encountered a situation it doesn't know how to handle"
        });
    }
}

// Delete grocery items that are 7 days and older
oldGroceryItems = async () => {
    current_date = new Date;
    current_date.setDate(current_date.getDate() - 8)
    grocery = await Grocery.find();
    grocery.filter(item => item.createdAt < current_date).reduce((previousItem, currentItem) => deleteLimit(currentItem), 0)
}

// Delete item
deleteLimit = async (groceryItem) => {
    await groceryItem.remove();
}