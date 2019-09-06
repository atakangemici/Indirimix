using MyProjectIndirimix.Model;
using MyProjectIndirimix.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace MyProjectIndirimix.Helpers
{
    public static class AppHelper
    {
        private static ApplicationDbContext DbContext = new ApplicationDbContext();

        public async static Task<int> AddProduct(Products Product)
        {
            if (Product == null)
                return 0;

            Products productData = new Products
            {
                Location = Product.Location,
                Description = Product.Description,
                Store = Product.Store,
                Name = Product.Name,
                Price = Product.Price,
                Like = Product.Like,
                IsConfirm = Product.IsConfirm,
                CreateDate = DateTime.Now,
                Order = Product.Order,
                Deleted = Product.Deleted
            };


            DbContext.Products.Add(productData);

            return await DbContext.SaveChangesAsync();
        }

        public async static Task<int> AddComment(Comments Comment)
        {
            if (Comment == null)
                return 0;

            Comments commentData = new Comments
            {
                Comment = Comment.Comment,
                UserId = Comment.UserId,
                ProductId = Comment.ProductId,
                CreateDate = DateTime.Now,
                Deleted = Comment.Deleted
            };

            DbContext.Comments.Add(commentData);

            return await DbContext.SaveChangesAsync();
        }

        public async static Task<int> AddFavorite(Favorites Favorite)
        {
            if (Favorite == null)
                return 0;

            Favorites favoritesData = new Favorites
            {
                ProductId = Favorite.ProductId,
                CreateDate = DateTime.Now,
                Deleted = Favorite.Deleted
            };

            DbContext.Favorites.Add(favoritesData);

            return await DbContext.SaveChangesAsync();
        }

        public async static Task<CustomUsers> AddUser(CustomUsers User)
        {
            if (User == null)
                return null;

            CustomUsers userData = new CustomUsers
            {
                Username = User.Username,
                Email = User.Email,
                Image = User.Image,
                Role = User.Role,
                UserSurName = User.UserSurName
            };
            userData.Deleted = userData.Deleted;
            userData.CreateDate = DateTime.Now;

            DbContext.CustomUsers.Add(userData);
            DbContext.SaveChanges();

            return userData;
        }

        public async static Task<IList<Products>> GetAllProducts()
        {
            var products = DbContext.Products
                .Where(x => x.Deleted != true)
                .Where(x => x.IsConfirm == true).ToListAsync();

            return await products;
        }

        public async static Task<Products> GetProduct(int id)
        {
            var product = DbContext.Products
                .Where(x => x.Deleted != true)
                .Where(x => x.IsConfirm == true).FirstOrDefaultAsync();

            return await product;
        }

        public async static Task<CustomUsers> GetUser(string email)
        {
            var user = DbContext.CustomUsers
                .Where(x => x.Deleted != true)
                .Where(x => x.Email == email)
                .FirstOrDefaultAsync();

            return await user;
        }
    }
}