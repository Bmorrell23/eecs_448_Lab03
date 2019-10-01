let pic_arr = ["images/image1.jpeg","images/image2.jpeg","images/image3.jpeg","images/image4.jpeg",
                "images/image5.jpeg"];

var img_number = 0;

function slide(){
  let pics = document.getElementById('pictures');
  let img = pics.src;

  if(img_number == 4 || img == "https://people.eecs.ku.edu/~b221m034/exercise2/images/image5.jpeg")
  {
    img_number = 0;
    pics.src = pic_arr[img_number];

  }
  else{
    img_number++;
    pics.src = pic_arr[img_number];
  }
}

function prev(){
  let pics = document.getElementById('pictures');
  let img = pics.src;

  if(img_number == 0 || img == "https://people.eecs.ku.edu/~b221m034/exercise2/images/image1.jpeg")
  {
    img_number = 4;
    pics.src = pic_arr[img_number];

  }
  else{
    img_number--;
    pics.src = pic_arr[img_number];
  }
}