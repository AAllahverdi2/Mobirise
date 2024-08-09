const {FlowerModel}=require("../model/Flower.Model")
const FlowersController = {
  getAll: async (req, res) => {
    try {
      const target = await FlowerModel.find({});
      res.send(target);
    } catch (error) {
      res.send("item is not found");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const flower = await FlowerModel.findById(id);
      res.send(flower);
    } catch (error) {
      res.send("item is not found");
    }
  },
  Post: async (req, res) => {
    const { name, description, price, discount, image} = req.body;
    const NewProduct = new FlowerModel( { name, description, price, discount, image});
    await NewProduct.save()
    res.send(NewProduct);
    try {
    } catch (error) {
      res.send("item is not found");
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await FlowerModel.findByIdAndDelete(id);
      res.send("deleted");
    } catch (error) {
      res.send("item is not found");
    }
  },
};
module.exports={FlowersController}
