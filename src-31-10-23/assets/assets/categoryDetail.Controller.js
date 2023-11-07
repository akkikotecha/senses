const categoryDetailModel = require("../models/categoryDetail.model");
const Category = require("../models/category.model");
const path = require("path");
let mongoose = require("mongoose");

getCategoryDetails = async (req, res, next) => {
  // console.log(req.body);
  // return false;

  try {
    //console.log("HELLO");
    try {
      const categoryDetailModelData = await categoryDetailModel.aggregate([
        {
          $lookup: {
            from: "subcategories",
            localField: "subCategoryId",
            foreignField: "_id",
            as: "subcategoriesdata",
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "subcategoriesdata.categoryId",
            foreignField: "_id",
            as: "categoriesdata",
          },
        },
        { $sort: { _id: -1 } },
      ]);

      res.status(200).send(categoryDetailModelData);
    } catch (err) {
      res.status(500).send({ status: 0, message: err.message });
    }
  } catch (error) {
    console.log(mongoose);
    return res.status(500).send({ status: 0, message: error.message });
  }
};

getCategoryDetailsId = async (req, res, next) => {
  try {
    const subcategoryId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(subcategoryId)) {
      return res.status(400).send("Invalid subcategory ID");
    }

    const categoryDetailModelData = await categoryDetailModel.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "subCategoryId",
          foreignField: "_id",
          as: "subcategoriesdata",
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "subcategoriesdata.categoryId",
          foreignField: "_id",
          as: "categoriesdata",
        },
      },
      {
        $match: {
          "subcategoriesdata._id": new mongoose.Types.ObjectId(subcategoryId),
        },
      },
      { $sort: { _id: -1 } },
    ]);

    res.status(200).send(categoryDetailModelData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ status: 0, message: error.message });
  }
};

categoryDetail = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.files);
    let filesSnapShotsArray = [];
    let filesImagesArray = [];
    let filesfeaturedOneImageArray = [];
    let filesfeaturedTwoImageArray = [];
    let filesfeaturedThreeImageArray = [];

    if (req.files && req.files.snapShots) {
      req.files.snapShots.forEach((element) => {
        filesSnapShotsArray.push(`assets/upload/${element.filename}`);
      });
    }
    console.log("snapshots images one uploaded successfully");
    if (req.files && req.files.image) {
      req.files.image.forEach((element) => {
        filesImagesArray.push(`assets/upload/${element.filename}`);
      });
    }
    console.log("header images one uploaded successfully");
    if (req.files && req.files.featuredOneImage) {
      req.files.featuredOneImage.forEach((element) => {
        filesfeaturedOneImageArray.push(`assets/upload/${element.filename}`);
      });
    }
    console.log("featured images one uploaded successfully");
    if (req.files && req.files.featuredTwoImage) {
      req.files.featuredTwoImage.forEach((element) => {
        filesfeaturedTwoImageArray.push(`assets/upload/${element.filename}`);
      });
    }
    console.log("featured images two uploaded successfully");
    if (req.files && req.files.featuredThreeImage) {
      req.files.featuredThreeImage.forEach((element) => {
        filesfeaturedThreeImageArray.push(`assets/upload/${element.filename}`);
      });
    }
    console.log("featured images three uploaded successfully");

    const categoryDetailData = new categoryDetailModel({
      subCategoryId: req.body.subCategory,
      images: filesImagesArray,
      // categoryId: req.body.category,
      snapShots: filesSnapShotsArray,
      overview: req.body.overview,
      featuredOneImage: filesfeaturedOneImageArray,
      featuredOneTitle: req.body.featuredOneTitle,
      featuredOneDesc: req.body.featuredOneDesc,
      featuredTwoImage: filesfeaturedTwoImageArray,
      featuredTwoTitle: req.body.featuredTwoTitle,
      featuredTwoDesc: req.body.featuredTwoDesc,
      featuredThreeImage: filesfeaturedThreeImageArray,
      featuredThreeTitle: req.body.featuredThreeTitle,
      featuredThreeDesc: req.body.featuredThreeDesc,
    });
    console.log("featured images three uploaded successfully");

    await categoryDetailData.save();
    res.status(201).json({ message: "Data Added Successfully", status: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const CategoryDetail = {
  categoryDetail,
  getCategoryDetails,
  getCategoryDetailsId,
};

module.exports = CategoryDetail;
