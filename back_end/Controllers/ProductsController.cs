using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductCrudAPI.Models;

namespace ProductCRUDAPI.Controllers
{
    //@CrossOrigin(origins = "http://localhost:4200/")

    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductDBContext _context;

        public ProductsController(ProductDBContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IEnumerable<Product>> Get()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (id < 1)
                return BadRequest();
            var product = await _context.Products.FirstOrDefaultAsync(m => m.Id == id);
            if (product == null)
                return NotFound();
            return Ok(product);

        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {
            _context.Add(product);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Put(Product property)
        {
            if (property == null || property.Id == 0)
                return BadRequest();

            var product = await _context.Products.FindAsync(property.Id);
            if (product == null)
                return NotFound();
            product.Name = property.Name;
            //product.Description = property.Description;
            //product.Price = property.Price;
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id < 1)
                return BadRequest();
            var product = await _context.Products.FindAsync(id);
            if (product == null)
                return NotFound();
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return Ok();

        }




        //my another get api controller

        [HttpGet]
        [Route("/api/PropertiesById/{id}")]
        public async Task<IActionResult> GetPropertyById(int id)
        {
            if (id < 1)
                return BadRequest();
            var property = await _context.Property.FirstOrDefaultAsync(m => m.Id == id);
            if (property == null)
                return NotFound();
            return Ok(property);
        }

        [HttpGet]
        [Route("/api/GetProperties")]
        public async Task<IEnumerable<Property>> GetProperty()
        {
            return await _context.Property.ToListAsync();
        }

        [HttpPost]
        [Route("/api/PostProperties")]
        public async Task<IActionResult> PostProperty(Property property)
        {
            try
            {

            
            _context.Add(property);
            
            await _context.SaveChangesAsync();
            }
            catch (Exception ex) {

                var ab = ex;
            
            }
            return Ok();
        }


        [HttpPut]
        [Route("/api/PutProperties")]
        public async Task<IActionResult> PutProperty(Property property)
        {
            if (property == null || property.Id == 0)
                return BadRequest();

            var Property = await _context.Property.FindAsync(property.Id);
            if (Property == null)
                return NotFound();
            Property.PropertyName = property.PropertyName;
            //product.Description = property.Description;
            //product.Price = property.Price;
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("/api/DeleteProperties/{id}")]
        public async Task<IActionResult> DeleteProperty(int id)
        {
            if (id < 1)
                return BadRequest();
            var prop = await _context.Property.FindAsync(id);
            if (prop == null)
                return NotFound();
            _context.Property.Remove(prop);
            await _context.SaveChangesAsync();
            return Ok();

        }


    }
}