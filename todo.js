$.ajax({
  type:"GET",
  datatype:"json",
  async:"false",
  url: '/output.json',
  success: function (data) {
    console.log(data);
  }
});
