const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
console.log("Successfully synced database!")

const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});
console.log("Users successfully seeded!");

for (const post of postData) {
    await Post.create({...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
}
console.log("Posts successfully seeded!");

const comment = await Comment.bulkCreate(commentData);
console.log('Comments successfully seeded!');

process.exit(0);
};

seedDatabase();