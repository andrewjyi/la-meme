// const models = require('../models/index');

const Memes = require('../models/Meme');

module.exports = {
  users: {
    get: (req, res) => {
      res.end();
    },
    getById: (req, res) => {
      res.end();
    },
    post: (req, res) => {
      console.log(req.body);
      res.end();
    },
  },
  memes: {
    // finds a random url from database
    get: (req, res) => {
      const x = Math.ceil(Math.random() * 49);
      Memes.findAll({
        where: { id: x }
      })
      .then((meme) => {
        res.send(meme[0].dataValues.href);
        res.end();
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
    },
    post: (req, res) => {
      res.end();
    },
  },
  rooms: {
    get: (req, res) => {
      res.end();
    },
    getById: (req, res) => {
      res.end();
    },
    post: (req, res) => {
      res.end();
    },
  },
};
