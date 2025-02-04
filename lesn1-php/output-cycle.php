<?php

function homework2($tag, $element1, $num) {
   ?> <<?php echo $tag ?> class="work1">
         <?php for($i = 1; $i <= $num; $i++) { ?>
            <p class="element1"><?php echo $element1 ?></p> <?php
         } ?>
      </<?php echo $tag ?>>
   <?php
}

?>