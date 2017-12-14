var numbers = ["Chile", 2, 3, 4, 5];

for (var i=0;i<numbers.length;i++){
   $('<option/>').val(numbers[i]).html(numbers[i]).appendTo('#items');
}