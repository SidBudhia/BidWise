# BidWise
You are organizing an exhibition for setting up an auction for ancient relics. Unfortunately, due to the present Covid Pandemic, you are unable to conduct a physical event for your exhibition. So, you decided to move the setup to a Virtual Environment. You have to create a website to organize your Auction online. The website should allow different users to participate and put-up items in your exhibition. 

## Setup and Getting Started
1. Download or clone this repo to your local system.
2. For this repo, you have to create your own `config.env` file or rename the `config.txt` file to `config.env`, which is provided as an example for the contents to be filled in .env file.
3. After this, open the terminal and run the following command to download all the dependencies.
```
npm install
```
4. After downloading all the dependencies, run the following command in the terminal.
```
npm run start
```
5. Now, navigate to http://localhost:3000

## Basic Mode:
- [x] Users should be able to sign in and register securely. No frameworks like passport.js should be used to implement authorization. Passwords must be hashed (for hashing npm packages can be used).
- [x] Users should be allowed to add, update, and delete their products. All the products should have an image and the necessary details regarding the product. The product should also contain tags to describe it more clearly.
- [x] For each product, the time limit must be specified by the owner after which Bidding for that product will not be allowed.
- [x] Owners should be able to see the details for all the bidders who bid for that product.
- [x] The website should have a public page where products will be showcased with the highest bidder for that particular product.
- [x] Create a profile page for each individual user. Products should be displayed according to the highest bid at that time.

## Hacker Mode:
- [x] In the Public page add an option to search and filter the products based on Tags and Product name.
- [x] Users should be allowed to add comments for a particular post. The user who has created the comment should only have permission to delete and update the respective comment.
- [ ] Option for giving ratings to different products.
- [x] For displaying the posts multiple options such as alphabetical, according to the highest bidder, etc should be present.

## Git:
- [x] Use git bash or command-line interface instead of git website for making commits.
- [x] Work on a new repository for the project.
- [x] Include meaningful commit messages for each commit made in the repository.
- [x] For the basic task work on the main branch.
- [x] Once done with the basic task, create a separate branch called hacker mode from the main branch and continue working on that branch.
- [x] Have a proper Readme consisting of the given sub-tasks as a checklist and update them accordingly.