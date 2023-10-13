using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductCrudAPI.Models;

namespace ProductCrudAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploaderController : ControllerBase
    {
        [HttpPost]
        [Route("UploadFile")]
        public Response UploadFile([FromForm] FileModel fileModel)
        {
            Response response = new Response();
            try
            {
                string path = Path.Combine(@"C:\Users\sannithchandra\Pictures\MyAngularDemo\src\assets\images", fileModel.FileName);
                using(Stream stream = new FileStream(path, FileMode.Create))
                {
                    fileModel.file.CopyTo(stream);
                }
                response.StatusCode = 200;
                response.ErrorMessage = "Image Created Successfully";
            }
            catch (Exception ex)
            {
                response.StatusCode = 100;
                response.ErrorMessage = "Some Error Occured" + ex.Message;
            }

            return response;
        }
    }
}
