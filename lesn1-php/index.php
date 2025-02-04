<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>PHP lesn 1</title>
</head>
<style>
   .work1 {width: 400px; padding: 10px; background-color: black; margin-bottom: 30px;}
   .element1 {display: block; width: 100%; background-color: bisque; text-align: center; padding: 8px 0; margin: 10px 0;}
</style>
<body>

<?php
include 'output.php';
include 'output-cycle.php';
include 'counter-even.php';

homework("div", "text of homework №1");
homework2("div", "text", 5);
$int = count($args);
// echo $int;

for ($i=0; $i < count($args); $i++) {
   if ($args[$i] % 2 == 0) {
      echo $args[$i] . ' ';
   }
}
?>
</div>
</body>
</html>