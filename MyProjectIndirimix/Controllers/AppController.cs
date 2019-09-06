using MyProjectIndirimix.Helpers;
using MyProjectIndirimix.Model;
using MyProjectIndirimix.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MyProjectIndirimix.App.Controllers
{
    [Authorize]
    [RoutePrefix("api/app")]
    public class AppController : ApiController
    {
        [AllowAnonymous]
        [Route("add_product"), HttpPost]
        public async Task<bool> AddProduct(Products Product)
        {
            var addProduct = await AppHelper.AddProduct(Product);

            if (addProduct == 0)
                return false;

            return true;
        }

        [Route("add_comments"), HttpPost]
        public async Task<bool> AddComment(Comments Comment)
        {

            var addComment = await AppHelper.AddComment(Comment);

            if (addComment == 0)
                return false;

            return true;
        }

        [Route("add_favorites"), HttpPost]
        public async Task<bool> AddFavorite(Favorites Favorite)
        {
            var addFavorite = await AppHelper.AddFavorite(Favorite);

            if (addFavorite == 0)
                return false;

            return true;
        }

        [AllowAnonymous]
        [Route("add_user"), HttpPost]
        public  async Task<CustomUsers> AddUser([FromBody]CustomUsers User)
        {
            var addUser = await AppHelper.AddUser(User);

            if (addUser == null)
                return null;

            return addUser;
        }

        [AllowAnonymous]
        [Route("get_all_products"), HttpGet]
        public async Task<ICollection<Products>> GetAllProducts()
        {
            var products = await AppHelper.GetAllProducts();

            return products;
        }

        [AllowAnonymous]
        [Route("get_product/{id:int}"), HttpGet]
        public async Task<Products> GetProduct([FromUri]int id)
        {
            var product = await AppHelper.GetProduct(id);

            return product;
        }

        [AllowAnonymous]
        [Route("get_user"), HttpGet]
        public async Task<CustomUsers> GetUser(string email)
        {
            var user = await AppHelper.GetUser(email);

            return user;
        }
    }
}
