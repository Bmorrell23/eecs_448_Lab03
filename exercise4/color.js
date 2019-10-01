//Takes current form value then changes background and Border color
function color_change(r_back, g_back, b_back, r_bord, g_bord, b_bord)
{
  var par_change = document.getElementById("main_para");

  let red1 = to_color(r_back);
  let gre1 = to_color(g_back);
  let bl1 = to_color(b_back);

  let final_background_color = red1 + gre1 + bl1;

  let red2 = to_color(r_bord);
  let gre2 = to_color(g_bord);
  let bl2 = to_color(b_bord);

  let final_border_color = red2 + gre2 + bl2;

  par_change.style.borderColor = final_border_color;
  par_change.style.backgroundColor = final_background_color;

}

//Convert required number to rgb value
function to_color(rgb) {
  var color = Number(rgb).toString(16);

  if (color.length < 2) {
       color = "0" + color;
  }
  return color;
}

function width_change(wid)
{
  var new_width = document.getElementById("main_para");

  new_width.style.borderWidth = wid;
}