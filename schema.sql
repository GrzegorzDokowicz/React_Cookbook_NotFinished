CREATE TABLE `user` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(255),
  `points` integer,
  `created_at` timestamp
);

CREATE TABLE `category` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `type` varchar(255),
  `name` varchar(255),
  `image` varchar(255)
);

CREATE TABLE `product` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `kcal` integer,
  `carbo` double,
  `protein` double,
  `fat` double
);

CREATE TABLE `recipe` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `mainImage` varchar(255),
  `created_at` timestamp,
  `currentRating` integer,
  `author_id` integer
);

CREATE TABLE `recipe_comments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(255),
  `created_at` timestamp,
  `recipe_id` integer,
  `author_id` integer
);

CREATE TABLE `recipe_notes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(255),
  `created_at` timestamp,
  `recipe_id` integer
);

CREATE TABLE `recipe_images` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `source` varchar(255),
  `recipe_id` integer
);

CREATE TABLE `recipe_products` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `product_id` integer,
  `recipe_id` integer
);

CREATE TABLE `recipe_steps` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `step` integer,
  `description` varchar(255),
  `recipe_id` integer
);

CREATE TABLE `recipe_categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer,
  `recipe_id` integer
);

ALTER TABLE `recipe` ADD FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);
ALTER TABLE `recipe_comments` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_comments` ADD FOREIGN KEY (`author_id`) REFERENCES `user` (`id`);
ALTER TABLE `recipe_notes` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_images` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_products` ADD FOREIGN KEY (`product_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_products` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_steps` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
ALTER TABLE `recipe_categories` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
ALTER TABLE `recipe_categories` ADD FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`);
